import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Code, Database, Globe, Terminal, Palette, FileCode, Bot, MousePointer2, Rocket, ArrowUpRight, Sparkles } from 'lucide-react'
import { cn } from '../lib/utils'

const BentoCard = ({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className={cn(
            "group relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-800/50",
            className
        )}
    >
        {children}
    </motion.div>
)

const BentoGrid = () => {
    return (
        <section id="about" className="w-full bg-black py-24 px-6 md:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col mb-12">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">THE BENTO</h2>
                    <p className="text-neutral-500 max-w-lg">A snapshot of my digital universe, tools, and links.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[180px]">

                    {/* Big Portrait Card */}
                    <BentoCard className="md:col-span-1 md:row-span-3">
                        <img
                            src="/IMG_3082.jpeg"
                            alt="Arhan"
                            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-xl font-bold">Arhan Alam</h3>
                            <p className="text-sm text-neutral-400">Digital Craftsman</p>
                        </div>
                    </BentoCard>

                    {/* Tech Stack Horizontal Card */}
                    <BentoCard className="md:col-span-2 md:row-span-1 p-8 flex flex-col justify-center gap-4 bg-gradient-to-br from-neutral-900 to-black">
                        <div className="flex items-center gap-2 text-neutral-500 mb-2">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-xs uppercase tracking-[0.2em] font-bold">Core Stack</span>
                        </div>
                        <div className="flex flex-wrap gap-6 items-center">
                            <div className="flex items-center gap-2 group/icon">
                                <Code className="w-5 h-5 text-blue-400 group-hover/icon:scale-110 transition-transform" />
                                <span className="text-sm font-medium text-neutral-300">React</span>
                            </div>
                            <div className="flex items-center gap-2 group/icon">
                                <Database className="w-5 h-5 text-green-400 group-hover/icon:scale-110 transition-transform" />
                                <span className="text-sm font-medium text-neutral-300">Node</span>
                            </div>
                            <div className="flex items-center gap-2 group/icon">
                                <Palette className="w-5 h-5 text-purple-400 group-hover/icon:scale-110 transition-transform" />
                                <span className="text-sm font-medium text-neutral-300">Tailwind</span>
                            </div>
                            <div className="flex items-center gap-2 group/icon">
                                <Terminal className="w-5 h-5 text-orange-400 group-hover/icon:scale-110 transition-transform" />
                                <span className="text-sm font-medium text-neutral-300">Python</span>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Social Grid Card */}
                    <BentoCard className="md:col-span-1 md:row-span-1 p-4">
                        <div className="grid grid-cols-2 grid-rows-2 h-full gap-2">
                            {[
                                { icon: Github, href: "https://github.com/arhanalam789", color: "hover:text-white" },
                                { icon: Linkedin, href: "https://linkedin.com/in/arhanalam789", color: "hover:text-blue-500" },
                                { icon: Instagram, href: "https://www.instagram.com/not_arhaan/", color: "hover:text-pink-500" },
                                {
                                    isCustom: true,
                                    href: "https://leetcode.com/u/arhanalam789/",
                                    icon: () => (
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M13.483 0a1.374 1.374 0 0 0-.961.41L7.116 5.45a1.375 1.375 0 1 0 1.94 1.94l5.407-5.407a1.375 1.375 0 0 0-1.94-1.94z" /><path d="M9.833 3.41L3.897 9.346a3.25 3.25 0 0 0 0 4.596l5.936 5.936a3.25 3.25 0 0 0 4.596 0l5.936-5.936a3.25 3.25 0 0 0 0-4.596l-5.936-5.936a3.25 3.25 0 0 0-4.596 0zm.454 1.159c.708-.708 1.856-.708 2.564 0l5.936 5.936c.708.708.708 1.856 0 2.564l-5.936 5.936c-.708.708-1.856.708-2.564 0l-5.936-5.936c-.708-.708-.708-1.856 0-2.564L10.287 4.57z" /><path d="M12.44 14.15l-1.02-1.02a.82.82 0 1 0-1.16 1.16l1.6 1.6c.32.32.84.32 1.16 0l1.6-1.6a.82.82 0 1 0-1.16-1.16l-1.02 1.02z" /></svg>
                                    ),
                                    color: "hover:text-orange-500"
                                }
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        "flex items-center justify-center bg-neutral-800/30 rounded-2xl transition-all duration-300 text-neutral-500",
                                        item.color,
                                        "hover:bg-neutral-700/50 hover:scale-105"
                                    )}
                                >
                                    {item.isCustom ? <item.icon /> : <item.icon className="w-6 h-6" />}
                                </a>
                            ))}
                        </div>
                    </BentoCard>

                    {/* Secondary Image Card */}
                    <BentoCard className="md:col-span-2 md:row-span-2 group/life">
                        <img
                            src="/second.jpeg"
                            alt="Life"
                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 transition-all duration-700 group-hover/life:grayscale-0 group-hover/life:opacity-100 group-hover/life:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute top-6 left-6 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                            <span className="text-[10px] text-white uppercase tracking-[0.2em] font-bold">Moments</span>
                        </div>
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-2xl font-bold tracking-tight">Capturing <br /> Inspiration</h3>
                        </div>
                    </BentoCard>

                    {/* Availability Card */}
                    <BentoCard className="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between bg-neutral-900">
                        <div className="flex justify-between items-start">
                            <div className="w-10 h-10 bg-neutral-800 rounded-xl flex items-center justify-center">
                                <Rocket className="text-neutral-400 w-5 h-5 animate-bounce" />
                            </div>
                            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded-full">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-[10px] text-green-500 uppercase font-bold">Open</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-neutral-500 text-xs mb-1">Status</p>
                            <h4 className="text-lg font-bold">Let's Build</h4>
                        </div>
                    </BentoCard>

                    {/* Resume / CTA Card */}
                    <BentoCard className="md:col-span-1 md:row-span-1 bg-white flex items-center justify-center group/cta">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-full flex flex-col items-center justify-center gap-2 group-hover/cta:bg-neutral-100 transition-colors"
                        >
                            <span className="text-black font-black tracking-tighter text-xl">VIEW RESUME</span>
                            <div className="flex items-center gap-2 text-black/50 text-xs font-bold uppercase tracking-widest">
                                <span>Portfolio</span>
                                <ArrowUpRight className="w-3 h-3 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 transition-transform" />
                            </div>
                        </a>
                    </BentoCard>

                </div>
            </div>
        </section>
    )
}

export default BentoGrid

