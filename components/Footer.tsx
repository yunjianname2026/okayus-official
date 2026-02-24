export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-light mb-4">产品</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>PQQ + AKG</li>
              <li>成分说明</li>
              <li>科学依据</li>
            </ul>
          </div>
          <div>
            <h3 className="font-light mb-4">公司</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>关于我们</li>
              <li>品牌理念</li>
              <li>联系我们</li>
            </ul>
          </div>
          <div>
            <h3 className="font-light mb-4">支持</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>常见问题</li>
              <li>配送说明</li>
              <li>退换政策</li>
            </ul>
          </div>
          <div>
            <h3 className="font-light mb-4">法律</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>隐私政策</li>
              <li>服务条款</li>
              <li>免责声明</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2024 OKAYUS 本我. 保留所有权利.</p>
          <p className="text-sm text-gray-400">理性克制 长期主义</p>
        </div>
      </div>
    </footer>
  );
}
