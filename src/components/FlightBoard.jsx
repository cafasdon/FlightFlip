import { useState, useMemo } from 'react'
import { mockFlights } from '../data/mockFlights'
import { formatCurrency, formatMiles } from '../utils/currencyFormatter'
import FlightCard from './FlightCard'

export default function FlightBoard({ searchParams }) {
  const [sortBy, setSortBy] = useState('price') // 'price' or 'miles'

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
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSortBy('price')}
          className={`px-4 py-2 font-bold rounded transition-all ${
            sortBy === 'price'
              ? 'bg-flipboard-gold text-flipboard-dark shadow-retro'
              : 'bg-flipboard-navy text-flipboard-gold border-2 border-flipboard-gold hover:shadow-retro'
          }`}
        >
          💰 Sort by Price
        </button>
        <button
          onClick={() => setSortBy('miles')}
          className={`px-4 py-2 font-bold rounded transition-all ${
            sortBy === 'miles'
              ? 'bg-flipboard-gold text-flipboard-dark shadow-retro'
              : 'bg-flipboard-navy text-flipboard-gold border-2 border-flipboard-gold hover:shadow-retro'
          }`}
        >
          💎 Sort by Miles
        </button>
      </div>

      {/* Flights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedFlights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>

      {/* No Results */}
      {sortedFlights.length === 0 && (
        <div className="text-center py-12">
          <p className="text-flipboard-cream text-lg">No flights found</p>
        </div>
      )}
    </div>
  )
}

