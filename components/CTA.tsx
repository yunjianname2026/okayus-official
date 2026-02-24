import { motion } from 'motion/react';
import { useNavigate } from 'react-router';

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="py-32 px-6 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-light mb-8">
          开始你的修复之旅
        </h2>
        <p className="text-xl text-gray-500 mb-12 font-light">
          理性、克制、长期
        </p>
        <button
          onClick={() => navigate('/checkout')}
          className="px-12 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all text-lg"
        >
          立即开始
        </button>
      </motion.div>
    </section>
  );
}
