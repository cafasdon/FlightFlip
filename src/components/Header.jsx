export default function Header({ onSettingsClick }) {
  return (
    <header className="bg-flipboard-navy border-b-4 border-flipboard-gold shadow-retro-lg">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="flipboard-title">✈️ FLIGHTFLIP</h1>
            <p className="flipboard-subtitle mt-2">1960s Airport Flipboard Flight Search</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-flipboard-gold text-sm font-retro">
                {new Date().toLocaleDateString('pt-BR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="text-flipboard-cream text-xs font-retro mt-1">
                {new Date().toLocaleTimeString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
            <button
              onClick={onSettingsClick}
              className="flipboard-button"
              title="Settings"
            >
              ⚙️
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

