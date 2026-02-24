import { motion } from 'motion/react';
import { Zap, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: '线粒体修复',
    description: 'PQQ 激活能量工厂'
  },
  {
    icon: Shield,
    title: '表观遗传调控',
    description: 'AKG 延长健康寿命'
  },
  {
    icon: Sparkles,
    title: '协同增效',
    description: '双成分系统性作用'
  }
];

export default function Features() {
  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="text-center"
            >
              <feature.icon className="w-10 h-10 mx-auto mb-6 text-black" strokeWidth={1} />
              <h3 className="text-xl mb-3 font-light">{feature.title}</h3>
              <p className="text-gray-500 font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
