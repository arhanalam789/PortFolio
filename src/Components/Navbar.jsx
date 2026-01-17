import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isResumePage = location.pathname === '/resume';

    if (isResumePage) return null;

    const navLinks = [
        { name: 'Home', href: '/#home', scrollId: 'home' },
        { name: 'About', href: '/#about', scrollId: 'about' },
        { name: 'Projects', href: '/#projects', scrollId: 'projects' },
        { name: 'Resume', href: '/resume', isPage: true },
        { name: 'Contact', href: '/#contact', scrollId: 'contact' }
    ];

    const handleClick = (e, link) => {
        if (!link.isPage && isHomePage && link.scrollId) {
            e.preventDefault();
            const element = document.getElementById(link.scrollId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5
            }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 md:px-6"
        >
            <nav className="bg-neutral-900/95 backdrop-blur-md border-2 border-neutral-800 rounded-2xl px-4 md:px-8 py-4 shadow-2xl w-full max-w-4xl">
                <div className="flex items-center justify-between">
                    <ul className="hidden md:flex items-center gap-8 flex-1 justify-start">
                        {navLinks.slice(0, 2).map((link) => (
                            <li key={link.name} className="relative group">
                                <Link
                                    to={link.href}
                                    onClick={(e) => handleClick(e, link)}
                                    className="text-neutral-300 hover:text-white text-base font-medium transition-colors duration-200"
                                >
                                    {link.name}
                                </Link>
                                <svg
                                    className="absolute -bottom-1 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                    viewBox="0 0 100 8"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M 0 4 Q 25 2, 50 4 T 100 4"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        className="text-red-600"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col items-center px-6">
                        <span className="text-red-600 text-[10px] tracking-widest uppercase mb-[-2px]">Portfolio</span>
                        <Link to="/" className="text-2xl font-bold tracking-wider text-white">ARHAN</Link>
                    </div>

                    <ul className="flex items-center gap-4 md:gap-8 flex-1 justify-end">
                        {navLinks.slice(2).map((link) => (
                            <li key={link.name} className="relative group">
                                <Link
                                    to={link.href}
                                    onClick={(e) => handleClick(e, link)}
                                    className="text-neutral-300 hover:text-white text-sm md:text-base font-medium transition-colors duration-200"
                                >
                                    {link.name}
                                </Link>
                                <svg
                                    className="absolute -bottom-1 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                    viewBox="0 0 100 8"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M 0 4 Q 25 2, 50 4 T 100 4"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        className="text-red-600"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </motion.div>
    );
};

export default Navbar;
