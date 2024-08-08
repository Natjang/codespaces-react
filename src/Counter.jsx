import { useState } from 'react';
import './Counter.css';


function Item({name, isPacked}) {
    if (isPacked) {

        return (
                <li style={{color:'green'}}> {name} ✓ </li>
        );

    }
    return (<li style={{color:'red'}}>{name} X </li>);

}
export default function Counter() {
    const item = ['Battery','Cloth','Sunglass','Hat','Underwear'];
    const [count, setCount] = useState(10);
    const [value, setValue] = useState("Type here =>");
    //const OnTextChange=event=>{setValue(event.target.value);

    return (<>
    <ol>
        <Item name = "Battery" isPacked={false} /> 
        <Item name = "Cloth" isPacked={true}/> 
        <Item name = "Sunglass"/> 
        <Item name = "Hat" isPacked={true}/> 
        <Item name = "Underwear"/> 
    </ol>
        
    <button onClick={() => setCount(count + 1)}> Click me </button>
        <button onClick={() => setCount(0)}> Reset </button>
        <p> You clicked {count} times </p>

        <input
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)} />
        <p> You type value {value} length {value.length} </p>
    </>);

}