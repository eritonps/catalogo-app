import React from 'react'
import './addCase.css'


const AddCase = () => {


    function addNewCase() {
        
    }

    return (
        <div>
            <form onSubmit={addNewCase}>
                <label>Titulo:</label>
                <input type="text" id="title" name="title" />

                <label>Descrição:</label>
                <input type="text" id="description" name="description" />

                <label>Imagem(url):</label>
                <input type="text" id="img-url" name="img-url" />

                <button type="submit">Enviar</button>
            </form>
        </div>
    )


}

export default AddCase
