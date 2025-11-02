import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' // Removed to prevent CORB - styles handled by host
import App from './App.tsx'
// Import Tailwind CSS styles

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
