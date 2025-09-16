import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataProvider } from '../src/context/Datacontext.jsx'
import { CartProvider } from '../src/context/Cartcontext.jsx'
import { WishlistProvider } from '../src/context/Wishlistcontext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </DataProvider>
  </StrictMode>,
)
