import React from 'react';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi';
import { config } from '../config.jsx';

const Hero = () => {
    const containerAnimation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemAnimation = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1]
            }
        }
    };

    const handleAnchor = (e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="lg:min-h-[100svh] pt-20 pb-6 lg:pt-32 lg:pb-20 flex items-start lg:items-center justify-center relative overflow-hidden bg-slate-50">
            {/* Soft Background Accents */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-row items-center justify-between gap-4 md:gap-8 lg:gap-12">
                    
                    {/* Left Column: Text Content */}
                    <motion.div
                        variants={containerAnimation}
                        initial="hidden"
                        animate="show"
                        className="flex-1 w-[60%] lg:w-auto text-left space-y-3 sm:space-y-6 lg:space-y-8 pr-2 lg:pr-0"
                    >
                        <motion.div
                            variants={itemAnimation}
                            className="hidden sm:inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm text-sm"
                        >
                            <HiSparkles className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="font-medium text-slate-700">Premium Web Solutions</span>
                        </motion.div>

                        <motion.div variants={itemAnimation}>
                            <h2 className="text-xs sm:text-lg md:text-2xl font-bold text-blue-600 mb-1 lg:mb-3">
                                Hi, I'm Haries 👋
                            </h2>
                            <h1 className="text-[22px] leading-tight sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight lg:leading-[1.1] text-slate-900">
                                I Build Premium Websites <br className="hidden lg:block" />
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-1 lg:mt-0 lg:inline">
                                    For Businesses That Want to Grow
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            variants={itemAnimation}
                            className="text-[11px] sm:text-base lg:text-xl text-slate-600 leading-snug sm:leading-relaxed max-w-full lg:max-w-xl"
                        >
                            Modern, fast, mobile-friendly websites designed to build trust, attract customers, and elevate your brand.
                        </motion.p>

                        <motion.div
                            variants={itemAnimation}
                            className="pt-2 sm:pt-4"
                        >
                            <a 
                                href="#contact" 
                                onClick={(e) => handleAnchor(e, 'contact')}
                                className="inline-block px-5 py-2.5 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl bg-slate-900 text-white font-semibold text-[11px] sm:text-base hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
                            >
                                Start Your Project
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-[38%] md:w-[45%] lg:flex-1 lg:w-full lg:max-w-lg lg:mx-0 relative flex-shrink-0"
                    >
                        <div className="aspect-[3/4] sm:aspect-square lg:aspect-[4/5] rounded-xl sm:rounded-[2rem] overflow-hidden shadow-xl lg:shadow-2xl relative border border-slate-200 bg-white">
                            <img 
                                src="/hero-profile.png" 
                                alt="Haries Hussain — Web Developer in Nandyal, India"
                                className="w-full h-full object-cover object-top"
                                width="600"
                                height="750"
                            />
                            {/* Decorative element over image */}
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
                        </div>
                        {/* Floating decorator card */}
                        <motion.div 
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -bottom-3 -left-3 sm:bottom-8 sm:-left-8 lg:bottom-12 lg:-left-12 bg-white p-2.5 sm:p-5 lg:p-6 rounded-lg sm:rounded-2xl shadow-lg lg:shadow-xl border border-slate-100 flex items-center gap-2 sm:gap-4 max-w-[125%] sm:max-w-none origin-bottom-left"
                        >
                            <div className="hidden sm:flex w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-blue-50 items-center justify-center text-blue-600 shrink-0">
                                <HiSparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                            </div>
                            <div className="min-w-0 px-1 sm:px-0">
                                <p className="text-slate-900 font-bold text-[9px] sm:text-sm lg:text-base leading-tight truncate">Premium Design</p>
                                <p className="text-slate-500 text-[8px] sm:text-xs lg:text-sm leading-tight truncate">High Converting</p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
