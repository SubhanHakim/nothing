import { motion } from 'framer-motion';

// Import assets
import anthrupadImg from '../assets/supportes/ant.png';
import truthImg from '../assets/supportes/truth.webp';
import geniusImg from '../assets/supportes/genius.webp';
import andyImg from '../assets/supportes/andy.webp';
import gnonImg from '../assets/supportes/gnon.webp';
import lowkeyImg from '../assets/supportes/image.webp'; // Assuming image.webp is lowkeyImg based on exclusion

interface Supporter {
    id: number;
    name: string;
    handle: string;
    image: string;
    link: string;
}

const SUPPORTERS: Supporter[] = [
    {
        id: 1,
        name: 'w̸͕͂͂a̷͔̗͐t̴̙͗e̵̬̔̕r̴̰̓̊m̵͙͖̓̽a̵̢̗̓͒r̸̲̽ķ̷͔́͝',
        handle: '@anthrupad',
        image: anthrupadImg,
        link: 'https://x.com/anthrupad'
    },
    {
        id: 2,
        name: 'j⧉nus',
        handle: '@j⧉nus',
        image: geniusImg,
        link: 'https://x.com/repligate'
    },
    {
        id: 3,
        name: 'Andy Ayrey',
        handle: '@AndyAyrey',
        image: andyImg,
        link: 'https://x.com/andyayrey'
    },
    {
        id: 4,
        name: 'Gnon',
        handle: '@Gnon',
        image: gnonImg,
        link: 'https://x.com/GnonLabs'
    },
    {
        id: 5,
        name: 'Lowkey',
        handle: '@Lowkeyyrzs',
        image: lowkeyImg,
        link: 'https://x.com/Lowkeyyrzs'
    },
    {
        id: 6,
        name: 'Upward Spiral',
        handle: '@Upward_Earth',
        image: truthImg,
        link: 'https://x.com/Upward_Earth'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export const Support = () => {
    return (
        <motion.section
            className="mb-32 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={containerVariants}
        >
            <div className="flex items-end justify-between mb-8 border-b border-white/5 pb-4 mx-6 md:mx-0">
                <span className="text-[10px] text-gray-600 font-mono">04 // NETWORK_NODES</span>
                <span className="text-[10px] text-gray-600 font-mono">CONNECTION_ESTABLISHED</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
                {SUPPORTERS.map((supporter) => (
                    <motion.a
                        key={supporter.id}
                        href={supporter.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-black p-6 hover:bg-white/5 transition-colors duration-500 relative overflow-hidden text-left"
                        variants={itemVariants}
                    >

                        <div className="flex items-center space-x-6 relative z-10">
                            {/* Avatar */}
                            <div className="relative">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors">
                                    <img
                                        src={supporter.image}
                                        alt={supporter.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                {/* Status Dot */}
                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-black rounded-full flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <h3 className="text-lg font-light text-gray-300 group-hover:text-white transition-colors truncate">
                                    {supporter.name}
                                </h3>
                                <p className="text-[10px] tracking-widest text-gray-600 uppercase group-hover:text-gray-400 font-mono">
                                    {supporter.handle}
                                </p>
                            </div>

                            {/* Arrow Icon */}
                            <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-white/50">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" />
                                </svg>
                            </div>
                        </div>

                        {/* Hover Grid overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:10px_10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.a>
                ))}
            </div>
        </motion.section>
    );
};
