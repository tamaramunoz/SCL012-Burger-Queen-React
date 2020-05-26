import React from 'react';
import '../css/Home.css'
import { Card } from 'react-bootstrap'
import burger from '../img/burger-white.png'
import logobq from '../img/main-logo.png'


const Home = () => {
    return (
        <div className="home-container">
            <Card className="background-images">
                <Card.Img src={burger} alt="hamburguesa" />
                <Card.ImgOverlay>
                <div className="text-home-box">
                    <img src={logobq} alt="logo" className="home-logo"/>
                    
                    <Card.Text className="burger-text">
                        Aplicación para tablets donde el mesero puede enviar sus pedidos a la cocina.
                    </Card.Text>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default Home;
