import React from 'react'
import './newCase.css'

const NewCase = ()=>{

    function addNewCase(){
        alert('adicionado')
    }

    return(
        <div className="container-add">
            <div className="text-center mb-3">
                <label className="form-label" htmlFor="name">Nome:</label>
                <input className="form-control" type="text" id="name" name="name"/>
            </div>
            
            <div className="text-center mb-3">
                <label className="form-label" htmlFor="img-url">Imagem (url):</label>
                <input className="form-control" type="text" id="img-url" name="img-url"/>
            </div>

            <div className="text-center mb-3">
                <label className="form-label" htmlFor="price">Preço:</label>
                <input className="form-control" type="text" id="price" name="price"/>
            </div>
            
            <div className="text-center mb-3">
                <button className="btn btn-outline-secondary" type="button" onClick={addNewCase} >Adicionar</button>
            </div>
        </div>
    )
}

export default NewCase