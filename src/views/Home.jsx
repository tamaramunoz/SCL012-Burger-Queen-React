import React from 'react';
import '../css/Home.css'
import { Card } from 'react-bootstrap'
import background from '../img/welcome-bq.jpg'

const Home = () => {
    return (
        <div>
            <Card className="bg-dark">
                <Card.Img src={background} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Text className="burger-title">Burger Queen</Card.Text>
                    <Card.Text className="burger-text">
                        Aplicación para tablets donde el mesero puede enviar sus pedidos a la cocina.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default Home;
