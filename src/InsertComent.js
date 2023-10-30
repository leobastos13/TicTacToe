import { useState } from "react";

const InsertComent = (props) => {

    const [text, setText] = useState("");



    const StateComent = (event) => {
        //console.log(event.target.value);
        setText(event.target.value);
    }

    return (
        <div>
            <h1>Insert Comment</h1>
            <textarea
                rows="4" 
                cols="50" 
                onChange={StateComent}
              >
            </textarea>
            <button onClick={() => {props.coment(text)}}>Submit</button>
            <br></br>
           
        </div>
    )
}
export default InsertComent;