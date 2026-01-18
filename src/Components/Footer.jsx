import React from 'react'
import { ArrowUpRight, ArrowUp } from 'lucide-react'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer id="contact" className="w-full bg-black text-white pt-20 pb-8 px-6 md:px-20 overflow-hidden relative">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">

                <div className="relative">
                    <h2 className="text-6xl md:text-[10rem] font-bold uppercase leading-none tracking-tighter text-center md:text-left">
                        LET'S WORK
                    </h2>
                    <div className="flex justify-center md:justify-start md:pl-40 -mt-4 md:-mt-12 relative z-20">
                        <span className="text-6xl md:text-[10rem] text-neutral-500 font-['Sacramento']">
                            Together !
                        </span>
                    </div>

                    <div className="hidden md:flex justify-end -mt-24">
                        <a href="mailto:arhanalam789@gmail.com" className="relative w-40 h-40 group cursor-pointer">
                            <div className="absolute inset-0 animate-[spin_10s_linear_infinite] group-hover:pause">
                                <svg viewBox="0 0 100 100" width="100%" height="100%">
                                    <defs>
                                        <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                    </defs>
                                    <text fontSize="11.5" fill="white">
                                        <textPath xlinkHref="#circle" className="uppercase tracking-widest font-mono font-bold">
                                            Get in touch • Get in touch •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <ArrowUpRight className="w-10 h-10 text-neutral-600" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="w-full h-px bg-neutral-800"></div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-lg md:text-xl text-neutral-300">
                        <a href="mailto:arhanalam789@gmail.com" className="hover:text-purple-500 transition-colors">
                            arhanalam789@gmail.com
                        </a>
                        <a href="tel:+919685793878" className="hover:text-purple-500 transition-colors">
                            +91 9685793878
                        </a>
                    </div>
                </div>

                <div className="md:hidden flex justify-center py-10">
                    <a href="mailto:arhanalam789@gmail.com" className="relative w-32 h-32 group cursor-pointer">
                        <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                            <svg viewBox="0 0 100 100" width="100%" height="100%">
                                <defs>
                                    <path id="circleMobile" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                </defs>
                                <text fontSize="12" fill="white">
                                    <textPath xlinkHref="#circleMobile" className="uppercase tracking-widest font-mono font-bold">
                                        Get in touch • Get in touch •
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <ArrowUpRight className="w-8 h-8 text-purple-600" />
                        </div>
                    </a>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-neutral-800">
                    <p className="text-neutral-500 text-sm">Copyright 2026 by Arhan Alam</p>
                    <h3 className="text-2xl font-bold tracking-wider">ARHAN</h3>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
                    >
                        <span className="text-sm">Back on top</span>
                        <div className="w-8 h-8 rounded-full border border-neutral-600 group-hover:border-white flex items-center justify-center transition-colors">
                            <ArrowUp className="w-4 h-4" />
                        </div>
                    </button>
                </div>

            </div>
        </footer>
    )
}

export default Footer
