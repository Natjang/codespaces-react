import { useState} from 'react';

export default function Counter(){
    const [count,setCount]=useState(10);
    const [value,setValue]=useState("Type here =>");
    //const OnTextChange=event=>{setValue(event.target.value);

    

    return(<>
    <h1 onMouseEnter={()=> console.log("enter")} 
        onMouseLeave={()=> console.log("Leave")} 
        >TEST</h1>


    <button onClick={()=>setCount(count+1)}> Click me </button>
    <button onClick={()=>setCount(0)}> Reset </button>    
    <p> You clicked {count} times </p>

    <input
        type="text"
        value={value}
        onChange={(event)=>setValue(event.target.value)}/>
        <p> You type value {value} length {value.length} </p>
    </>);
    
}