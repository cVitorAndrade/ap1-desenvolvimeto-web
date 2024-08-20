import { useState } from "react"

export function Questao02 () {
  // estado que verifica se o pokemon está de frente ou não
  const [isFront, setIsFront] = useState(true)

  return (
    <div>
      {/* Aqui fazemos um ternário dentro da url, colocando, ou não na url o valor "/back", assim alternando entre a posição do pokemon  */}
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon${!isFront ? "/back" : ""}/25.png`} alt="" />
      
      {/* Botão que inverte o valor do estado, mudando assim a posição do pokemon */}
      <button
        onClick={() => setIsFront(prev => !prev)}
      >
        virar
      </button>
    </div>
  )
}