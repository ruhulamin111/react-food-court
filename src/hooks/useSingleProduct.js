import { useEffect, useState } from "react"

const useSingleProduct = id => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/food/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id, item])
    return [item, setItem]
}
export default useSingleProduct;