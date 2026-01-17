import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code2, Globe, Music, Dumbbell, Rocket, ExternalLink, Github } from 'lucide-react';

const timelineData = [
    {
        year: '2024',
        projects: [
            {
                title: 'The Spark & GymLogix',
                company: 'Personal Project',
                description: 'Began my coding journey and developed GymLogix, a full-stack fitness tracking platform. It features real-time data handling, personalized dashboards, and integration with ExerciseDB and Nutritionix APIs.',
                tech: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Tailwind CSS'],
                image: '/projects/gymlogix.png',
                icon: <Dumbbell className="w-6 h-6" />,
                color: 'bg-neutral-600',
                liveDemo: 'https://gym-logix.vercel.app/',
                github: 'https://github.com/arhanalam789/GymLogix'
            }
        ]
    },
    {
        year: '2025',
        projects: [
            {
                title: 'RedWhisk Media',
                company: 'Agency Project',
                description: 'Engineered the digital presence for RedWhisk Media, focusing on a premium aesthetic for a strategic content editing agency. The site emphasizes visual excellence and seamless interactions.',
                tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
                image: '/projects/redwhisk.png',
                icon: <Globe className="w-6 h-6" />,
                color: 'bg-neutral-500',
                liveDemo: 'https://redwhisk.media/',
                github: 'https://github.com/redwhiskofficial/RedWhisk.Web'
            },
            {
                title: 'TuneHive',
                company: 'Full-Stack Music Platform',
                description: 'Developed a robust music streaming platform with a persistent global player, AWS S3 storage for high-quality audio, and a comprehensive admin panel for content management.',
                tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'AWS S3', 'JWT'],
                image: '/projects/tunehive-user.png',
                icon: <Music className="w-6 h-6" />,
                color: 'bg-neutral-600',
                liveDemo: 'https://tune-hive-six.vercel.app/',
                github: 'https://github.com/arhanalam789/TuneHive'
            }
        ]
    }
];

const TimelineProject = ({ project, index, isEven }) => {
    return (
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 mb-20 md:mb-32 last:mb-0`}>
            {/* Content Card */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex-1 w-full"
            >
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 md:p-8 hover:border-neutral-500/50 transition-all group">
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 rounded-2xl ${project.color} text-white shadow-lg shadow-neutral-800/40 group-hover:scale-110 transition-transform`}>
                            {project.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-neutral-500 transition-colors">{project.title}</h3>
                            <p className="text-neutral-500 text-sm">{project.company}</p>
                        </div>
                    </div>

                    <p className="text-neutral-400 mb-6 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t, idx) => (
                            <span key={idx} className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full border border-neutral-700">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors text-sm font-medium"
                        >
                            <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-neutral-800 hover:bg-neutral-800 text-white rounded-xl transition-colors text-sm font-medium"
                        >
                            <Github className="w-4 h-4" /> Source
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Image Display */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex-1 w-full"
            >
                <div className="relative group overflow-hidden rounded-3xl border border-neutral-800 aspect-video md:aspect-[4/3] bg-neutral-900 p-6">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 grayscale-[50%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />

                    <div className="absolute bottom-6 right-6 p-4 rounded-full bg-neutral-800/10 backdrop-blur-md border border-neutral-800/30 text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Rocket className="w-6 h-6 animate-pulse" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Timeline = () => {
    let projectCounter = 0;

    return (
        <section id="projects" className="w-full bg-black py-24 px-6 md:px-20 overflow-hidden relative">
            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800/30 bg-neutral-800/10 text-neutral-500 mb-6"
                    >
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-semibold tracking-wider uppercase">My Journey</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-center text-white mb-6 tracking-tighter"
                    >
                        EVOLUTION OF <span className="text-neutral-500">CRAFT</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 100 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-neutral-600 rounded-full mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-neutral-500 text-center max-w-2xl text-lg px-4"
                    >
                        From the first line of code in 2024 to building scalable full-stack applications in 2025. Here's a look at how I've grown.
                    </motion.p>
                </div>

                {/* Central Connecting Line */}
                <div className="hidden md:block absolute left-1/2 top-[350px] bottom-0 w-px bg-gradient-to-b from-neutral-800/50 via-neutral-800 to-transparent -translate-x-1/2 z-0" />

                {/* Timeline Items */}
                <div className="relative z-10">
                    {timelineData.map((group, groupIdx) => (
                        <div key={groupIdx} className="relative mb-32 last:mb-0">
                            {/* Year Marker */}
                            <div className="flex justify-center mb-16 relative z-20">
                                <div className="px-8 py-3 rounded-full border border-neutral-800/30 bg-neutral-900 text-neutral-500 font-bold text-xl shadow-2xl shadow-neutral-900/40 relative group overflow-hidden">
                                    <div className="absolute inset-0 bg-neutral-800/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="relative z-10">{group.year}</span>
                                </div>
                            </div>

                            {/* Projects in this year */}
                            <div className="space-y-20 md:space-y-0">
                                {group.projects.map((project, projIdx) => {
                                    const isEven = projectCounter % 2 === 0;
                                    projectCounter++;
                                    return (
                                        <TimelineProject
                                            key={projIdx}
                                            project={project}
                                            index={projIdx}
                                            isEven={isEven}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-32 p-8 md:p-12 rounded-3xl border border-neutral-800 bg-neutral-900/30 text-center relative overflow-hidden group z-10"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-50" />
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white mb-4">The journey continues...</h3>
                        <p className="text-neutral-500 mb-8 max-w-xl mx-auto">Currently open for new opportunities and collaborations on exciting projects.</p>
                        <a
                            href="/resume.pdf"
                            download
                            className="px-8 py-4 bg-neutral-600 hover:bg-neutral-500 text-white rounded-2xl font-bold transition-all hover:scale-105 shadow-xl shadow-neutral-800/20 inline-block"
                        >
                            Let's Build Something Great
                        </a>
                    </div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-neutral-800/10 rounded-full blur-3xl group-hover:bg-neutral-600/20 transition-colors duration-700" />
                </motion.div>
            </div>
        </section>
    );
};

export default Timeline;
