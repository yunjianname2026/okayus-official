import { motion } from 'motion/react';

export default function SystemCognition() {
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
          系统认知<br />
          而非单点突破
        </h2>
        <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
          衰老是复杂系统的崩溃，需要系统性的修复方案
        </p>
      </motion.div>
    </section>
  );
}
