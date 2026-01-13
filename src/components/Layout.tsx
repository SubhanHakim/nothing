import React from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import { Noise } from './UI';

export const LayoutHeader = () => (
    <motion.header
        className="py-8 flex justify-between items-center uppercase text-[10px] tracking-[0.3em]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
    >
        <Link to="/" className="text-white/50 hover:text-white transition-colors">NOTHING.v1</Link>

        <div className="flex items-center gap-8">
            <Link to="/backrooms" className="text-gray-500 hover:text-white transition-colors group">
                <span className="opacity-50 group-hover:opacity-100 transition-opacity">[</span>
                TERMINAL
                <span className="opacity-50 group-hover:opacity-100 transition-opacity">]</span>
            </Link>

            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                <span className="text-white/80">Active</span>
            </div>
        </div>
    </motion.header>
);

export const LayoutFooter = () => (
    <motion.footer
        className="pb-8 flex justify-between items-end text-[10px] text-gray-700 font-mono uppercase tracking-widest"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
    >
        <div className="flex flex-col space-y-1">
            <span>ID: 884-X-ALPHA</span>
            <span>LOC: NULL_VECTOR</span>
        </div>
        <div className="text-right flex flex-col space-y-1">
            <span>&copy; POST-HUMAN ERA</span>
            <span>End of Line</span>
        </div>
    </motion.footer>
);

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-black text-gray-300 font-light tracking-wide overflow-hidden relative">
            <Noise />
            {children}
        </div>
    );
};
