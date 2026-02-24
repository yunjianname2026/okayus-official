import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Check } from 'lucide-react';
import { PLANS } from '../utils/planConfig';

export default function PricingPlans() {
  const navigate = useNavigate();

  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-light text-center mb-20"
        >
          选择方案
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-black/10 hover:border-black/30 transition-all"
            >
              <h3 className="text-2xl font-light mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-6">{plan.duration}</p>
              <div className="mb-8">
                <span className="text-4xl font-light">{plan.price}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="font-light">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate(`/checkout?plan=${plan.id}`)}
                className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                选择方案
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
