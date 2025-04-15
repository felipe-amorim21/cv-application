import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PersonalInfoForm from './components/PersonalInfoForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonalInfoForm />
  </StrictMode>,
)
