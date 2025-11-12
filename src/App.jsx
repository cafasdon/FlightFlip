import { useCallback, useState } from 'react'
import './App.css'
import FlightBoard from './components/FlightBoard'
import Header from './components/Header'
import PriceExplorer from './components/PriceExplorer'
import PromotionsBoard from './components/PromotionsBoard'
import SearchForm from './components/SearchForm'
import Settings from './components/Settings'
import { useAutoRefresh } from './hooks/useAutoRefresh'

function App() {
  const [searchParams, setSearchParams] = useState({
    origin: 'GIG',
    destination: 'GRU',
    date: new Date().toISOString().split('T')[0],
  })

  const [activeTab, setActiveTab] = useState('flights') // 'flights', 'promotions', 'explorer'
  const [refreshCount, setRefreshCount] = useState(0)
  const [showSettings, setShowSettings] = useState(false)

  // Auto-refresh every 10 minutes (600 seconds)
  const handleAutoRefresh = useCallback(() => {
    setRefreshCount((prev) => prev + 1)
  }, [])

  useAutoRefresh(handleAutoRefresh, 600)

  return (
    <div className="min-h-screen bg-flipboard-dark">
      <Header onSettingsClick={() => setShowSettings(true)} />
      <Settings isOpen={showSettings} onClose={() => setShowSettings(false)} />

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
        {activeTab === 'flights' && <FlightBoard searchParams={searchParams} key={refreshCount} />}
        {activeTab === 'promotions' && <PromotionsBoard />}
        {activeTab === 'explorer' && <PriceExplorer searchParams={searchParams} />}
      </main>
    </div>
  )
}

export default App
