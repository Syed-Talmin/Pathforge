import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RoadmapProvider from './context/RoadmapProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoadmapProvider>
      <App />
    </RoadmapProvider>
  </StrictMode>,
)
