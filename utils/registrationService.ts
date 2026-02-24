interface RegistrationData {
  email: string;
  country: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  plan: string;
}

export async function submitRegistration(data: RegistrationData): Promise<void> {
  // 模拟 API 调用延迟
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // 在实际应用中，这里会调用后端 API
  console.log('Registration submitted:', data);
  
  // 模拟成功响应
  return Promise.resolve();
}
