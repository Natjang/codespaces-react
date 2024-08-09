import { useLocation, useParams } from "react-router-dom";
export default function Posts() {
    const { id } = useParams();
    const urlstring = new URLSearchParams(useLocation().search);
    const fname =urlstring.get("fname");
    const lname =urlstring.get("lname");
    return (<>You send id: {id} <br/>
    Your name : {fname}{lname}



    </>);
}