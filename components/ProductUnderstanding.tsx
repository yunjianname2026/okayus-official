import { motion } from 'motion/react';

const points = [
  {
    question: '什么是 PQQ？',
    answer: '吡咯喹啉醌，促进线粒体新生的关键辅酶'
  },
  {
    question: '什么是 AKG？',
    answer: 'α-酮戊二酸，影响表观遗传的代谢中间产物'
  },
  {
    question: '为什么组合使用？',
    answer: '能量层面 + 信号层面的系统性修复'
  }
];

export default function ProductUnderstanding() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-light text-center mb-20"
        >
          产品理解
        </motion.h2>
        <div className="space-y-16">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="border-b border-black/10 pb-8"
            >
              <h3 className="text-xl mb-4 font-light">{point.question}</h3>
              <p className="text-gray-500 font-light">{point.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
