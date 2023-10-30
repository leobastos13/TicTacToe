import { useState} from 'react';
import Aumentar from './Aumentar';
import Diminuir from './Diminuir';

let Numero = () => {
    let [number, setCount] = useState(0);

    let Sum = () => {
        setCount(number + 1);
    }

    let Sub = () => {
        setCount(number - 1);
    }
    return (
        <div>
            <div style = {{backgroundColor: "blue"}}>{number}</div>
        <Aumentar sum = {Sum}></Aumentar>
        <Diminuir sub = {Sub}></Diminuir>
        </div>
    )
}
export default Numero