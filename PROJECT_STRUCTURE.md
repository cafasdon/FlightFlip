# FlightFlip Project Structure

## Directory Layout

```
flightflip/
├── .github/                          # GitHub configuration
│   ├── CONTRIBUTING.md              # Contribution guidelines
│   ├── ISSUE_TEMPLATE/              # Issue templates
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── pull_request_template.md     # PR template
│
├── src/
│   ├── components/                  # React components
│   │   ├── SearchForm.jsx          # Flight search form
│   │   ├── FlightBoard.jsx         # Main flight results board
│   │   ├── PromotionsBoard.jsx     # Promotions section
│   │   ├── PriceExplorer.jsx       # 10-day price explorer
│   │   ├── AirlineLogoImg.jsx      # Logo display component
│   │   └── SettingsDrawer.jsx      # Miles settings
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── useAutoRefresh.js       # Auto-refresh logic
│   │   ├── useFlightSearch.js      # Flight search state
│   │   └── useMilesEstimator.js    # Miles calculation
│   │
│   ├── utils/                       # Utility functions
│   │   ├── airlineLinks.js         # Booking URL builders
│   │   ├── currencyFormatter.js    # BRL formatting
│   │   ├── dateUtils.js            # Date helpers
│   │   ├── milesCalculator.js      # Miles estimation
│   │   └── mockDataGenerator.js    # Mock flight data
│   │
│   ├── data/                        # Constants and mock data
│   │   ├── airlines.js             # Airline info
│   │   ├── airports.js             # Airport database
│   │   ├── mockFlights.js          # Mock flight data
│   │   └── mockPromotions.js       # Mock promotions
│   │
│   ├── assets/
│   │   ├── logos/                  # Airline logos (SVG/PNG)
│   │   │   ├── latam.svg
│   │   │   ├── gol.svg
│   │   │   ├── azul.svg
│   │   │   ├── avianca.svg
│   │   │   ├── tap.svg
│   │   │   └── placeholder.svg
│   │   └── styles/
│   │       └── flipboard.css       # Flipboard animations
│   │
│   ├── App.jsx                     # Main app component
│   ├── App.css                     # App styles
│   ├── index.css                   # Global styles
│   └── main.jsx                    # Entry point
│
├── public/                          # Static assets
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── SETUP_GITHUB.md                 # GitHub setup guide
└── PROJECT_STRUCTURE.md            # This file
```

## Component Responsibilities

### SearchForm
- Airport autocomplete inputs
- Date pickers
- One Way / Round Trip toggle
- Price Explorer controls
- Search button

### FlightBoard
- Display flight results
- Sort by price/miles
- Flipboard animations
- Click to book functionality
- Airline logos and details

### PromotionsBoard
- Show current promotions
- Highlight best deals
- Display validity dates
- Link to booking

### PriceExplorer
- Mini bar chart visualization
- Price variations ±10 days
- Highlight lowest fare
- "Go to this date" button

### SettingsDrawer
- Miles per 1000 BRL setting
- Loyalty program selection
- MaxMilhas link

## Data Flow

1. User enters search criteria in SearchForm
2. Search triggers flight data fetch (mock or real API)
3. FlightBoard displays results sorted by price
4. PromotionsBoard shows relevant deals
5. PriceExplorer shows price variations
6. Auto-refresh updates data every 10 minutes
7. User clicks flight → opens airline booking site

## Key Features Implementation

### Auto-Refresh
- `useAutoRefresh` hook manages 10-minute intervals
- Pauses when tab is hidden (Page Visibility API)
- Diff-aware updates with animations

### Miles Estimation
- `useMilesEstimator` hook calculates miles
- Configurable BRL-per-1000-miles reference
- Preset loyalty program values

### Airline Deep Links
- `airlineLinks.js` builds booking URLs
- Pre-fills origin, destination, dates
- Supports one-way and round-trip

## Styling

- **Framework**: TailwindCSS
- **Color Palette**: 1960s inspired
  - Background: #0F1115 (charcoal)
  - Accents: #C8A96A (brass/gold)
  - Text: #F8F6ED (ivory)
- **Animations**: Flipboard transitions
- **Responsive**: Mobile-first design

## Development Tips

- Use `npm run dev` for hot reload
- Check browser console for errors
- Test with different screen sizes
- Verify airline links work correctly
- Test auto-refresh behavior

