import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import './QrCode.css'
import App from './App.jsx'
import { QrCode } from './QrCode.jsx'
// import { Usercard } from './Usercard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Usercard/> */}
    <QrCode />
  </StrictMode>
)
