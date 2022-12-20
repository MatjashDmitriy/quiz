import React from "react"
import './Backdrop.css'

let classes = {
    'Backdrop': 'Backdrop'
}

const Backdrop = props => <div className={classes.Backdrop} onClick={props.onClick} />


export default Backdrop