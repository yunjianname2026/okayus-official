import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductUnderstanding from '../components/ProductUnderstanding';
import PricingPlans from '../components/PricingPlans';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function PlansPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <ProductUnderstanding />
      <PricingPlans />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
