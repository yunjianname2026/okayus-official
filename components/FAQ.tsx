import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '多久能看到效果？',
    answer: '因个体差异而异。部分用户在 2-4 周感受到精力改善，建议持续服用 3 个月以上观察长期效果。'
  },
  {
    question: '安全性如何？',
    answer: 'PQQ 和 AKG 都是人体内天然存在的物质，已有大量研究支持其安全性。建议按推荐剂量服用。'
  },
  {
    question: '需要一直服用吗？',
    answer: '抗衰老是长期过程，建议作为日常补充持续服用，但可根据个人情况调整周期。'
  },
  {
    question: '如何服用？',
    answer: '建议早晨空腹或随餐服用，具体用量详见产品说明。'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-light text-center mb-20"
        >
          常见问题
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-black/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-light text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 font-light">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
