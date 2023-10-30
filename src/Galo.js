import React from 'react';
import {useState} from 'react';
import { useEffect } from 'react';
import './Galo.css'; 
import Result from './Result';

const Galo = () => {

    const [board, setBoard] = useState(Array(9).fill(""));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [winner, setWinner] = useState(null);

    const CellClick = (cell) => {
        if (winner) {
            //console.log("Jogo finalizado")
            return null;
        }

        let newBoard = [];

        for (let i = 0; i < board.length; i++) {
            if (cell === i) {
                if (board[i] === "") {
                    if (currentPlayer === "X") {
                        setCurrentPlayer("O");  
                    } else {
                        setCurrentPlayer("X");
                    }
                    newBoard.push(currentPlayer); 
                } else {
                    return alert('This cell is already occupied!');
                }   
            } else {
                newBoard.push(board[i]);
            }
        }
        setBoard(newBoard);   
    }

    const checkWinner = () => {
        let wins = [
            [board[0], board[1], board[2]],
            [board[3], board[4], board[5]],
            [board[6], board[7], board[8]],
            [board[0], board[3], board[6]],
            [board[1], board[4], board[7]],
            [board[2], board[5], board[8]],
            [board[0], board[4], board[8]],
            [board[2], board[4], board[6]]
        ]

        wins.forEach(cells => {
            if (cells.every(cell => cell === "O")) {
                setWinner("O");
                console.log("O venceu");
            }
            if (cells.every(cell => cell === "X")) {
                setWinner("X");
                console.log("X venceu");
            }
        })
        checkDraw();
    }

    const checkDraw = () => {
        if (board.every(cell => cell !== "")) {
            setWinner(`Empatou`);
        }
    }

    useEffect(checkWinner, [board]);

    const Reset = () => {
        setCurrentPlayer(currentPlayer);
        setBoard(["", "", "", "", "", "", "", "", ""]);
        setWinner(null);
    }

    const Message = () => {
        if (winner === "Empatou") {
            return <h3> Empate!</h3>;
        } else  {
            return <h3>Ganhou o {winner}!</h3>
        }
    }

    return (
        <div className='div_galo'>
            <h1>Jogo do Galo</h1>
            <div className='board'>
                {board.map((item, index) => (
                    <div 
                        key={index}
                        className={`cell ${item}`}
                        onClick={() => CellClick(index)}
                    > {item}
                    </div> 
                ))}         
            </div>
            {winner &&
            <div className='winner'>
                <span className= {winner}>
                    
                    <Result result = {Message}></Result>
                    <button className='button' onClick={Reset}>Start Again</button>
                </span>
            </div>
            }
        </div>
        
    )
} 
export default Galo;