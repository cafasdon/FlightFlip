# FlightFlip Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/flightflip.git
cd flightflip
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open http://localhost:5173 in your browser. You should see the Vite + React welcome page.

### 4. Start Building!

The project is ready for development. Here's what to do next:

## 📁 Key Files to Know

- **`src/App.jsx`** - Main app component (start here!)
- **`src/components/`** - React components (create new ones here)
- **`src/utils/`** - Helper functions
- **`src/data/`** - Mock data and constants
- **`tailwind.config.js`** - TailwindCSS configuration
- **`vite.config.js`** - Vite configuration

## 🎨 Styling with TailwindCSS

The project uses TailwindCSS. Add classes directly to JSX:

```jsx
<div className="bg-gray-900 text-white p-4 rounded-lg">
  Hello FlightFlip!
</div>
```

## 📝 Making Your First Component

Create a new file in `src/components/`:

```jsx
// src/components/MyComponent.jsx
export default function MyComponent() {
  return (
    <div className="p-4 bg-blue-500 text-white">
      My First Component
    </div>
  );
}
```

Import and use it in `App.jsx`:

```jsx
import MyComponent from './components/MyComponent';

function App() {
  return <MyComponent />;
}
```

## 🔄 Git Workflow

```bash
# Create a feature branch
git checkout -b feature/my-feature

# Make changes and commit
git add .
git commit -m "feat: add my feature"

# Push to GitHub
git push origin feature/my-feature

# Create a Pull Request on GitHub
```

## 📚 Useful Commands

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Format code (if configured)
npm run format
```

## 🎯 Next Steps

1. Read `PROJECT_STRUCTURE.md` to understand the layout
2. Check `IMPLEMENTATION_ROADMAP.md` for tasks
3. Look at `SETUP_GITHUB.md` for collaboration setup
4. Start with Phase 1 tasks in the roadmap

## 💡 Tips

- Use `npm run dev` for hot reload (changes appear instantly)
- Check browser console (F12) for errors
- TailwindCSS classes are autocompleted in most editors
- Keep components small and focused
- Test on mobile using DevTools

## 🤝 Collaborating

When your friend joins:

1. They clone the repo
2. They create a feature branch
3. They make changes and push
4. They create a Pull Request
5. You review and merge

See `.github/CONTRIBUTING.md` for detailed guidelines.

## ❓ Need Help?

- Check the README.md for project overview
- Look at existing components for examples
- Read the CONTRIBUTING.md guidelines
- Open an issue on GitHub

Happy coding! ✈️

