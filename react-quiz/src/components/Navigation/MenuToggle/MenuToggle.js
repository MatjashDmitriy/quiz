import React from 'react'
import './MenuToggle.css'

const MenuToggle = props => {
    let classes = {
        'MenuToggle': 'MenuToggle',
        'hover':'hover',
        'open':'open'
    }

    const cls = [
        classes.MenuToggle,
        'fa'
    ]

    if (props.isOpen) {
        cls.push('fa-times')
        cls.push(classes.open)
    }  else {
        cls.push('fa-bars')
    }

    return (
        <i 
            className={cls.join(' ')}
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle