import React from 'react';
import NavBar from '../components/NavBar'
import '../css/Home.css'
import Background from '../img/hamburger.jpg'
import logobq from '../img/main-logo.png'


let sectionStyle = {
    width: "1000px",
    backgroundImage: `url(${Background})`
};

const Home = () => {

    return (
        <div className="home-container">

            <div className="background-images" style={sectionStyle}>
                <div className="cardOverlay">
                    <div className="container-nav">
                        <NavBar />
                    </div>
                    <div className="text-home-box">
                        <img src={logobq} alt="logo" className="home-logo" />

                        <p className="burger-text">
                            Aplicación para tablets enfocada en Restaurantes donde el mesero puede enviar sus pedidos a la cocina con tan sólo un click.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;
