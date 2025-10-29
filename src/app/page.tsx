export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a]">
      {/* Header */}
      <header className="border-b border-gray-800/50 backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-white">⚪</span>
              </div>
              <span className="text-xl font-bold text-white">Lunar Labs</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#moonwall" className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium tracking-wide">
                MOONWALL
              </a>
              <a href="#maambot" className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium tracking-wide">
                MAAMBOT
              </a>
              <a href="#explore" className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium tracking-wide">
                EXPLORE OPTIONS/SITES
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-6">MISSION</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
            Building safe and automated tools for digital economy
          </h1>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Moonwall Card */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-amber-500/30 transition-all group">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">PRODUCT 1</p>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🌙</span>
              </div>
              <h2 className="text-3xl font-bold text-white">moonwall</h2>
            </div>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Load, borrow and earn yield with confidence
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-gray-700/50">
              <div>
                <p className="text-amber-400 text-xs font-semibold mb-1 tracking-wide">MOONWALL</p>
                <p className="text-gray-500 text-xs">TVL</p>
              </div>
              <div className="text-right">
                <p className="text-white text-xs mb-1">$734,609,467</p>
                <p className="text-gray-400 text-xs">MARKET CAP</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700/50">
              <p className="text-2xl font-bold text-white">$89.9BM</p>
            </div>
          </div>

          {/* MAAMBOT Card */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-amber-500/30 transition-all group">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">PRODUCT 2</p>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🤖</span>
              </div>
              <h2 className="text-3xl font-bold text-white">MAAMBOT</h2>
            </div>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Simple, safe and automated way to earn interest with your money
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-gray-700/50">
              <div>
                <p className="text-amber-400 text-xs font-semibold mb-1 tracking-wide">MAAMBOT</p>
                <p className="text-gray-500 text-xs">TVL</p>
              </div>
              <div className="text-right">
                <p className="text-white text-xs mb-1">$934,609,467</p>
                <p className="text-gray-400 text-xs">MARKET CAP</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700/50">
              <p className="text-2xl font-bold text-white">$32.3M</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full"></div>
              <span className="text-gray-400 text-sm">© 2024 Lunar Labs. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
