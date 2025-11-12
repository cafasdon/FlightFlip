import { mockPromotions } from '../data/mockFlights'

export default function PromotionsBoard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockPromotions.map((promo) => (
        <div key={promo.id} className="flipboard-card p-6 hover:shadow-retro-lg transition-all">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-flipboard-gold mb-2">{promo.title}</h3>
            <p className="text-flipboard-cream text-sm">{promo.description}</p>
          </div>

          {/* Discount/Bonus Badge */}
          <div className="bg-flipboard-gold text-flipboard-dark p-4 rounded mb-4 text-center">
            {promo.discount && (
              <p className="text-3xl font-bold">
                {promo.discount}% OFF
              </p>
            )}
            {promo.bonus && (
              <p className="text-3xl font-bold">
                {promo.bonus}x MILES
              </p>
            )}
          </div>

          {/* Valid Until */}
          <div className="mb-4 p-3 bg-flipboard-dark border-2 border-flipboard-teal rounded">
            <p className="text-flipboard-cream text-xs">
              <span className="font-bold">Valid Until:</span>
            </p>
            <p className="text-flipboard-teal font-bold">
              {new Date(promo.validUntil).toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Routes */}
          <div className="mb-4">
            <p className="text-flipboard-cream text-xs font-bold mb-2">APPLICABLE ROUTES:</p>
            <div className="flex flex-wrap gap-2">
              {promo.routes.map((route, idx) => (
                <span
                  key={idx}
                  className="bg-flipboard-navy text-flipboard-gold text-xs px-2 py-1 rounded border border-flipboard-gold"
                >
                  {route}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full flipboard-button">
            🎁 CLAIM OFFER
          </button>
        </div>
      ))}
    </div>
  )
}

