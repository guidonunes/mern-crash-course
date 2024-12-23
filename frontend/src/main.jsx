
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { PrimeReactProvider } from 'primereact/api';

createRoot(document.getElementById('root')).render(
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>

)
