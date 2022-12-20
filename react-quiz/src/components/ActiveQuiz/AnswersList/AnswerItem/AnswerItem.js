import React from 'react'
import './AnswerItem.css'

const AnswerItem = props => {
    let classes = {
        'success' : 'success',
        'error': 'error'
    }
    
    const cls = ['AnswerItem'] 

    if (props.state) {
        cls.push(classes[props.state])
    }                     


    return (
        <li 
        className={cls.join(" ")}
        onClick={() => props.onAnswerClick(props.answer.id)}
        >
             {props.answer.text}
        </li>
    )
}

export default AnswerItem