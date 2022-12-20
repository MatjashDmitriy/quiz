import React from 'react'
import './Input.css'


function isInvalid({valid, touched, shodValidete}) {
    return !valid && shodValidete && touched 
}

const Input = props => {

    let classes = {
        'Input':'Input',
        'label':'label',
        'input':'input',
        'span':'span',
        'invalid':'invalid'
    }

    const inputType = props.type || 'text'
    const cls = [classes.Input]


    const htmlFor = `${inputType}-${Math.random()}`

    if (isInvalid(props)) {
        cls.push(classes.invalid)
    }

    return (
        <div  className={cls.join(' ')} >
            <label  htmlFor={htmlFor} >{props.label}</label>
            <input  
                type={inputType} 
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />

            {
                isInvalid(props) 
                ?   <span>{props.errorMessage} </span> 
                : null
            }

          
        </div>
    )
}

export default Input