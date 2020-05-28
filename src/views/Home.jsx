import React from 'react';
import NavBar from '../components/NavBar'
import '../css/Home.css'
import logobq from '../img/main-logo.png'


const Home = () => {

    return (
        <div className="home-container">

            <div className="background-images">
                <div className="cardOverlay">
                    <div className="container-nav">
                        <NavBar />
                    </div>
                    <div className="text-home-box">
                        <img src={logobq} alt="logo" className="home-logo" />

                        <div className="burger-text-container">
                            <p className="burger-text">
                                Aplicación para tablets enfocada en Restaurantes donde el mesero puede enviar sus pedidos a la cocina con tan sólo un click.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;
