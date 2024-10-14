import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { useContext } from 'react'
import { EditvaducontextProvider } from './context/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EditvaducontextProvider>
      <App />
    </EditvaducontextProvider>
  </StrictMode>,
)
