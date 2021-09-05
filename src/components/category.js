import React from 'react'
import Case from './case'
import './category.css'

const Category = (props) => {

    return (
        <div className="container">
            <p className="text-center fs-2 fw-bold mb-0 color">{props.name}</p>
            <hr className="dropdown-divider"></hr>
            <div className="row row-cols-3 row-cols-xl-6 row-cols-md-5 row-cols-sm-4 ">
                {props.data.map((iten,index) =>(
                    <Case
                    key={index}
                    image_url={iten.image_url}
                    name={iten.name}
                    price={iten.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default Category