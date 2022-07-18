import axios from 'axios'
import React, {useEffect, useState} from 'react'

export const GetPokemons = (url)=>{

    const [data, setData] = useState(undefined)


    useEffect(()=>{

    axios.get(url)
    .then((res)=>{

    console.log(res.data)
    setData(res.data)


    })
    .catch((err)=>{
    
    console.log(err)


    })


    },[url])

return data


}