import React, { useState } from "react";
import './Calculadora.css'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Calculadora(){
    const [num, setNum] = useState(0)
    const [oldnum, setOldnum] = useState(0)
    const [operator, setOperator] = useState('')

    function ExibirNum(e){
        const exib = e.target.value
        num===0 ? setNum(exib) : setNum(num+exib)
    }

    function Clear(){
        setNum(0)
    }

    function Porcentage(){
        setNum(num / 100)
    }

    function ChangeSignal(){
        num>0 ? setNum(-num) : setNum(Math.abs(num))
    }

    function OperatorExib(e){
        const operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldnum(num);
        setNum(0);
    }

    function Calculete(){
        if(operator==='/'){
            setNum(oldnum / num)
        }else if (operator==='X'){
            setNum(oldnum * num);
        }else if (operator==='-'){
            setNum(oldnum - num);
        }else if (operator==='+'){
            setNum(parseFloat(oldnum) + parseFloat(num));
        }
    }

    return (
        <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className="wrapper">
                    <Box m={4}></Box>
                    <h2 className="">{}</h2>
                    <h1 className="result">{num}</h1> 
                    <button onClick={Clear}>AC</button>
                    <button onClick={ChangeSignal}>+/-</button>
                    <button onClick={Porcentage}>%</button>
                    <button className="orange" onClick={OperatorExib} value={'/'}>/</button>
                    <button className="gray" onClick={ExibirNum} value={7}>7</button>
                    <button className="gray" onClick={ExibirNum} value={8}>8</button>
                    <button className="gray" onClick={ExibirNum} value={9}>9</button>
                    <button className="orange" onClick={OperatorExib} value={'X'}>X</button>
                    <button className="gray" onClick={ExibirNum} value={4}>4</button>
                    <button className="gray" onClick={ExibirNum} value={5}>5</button>
                    <button className="gray" onClick={ExibirNum} value={6}>6</button>
                    <button className="orange" onClick={OperatorExib} value={'-'}>-</button>
                    <button className="gray" onClick={ExibirNum} value={1}>1</button>
                    <button className="gray" onClick={ExibirNum} value={2}>2</button>
                    <button className="gray" onClick={ExibirNum} value={3}>3</button>
                    <button className="orange" onClick={OperatorExib} value={'+'}>+</button>
                    <button className="gray" onClick={ExibirNum} value={0}>0</button>
                    <button className="gray" onClick={ExibirNum} value={'.'}>.</button>
                    <button onClick={Calculete}>=</button>
                </div>
                <Box m={4}></Box>
        </Container>
        </div>
    )
}
