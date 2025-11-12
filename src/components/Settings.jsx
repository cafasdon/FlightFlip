import { useState } from 'react'

export default function Settings({ isOpen, onClose }) {
  const [settings, setSettings] = useState({
    autoRefresh: true,
    refreshInterval: 10,
    mockMode: true,
    showMilesValue: true,
    currency: 'BRL',
  })

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="flipboard-card p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="flipboard-title">⚙️ SETTINGS</h2>
          <button
            onClick={onClose}
            className="text-flipboard-gold text-2xl hover:text-flipboard-orange"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          {/* Auto Refresh */}
          <div className="flex items-center justify-between p-3 bg-flipboard-dark rounded border border-flipboard-gold">
            <label className="text-flipboard-cream font-bold">Auto Refresh</label>
            <input
              type="checkbox"
              checked={settings.autoRefresh}
              onChange={() => handleToggle('autoRefresh')}
              className="w-5 h-5 cursor-pointer"
            />
          </div>

          {/* Refresh Interval */}
          {settings.autoRefresh && (
            <div className="p-3 bg-flipboard-dark rounded border border-flipboard-gold">
              <label className="text-flipboard-cream font-bold block mb-2">
                Refresh Interval: {settings.refreshInterval} min
              </label>
              <input
                type="range"
                min="1"
                max="60"
                value={settings.refreshInterval}
                onChange={(e) => handleChange('refreshInterval', Number(e.target.value))}
                className="w-full"
              />
            </div>
          )}

          {/* Mock Mode */}
          <div className="flex items-center justify-between p-3 bg-flipboard-dark rounded border border-flipboard-gold">
            <label className="text-flipboard-cream font-bold">Mock Mode</label>
            <input
              type="checkbox"
              checked={settings.mockMode}
              onChange={() => handleToggle('mockMode')}
              className="w-5 h-5 cursor-pointer"
            />
          </div>

          {/* Show Miles Value */}
          <div className="flex items-center justify-between p-3 bg-flipboard-dark rounded border border-flipboard-gold">
            <label className="text-flipboard-cream font-bold">Show Miles Value</label>
            <input
              type="checkbox"
              checked={settings.showMilesValue}
              onChange={() => handleToggle('showMilesValue')}
              className="w-5 h-5 cursor-pointer"
            />
          </div>

          {/* Currency */}
          <div className="p-3 bg-flipboard-dark rounded border border-flipboard-gold">
            <label className="text-flipboard-cream font-bold block mb-2">Currency</label>
            <select
              value={settings.currency}
              onChange={(e) => handleChange('currency', e.target.value)}
              className="w-full bg-flipboard-navy text-flipboard-cream border border-flipboard-gold p-2 rounded"
            >
              <option value="BRL">Brazilian Real (R$)</option>
              <option value="USD">US Dollar ($)</option>
              <option value="EUR">Euro (€)</option>
            </select>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={onClose}
          className="w-full flipboard-button mt-6"
        >
          ✓ SAVE SETTINGS
        </button>
      </div>
    </div>
  )
}

