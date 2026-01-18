import React from 'react'
import { Github, Linkedin, Instagram, Code, Database, Server, Globe, Cpu, Box, Terminal, Palette, FileCode, Bot, MousePointer2, Rocket } from 'lucide-react'

const BentoGrid = () => {
    return (
        <section className="w-full bg-black text-white py-20 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">


                <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50 h-[500px] md:h-auto">
                    <img
                        src="/IMG_3082.jpeg"
                        alt="Arhan Alam"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                    />
                    <img
                        src="/second.jpeg"
                        alt="Arhan Alam Secondary"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>


                <div className="md:col-span-2 flex flex-col gap-6">


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                        <div className="flex flex-col gap-6">

                            <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-center gap-2">
                                <span className="text-neutral-500 text-sm">Surviving as</span>
                                <h3 className="text-xl font-semibold">Software Developer</h3>
                            </div>


                            <div className="grid grid-cols-4 gap-4">
                                <a href="https://github.com/arhanalam789" target="_blank" rel="noopener noreferrer" className="aspect-square bg-neutral-900/50 border border-neutral-800 rounded-2xl flex items-center justify-center hover:bg-neutral-800 transition-colors">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="https://linkedin.com/in/arhanalam789" target="_blank" rel="noopener noreferrer" className="aspect-square bg-neutral-900/50 border border-neutral-800 rounded-2xl flex items-center justify-center hover:bg-neutral-800 transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="https://www.instagram.com/not_arhaan/" target="_blank" rel="noopener noreferrer" className="aspect-square bg-neutral-900/50 border border-neutral-800 rounded-2xl flex items-center justify-center hover:bg-neutral-800 transition-colors">
                                    <Instagram className="w-6 h-6" />
                                </a>
                                <a href="https://leetcode.com/u/arhanalam789/" target="_blank" rel="noopener noreferrer" className="aspect-square bg-neutral-900/50 border border-neutral-800 rounded-2xl flex items-center justify-center hover:bg-neutral-800 transition-colors group">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6 fill-neutral-400 group-hover:fill-orange-500 transition-colors"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.41L7.116 5.45a1.375 1.375 0 1 0 1.94 1.94l5.407-5.407a1.375 1.375 0 0 0-1.94-1.94z" />
                                        <path d="M9.833 3.41L3.897 9.346a3.25 3.25 0 0 0 0 4.596l5.936 5.936a3.25 3.25 0 0 0 4.596 0l5.936-5.936a3.25 3.25 0 0 0 0-4.596l-5.936-5.936a3.25 3.25 0 0 0-4.596 0zm.454 1.159c.708-.708 1.856-.708 2.564 0l5.936 5.936c.708.708.708 1.856 0 2.564l-5.936 5.936c-.708.708-1.856.708-2.564 0l-5.936-5.936c-.708-.708-.708-1.856 0-2.564L10.287 4.57z" />
                                        <path d="M12.44 14.15l-1.02-1.02a.82.82 0 1 0-1.16 1.16l1.6 1.6c.32.32.84.32 1.16 0l1.6-1.6a.82.82 0 1 0-1.16-1.16l-1.02 1.02z" />
                                    </svg>
                                </a>
                            </div>


                            <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-center gap-2">
                                <span className="text-neutral-500 text-sm">Buffering in</span>
                                <h3 className="text-xl font-semibold">Delhi NCR</h3>
                            </div>
                        </div>


                        <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-center items-center text-center gap-6 relative overflow-hidden">

                            <div className="absolute top-4 right-4 text-yellow-500">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                            </div>

                            <h3 className="text-3xl font-bold uppercase leading-tight">
                                Wanna work <br /> together?
                            </h3>
                            <p className="text-neutral-400 text-sm">My resume is one click away</p>

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-neutral-800 hover:bg-neutral-900 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
                            >
                                View Resume
                                <span className="text-lg">📄</span>
                            </a>
                        </div>

                    </div>


                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8">
                        <div className="mb-6">
                            <span className="text-neutral-500 text-sm">TechStack and Tools that pay my bills</span>
                        </div>


                        <div className="flex flex-wrap gap-8 items-center justify-center md:justify-start opacity-80">


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center border border-blue-500/30 group-hover:border-blue-500 transition-colors">
                                    <Globe className="text-blue-400 w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">React</span>
                            </div>


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-yellow-900/20 rounded-xl flex items-center justify-center border border-yellow-500/30 group-hover:border-yellow-500 transition-colors">
                                    <FileCode className="text-yellow-400 w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">Javascript</span>
                            </div>


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-orange-900/20 rounded-xl flex items-center justify-center border border-orange-500/30 group-hover:border-orange-500 transition-colors">
                                    <Code className="text-orange-500 w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">HTML</span>
                            </div>


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center border border-blue-600/30 group-hover:border-blue-600 transition-colors">
                                    <Palette className="text-blue-500 w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">CSS</span>
                            </div>


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center border border-blue-400/30 group-hover:border-blue-400 transition-colors">
                                    <Terminal className="text-blue-400 w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">Python</span>
                            </div>


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center border border-neutral-700 group-hover:border-white transition-colors">
                                    <Database className="text-white w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">SQL</span>
                            </div>


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center border border-blue-500/30 group-hover:border-blue-500 transition-colors">
                                    <Box className="text-blue-500 w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">Docker</span>
                            </div>


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-green-900/20 rounded-xl flex items-center justify-center border border-green-500/30 group-hover:border-green-500 transition-colors">
                                    <Bot className="text-green-500 w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">ChatGPT</span>
                            </div>


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center border border-neutral-700 group-hover:border-white transition-colors">
                                    <MousePointer2 className="text-white w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">Cursor</span>
                            </div>


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-purple-900/20 rounded-xl flex items-center justify-center border border-purple-500/30 group-hover:border-purple-500 transition-colors">
                                    <Rocket className="text-purple-500 w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">Antigravity</span>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default BentoGrid
