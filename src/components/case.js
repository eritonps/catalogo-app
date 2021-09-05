import React from 'react'
import './case.css'

const Case = (props)=>{
    return(
        <div className="col text-center">
            <img className="img-fluid" src={props.image_url} alt=""/>
            <p className="name">{props.name}</p>
            <p className="price">{props.price}</p>
        </div>
    )
}

export default Case