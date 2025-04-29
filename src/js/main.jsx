import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'

import Home from './components/Home.jsx'
import Game from './components/Game.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)
