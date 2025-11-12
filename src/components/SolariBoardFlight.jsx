import { useState, useEffect } from 'react'
import { formatCurrency, formatMiles } from '../utils/currencyFormatter'

export default function SolariBoardFlight({ flight }) {
  const [displayDeparture, setDisplayDeparture] = useState(flight.departure)
  const [displayArrival, setDisplayArrival] = useState(flight.arrival)
  const [displayPrice, setDisplayPrice] = useState(String(Math.floor(flight.price)))
  const [isFlipping, setIsFlipping] = useState(false)

  // Simulate flip animation on mount
  useEffect(() => {
    setIsFlipping(true)
    const timer = setTimeout(() => setIsFlipping(false), 600)
    return () => clearTimeout(timer)
  }, [])

  const SolariDigit = ({ value, isFlipping: flip }) => (
    <div className={`relative w-12 h-16 bg-flipboard-dark border-2 border-flipboard-gold rounded-sm overflow-hidden font-retro font-bold text-2xl flex items-center justify-center text-flipboard-gold ${flip ? 'animate-flip' : ''}`}>
      {value}
    </div>
  )

  const SolariTime = ({ time, isFlipping: flip }) => {
    const [hours, minutes] = time.split(':')
    return (
      <div className="flex gap-1 items-center">
        <SolariDigit value={hours[0]} isFlipping={flip} />
        <SolariDigit value={hours[1]} isFlipping={flip} />
        <div className="text-flipboard-gold font-bold text-2xl">:</div>
        <SolariDigit value={minutes[0]} isFlipping={flip} />
        <SolariDigit value={minutes[1]} isFlipping={flip} />
      </div>
    )
  }

  return (
    <div className="bg-flipboard-dark border-4 border-flipboard-gold p-6 rounded-lg shadow-retro-lg">
      {/* Header - Route */}
      <div className="text-center mb-4 pb-4 border-b-2 border-flipboard-gold">
        <p className="text-flipboard-cream text-sm font-retro">FLIGHT {flight.flightNumber}</p>
        <p className="text-flipboard-gold font-bold text-lg">{flight.airline}</p>
      </div>

      {/* Main Display - Times */}
      <div className="flex justify-between items-center mb-6 py-4">
        <div className="text-center">
          <p className="text-flipboard-cream text-xs mb-2 font-retro">DEPARTURE</p>
          <SolariTime time={displayDeparture} isFlipping={isFlipping} />
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="text-flipboard-teal font-bold text-xs">{flight.duration}</div>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-flipboard-gold rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-flipboard-gold rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-flipboard-gold rounded-full animate-pulse"></div>
          </div>
          <div className="text-flipboard-orange text-xs font-bold">{flight.stops === 0 ? 'DIRECT' : `${flight.stops} STOP`}</div>
        </div>

        <div className="text-center">
          <p className="text-flipboard-cream text-xs mb-2 font-retro">ARRIVAL</p>
          <SolariTime time={displayArrival} isFlipping={isFlipping} />
        </div>
      </div>

      {/* Price Display */}
      <div className="bg-flipboard-navy border-2 border-flipboard-gold p-4 rounded mb-4 text-center">
        <p className="text-flipboard-cream text-xs mb-2 font-retro">PRICE</p>
        <p className="text-flipboard-gold font-bold text-2xl font-retro">{formatCurrency(flight.price)}</p>
      </div>

      {/* Miles Info */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-flipboard-navy border-2 border-flipboard-teal p-3 rounded text-center">
          <p className="text-flipboard-cream text-xs font-retro">MILES</p>
          <p className="text-flipboard-teal font-bold text-lg">{formatMiles(flight.miles)}</p>
        </div>
        <div className="bg-flipboard-navy border-2 border-flipboard-orange p-3 rounded text-center">
          <p className="text-flipboard-cream text-xs font-retro">AIRCRAFT</p>
          <p className="text-flipboard-orange font-bold text-xs">{flight.aircraft}</p>
        </div>
      </div>

      {/* Book Button */}
      <button className="w-full bg-flipboard-gold text-flipboard-dark font-bold py-3 rounded shadow-retro hover:shadow-retro-lg transition-all font-retro">
        🎫 BOOK
      </button>
    </div>
  )
}

