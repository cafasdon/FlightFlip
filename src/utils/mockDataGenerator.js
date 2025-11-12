import { mockFlights } from '../data/mockFlights'

/**
 * Generate varied mock flight data to simulate fresh results
 * Slightly varies prices and times
 */
export function generateVariedFlights() {
  return mockFlights.map((flight) => {
    // Vary price by ±5%
    const priceVariation = (Math.random() - 0.5) * 0.1 * flight.price
    const newPrice = Math.max(flight.price + priceVariation, flight.price * 0.8)

    // Vary miles by ±3%
    const milesVariation = (Math.random() - 0.5) * 0.06 * flight.miles
    const newMiles = Math.max(Math.round(flight.miles + milesVariation), flight.miles * 0.9)

    // Vary departure time by ±15 minutes
    const timeVariation = Math.floor((Math.random() - 0.5) * 30)
    const [hours, minutes] = flight.departure.split(':').map(Number)
    const newMinutes = Math.max(0, Math.min(59, minutes + timeVariation))
    const newHours = hours + Math.floor((minutes + timeVariation) / 60)
    const newDeparture = `${String(newHours % 24).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`

    return {
      ...flight,
      price: Math.round(newPrice * 100) / 100,
      miles: newMiles,
      departure: newDeparture,
    }
  })
}

/**
 * Calculate the cheapest fare in a date range
 */
export function calculateCheapestFare(flights, days = 10) {
  if (flights.length === 0) return null

  const cheapest = flights.reduce((min, flight) => {
    return flight.price < min.price ? flight : min
  })

  return {
    price: cheapest.price,
    airline: cheapest.airline,
    date: new Date().toISOString().split('T')[0],
  }
}

/**
 * Cache results with timestamp
 */
export function createCache() {
  const cache = new Map()

  return {
    get: (key) => {
      const item = cache.get(key)
      if (!item) return null

      // Cache expires after 5 minutes
      if (Date.now() - item.timestamp > 5 * 60 * 1000) {
        cache.delete(key)
        return null
      }

      return item.value
    },
    set: (key, value) => {
      cache.set(key, {
        value,
        timestamp: Date.now(),
      })
    },
    clear: () => cache.clear(),
  }
}

