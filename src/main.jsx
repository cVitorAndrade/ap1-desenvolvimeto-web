import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Questao01A } from './questions/Questao01/Questao01'
import { Questao02 } from './questions/Questao02/Questao02'
import { Questao03 } from './questions/Questao03/questao03'
import { Questao04 } from './questions/Questao04/questao04'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Questao01A />
    <Questao02 />
    <Questao03 />
    <Questao04 /> 
  </StrictMode>,
)
