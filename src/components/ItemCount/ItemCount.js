import { useState } from "react";
import "./ItemCount.css"

const ItemCount = (props) => {
    const [myState, setMyState] =useState(props.initial);

    const decrement = () =>{
        if (myState>props.initial){
            setMyState(myState - 1)
        }
    }

    const increment = () =>{
        if(myState<parseInt(props.stock)){
            setMyState(myState + 1)
        }
    }

    return(
        <div id="contenedor">
            <div id="num">
                <button onClick={decrement}>-</button>
                <p>{myState}</p>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={() => props.onAdd(myState)} id="agregar">Agregar</button>
        </div>
    )
}

export default ItemCount