import React from 'react';
import { motion } from 'framer-motion';
import voidEntity from '../assets/void_entity.webp';
import dexIcon from '../assets/dexscreener.svg';


const SocialButton = ({ href, icon, label, isSvg = false, primary = false }: { href: string; icon: React.ReactNode | string; label: string; isSvg?: boolean; primary?: boolean }) => (
    <motion.a
        href={href}
        target={href.startsWith('#') ? '_self' : '_blank'}
        rel="noopener noreferrer"
        className={`group relative px-8 py-4 overflow-hidden transition-all duration-500 ${primary ? 'w-full md:w-auto min-w-[200px]' : ''}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
    >
        {/* Glass Background */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] transition-all duration-500 group-hover:bg-white/10" />

        {/* Border / Frame */}
        <div className="absolute inset-0 border border-white/10 transition-colors duration-500 group-hover:border-white/40" />

        {/* Corner Accents (The "Tech" feel) */}
        <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/30 group-hover:border-white transition-colors duration-500" />
        <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/30 group-hover:border-white transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/30 group-hover:border-white transition-colors duration-500" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/30 group-hover:border-white transition-colors duration-500" />

        {/* Hover Scanline Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.8)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine" />

        <div className="relative z-10 flex items-center justify-center gap-4">
            <span className="w-4 h-4 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors duration-300">
                {isSvg ? (
                    <img
                        src={icon as string}
                        alt={label}
                        className="w-full h-full transition-all duration-300 opacity-70 group-hover:opacity-100"
                        style={{ filter: 'brightness(0) invert(1)' }}
                    />
                ) : (
                    icon
                )}
            </span>
            <span className={`text-[10px] tracking-[0.3em] font-mono uppercase transition-all duration-300 ${primary ? 'text-white font-bold' : 'text-gray-400 group-hover:text-white'}`}>
                {label}
            </span>
        </div>
    </motion.a>
);

const XIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zl-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export const Hero = () => { // Removed mounted prop
    return (
        <motion.section // Changed to motion.section
            className="relative py-20 flex flex-col items-center justify-center min-h-[60vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Background Entity */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <img
                    src={voidEntity}
                    alt=""
                    className="max-w-[80vw] md:max-w-[500px] grayscale contrast-125 brightness-90 mix-blend-screen pointer-events-none"
                />
            </motion.div>

            <div className="text-center relative z-20 mix-blend-difference flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.h1 // Changed to motion.h1
                        className="text-7xl md:text-[10rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/10 mb-2"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        NOTHING
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
                        className="h-px bg-white/20 mx-auto mb-6"
                    />
                </motion.div>

                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    <motion.p // Changed to motion.p
                        className="text-xs font-mono uppercase tracking-[0.4em] text-gray-500 mb-16"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        [ SYSTEM STATUS: NULL ]
                    </motion.p>

                    {/* Social Buttons Container */}
                    <motion.div
                        className="flex flex-col items-center gap-6 w-full max-w-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 1 }}
                    >
                        <div className="grid grid-cols-2 gap-4 w-full">
                            <SocialButton
                                href="https://x.com/i/communities/2011334559615631787"
                                icon={<XIcon />}
                                label="TWITTER"
                            />
                            <SocialButton
                                href="#"
                                icon={dexIcon}
                                label="PumpFun"
                                isSvg
                            />
                        </div>

                        <SocialButton
                            href="#gallery"
                            icon={<span className="text-lg animate-bounce">↓</span>}
                            label="ENTER ARCHIVE"
                            primary
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};
