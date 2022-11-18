import React, {useState} from 'react';

export function SimpleCounter(){

    const [count, setCount] = useState(0);


    return(
    <div>
    
    <p>has hecho click{count}</p>
    <button onClick={()=> setCount(count +1)}>Has Click </button>
    </div>
    );
}