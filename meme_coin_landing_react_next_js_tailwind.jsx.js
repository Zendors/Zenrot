import Head from 'next/head'

export default function MemeCoinLanding() {
  const CONTRACT_ADDRESS = '0xYourTokenContractAddress'
  const BUY_LINK = 'https://app.uniswap.org/#/swap?outputCurrency=' + CONTRACT_ADDRESS

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100">
      <Head>
        <title>MemeCoin — The People's Meme</title>
        <meta name="description" content="Landing page untuk MemeCoin — Token komunitas, roadmaps, dan tautan pembelian." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 flex items-center justify-center text-black font-bold">MC</div>
          <div>
            <h1 className="font-extrabold tracking-tight text-xl">MemeCoin</h1>
            <p className="text-xs text-gray-400">$MEME — Koin komunitas</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#about">Tentang</a>
          <a href="#tokenomics">Tokenomics</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#faq">FAQ</a>
          <a href={BUY_LINK} target="_blank" rel="noreferrer" className="bg-yellow-400 text-black px-4 py-2 rounded">Beli</a>
        </nav>
      </header>

      <main className="container mx-auto px-6 pb-24">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">MemeCoin — dari komunitas, untuk komunitas</h2>
            <p className="mt-4 text-gray-300">Bergabunglah dengan revolusi meme — token ringan, komunitas besar, dan roadmap yang menyenangkan. Transparansi, liquidity locked, dan komunitas di depan.</p>

            <div className="flex gap-3 mt-6">
              <a href={BUY_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-yellow-400 text-black px-5 py-3 rounded-lg font-semibold">Beli $MEME</a>
              <a href={`https://etherscan.io/address/${CONTRACT_ADDRESS}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-gray-700 px-5 py-3 rounded-lg text-sm">Lihat Kontrak</a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-gray-900/50 rounded">Total Supply<br/><span className="font-bold">1,000,000,000</span></div>
              <div className="p-3 bg-gray-900/50 rounded">Liquidity Locked<br/><span className="font-bold">Yes</span></div>
              <div className="p-3 bg-gray-900/50 rounded">Audit<br/><span className="font-bold">Planned</span></div>
              <div className="p-3 bg-gray-900/50 rounded">Chain<br/><span className="font-bold">Ethereum</span></div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-700 via-purple-700 to-indigo-600 p-8 rounded-3xl shadow-2xl">
            <div className="text-center">
              <div className="w-40 h-40 rounded-full bg-white/10 mx-auto flex items-center justify-center text-4xl font-black">😂</div>
              <h3 className="mt-6 text-2xl font-bold">$MEME</h3>
              <p className="mt-2 text-gray-200">Token meme yang menyenangkan, didukung komunitas, dikembangkan untuk viralitas.</p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white/10 p-3 rounded">Presale<br/><span className="font-bold">—</span></div>
                <div className="bg-white/10 p-3 rounded">DEX<br/><span className="font-bold">Uniswap</span></div>
                <div className="bg-white/10 p-3 rounded">Contract<br/><span className="font-bold">{CONTRACT_ADDRESS}</span></div>
                <div className="bg-white/10 p-3 rounded">Holders<br/><span className="font-bold">TBD</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-16">
          <h3 className="text-2xl font-bold">Tentang $MEME</h3>
          <p className="mt-3 text-gray-300">$MEME lahir dari grup Discord/Twitter yang ingin membawa humor ke dunia crypto — sambil menjaga prinsip transparansi, keamanan, dan kepemilikan komunitas. Gunakan halaman ini sebagai pusat informasi: whitepaper singkat, tautan audit, dan update roadmap.</p>
        </section>

        <section id="tokenomics" className="mt-12">
          <h3 className="text-2xl font-bold">Tokenomics</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 bg-gray-900/40 rounded-lg">
              <h4 className="font-bold">Distribusi</h4>
              <ul className="mt-3 text-sm text-gray-300 space-y-2">
                <li>🔥 50% Liquidity</li>
                <li>👥 20% Community & Airdrops</li>
                <li>🛠 15% Team (vesting)</li>
                <li>📈 10% Marketing</li>
                <li>🔒 5% Reserve</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-900/40 rounded-lg">
              <h4 className="font-bold">Fees</h4>
              <p className="mt-3 text-sm text-gray-300">Contoh sistem fee ringan: 2% BURN, 3% LP, 1% Marketing. (Bisa disesuaikan di kontrak)</p>
            </div>

            <div className="p-6 bg-gray-900/40 rounded-lg">
              <h4 className="font-bold">Keamanan</h4>
              <p className="mt-3 text-sm text-gray-300">Rencana audit, liquidity lock, dan tim yang menahan sebagian token dengan vesting untuk mencegah rug-pull.</p>
            </div>
          </div>
        </section>

        <section id="roadmap" className="mt-12">
          <h3 className="text-2xl font-bold">Roadmap singkat</h3>
          <ol className="mt-6 space-y-4">
            <li className="bg-gray-900/30 p-4 rounded">Q1 — Launch & Liquidity</li>
            <li className="bg-gray-900/30 p-4 rounded">Q2 — Audit & Listing di DEX</li>
            <li className="bg-gray-900/30 p-4 rounded">Q3 — Airdrops komunitas & Partnerships</li>
            <li className="bg-gray-900/30 p-4 rounded">Q4 — Tools, NFT utility, DAO exploration</li>
          </ol>
        </section>

        <section id="faq" className="mt-12">
          <h3 className="text-2xl font-bold">FAQ</h3>
          <div className="mt-4 space-y-4 text-sm text-gray-300">
            <div>
              <h4 className="font-semibold">Bagaimana cara membeli?</h4>
              <p>Klik tombol "Beli" untuk membuka Uniswap (atau DEX lain) dengan alamat kontrak otomatis terisi.</p>
            </div>
            <div>
              <h4 className="font-semibold">Apakah aman?</h4>
              <p>Kami merencanakan audit dan liquidity lock — baca juga dokumentasi kontrak dan cek Etherscan.</p>
            </div>
          </div>
        </section>

        <footer className="mt-16 border-t border-gray-800 pt-8 pb-12 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row md:justify-between gap-6">
            <div>
              <div className="font-bold">MemeCoin</div>
              <div className="mt-2">Contract: <code className="text-xs">{CONTRACT_ADDRESS}</code></div>
            </div>

            <div className="flex gap-4 items-center">
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">Discord</a>
              <a href="#" className="hover:underline">Telegram</a>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-500">Disclaimer: Ini hanya contoh landing page. Pastikan semua klaim audit, lock, dan distribusi benar sebelum rilis publik.</p>
        </footer>
      </main>
    </div>
  )
}
