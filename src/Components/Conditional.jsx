import { useState } from "react";


const Conditional = () => {
  
    const [show, setShow] = useState(false)


    const handleShow = () => {
      setShow(!show)
    }

    console.log(show)
    
    return (
        <div>
           {show && <div>{"I am from India"}</div>}
            <button onClick={handleShow}>{show ? 'Hide' :'Show'}</button>
        </div>
    )
}

export default Conditional;