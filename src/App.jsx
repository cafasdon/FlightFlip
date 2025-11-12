import { useState } from 'react'
import './App.css'
import FlightBoard from './components/FlightBoard'
import Header from './components/Header'
import PromotionsBoard from './components/PromotionsBoard'
import SearchForm from './components/SearchForm'

function App() {
  const [searchParams, setSearchParams] = useState({
    origin: 'GIG',
    destination: 'GRU',
    date: new Date().toISOString().split('T')[0],
  })

  const [activeTab, setActiveTab] = useState('flights') // 'flights', 'promotions', 'explorer'

  return (
    <div className="min-h-screen bg-flipboard-dark">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Form */}
        <SearchForm searchParams={searchParams} setSearchParams={setSearchParams} />

        {/* Tab Navigation */}
        <div className="flex gap-4 my-8 border-b-2 border-flipboard-gold">
          <button
            onClick={() => setActiveTab('flights')}
            className={`px-6 py-3 font-bold transition-all ${activeTab === 'flights'
                ? 'text-flipboard-gold border-b-4 border-flipboard-gold'
                : 'text-flipboard-cream hover:text-flipboard-gold'
              }`}
          >
            ✈️ FLIGHTS
          </button>
          <button
            onClick={() => setActiveTab('promotions')}
            className={`px-6 py-3 font-bold transition-all ${activeTab === 'promotions'
                ? 'text-flipboard-gold border-b-4 border-flipboard-gold'
                : 'text-flipboard-cream hover:text-flipboard-gold'
              }`}
          >
            🎉 PROMOTIONS
          </button>
          <button
            onClick={() => setActiveTab('explorer')}
            className={`px-6 py-3 font-bold transition-all ${activeTab === 'explorer'
                ? 'text-flipboard-gold border-b-4 border-flipboard-gold'
                : 'text-flipboard-cream hover:text-flipboard-gold'
              }`}
          >
            📊 PRICE EXPLORER
          </button>
        </div>

        {/* Content */}
        {activeTab === 'flights' && <FlightBoard searchParams={searchParams} />}
        {activeTab === 'promotions' && <PromotionsBoard />}
        {activeTab === 'explorer' && (
          <div className="text-center py-12">
            <p className="text-flipboard-cream text-lg">Price Explorer coming soon...</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
