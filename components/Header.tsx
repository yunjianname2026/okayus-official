import { useNavigate, useLocation } from 'react-router';
import OkayusLogo from './OkayusLogo';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isPlansPage = location.pathname === '/plans';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="cursor-pointer">
          <OkayusLogo />
        </button>
        <nav className="flex items-center gap-8">
          <button
            onClick={() => navigate('/plans')}
            className={`text-sm transition-colors ${
              isPlansPage ? 'text-black' : 'text-gray-500 hover:text-black'
            }`}
          >
            方案
          </button>
        </nav>
      </div>
    </header>
  );
}
