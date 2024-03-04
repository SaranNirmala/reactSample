import { useState } from "react"


const Main = () => {

    const [data, setData] = useState(0)

     const handleIncrementClick = () => {
          if(data < 10)
          {
            setData(data+1);
          } else {
            console.log("You reached the limit")
          }
     }

     const handleDecrementClick = () => {
        if(data > 0){
            setData(data-1);
        } else{
            console.log('Cannot decrease')
        }
     }
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={handleIncrementClick}>Increament</button>
            <button onClick={handleDecrementClick}>Decreament</button>
        </div>
    )
}

export default Main;