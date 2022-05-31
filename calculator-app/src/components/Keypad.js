import React from 'react'

export default function Keypad(props){

    return (
        <div>
            <div>
                <button id="first-button" onClick={() => props.setExpression(String(props.expression) + "1")}>1</button>
                <button onClick={() => props.setExpression(String(props.expression) + "2")}>2</button>
                <button onClick={() => props.setExpression(String(props.expression) + "3")}>3</button>
                <button onClick={() => props.setExpression(String(props.expression) + "+")}>+</button>
                <button onClick={() => props.setExpression(String(props.expression) + "-")}>-</button>
            </div>
            <div>
                <button onClick={() => props.setExpression(String(props.expression) + "4")}>4</button>
                <button onClick={() => props.setExpression(String(props.expression) + "5")}>5</button>
                <button onClick={() => props.setExpression(String(props.expression) + "6")}>6</button>
                <button onClick={() => props.setExpression(String(props.expression) + "*")}>*</button>
                <button onClick={() => props.setExpression(String(props.expression) + "%")}>%</button>
            </div>
            <div>
                <button onClick={() => props.setExpression(String(props.expression) + "7")}>7</button>
                <button onClick={() => props.setExpression(String(props.expression) + "8")}>8</button>
                <button onClick={() => props.setExpression(String(props.expression) + "9")}>9</button>
                <button onClick={() => props.setExpression(String(props.expression) + "/")}>/</button>
                <button onClick={() => props.setExpression(String(props.expression) + "^")}>^</button>
            </div>
            <div>
                <button onClick={() => props.setExpression(String(props.expression) + "0")}>0</button>
            </div>
            
        </div>
    )
}