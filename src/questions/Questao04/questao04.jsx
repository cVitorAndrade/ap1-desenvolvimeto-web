import { useEffect, useState } from "react"

export const Questao04 = () => {
    const [paisMaiorPopulacao, setPaisMaiorPopulacao] = useState({})
    const [paisMenorPopulacao, setPaisMenorPopulacao] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    // Criamos a nossa Promise que resolve o array de países
    const getPaises = () => {
        return new Promise((resolve) => {
            const paises = [
                { "capital": ["Dublin"], "population": 4994724 },
                { "capital": ["Nicosia"], "population": 1207361 },
                { "capital": ["Madrid"], "population": 47351567 }
            ]
            resolve(paises)
        })
    }

    const handleResolvePromise = () => {
        getPaises().then(paises => {
            // Reduzimos o array para encontrar o país com maior e menor população
            const paisMaiorPopulacao = paises.reduce((previous, current) =>
                previous.population > current.population ? previous : current
            )
            const paisMenorPopulacao = paises.reduce((previous, current) =>
                previous.population < current.population ? previous : current
            )

            setPaisMaiorPopulacao(paisMaiorPopulacao)
            setPaisMenorPopulacao(paisMenorPopulacao)
            setIsLoading(false) // Indicamos que o carregamento terminou
        })
    }

    useEffect(() => {
        handleResolvePromise()
    }, [])

    return (
        <>
            {isLoading ? (
                <p>Carregando...</p>
            ) : (
                <>
                    <h3>Maior População: {paisMaiorPopulacao.capital[0]} - {paisMaiorPopulacao.population}</h3>
                    <h3>Menor População: {paisMenorPopulacao.capital[0]} - {paisMenorPopulacao.population}</h3>
                </>
            )}
        </>
    )
}
