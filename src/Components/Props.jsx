/* eslint-disable react/prop-types */

import { useState } from "react"


// eslint-disable-next-line no-unused-vars
const Props = ({getValue, setValue}) => {

   const [data, setData]= useState('')

    const handleChange = (e) =>{
    //   const {name, value} = e.target;
    //   setData({...data, [name]:value})
    setData(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        // setValue(e.target.value)
        setValue(data)
    }

    // console.log(data)

    return(
        <div>
        <input type="text" name="name" value={data} onChange={handleChange} placeholder="Enter name"/>
        <button onClick={handleSubmit}>Click</button>
        </div>
    )
}

export default Props