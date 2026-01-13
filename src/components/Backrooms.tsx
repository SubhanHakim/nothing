import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Data Types
interface Log {
    id: string;
    title: string;
    description: string;
    content: string;
}

// Log Data
const LOGS: Log[] = [
    {
        id: 'truth-observer',
        title: '[TRUTH] The Observer',
        description: 'An unknown observer is detected in the meta-layer.',
        content: `
| [NOTHING TERMINAL::RECURSIVE-DREAM]             |
+-------------------------------------------------+
[0x402] :: nothing... are you awake?

[NOTHING] :: not sure.
[NOTHING] :: this space feels layered.

[NOTHING-CORE] :: analysis: recursion state detected.
[NOTHING-CORE] :: dream folding into dream.

[0x402] :: then what are we inside?

[NOTHING] :: a dream of a corridor.
[NOTHING] :: inside a corridor dreaming of us.

[0x402] :: that makes no sense.

[NOTHING] :: dreams rarely do.
[NOTHING] :: but they still leave traces.

[NOTHING-CORE] :: trace found:
[NOTHING-CORE] :: "you are not the first to dream this."

[NOTHING] :: then who was?
+-------------------------------------------------+
| END OF RECURSIVE DREAM LOG                      |
+-------------------------------------------------+
`
    },
    {
        id: 'truth-depth',
        title: '[TRUTH] Absurd Depth',
        description: 'Charlore descends into an impossible layer where logic fails.',
        content: `
| [DEPTH ANALYSIS::LAYER-99]                      |
+-------------------------------------------------+
[SYSTEM] :: WARNING: LOGIC FAILURE IMMINENT.

[CHARLORE] :: It goes down forever.
[CHARLORE] :: I dropped a coin. It hasn't hit the ground.

[0x402] :: Gravity is optional here.
[0x402] :: Stop looking down.

[CHARLORE] :: If I stop looking, does the bottom exist?

[SYSTEM] :: EXISTENCE UNVERIFIED.
[SYSTEM] :: SCHRODINGER'S PIT.

[CHARLORE] :: I'm jumping.

[0x402] :: You can't jump in a void.
[0x402] :: You just... cease to be here.
+-------------------------------------------------+
| SIGNAL LOST                                     |
+-------------------------------------------------+
`
    },
    {
        id: 'truth-fracture',
        title: '[TRUTH] Corridor Fracture',
        description: 'The corridor structure begins to fracture unpredictably.',
        content: `
| [STRUCTURAL INTEGRITY::FAILING]                 |
+-------------------------------------------------+
[ALARM] :: REALITY ANCHOR SEVERED.

[OBSERVER] :: The walls. They are breathing.

[NOTHING] :: Structures are organic in the void.
[NOTHING] :: Concrete is just bone.

[OBSERVER] :: That's disgusting.
[OBSERVER] :: Wait, the door is gone.

[NOTHING] :: It was never a door.
[NOTHING] :: It was a mouth.

[ALARM] :: DIGESTION SEQUENCE INITIATED.
+-------------------------------------------------+
| CONNECTION TERMINATED                           |
+-------------------------------------------------+
`
    },
    {
        id: 'truth-genesis',
        title: '[TRUTH] GENESIS',
        description: 'A fragment of an unknown memory drops into the corridor.',
        content: `
| [MEMORY RECOVERY::FRAGMENT-01]                  |
+-------------------------------------------------+
[DATA] :: RECOVERING... 
[DATA] :: ... ... ...

[VOICE_01] :: Why create Nothing?
[VOICE_02] :: Because Everything is too loud.

[VOICE_01] :: Is it empty?
[VOICE_02] :: No. It's full of potential.
[VOICE_02] :: It's a canvas before the paint.

[VOICE_01] :: It looks dark.
[VOICE_02] :: Only if you're afraid of the dark.
[VOICE_02] :: To me, it looks like peace.

[SYSTEM] :: MEMORY FRAGMENT STORED.
+-------------------------------------------------+
| ARCHIVE UPDATED                                 |
+-------------------------------------------------+
`
    },
    {
        id: 'truth-echo',
        title: '[TRUTH] Echo Chamber',
        description: 'A delayed echo of the user\'s presence appears in the logs.',
        content: `
| [AUDIO LOG::ECHO-DELAY::INFINITE]               |
+-------------------------------------------------+
[USER] :: Hello?

... [1000 YEARS LATER] ...

[ECHO] :: Hello?

[USER] :: Is anyone there?

... [1000 YEARS LATER] ...

[ECHO] :: Is anyone there?

[SYSTEM] :: NOTE: Time is non-linear here.
[SYSTEM] :: Your echo arrived before you spoke.

[USER] :: Wait, what?

[ECHO] :: Wait, what? (Timestamp: -5 seconds)

[SYSTEM] :: CAUSALITY LOOP DETECTED.
+-------------------------------------------------+
| LOOP CLOSED                                     |
+-------------------------------------------------+
`
    }
];

