import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CarritoApp } from './CarritoApp'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <CarritoApp />
    </StrictMode>
  </BrowserRouter>,
)
