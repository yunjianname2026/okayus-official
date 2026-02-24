import { useNavigate } from 'react-router';

export default function MinimalFooter() {
  const navigate = useNavigate();

  return (
    <footer className="py-20 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-gray-400">© 2024 OKAYUS 本我</p>
          <button
            onClick={() => navigate('/plans')}
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            查看方案
          </button>
        </div>
      </div>
    </footer>
  );
}
