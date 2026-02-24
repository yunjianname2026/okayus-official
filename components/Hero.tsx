import { motion } from 'motion/react';
import { useNavigate } from 'react-router';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
          延缓衰老的<br />系统方案
        </h1>
        <p className="text-xl text-gray-500 mb-12 font-light max-w-2xl mx-auto">
          PQQ + α-酮戊二酸（AKG）双成分协同
        </p>
        <button
          onClick={() => navigate('/checkout')}
          className="px-12 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all text-lg"
        >
          开始修复
        </button>
      </motion.div>
    </section>
  );
}
