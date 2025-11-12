# FlightFlip ✈️

An interactive, polished web interface inspired by a 1960s airport flipboard for searching flights, comparing fares in Brazilian Real (R$), and exploring flight prices with estimated miles costs.

## Features

- **Search Form with Autocomplete**: Origin/destination airport search with autocomplete
- **1960s Flipboard Design**: Retro-inspired UI with smooth animations
- **Flight Board**: Display flights sorted by price with airline logos, times, and fares
- **Price Comparison**: Cash prices in BRL and estimated miles costs
- **Promotions Board**: Highlighted current promotions for selected routes
- **10-Day Price Explorer**: Visualize price variations ±10 days from selected date
- **Auto-Refresh**: Background updates every 10 minutes while tab is open
- **Direct Booking**: Click flights to open airline booking sites pre-filled with your search
- **Miles Estimation**: Based on MaxMilhas marketplace reference pricing
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **React 18** with Vite
- **TailwindCSS** for styling
- **Mock Data** (ready for real API integration)

## Getting Started

### Prerequisites

- Node.js 20.11.1 or higher
- npm 10.2.4 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/flightflip.git
cd flightflip

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
flightflip/
├── src/
│   ├── components/        # React components
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   ├── data/             # Mock data and constants
│   ├── assets/
│   │   └── logos/        # Airline logos (SVG/PNG)
│   ├── App.jsx
│   └── main.jsx
├── public/               # Static assets
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Contributing

This project is set up for collaboration. Please:

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add your feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Open a Pull Request

## License

MIT

## Roadmap

- [ ] Real flight data API integration
- [ ] User authentication
- [ ] Saved searches and favorites
- [ ] Price alerts
- [ ] Multi-language support
