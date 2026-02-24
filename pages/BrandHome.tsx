import Header from '../components/Header';
import IntroScreen from '../components/IntroScreen';
import AttitudeHero from '../components/AttitudeHero';
import SystemCognition from '../components/SystemCognition';
import ScientificEvolution from '../components/ScientificEvolution';
import MinimalFooter from '../components/MinimalFooter';

export default function BrandHome() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IntroScreen />
      <AttitudeHero />
      <SystemCognition />
      <ScientificEvolution />
      <MinimalFooter />
    </div>
  );
}
