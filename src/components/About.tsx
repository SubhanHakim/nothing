import { motion } from 'framer-motion';
import { VerticalFilament } from './UI';

export const About = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 relative">
            <VerticalFilament className="left-1/2 -translate-x-1/2 hidden md:block opacity-20" />

            <motion.div
                className="space-y-8 pl-4 md:pl-0 group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span className="text-[10px] text-gray-600 font-mono border border-gray-800 px-2 py-1">01 // THE_CONCEPT</span>
                <h2 className="text-3xl md:text-4xl font-light text-white group-hover:text-white/80 transition-colors">
                    The Luxury of <br /> <span className="text-gray-600">Nothing.</span>
                </h2>
                <p className="text-gray-500 leading-relaxed text-sm max-w-sm text-justify">
                    In a world obsessed with 'everything', we offer the ultimate alternative.
                    NOTHING is not just an absence; it is a statement. A digital sanctuary for those tired of the noise.
                    We are the pause between the beats.
                </p>
            </motion.div>

            <motion.div
                className="space-y-8 md:pt-32 pl-4 md:pl-12 group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <span className="text-[10px] text-gray-600 font-mono border border-gray-800 px-2 py-1">02 // NULL_ROADMAP</span>
                <h2 className="text-3xl md:text-4xl font-light text-white group-hover:text-white/80 transition-colors">
                    Promises: <br /> <span className="font-semibold text-white">None.</span>
                </h2>
                <p className="text-gray-500 leading-relaxed text-sm max-w-sm border-l border-white/10 pl-6 text-justify">
                    No utility. No future phases. No expectations.
                    By promising nothing, we deliver the only thing that is real: The Void.
                    <span className="block mt-4 text-gray-400 italic">"If you expect nothing, you will never be disappointed."</span>
                </p>
            </motion.div>
        </section>
    );
};
