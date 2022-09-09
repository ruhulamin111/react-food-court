import { useEffect, useState } from "react"

const useProducts = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        fetch('https://glacial-brook-87330.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [meals])

    return [meals, setMeals]
}

export default useProducts;