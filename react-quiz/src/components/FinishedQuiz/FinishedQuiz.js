import React from 'react'
import './FinishedQuiz.css'
import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom'

const FinishedQuiz = props => {

    let styledclasses = {
        'success' : 'success',
        'error': 'error'
    }

    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)
        
 
    return (
        <div className="FinishedQuiz">
            <ul>
                {props.quiz.map((quizItem, index) => {


                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        styledclasses[props.results[quizItem.id]]
                    ]
                    
                    

                    return (
                        <li 
                            key={index} 
                        >
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )

                }) }

            
            </ul>

            <p>Прaвильно {successCount} из {props.quiz.length} </p>

            <div>
                <Button onClick={props.onRetry} type='primary' >Повторить</Button>

                <Link to={'/'}>
                    <Button  type='success' >Перейти в список тестов</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuiz