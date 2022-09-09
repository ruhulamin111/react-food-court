import { useEffect, useState } from "react"

const useSingleProduct = id => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch(`https://glacial-brook-87330.herokuapp.com/food/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id, item])
    return [item, setItem]
}
export default useSingleProduct;