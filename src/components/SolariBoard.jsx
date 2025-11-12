import { useState, useMemo } from 'react'
import { mockFlights } from '../data/mockFlights'
import SolariBoardFlight from './SolariBoardFlight'

export default function SolariBoard({ searchParams }) {
  const [sortBy, setSortBy] = useState('price')

  const sortedFlights = useMemo(() => {
    const flights = [...mockFlights]
    
    if (sortBy === 'price') {
      return flights.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'miles') {
      return flights.sort((a, b) => a.miles - b.miles)
    }
    
    return flights
  }, [sortBy])

  return (
    <div>
      {/* Sort Controls */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setSortBy('price')}
          className={`px-4 py-2 font-bold rounded transition-all font-retro ${
            sortBy === 'price'
              ? 'bg-flipboard-gold text-flipboard-dark shadow-retro'
              : 'bg-flipboard-navy text-flipboard-gold border-2 border-flipboard-gold hover:shadow-retro'
          }`}
        >
          💰 Sort by Price
        </button>
        <button
          onClick={() => setSortBy('miles')}
          className={`px-4 py-2 font-bold rounded transition-all font-retro ${
            sortBy === 'miles'
              ? 'bg-flipboard-gold text-flipboard-dark shadow-retro'
              : 'bg-flipboard-navy text-flipboard-gold border-2 border-flipboard-gold hover:shadow-retro'
          }`}
        >
          💎 Sort by Miles
        </button>
      </div>

      {/* Solari Board Title */}
      <div className="mb-8 text-center">
        <h2 className="text-flipboard-gold font-display font-bold text-3xl mb-2">DEPARTURES</h2>
        <div className="h-1 bg-gradient-to-r from-transparent via-flipboard-gold to-transparent"></div>
      </div>

      {/* Flights Grid - Solari Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedFlights.map((flight) => (
          <SolariBoardFlight key={flight.id} flight={flight} />
        ))}
      </div>

      {/* No Results */}
      {sortedFlights.length === 0 && (
        <div className="text-center py-12">
          <p className="text-flipboard-cream text-lg font-retro">NO FLIGHTS AVAILABLE</p>
        </div>
      )}
    </div>
  )
}

