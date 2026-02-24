export interface Plan {
  id: string;
  name: string;
  duration: string;
  price: string;
  features: string[];
}

export const PLANS: Plan[] = [
  {
    id: 'monthly',
    name: '月度方案',
    duration: '30 天供应',
    price: '¥498',
    features: [
      'PQQ 20mg/天',
      'AKG 1000mg/天',
      '随时取消',
      '免费配送'
    ]
  },
  {
    id: 'quarterly',
    name: '季度方案',
    duration: '90 天供应',
    price: '¥1,398',
    features: [
      'PQQ 20mg/天',
      'AKG 1000mg/天',
      '节省 6%',
      '免费配送',
      '专属客服'
    ]
  },
  {
    id: 'annual',
    name: '年度方案',
    duration: '365 天供应',
    price: '¥4,980',
    features: [
      'PQQ 20mg/天',
      'AKG 1000mg/天',
      '节省 17%',
      '免费配送',
      '专属客服',
      '健康追踪'
    ]
  }
];

export function getPlanById(id: string): Plan | undefined {
  return PLANS.find(plan => plan.id === id);
}
