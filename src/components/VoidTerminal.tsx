import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const VoidTerminal = () => {
    const navigate = useNavigate();

    return (
        <motion.section
            className="py-20 mb-20 border border-white/5 p-8 md:p-12 transition-all duration-700 cursor-pointer group relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            onClick={() => navigate('/backrooms')}
        >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <div className="flex flex-col items-center justify-center space-y-6 relative z-10">
                <div className="w-1 h-1 bg-white rounded-full group-hover:scale-[20] transition-transform duration-1000 opacity-50"></div>
                <h3 className="text-xl md:text-2xl tracking-[0.6em] text-center font-light text-gray-300 group-hover:text-white group-hover:tracking-[0.8em] transition-all duration-700">
                    STILL NOTHING
                </h3>
                <p className="text-[10px] text-gray-600 font-mono group-hover:text-gray-400">
                    [ CLICK TO INITIALIZE TERMINAL ]
                </p>
            </div>
        </motion.section>
    );
};
