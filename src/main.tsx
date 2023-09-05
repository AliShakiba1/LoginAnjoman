
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './app/pages/home/Home'
import './index.css'
import MainPage from './routes/MainPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
      <MainPage />
    
  </StrictMode>,
)
