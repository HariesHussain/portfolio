import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../config.jsx';

const DemoProjects = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white" id="demo-projects">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-slate-900"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-600"
                    >
                        Experience the quality, speed, and premium feel of the websites I build.
                    </motion.p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12">
                    {config.demoProjects.map((project, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="group relative rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
                        >
                            <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden relative border-b border-slate-100">
                                <img 
                                    src={project.image} 
                                    alt={`${project.title} – Premium web project by Haries Hussain`}
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    loading="lazy"
                                    width="800"
                                    height="500"
                                />
                                {/* Soft overlay on hover */}
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500 pointer-events-none" />
                            </div>
                            
                            <div className="p-5 lg:p-10 flex-1 flex flex-col">
                                <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 text-sm lg:text-base mb-6 lg:mb-8 leading-relaxed flex-1">
                                    {project.description}
                                </p>
                                <a 
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-blue-600/30 w-full sm:w-fit"
                                >
                                    Live Preview
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DemoProjects;
