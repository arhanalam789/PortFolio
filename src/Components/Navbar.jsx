import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isResumePage = location.pathname === '/resume';

    const [hoveredLink, setHoveredLink] = useState(null);

    if (isResumePage) return null;

    const navLinks = [
        { name: 'Home', href: '/#home', scrollId: 'home' },
        { name: 'About', href: '/#about', scrollId: 'about' },
        { name: 'Projects', href: '/#projects', scrollId: 'projects' },
        { name: 'Resume', href: '/resume', isPage: true }
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

    const NavLink = ({ link, index }) => (
        <li
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
            className="relative"
        >
            <Link
                to={link.href}
                onClick={(e) => handleClick(e, link)}
                className={cn(
                    "relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full",
                    hoveredLink === link.name ? "text-white" : "text-neutral-400"
                )}
            >
                {link.name}
            </Link>
            {hoveredLink === link.name && (
                <motion.div
                    layoutId="navbar-highlight"
                    className="absolute inset-0 z-0 bg-neutral-800/80 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30
                    }}
                />
            )}
        </li>
    );

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-6 px-4"
        >
            <nav className="relative bg-black/60 backdrop-blur-xl border border-white/5 rounded-full px-6 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-2">

                {/* Left Links */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.slice(0, 2).map((link, idx) => (
                        <NavLink key={link.name} link={link} index={idx} />
                    ))}
                </ul>

                {/* Center Brand */}
                <div className="flex items-center mx-4 gap-3 bg-neutral-900/50 px-4 py-1.5 rounded-full border border-white/5 hover:border-white/10 transition-colors group">
                    <motion.img
                        whileHover={{ rotate: 180 }}
                        src="/logo.svg"
                        alt="Logo"
                        className="w-6 h-6"
                    />
                    <Link to="/" className="text-sm font-bold tracking-[0.2em] text-white">ARHAN</Link>
                </div>

                {/* Right Links */}
                <ul className="flex items-center gap-1">
                    {navLinks.slice(2).map((link, idx) => (
                        <NavLink key={link.name} link={link} index={idx + 2} />
                    ))}
                </ul>

            </nav>
        </motion.div>
    );
};

export default Navbar;

