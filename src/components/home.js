import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="container">
            <div className="row row-cols-3 row-cols-md-4 g-2">
                <div class="col">
                    <Link to="/lancamentos"><img className="img-fluid" alt="icon" src="https://i.ibb.co/0rnnPVQ/lancamentos.png"/></Link>
                </div>
                <div class="col">
                    <Link to="/comnome"><img className="img-fluid" alt="icon" src="https://i.ibb.co/nsp10kH/comnome.png"/></Link>
                </div>
                <div class="col">
                    <Link to="/delicadas"><img className="img-fluid" alt="icon" src="https://i.ibb.co/z6ZbFht/delicadas.png"/></Link>
                </div>
                <div class="col">
                    <Link to="/foto"><img className="img-fluid" alt="icon" src="https://i.ibb.co/CPcsLD6/foto.png"/></Link>
                </div>
                <div class="col">
                    <Link to="/signos"><img className="img-fluid" alt="icon" src="https://i.ibb.co/hWChJ6j/signo.png"/></Link>
                </div>
                <div class="col">
                    <Link to="/pets"><img className="img-fluid" alt="icon" src="https://i.ibb.co/vQWksY8/pets.png"/></Link>
                </div>
                <div class="col">
                    <Link to="/masculinas"><img className="img-fluid" alt="icon" src="https://i.ibb.co/Wc89pH6/masculina.png"/></Link>
                </div>
                <div class="col">
                    <Link to="/desenhos"><img className="img-fluid" alt="icon" src="https://i.ibb.co/1M28yTG/desenho.png"/></Link>
                </div>
                <div class="col">
                    <Link to="/profissoes"><img className="img-fluid" alt="icon" src="https://i.ibb.co/KsdMHN5/profissao.png"/></Link>
                </div>
                <div class="col">
                    <Link to="/games"><img className="img-fluid" alt="icon" src="https://i.ibb.co/Hqb4vqm/games.png"/></Link>
                </div>
                <div class="col">
                    <Link to="/series"><img className="img-fluid" alt="icon" src="https://i.ibb.co/7z6t14Y/series.png"/></Link>
                </div>
                <div class="col">
                    <Link to="/completar"><img className="img-fluid" alt="icon" src="https://i.ibb.co/hdvBspP/completar.png"/></Link>
                </div>
                <div class="col">
                    <Link to="/bandas"><img className="img-fluid" alt="icon" src="https://i.ibb.co/8DGtsHd/bandas.png"/></Link>
                </div>
                <div class="col">
                    <Link to="/esportivo"><img className="img-fluid" alt="icon" src="https://i.ibb.co/dJ98cRT/times.png"/></Link>
                </div>

            </div>
        </div>
    )
}

export default Home