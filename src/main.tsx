import { ThemeProvider } from '@material-tailwind/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './app/pages/home/Home'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  </StrictMode>,
)
