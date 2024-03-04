import { useState } from "react";


const Main1 = () => {

    const [input, setInput] = useState({
        name:'',
        email:'',
        password:'',
    })

const handleChange = (e) =>{
   const {name, value} = e.target;
   setInput({...input, [name] : value});
}

const handleSubmit = (e) =>{
    e.preventDefault()
    try{
        setInput(input)

    } catch(err){
        console.log(err);
    }
}

console.log(input)
    return (
        
        <div>
           {/* <form onSubmit={handleSubmit}> */}
           <input type="text" name='name' value={input.name} onChange={handleChange} placeholder="Enter the name" />
            <input type="email" name='email' value={input.email} onChange={handleChange} placeholder="Enter the Email ID" />
            <input type="password" name='password' value={input.password} onChange={handleChange} placeholder="Enter the Password" />
            <button onClick={handleSubmit}>Submit</button>
           {/* </form> */}
        </div>
    )
}

export default Main1;