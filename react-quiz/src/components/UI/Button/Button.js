import React from 'react'
import './Button.css'

const Button = props => {

    let classes = {
        'Button':'Button',
        'focus':'focus',
        'active':'active',
        'disabled':'disabled',
        'error':'error',
        'success':'success',
        'primary':'primary'
    }


    const cls = [
        classes.Button,
        classes[props.type]
    ]

    return (
        <button
            onClick={props.onClick}
            className={cls.join(' ')}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button