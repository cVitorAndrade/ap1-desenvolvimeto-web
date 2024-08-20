import { useEffect, useState } from "react"

export function Questao03 () {
  const [maiorPopulacao, setMaiorPopulacao] = useState()
  const [menorPopulacao, setMenorPopulacao] = useState()

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
      .then(
        (response) => {
          return response.json()
        }
      )
      .then(
        (data) => {
          let indiceMaior = 0;
          let maiorValor = 0;
          
          let menorValor = 0;
          let indiceMenor = 0

          data.forEach((country, index) => { 
            //  Aqui se tivermos um valor de população de maior que o nosso valor atual, o valor atual recebe o novo valor
            if ( country.population > maiorValor ) { 
              maiorValor = country.population 
              indiceMaior = index
            }
            // Nesse trecho fazemos o mesmo do codigo acima agora para uma polução menor, em ambos os códigos armazenamos os valores dos indices das capitais
            if ( country.population < menorValor ) { 
              menorValor = country.population 
              indiceMenor = index
            }
          })

          // Definfimos os valores de maior e menor população
          setMaiorPopulacao(data[indiceMaior].capital[0])
          setMenorPopulacao(data[indiceMenor].capital[0])
        })
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h2 style={{ color: "green"}}>Maior população: { maiorPopulacao }</h2>
      <h2 style={{ color: "firebrick"}}>Menor população: { menorPopulacao }</h2>
    </div>
  )
}