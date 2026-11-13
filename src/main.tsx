import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Fontes hospedadas localmente (sem requisições externas, melhor performance)
import '@fontsource-variable/inter'
import '@fontsource/cormorant-garamond/300.css'
import '@fontsource/cormorant-garamond/400.css'
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/600.css'

import App from './App'
import './index.css'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Elemento #root não encontrado no documento.')
}

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
