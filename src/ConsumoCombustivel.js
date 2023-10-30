import { useState } from "react";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from 'recharts';

const ConsumoCombustivel = () => {

    const [data, setData] = useState([]);
    const [inputKm, setInputKm] = useState("");
    const [inputFuel, setInputFuel] = useState("");
    

    const HandleInputKm = (event) => {
        setInputKm(event.target.value);
        if (inputKm) {
            //console.log(inputKm);
            setData([...data, {km:inputKm, fuel:inputFuel}]);
            //console.log(data);
        }
    }

    const HandleInputFuel = (event) => {
        setInputFuel(event.target.value);
        if (inputFuel) {
            //console.log( inputFuel);
            setData([...data, {km:inputKm, fuel:inputFuel}]);
            //console.log(data);
        }
    }

    const ResetGraph = () => {
        setInputKm("");
        setInputFuel("");
        setData([]);
        //console.log(data);   
    }

    return (
        <div>
            <h1>Consumo de Combustível</h1>
            <div>
                <p>Insere o número de quilómetros efetuados!
                    <input value={inputKm} onChange={HandleInputKm}></input> 
                </p>
                <p>Insere a quantidade de combustível gasto!
                <input value={inputFuel} onChange={HandleInputFuel}></input> 
                </p>
                <button onClick={ResetGraph}>Reset</button>
            </div>
            <div style={{padding: 20}}>
                <h2>Dados de consumo</h2>
                
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} width={400} height={400}>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="km"  />
                    <YAxis dataKey="fuel"  />
                    <Area dataKey="fuel" fill="green" stroke="green" name="Consumo de Combustível" />
                </AreaChart>
                
                
                <p>{inputKm} {inputFuel}</p>
            </div>
        </div>
    )
}
export default ConsumoCombustivel;