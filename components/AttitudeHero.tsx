import { motion } from 'motion/react';

export default function AttitudeHero() {
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
          不追求永生<br />
          只是不想衰老得那么快
        </h2>
        <p className="text-gray-500 text-lg font-light">
          理性、克制、长期
        </p>
      </motion.div>
    </section>
  );
}
