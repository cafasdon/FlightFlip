import { useState, useMemo } from 'react'
import { mockFlights } from '../data/mockFlights'
import { formatCurrency } from '../utils/currencyFormatter'
import { calculateCheapestFare } from '../utils/mockDataGenerator'

export default function PriceExplorer({ searchParams }) {
  const [daysWindow, setDaysWindow] = useState(10)

  const priceData = useMemo(() => {
    const days = []
    const today = new Date()

    for (let i = -Math.floor(daysWindow / 2); i <= Math.floor(daysWindow / 2); i++) {
      const date = new Date(today)
      date.setDate(date.getDate() + i)

      // Simulate price variation for each day
      const dayFlights = mockFlights.map((flight) => {
        const variation = Math.sin(i * 0.5) * 0.15 + (Math.random() - 0.5) * 0.1
        const price = flight.price * (1 + variation)
        return { ...flight, price: Math.max(price, flight.price * 0.7) }
      })

      const cheapest = dayFlights.reduce((min, f) => (f.price < min.price ? f : min))

      days.push({
        date: date.toISOString().split('T')[0],
        displayDate: date.toLocaleDateString('pt-BR', { weekday: 'short', month: 'short', day: 'numeric' }),
        price: cheapest.price,
        airline: cheapest.airline,
      })
    }

    return days
  }, [daysWindow])

  const minPrice = Math.min(...priceData.map((d) => d.price))
  const maxPrice = Math.max(...priceData.map((d) => d.price))

  return (
    <div className="space-y-6">
      {/* Window Size Control */}
      <div className="flipboard-card p-6">
        <h3 className="text-xl font-bold text-flipboard-gold mb-4">Price Window</h3>
        <div className="flex gap-4 items-center">
          <input
            type="range"
            min="5"
            max="30"
            value={daysWindow}
            onChange={(e) => setDaysWindow(Number(e.target.value))}
            className="flex-1"
          />
          <span className="text-flipboard-cream font-bold">{daysWindow} days</span>
        </div>
      </div>

      {/* Price Chart */}
      <div className="flipboard-card p-6">
        <h3 className="text-xl font-bold text-flipboard-gold mb-6">Daily Prices</h3>

        <div className="space-y-3">
          {priceData.map((day) => {
            const percentage = ((day.price - minPrice) / (maxPrice - minPrice)) * 100
            const isToday = day.date === new Date().toISOString().split('T')[0]

            return (
              <div key={day.date} className={`${isToday ? 'bg-flipboard-gold bg-opacity-10' : ''} p-3 rounded`}>
                <div className="flex justify-between items-center mb-2">
                  <span className={`font-bold ${isToday ? 'text-flipboard-gold' : 'text-flipboard-cream'}`}>
                    {day.displayDate}
                  </span>
                  <span className="text-flipboard-teal font-bold">{day.airline}</span>
                  <span className="text-flipboard-gold font-bold">{formatCurrency(day.price)}</span>
                </div>
                <div className="w-full bg-flipboard-dark rounded h-2 overflow-hidden border border-flipboard-gold">
                  <div
                    className="bg-flipboard-gold h-full transition-all"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-flipboard-gold">
          <div className="text-center">
            <p className="text-flipboard-cream text-xs">Cheapest</p>
            <p className="text-flipboard-gold font-bold text-lg">{formatCurrency(minPrice)}</p>
          </div>
          <div className="text-center">
            <p className="text-flipboard-cream text-xs">Average</p>
            <p className="text-flipboard-gold font-bold text-lg">
              {formatCurrency(priceData.reduce((sum, d) => sum + d.price, 0) / priceData.length)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-flipboard-cream text-xs">Most Expensive</p>
            <p className="text-flipboard-gold font-bold text-lg">{formatCurrency(maxPrice)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

