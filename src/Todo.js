import react from "react";

const Todo =(props)=>{
    
    return( <>
    <button onClick={() =>{props.onSelect(props.id)}}>X</button>
    <li>{props.item}</li>
    </>
    )

}
export default Todo