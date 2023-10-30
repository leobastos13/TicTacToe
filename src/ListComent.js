import { useState } from "react"
import InsertComent from "./InsertComent"

let ListComent = () => {

    const [coment, setComent] = useState(""); 
    const [comentList, setComentList] = useState(Array());
    console.log(comentList);

    const AddComent = (coment) => {
        setComentList([...comentList, coment]);
    }
    
    const ShowComents = () => {
        return comentList.map((item) => (
            <li>{item}</li>    
        ))
        
    }

    const StateComent = (event) => {
        setComent(event.target.value);
    }

    if (comentList.length > 0) {
        return (
            <div>
                <InsertComent 
                coment = {AddComent}
                state = {StateComent}
                ></InsertComent>
                <ul>
                {ShowComents()}
                </ul>
            </div>  
        ) 
    } else {
        return (
            <div>
                <InsertComent 
                coment = {AddComent}
                state = {StateComent}
            ></InsertComent>
            </div>
        ) 
    } 
}
export default ListComent;
