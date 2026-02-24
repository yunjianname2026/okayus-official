import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import { ChevronLeft, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form@7.55.0';
import { toast } from 'sonner@2.0.3';
import OkayusLogo from '../components/OkayusLogo';
import { PLANS, getPlanById } from '../utils/planConfig';
import { COUNTRIES, getCountryByCode } from '../utils/countryConfig';
import { submitRegistration } from '../utils/registrationService';

type FormData = {
  email: string;
  country: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
};

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(PLANS[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const selectedCountryCode = watch('country');

  useEffect(() => {
    const planParam = searchParams.get('plan');
    if (planParam) {
      const plan = getPlanById(planParam);
      if (plan) {
        setSelectedPlan(plan);
      }
    }
  }, [searchParams]);

  const onSubmit = async (data: FormData) => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      return;
    }

    setIsSubmitting(true);
    try {
      await submitRegistration({
        ...data,
        plan: selectedPlan.id,
      });
      
      toast.success('注册成功！我们会尽快与您联系。');
      setTimeout(() => {
        navigate('/plans');
      }, 2000);
    } catch (error) {
      toast.error('提交失败，请稍后重试。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedCountry = selectedCountryCode ? getCountryByCode(selectedCountryCode) : null;

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => navigate('/plans')}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            返回
          </button>
          <OkayusLogo />
          <div className="w-16" />
        </div>
      </header>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-12">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all ${
                    currentStep >= step
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {currentStep > step ? <Check className="w-4 h-4" /> : step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 h-0.5 ${
                      currentStep > step ? 'bg-black' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: currentStep === 1 ? 1 : 0.3, y: 0 }}
              className={currentStep === 1 ? '' : 'pointer-events-none'}
            >
              <h2 className="text-2xl mb-6">选择方案</h2>
              <div className="grid gap-4">
                {PLANS.map((plan) => (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlan(plan)}
                    className={`p-6 rounded-2xl border-2 text-left transition-all ${
                      selectedPlan.id === plan.id
                        ? 'border-black bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-normal text-lg mb-1">{plan.name}</h3>
                        <p className="text-sm text-gray-500 mb-3">{plan.duration}</p>
                        <p className="text-2xl font-light">{plan.price}</p>
                      </div>
                      {selectedPlan.id === plan.id && (
                        <Check className="w-5 h-5 text-black" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: currentStep === 2 ? 1 : 0.3, y: 0 }}
              className={currentStep === 2 ? '' : 'pointer-events-none'}
            >
              <h2 className="text-2xl mb-6">联系信息</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">邮箱</label>
                  <input
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    type="email"
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">请输入有效邮箱</p>}
                </div>
                <div>
                  <label className="block text-sm mb-2">国家/地区</label>
                  <select
                    {...register('country', { required: true })}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                  >
                    <option value="">选择国家/地区</option>
                    {COUNTRIES.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                  {errors.country && <p className="text-sm text-red-500 mt-1">请选择国家/地区</p>}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: currentStep === 3 ? 1 : 0.3, y: 0 }}
              className={currentStep === 3 ? '' : 'pointer-events-none'}
            >
              <h2 className="text-2xl mb-6">配送地址</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">姓名</label>
                  <input
                    {...register('name', { required: true })}
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                    placeholder={selectedCountry?.namePlaceholder || '张三'}
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-1">请输入姓名</p>}
                </div>
                <div>
                  <label className="block text-sm mb-2">电话</label>
                  <input
                    {...register('phone', { required: true })}
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                    placeholder={selectedCountry?.phonePlaceholder || '+86 138 0000 0000'}
                  />
                  {errors.phone && <p className="text-sm text-red-500 mt-1">请输入电话</p>}
                </div>
                <div>
                  <label className="block text-sm mb-2">地址</label>
                  <input
                    {...register('address', { required: true })}
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                    placeholder={selectedCountry?.addressPlaceholder || '详细地址'}
                  />
                  {errors.address && <p className="text-sm text-red-500 mt-1">请输入地址</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">城市</label>
                    <input
                      {...register('city', { required: true })}
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                      placeholder={selectedCountry?.cityPlaceholder || '北京'}
                    />
                    {errors.city && <p className="text-sm text-red-500 mt-1">请输入城市</p>}
                  </div>
                  <div>
                    <label className="block text-sm mb-2">邮编</label>
                    <input
                      {...register('postalCode', { required: true })}
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                      placeholder={selectedCountry?.postalCodePlaceholder || '100000'}
                    />
                    {errors.postalCode && <p className="text-sm text-red-500 mt-1">请输入邮编</p>}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex gap-4 pt-4">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="flex-1 px-8 py-4 rounded-full border border-gray-300 hover:border-black transition-colors"
                >
                  上一步
                </button>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? '提交中...' : currentStep === 3 ? '完成注册' : '下一步'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