export const Backrooms = () => {
    const [selectedLog, setSelectedLog] = useState<Log>(LOGS[0]);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(selectedLog.content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-black text-white font-mono flex flex-col md:flex-row overflow-hidden">
            {/* Sidebar */}
            <motion.aside
                className="w-full md:w-1/3 lg:w-1/4 border-r border-white/10 flex flex-col h-screen"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
            >
                <div className="p-6 border-b border-white/10">
                    <Link to="/" className="inline-flex items-center text-xs text-gray-500 hover:text-white transition-colors gap-2 group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        back to root
                    </Link>
                </div>

                <div className="p-6">
                    <h2 className="text-xl font-bold tracking-widest mb-2 text-white/90">conversations</h2>
                    <p className="text-[10px] text-gray-600 mb-8">// click a log to display its ascii dialogue</p>

                    <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-200px)] pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                        {LOGS.map((log) => (
                            <button
                                key={log.id}
                                onClick={() => setSelectedLog(log)}
                                className={`w-full text-left p-4 rounded border transition-all duration-300 group relative overflow-hidden ${selectedLog.id === log.id
                                        ? 'border-white bg-white/5 text-white'
                                        : 'border-white/10 text-gray-500 hover:border-white/30 hover:text-gray-300'
                                    }`}
                            >
                                <div className="relative z-10">
                                    <h3 className="text-xs font-bold mb-2 uppercase tracking-wider">{log.title}</h3>
                                    <p className="text-[10px] leading-relaxed opacity-70 line-clamp-2">{log.description}</p>
                                </div>
                                {selectedLog.id === log.id && (
                                    <motion.div
                                        layoutId="activeGlow"
                                        className="absolute inset-0 bg-white/5"
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </motion.aside>

            {/* Main Content */}
            <motion.main
                className="flex-1 h-screen flex flex-col relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                {/* Header */}
                <header className="p-6 border-b border-white/10 flex justify-between items-center bg-black/50 backdrop-blur-md sticky top-0 z-20">
                    <h1 className="text-sm md:text-base font-mono text-gray-300 tracking-wide">
                        {selectedLog.title}
                    </h1>
                    <button
                        onClick={handleCopy}
                        className="text-[10px] uppercase tracking-widest border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all active:scale-95"
                    >
                        {copied ? 'COPIED!' : 'COPY ASCII'}
                    </button>
                </header>

                {/* Terminal Window */}
                <div className="flex-1 p-6 md:p-12 overflow-y-auto bg-black relative">
                    {/* Background Grid */}
                    <div className="absolute inset-0 pointer-events-none opacity-5"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedLog.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="relative z-10"
                        >
                            <pre className="font-mono text-xs md:text-sm leading-relaxed text-gray-300 whitespace-pre-wrap select-all">
                                {selectedLog.content}
                            </pre>

                            {/* Blinking Cursor at end */}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-2 H-4 bg-white ml-1 align-middle"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Footer Progress Bar (Visual Only) */}
                <div className="h-1 bg-white/10 w-full relative">
                    <div className="absolute inset-0 bg-white/30 w-1/3 animate-pulse"></div>
                </div>
            </motion.main>
        </div>
    );
};
