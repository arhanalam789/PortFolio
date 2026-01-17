import React from 'react';
import { motion } from 'framer-motion';
import { EncryptedText } from './ui/encrypted-text';

const Hero = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.8,
                ease: "easeInOut",
                delay: 0.5
            }
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-8 pt-20 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neutral-800/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neutral-800/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-6"
                >
                    <motion.div variants={textVariants}>
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
                            <EncryptedText
                                text="HEY, I'M ARHAN ALAM"
                                className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-neutral-400"
                                revealDelayMs={80}
                                flipDelayMs={50}
                                startDelay={800}
                            />
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={textVariants}
                        className="relative"
                    >
                        <motion.h3
                            className="text-5xl md:text-6xl font-['Sacramento'] text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-neutral-600 to-neutral-800"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{ backgroundSize: '200% 200%' }}
                        >
                            a Web Developer
                        </motion.h3>
                        <motion.div
                            className="absolute -inset-1 bg-gradient-to-r from-neutral-600 to-neutral-800 rounded-lg blur opacity-20"
                            animate={{
                                opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>

                    <motion.div
                        variants={textVariants}
                        className="flex gap-12 mt-8"
                    >
                        <div>
                            <h4 className="text-4xl font-bold text-white">5+</h4>
                            <p className="text-neutral-400 text-sm uppercase tracking-wider">Projects</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-bold text-white">2+</h4>
                            <p className="text-neutral-400 text-sm uppercase tracking-wider">Years</p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative h-[600px] w-full flex items-center justify-center"
                >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
                        <img
                            src="/IMG_3082.jpeg"
                            alt="Arhan Alam"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
