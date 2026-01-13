import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Eagerly load images
const galleryImages = Object.values(import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' })) as string[];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        transition: { duration: 0.8, ease: "circOut" as any }
    }
};

export const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <motion.section
            id="gallery"
            className="mb-32 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={containerVariants}
        >
            <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-4 mx-6 md:mx-0">
                <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 font-mono tracking-widest mb-1">SECTION_03</span>
                    <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight">VISUAL_RECORDS</h2>
                </div>
                <div className="text-right">
                    <span className="text-[10px] text-gray-500 font-mono block">BUFFER_SIZE: {galleryImages.length}</span>
                    <span className="text-[10px] text-green-500/50 font-mono block animate-pulse">:: LIVE_FEED</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 md:px-0">
                {galleryImages.map((img, index) => (
                    <motion.div
                        key={index}
                        className="relative group overflow-hidden bg-black border border-white/5 aspect-square cursor-pointer"
                        variants={itemVariants}
                        onClick={() => setSelectedImage(img)}
                    >
                        {/* Image Container */}
                        <div className="relative h-full w-full overflow-hidden">
                            {/* Scanning Line overlay */}
                            <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-full h-[2px] bg-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,0.5)] animate-scan-fast mt-[-10%]" />
                            </div>

                            <img
                                src={img}
                                alt={`Artifact ${index}`}
                                className="w-full h-full object-cover grayscale brightness-50 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-700 ease-out scale-100 group-hover:scale-105"
                            />

                            {/* Glitch Overlay Effect */}
                            <div className="absolute inset-0 bg-white/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
                        </div>

                        {/* Technical HUD Overlay */}
                        <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                            <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                                <span className="text-[8px] font-mono text-cyan-300/80 bg-black/50 px-1 backdrop-blur-sm border border-cyan-900/30">
                                    IMG_{index.toString().padStart(3, '0')}
                                </span>
                                <span className="w-1 h-1 bg-white rounded-full shadow-[0_0_5px_white]" />
                            </div>

                            <div className="flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                {/* Corner Decoration */}
                                <div className="w-2 h-2 border-l border-b border-white/50" />
                                <span className="text-[8px] font-mono text-white/50 tracking-wider">
                                    [ENCRYPTED]
                                </span>
                            </div>
                        </div>

                        {/* Hover Border Glow */}
                        <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-300 pointer-events-none" />
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.h3
                            className="text-xl md:text-2xl font-light text-white tracking-[0.2em] mb-8"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            ARTIFACT
                        </motion.h3>

                        <motion.img
                            src={selectedImage}
                            alt="Expanded Artifact"
                            className="max-h-[70vh] w-auto rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            layoutId="selected-image"
                        />

                        <motion.p
                            className="mt-8 text-[10px] uppercase tracking-widest text-white/30 font-mono animate-pulse"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Click anywhere to dismiss
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};
