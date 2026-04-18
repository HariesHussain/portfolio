import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '../config.jsx';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        setIsMobileMenuOpen(false);
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.getElementById(href.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled 
                        ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm' 
                        : 'bg-transparent py-2'
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
                    <div className="flex items-center justify-between h-16 md:h-[4.5rem]">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-2"
                        >
                            <a 
                                href="#home"
                                onClick={(e) => handleNavClick(e, '#home')}
                                className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight hover:opacity-80 transition-opacity"
                            >
                                {config.developer.name}
                            </a>
                        </motion.div>

                        <nav className="hidden md:flex items-center space-x-2">
                            {config.NAV_ITEMS.map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        className="px-4 py-2 text-sm font-medium transition-colors relative group text-slate-600 hover:text-slate-900"
                                    >
                                        {item.label}
                                        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left" />
                                    </a>
                                </motion.div>
                            ))}
                        </nav>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <HiX className="w-6 h-6" />
                            ) : (
                                <HiMenu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl border-l border-slate-100 z-50 md:hidden overflow-y-auto"
                        >
                            <div className="flex flex-col h-full p-6 pt-24 font-medium">
                                {config.NAV_ITEMS.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        className="px-4 py-4 text-base transition-colors border-b border-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg mb-1"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
