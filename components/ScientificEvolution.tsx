import { motion } from 'motion/react';

export default function ScientificEvolution() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8 leading-relaxed">
          科学在进化<br />
          我们的认知也要进化
        </h2>
        <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
          基于最新的衰老科学研究，持续迭代
        </p>
      </motion.div>
    </section>
  );
}
