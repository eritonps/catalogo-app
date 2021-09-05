import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header className="header">
                <nav className="navbar navbar-expand-md navbar-dark bg-cases">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src="https://i.ibb.co/3NFhRFR/Logo-Branca.png" alt="Cases e Capas" height="35px" width="72px"></img></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link">Inicio</Link>                           
                                </li>
                                <li className="nav-item">
                                    <Link to='/comnome' className="nav-link">Com seu Nome</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Mais Estampas
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark mb-3 press-color" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link to="/lancamento" className="dropdown-item">Lançamentos</Link></li>
                                        <li><Link to="/foto" className="dropdown-item">Com sua Foto</Link></li>
                                        <li><Link to="/delicadas" className="dropdown-item">Delicadas</Link></li>
                                        <li><Link to="/signos" className="dropdown-item">Signos</Link></li>
                                        <li><Link to="/pets" className="dropdown-item">Pets</Link></li>
                                        <li><Link to="/masculinas" className="dropdown-item">Masculinas</Link></li>
                                        <li><Link to="/desenhos" className="dropdown-item">Desenhos/Animes</Link></li>
                                        <li><Link to="/profissoes" className="dropdown-item">Profissões</Link></li>
                                        <li><Link to="/games" className="dropdown-item">Games</Link></li>
                                        <li><Link to="/series" className="dropdown-item">Séries</Link></li>
                                        <li><Link to="/completar" className="dropdown-item">Completar</Link></li>
                                        <li><Link to="/bandas" className="dropdown-item">Bandas</Link></li>
                                        <li><Link to="/esportivo" className="dropdown-item" href="#">Esportivo</Link></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><Link to="/contato" className="dropdown-item" href="./pages/contato.html">Faça seu pedido!</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <Link to="/contato"><button className="btn btn-success rounded-pill me-2" type="submit"><i
                            className="bi bi-whatsapp"></i>WhatsApp</button></Link>
                        <a href="https://pt-br.facebook.com/casesecapasoficial" target="_blank"><i
                            className="bi bi-facebook icon-navbar me-2"></i></a>
                        <a href="https://www.instagram.com/casesecapasoficial/" target="_blank"><i
                            className="bi bi-instagram icon-navbar"></i></a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header