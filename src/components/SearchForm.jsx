import { useState } from 'react'
import { airports } from '../data/mockFlights'

export default function SearchForm({ searchParams, setSearchParams }) {
  const [showOriginDropdown, setShowOriginDropdown] = useState(false)
  const [showDestDropdown, setShowDestDropdown] = useState(false)
  const [originFilter, setOriginFilter] = useState('')
  const [destFilter, setDestFilter] = useState('')

  const filteredOrigins = airports.filter(
    (a) => a.code.includes(originFilter.toUpperCase()) || a.city.includes(originFilter)
  )

  const filteredDests = airports.filter(
    (a) => a.code.includes(destFilter.toUpperCase()) || a.city.includes(destFilter)
  )

  const handleOriginSelect = (code) => {
    setSearchParams({ ...searchParams, origin: code })
    setShowOriginDropdown(false)
    setOriginFilter('')
  }

  const handleDestSelect = (code) => {
    setSearchParams({ ...searchParams, destination: code })
    setShowDestDropdown(false)
    setDestFilter('')
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // Search logic will be implemented in FlightBoard
  }

  return (
    <form onSubmit={handleSearch} className="flipboard-card p-6 mb-8">
      <h2 className="text-2xl font-bold text-flipboard-gold mb-6">Search Flights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Origin */}
        <div className="relative">
          <label className="block text-flipboard-cream text-sm font-bold mb-2">FROM</label>
          <div className="relative">
            <input
              type="text"
              value={originFilter || searchParams.origin}
              onChange={(e) => {
                setOriginFilter(e.target.value)
                setShowOriginDropdown(true)
              }}
              onFocus={() => setShowOriginDropdown(true)}
              className="w-full bg-flipboard-dark text-flipboard-cream border-2 border-flipboard-gold p-2 rounded font-retro"
              placeholder="Origin"
            />
            {showOriginDropdown && (
              <div className="absolute top-full left-0 right-0 bg-flipboard-navy border-2 border-flipboard-gold mt-1 rounded z-10 max-h-48 overflow-y-auto">
                {filteredOrigins.map((airport) => (
                  <button
                    key={airport.code}
                    type="button"
                    onClick={() => handleOriginSelect(airport.code)}
                    className="w-full text-left px-3 py-2 hover:bg-flipboard-gold hover:text-flipboard-dark transition-colors"
                  >
                    {airport.code} - {airport.city}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Destination */}
        <div className="relative">
          <label className="block text-flipboard-cream text-sm font-bold mb-2">TO</label>
          <div className="relative">
            <input
              type="text"
              value={destFilter || searchParams.destination}
              onChange={(e) => {
                setDestFilter(e.target.value)
                setShowDestDropdown(true)
              }}
              onFocus={() => setShowDestDropdown(true)}
              className="w-full bg-flipboard-dark text-flipboard-cream border-2 border-flipboard-gold p-2 rounded font-retro"
              placeholder="Destination"
            />
            {showDestDropdown && (
              <div className="absolute top-full left-0 right-0 bg-flipboard-navy border-2 border-flipboard-gold mt-1 rounded z-10 max-h-48 overflow-y-auto">
                {filteredDests.map((airport) => (
                  <button
                    key={airport.code}
                    type="button"
                    onClick={() => handleDestSelect(airport.code)}
                    className="w-full text-left px-3 py-2 hover:bg-flipboard-gold hover:text-flipboard-dark transition-colors"
                  >
                    {airport.code} - {airport.city}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Date */}
        <div>
          <label className="block text-flipboard-cream text-sm font-bold mb-2">DATE</label>
          <input
            type="date"
            value={searchParams.date}
            onChange={(e) => setSearchParams({ ...searchParams, date: e.target.value })}
            className="w-full bg-flipboard-dark text-flipboard-cream border-2 border-flipboard-gold p-2 rounded font-retro"
          />
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full flipboard-button"
          >
            🔍 SEARCH
          </button>
        </div>
      </div>
    </form>
  )
}

