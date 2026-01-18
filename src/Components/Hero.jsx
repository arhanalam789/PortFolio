import React from 'react';
import { motion } from 'framer-motion';
import { EncryptedText } from './ui/encrypted-text';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const floatingImageVariants = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <BackgroundBeamsWithCollision className="min-h-screen py-20 px-8 flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-20">

                {/* Left Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-8 order-2 lg:order-1"
                >
                    <motion.div variants={itemVariants} className="space-y-2">
                        <span className="text-neutral-500 font-medium tracking-[0.2em] uppercase text-sm block">
                            Available for projects
                        </span>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
                            <EncryptedText
                                text="ARHAN ALAM"
                                className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-500"
                                revealDelayMs={50}
                                flipDelayMs={40}
                                startDelay={1000}
                            />
                        </h1>
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative">
                        <h2 className="text-5xl md:text-7xl font-['Sacramento'] text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
                            Digital Craftsman
                        </h2>
                        <p className="max-w-md text-neutral-400 text-lg md:text-xl font-light leading-relaxed mt-4">
                            Building immersive web experiences where code meets art. Specialized in modern front-end and robust back-end architectures.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-6 items-center pt-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            View Projects
                        </a>
                        <div className="flex gap-8 border-l border-neutral-800 pl-8">
                            <div className="text-center">
                                <span className="block text-2xl font-bold h-8">5+</span>
                                <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Projects</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-2xl font-bold h-8">2+</span>
                                <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Years Exp.</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Visual */}
                <motion.div
                    variants={floatingImageVariants}
                    animate="animate"
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative order-1 lg:order-2 flex justify-center items-center"
                >
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-900 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

                        <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[550px] rounded-[2rem] overflow-hidden border border-neutral-800/50 backdrop-blur-sm shadow-2xl">
                            <img
                                src="/IMG_3082.jpeg"
                                alt="Arhan Alam Profile"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <p className="text-white/70 text-xs tracking-widest uppercase font-medium">Currently based in India</p>
                            </div>
                        </div>

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-10 -right-10 w-24 h-24 border border-neutral-800/30 rounded-full"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
            >
                <div className="w-6 h-10 border-2 border-neutral-800 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-neutral-500 rounded-full"
                    />
                </div>
            </motion.div>
        </BackgroundBeamsWithCollision>
    );
};

export default Hero;

