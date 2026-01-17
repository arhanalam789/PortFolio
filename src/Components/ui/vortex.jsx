"use client";
import { cn } from "../../lib/utils";
import React, { useEffect, useRef, useCallback } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";

export const Vortex = (props) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const particleCount = props.particleCount || 700;
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = props.rangeY || 100;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = props.baseSpeed || 1.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;
  const backgroundColor = props.backgroundColor || "#000000";
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const noise3D = createNoise3D();
  let particleProps = new Float32Array(particlePropsLength);
  let center = [0, 0];

  const initParticle = (i) => {
    let x, y, vx, vy, life, ttl, speed, radius, hue;

    x = Math.random() * canvasRef.current.width;
    y = Math.random() * canvasRef.current.height;
    vx = 0;
    vy = 0;
    life = 0;
    ttl = baseTTL + Math.random() * rangeTTL;
    speed = baseSpeed + Math.random() * rangeSpeed;
    radius = baseRadius + Math.random() * rangeRadius;
    hue = props.hue || 0; // Default to red (0) if not provided

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  };

  const initParticles = () => {
    particleProps = new Float32Array(particlePropsLength);
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const updateParticle = (i) => {
    let x, y, vx, vy, life, ttl, speed, radius, hue;

    x = particleProps[i];
    y = particleProps[i + 1];
    let n = noise3D(x * xOff, y * yOff, particleProps[i + 4] * zOff) * noiseSteps * Math.PI * 2;
    vx = Math.lerp(particleProps[i + 2], Math.cos(n), 0.5);
    vy = Math.lerp(particleProps[i + 3], Math.sin(n), 0.5);
    life = particleProps[i + 4];
    ttl = particleProps[i + 5];
    speed = particleProps[i + 6];
    radius = particleProps[i + 7];
    hue = particleProps[i + 8];

    let x2 = x + vx * speed;
    let y2 = y + vy * speed;

    life++;

    particleProps[i] = x2;
    particleProps[i + 1] = y2;
    particleProps[i + 2] = vx;
    particleProps[i + 3] = vy;
    particleProps[i + 4] = life;

    (checkBounds(x, y) || life > ttl) && initParticle(i);
  };

  const checkBounds = (x, y) => {
    return (
      x > canvasRef.current.width ||
      x < 0 ||
      y > canvasRef.current.height ||
      y < 0
    );
  };

  const drawParticle = (i, ctx) => {
    let x, y, vx, vy, life, ttl, speed, radius, hue;

    x = particleProps[i];
    y = particleProps[i + 1];
    vx = particleProps[i + 2];
    vy = particleProps[i + 3];
    life = particleProps[i + 4];
    ttl = particleProps[i + 5];
    speed = particleProps[i + 6];
    radius = particleProps[i + 7];
    hue = particleProps[i + 8];

    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue},100%,50%,${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + vx, y + vy);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  };

  const fadeInOut = (t, m) => {
    let hm = 0.5 * m;
    return Math.abs((t + hm) % m - hm) / hm;
  };

  const renderCanvas = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i);
      drawParticle(i, ctx);
    }

    requestAnimationFrame(renderCanvas);
  };

  const resize = useCallback(() => {
    const { offsetWidth, offsetHeight } = containerRef.current;
    canvasRef.current.width = offsetWidth;
    canvasRef.current.height = offsetHeight;
    center = [0.5 * offsetWidth, 0.5 * offsetHeight];
    initParticles();
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    renderCanvas();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute inset-0 z-0 h-full w-full overflow-hidden"
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>
      <div className={cn("relative z-10", props.className)}>
        {props.children}
      </div>
    </div>
  );
};

Math.lerp = (a, b, t) => (1 - t) * a + t * b;
