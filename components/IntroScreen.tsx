import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function IntroScreen() {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
          本我修复
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light">
          回到身体最初的设定
        </p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-400 hover:text-black transition-colors"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.button>
    </section>
  );
}
