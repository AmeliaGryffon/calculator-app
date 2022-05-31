import React from 'react'
import Keypad from './Keypad'
import {evaluate} from 'mathjs'

export default function Calculator(){

    const [expression, setExpression] = React.useState("")

    const expEval= () => {
        setExpression(String(evaluate(expression)))
    }

    const clear = () => {
        setExpression("")
    }

    return (
        <div className='App-header'>
            <div className='calculator-body'>
            <h1 className='display-expression'>{expression}</h1>
            <div>
                <button onClick={expEval}>Evaluate</button>
                <button onClick={clear}>Clear</button>
            </div>
            
            <Keypad setExpression={setExpression} expression={expression}/>
            </div>
        </div>
    )
}