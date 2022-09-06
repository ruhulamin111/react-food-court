import { useEffect, useState } from "react"

const useProducts = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [meals])

    return [meals, setMeals]
}

export default useProducts;