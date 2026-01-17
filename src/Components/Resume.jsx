import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin, ExternalLink, GraduationCap, Briefcase, Rocket, Cpu, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
    return (
        <section className="min-h-screen bg-black text-white py-24 px-6 md:px-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neutral-800/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neutral-800/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto bg-neutral-900/50 border border-neutral-800 rounded-3xl overflow-hidden backdrop-blur-sm">
                {/* Header / Contact Info */}
                <div className="bg-gradient-to-r from-neutral-900/50 to-neutral-900 p-8 md:p-12 border-b border-neutral-800">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-4xl md:text-5xl font-bold tracking-tighter mb-2"
                            >
                                ARHAN <span className="text-neutral-400">ALAM</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-neutral-400 text-lg md:text-xl font-light"
                            >
                                Full Stack Developer
                            </motion.p>
                        </div>
                        <div className="flex flex-col gap-3 text-sm text-neutral-300">
                            <a href="tel:+919685793878" className="flex items-center gap-2 hover:text-neutral-500 transition-colors">
                                <Phone className="w-4 h-4 text-neutral-400" /> +91 9685793878
                            </a>
                            <a href="mailto:arhan.alam2024@nst.rishihood.edu.in" className="flex items-center gap-2 hover:text-neutral-500 transition-colors">
                                <Mail className="w-4 h-4 text-neutral-400" /> arhan.alam2024@nst.rishihood.edu.in
                            </a>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-4">
                                    <a href="https://linkedin.com/in/arhanalam789" target="_blank" className="hover:text-neutral-500 active:scale-95 transition-all">
                                        <Linkedin className="w-5 h-5 text-neutral-400" />
                                    </a>
                                    <a href="https://github.com/arhanalam789" target="_blank" className="hover:text-neutral-500 active:scale-95 transition-all">
                                        <Github className="w-5 h-5 text-neutral-400" />
                                    </a>
                                </div>
                                <button
                                    onClick={() => window.print()}
                                    className="print:hidden flex items-center gap-2 px-3 py-1 border border-neutral-700 rounded-lg hover:border-neutral-500 text-xs transition-all"
                                >
                                    Print / Save As PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8 md:p-12 space-y-12">
                    {/* Professional Summary */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Award className="w-5 h-5 text-neutral-400" />
                            <h2 className="text-xl font-bold uppercase tracking-widest text-neutral-500">Professional Summary</h2>
                        </div>
                        <p className="text-neutral-400 leading-relaxed">
                            Full Stack Developer focused on delivering high-performance web applications. Experienced in front-end design, backend logic, and real-time features.
                        </p>
                    </section>

                    {/* Education */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <GraduationCap className="w-5 h-5 text-neutral-400" />
                            <h2 className="text-xl font-bold uppercase tracking-widest text-neutral-500">Education</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="relative pl-6 border-l border-neutral-800/30">
                                <div className="absolute w-2 h-2 bg-neutral-600 rounded-full -left-1.5 top-2" />
                                <div className="flex justify-between items-start flex-wrap gap-2">
                                    <h3 className="font-bold text-lg">Bachelor of Technology (Computer Science)</h3>
                                    <span className="text-neutral-400 font-mono text-sm">2024 - 2028</span>
                                </div>
                                <p className="text-neutral-300">Rishihood University, Newton School Of Technology</p>
                                <p className="text-neutral-500 text-sm mt-1">Grade: 7.79 / 10.0</p>
                            </div>

                            <div className="relative pl-6 border-l border-neutral-800/30">
                                <div className="absolute w-2 h-2 bg-neutral-600 rounded-full -left-1.5 top-2" />
                                <div className="flex justify-between items-start flex-wrap gap-2">
                                    <h3 className="font-bold text-lg">Intermediate (Class XII)</h3>
                                    <span className="text-neutral-400 font-mono text-sm">2023 - 2024</span>
                                </div>
                                <p className="text-neutral-300">Royals Academy School Kota</p>
                                <p className="text-neutral-500 text-sm mt-1">Grade: 90.0%</p>
                            </div>

                            <div className="relative pl-6 border-l border-neutral-800/30">
                                <div className="absolute w-2 h-2 bg-neutral-600 rounded-full -left-1.5 top-2" />
                                <div className="flex justify-between items-start flex-wrap gap-2">
                                    <h3 className="font-bold text-lg">Matriculation (Class X)</h3>
                                    <span className="text-neutral-400 font-mono text-sm">2021 - 2022</span>
                                </div>
                                <p className="text-neutral-300">Christukula Mission Hr Sec School Satna</p>
                                <p className="text-neutral-500 text-sm mt-1">Grade: 91.0%</p>
                            </div>
                        </div>
                    </section>

                    {/* Projects */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Rocket className="w-5 h-5 text-neutral-400" />
                            <h2 className="text-xl font-bold uppercase tracking-widest text-neutral-500">Projects</h2>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                                    <h3 className="text-xl font-bold text-white">TuneHive</h3>
                                    <div className="flex gap-3">
                                        <a href="https://github.com/arhanalam789/TuneHive" target="_blank" className="text-xs flex items-center gap-1 text-neutral-400 hover:text-neutral-500 transition-colors">
                                            <Github className="w-3 h-3" /> Github
                                        </a>
                                        <a href="https://tune-hive-six.vercel.app/" target="_blank" className="text-xs flex items-center gap-1 text-neutral-400 hover:text-neutral-500 transition-colors">
                                            <ExternalLink className="w-3 h-3" /> Demo
                                        </a>
                                    </div>
                                </div>
                                <p className="text-neutral-400 text-xs font-mono mb-3">Tech: React.js, Node.js, Express.js, MongoDB, AWS S3, JWT</p>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-3">
                                    Developed a full-stack music streaming platform designed to deliver a seamless audio experience with a responsive UI, persistent playback, and robust content management systems.
                                </p>
                                <ul className="text-neutral-500 text-sm list-disc pl-5 space-y-1">
                                    <li>Engineered a persistent global music player with advanced controls (seek, volume, queue).</li>
                                    <li>Integrated AWS S3 for scalable storage of high-quality audio and cover art.</li>
                                    <li>Built a comprehensive Admin Dashboard and secure JWT authentication.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                                    <h3 className="text-xl font-bold text-white">GymLogix</h3>
                                    <div className="flex gap-3">
                                        <a href="https://github.com/arhanalam789/GymLogix" target="_blank" className="text-xs flex items-center gap-1 text-neutral-400 hover:text-neutral-500 transition-colors">
                                            <Github className="w-3 h-3" /> Github
                                        </a>
                                        <a href="https://gym-logix.vercel.app/" target="_blank" className="text-xs flex items-center gap-1 text-neutral-400 hover:text-neutral-500 transition-colors">
                                            <ExternalLink className="w-3 h-3" /> Demo
                                        </a>
                                    </div>
                                </div>
                                <p className="text-neutral-400 text-xs font-mono mb-3">Tech: React, Next.js, Node.js, MongoDB, Firebase, Tailwind CSS, API Integration</p>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-3">
                                    Developed a fitness tracking platform enabling users to log workouts, set goals, and track progress through a responsive UI and real-time data handling.
                                </p>
                                <ul className="text-neutral-500 text-sm list-disc pl-5 space-y-1">
                                    <li>Designed scalable backend architecture for authentication and workout data.</li>
                                    <li>Built secure RESTful APIs for dashboards and progress tracking.</li>
                                    <li>Integrated ExerciseDB and Nutritionix APIs for comprehensive fitness data.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Skills */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Cpu className="w-5 h-5 text-neutral-400" />
                            <h2 className="text-xl font-bold uppercase tracking-widest text-neutral-500">Skills</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-neutral-300 font-bold mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" /> Languages & Packages
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {['SQL', 'JavaScript', 'HTML/CSS', 'Python', 'Node.js', 'React', 'Next.js', 'MongoDB', 'MySQL', 'Express JS', 'Tailwind', 'Pandas'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-neutral-800/50 border border-neutral-700 text-neutral-400 rounded-lg text-xs">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-neutral-300 font-bold mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" /> Professional Skills
                                </h4>
                                <ul className="text-neutral-500 text-sm space-y-1 list-disc pl-5">
                                    <li>Data Structures</li>
                                    <li>Critical Thinking</li>
                                    <li>Teamwork & Collaboration</li>
                                    <li>Time Management</li>
                                    <li>Decision-making</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Extra-Curricular */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Briefcase className="w-5 h-5 text-neutral-400" />
                            <h2 className="text-xl font-bold uppercase tracking-widest text-neutral-500">Extra-Curricular</h2>
                        </div>
                        <ul className="text-neutral-400 text-sm space-y-3 list-disc pl-5">
                            <li>Consistently engaged in strength training and fitness, demonstrating discipline, perseverance, and goal-oriented focus.</li>
                            <li>Applied principles of self-motivation, consistency, and continuous improvement from fitness to academic and professional projects.</li>
                            <li>Active member of local gym and fitness communities, fostering team spirit, collaboration, and knowledge sharing.</li>
                        </ul>
                    </section>
                </div>

                {/* Footer on Resume Page */}
                <div className="bg-neutral-900 p-8 border-t border-neutral-800 text-center">
                    <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-600 hover:bg-neutral-400 text-white rounded-xl transition-all font-medium active:scale-95">
                        Back to Portfolio
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Resume;
