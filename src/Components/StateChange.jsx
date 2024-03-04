import { useState } from "react";


const StateChange = () => {

    const [val, setVal] = useState('I am a String value')

    const handleClick = () => {
        setVal("I am a new String value")
    }

  console.log(val)
    return (
        <div>
          <button onClick={handleClick}>Click Me!</button>
        </div>
    )
}

export default StateChange;