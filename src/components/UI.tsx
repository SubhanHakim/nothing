import { motion } from 'framer-motion';

export const Filament = ({ className = "" }: { className?: string }) => (
    <motion.div
        className={`h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent origin-center ${className}`}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
    />
);

export const VerticalFilament = ({ className = "" }: { className?: string }) => (
    <motion.div
        className={`w-px h-full absolute bg-gradient-to-b from-transparent via-white/20 to-transparent origin-top ${className}`}
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
    />
);

export const BackgroundGrid = () => (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-10"
        style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
        }}>
    </div>
);

export const Noise = () => (
    <div className="fixed inset-0 pointer-events-none z-[50] opacity-[0.03] mix-blend-overlay">
        <svg className="w-full h-full">
            <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
    </div>
);
