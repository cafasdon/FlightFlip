import { formatCurrency, formatMiles, calculateMilesValue } from '../utils/currencyFormatter'

export default function FlightCard({ flight }) {
  const milesValue = calculateMilesValue(flight.miles)
  const totalValue = flight.price + milesValue

  const handleBooking = () => {
    // In production, this would open the airline's booking site
    alert(`Booking ${flight.airline} flight ${flight.flightNumber}`)
  }

  return (
    <div className="flipboard-card p-6 hover:shadow-retro-lg transition-all transform hover:scale-105">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-flipboard-gold">{flight.airline}</h3>
          <p className="text-flipboard-cream text-sm font-retro">{flight.flightNumber}</p>
        </div>
        <div className="text-right">
          <p className="text-flipboard-teal text-xs font-bold">
            {flight.stops === 0 ? 'DIRECT' : `${flight.stops} STOP${flight.stops > 1 ? 'S' : ''}`}
          </p>
        </div>
      </div>

      {/* Flight Times */}
      <div className="flex justify-between items-center mb-6 py-4 border-t-2 border-b-2 border-flipboard-gold">
        <div className="text-center">
          <p className="text-2xl font-bold text-flipboard-gold">{flight.departure}</p>
          <p className="text-flipboard-cream text-xs">Departure</p>
        </div>
        <div className="text-center flex-1 px-4">
          <p className="text-flipboard-teal text-xs font-bold">{flight.duration}</p>
          <div className="flex justify-center gap-1 my-1">
            <div className="w-1 h-1 bg-flipboard-gold rounded-full"></div>
            <div className="w-1 h-1 bg-flipboard-gold rounded-full"></div>
            <div className="w-1 h-1 bg-flipboard-gold rounded-full"></div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-flipboard-gold">{flight.arrival}</p>
          <p className="text-flipboard-cream text-xs">Arrival</p>
        </div>
      </div>

      {/* Aircraft Info */}
      <div className="mb-4">
        <p className="text-flipboard-cream text-xs">
          <span className="font-bold">Aircraft:</span> {flight.aircraft}
        </p>
        <p className="text-flipboard-cream text-xs">
          <span className="font-bold">Seats:</span> {flight.seats}
        </p>
      </div>

      {/* Pricing */}
      <div className="bg-flipboard-dark p-4 rounded mb-4 border-2 border-flipboard-gold">
        <div className="flex justify-between items-center mb-2">
          <span className="text-flipboard-cream">Cash Price:</span>
          <span className="text-flipboard-gold font-bold text-lg">{formatCurrency(flight.price)}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-flipboard-cream">Miles:</span>
          <span className="text-flipboard-teal font-bold">{formatMiles(flight.miles)}</span>
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-flipboard-gold">
          <span className="text-flipboard-cream text-sm">Miles Value:</span>
          <span className="text-flipboard-orange font-bold">{formatCurrency(milesValue)}</span>
        </div>
      </div>

      {/* Book Button */}
      <button
        onClick={handleBooking}
        className="w-full flipboard-button"
      >
        🎫 BOOK NOW
      </button>
    </div>
  )
}

