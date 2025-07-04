import React, { useState } from 'react'
import toast from "react-hot-toast"
import axios from "axios"

const CategoriesList = () => {
    const [loadingCat, setLoadingCat] = useState(false)
    const [categoriesList,setCategoriesList] = useState([])
    
    const getCategoriesList = async () => {
        try {
            setLoadingCat(true)
            const res = await axios.get(" https://fakestoreapi.com/products/categories")
            setCategoriesList(res.data)
            
        } catch (error) {
            toast.error(error)
        } finally {
            setLoadingCat(false)
        }
    }
  return {loadingCat,getCategoriesList,categoriesList}
}

export default CategoriesList