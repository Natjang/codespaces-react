import {useRef,useState} from "react";


export default function Form(){
    const inputRef = useRef(null);
    const H_InputRef = useRef(null);
    const W_InputRef= useRef(null);
    const [BMI,setBMI]= useState(0.0);
    let BMItext="";
    if (BMI>30) BMItext ="FAT";
    else BMItext ="NORMAL";
    const [name,setname]=useState("");
return(<>
    <h2>BMI calculation</h2>
    Weight :<input type ="Text" ref =
    {W_InputRef}/> KG.<br/><br/>
    Height :<input type ="Text" ref =
    {H_InputRef}/> CM.<br/><br/>
     
    <button onClick={()=>
    {
        let W=W_InputRef.current.value;
        let H=H_InputRef.current.value/100;
        setBMI(W/(H*H));
    }
}>Calculate</button>
    <h1>BMI ={BMI}</h1>
    <h1>Status ={BMItext}</h1>


</>);


}