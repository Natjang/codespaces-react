import {useState} from "react";
import {useRef} from "react";
import {useEffect} from "react";

function Item({name,isPacked}){
 if(isPacked)
 {
    return (<li>{name} ! </li>);
 }
 return (<li>{name}  </li>);
}
function Item1({name,isPacked}){
    return ( isPacked ? <li style={{color:'red'}}>{name}! </li> : <li style={{color:'green'}}>{name} </li> );
   }
export default function Counter(){
    const [keywords,setKeywords] = useState("");
    const items=[{id:0,name:"Battery"},
                 {id:1,name:"Cloth"},
                 {id:2,name:"Jacket"},
                 {id:3,name:"Sunglass"}]
    const  i = items.filter(it=>it.name.toLowerCase().match(keywords.toLowerCase()));            
    const  t= i.map((it)=><li key={it.id}><b>{it.name}</b></li>);


    return (
        <>         
        <input type="text" value={keywords} onChange={e=>setKeywords(e.target.value)} />  
        <ol>
            {t}  
        </ol>
        </>
    );

    }
