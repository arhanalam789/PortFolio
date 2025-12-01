import React from 'react'
import { BackgroundLines } from './ui/background-lines'

const Myself = () => {
    return (
        <section className="w-full bg-black text-white relative overflow-hidden">
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 py-32 md:py-48">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-20">

                    <div className="flex items-center gap-6 md:w-1/3">
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                            Me, Myself
                        </h2>
                        <div className="hidden md:block">
                            <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 10H98M98 10L88 1M98 10L88 19" stroke="white" strokeWidth="1.5" />
                            </svg>
                        </div>
                    </div>

                    <div className="md:w-2/3 space-y-8 text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
                        <p>
                            I am a passionate <span className="text-white font-semibold">Web Developer</span> with a knack for crafting robust and scalable web applications. With a strong foundation in the MERN stack and a keen eye for detail, I transform complex requirements into seamless user experiences. My code isn't just functional; it's a piece of art designed to perform.
                        </p>

                        <p>
                            My journey is driven by a constant desire to learn and innovate. Whether it's building complex backend systems, optimizing database queries, or creating sleek frontend interfaces, I focus on writing <span className="text-white font-semibold">clean, efficient code</span> that solves real-world problems. I believe in the power of technology to bridge gaps and create meaningful impact.
                        </p>

                        <p>
                            Beyond the screen, I'm always exploring new technologies and staying updated with the latest industry trends. I thrive in collaborative environments where ideas flow freely and innovation is encouraged. Let's build something extraordinary together.
                        </p>
                    </div>

                </div>
            </BackgroundLines>
        </section>
    )
}

export default Myself
