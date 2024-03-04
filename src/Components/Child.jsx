/* eslint-disable react/prop-types */


const Child = ({getValue}) =>{

    console.log("i am child", getValue)
    return(
        <div>
            <h1>{getValue}</h1>
        </div>
    )
}

export default Child