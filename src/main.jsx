import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataProvider } from '../src/context/Datacontext.jsx'
import { CartProvider } from '../src/context/Cartcontext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <CartProvider>
        <App />
        </CartProvider>
    </DataProvider>
  </StrictMode>,
)
