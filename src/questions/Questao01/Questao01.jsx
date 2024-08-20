import { useEffect, useState } from "react"

export const Questao01A = () => {
  const lista = [
    { a: 10, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 9, c: 40 },
  ]
  return (
    // Chamamos o componente com o nosso valor para que lide com o valor dentro dele
    <Questao01B 
      lista={lista}
    />
  )
}

export function Questao01B ({ lista }) {
  const [filteredValues, setFilteredValues] = useState([])
  
  useEffect(() => {
    // Encontrando o maior valor de cada objeto
    const newValues = lista.map(objeto => {
      // Retornamos para nosso novo array somente o maior valor do objeto
      return Math.max(objeto.a, objeto.b, objeto.c);
    });

    setFilteredValues(newValues)
  }, []);

  return (
    <ul>
      {
        // Para cada elemento imprimos seu valor, e qual a ordem seu objeto
        filteredValues.map((item, i) => (
          <li
            key={i}
          >
            Maior valor do objeto {i + 1} é: { item }
          </li>
        ))
      }
    </ul>
  )
}