import React from 'react';
import ConfLogo from '../images/platziconf-logo.svg';
import PlatziConfLogo from '../images/astronauts.svg';
import './styles/Home.css';
import { Link } from 'react-router-dom';

function Home () {
    return (
        <React.Fragment>
            <div className="Home__container">
                <div className="Info__container col-6">
                    <img src={ConfLogo} alt="Conf Logo" />
                    <h1>PRINT YOUR BADGES</h1>
                    <p>The easiest way to manage your conference</p>
                    <Link className="btn btn-primary" to="/badges">Start Now</Link>
                </div>
                <div className="Img__container col-6">
                    <img src={PlatziConfLogo} alt="PlatziConf Logo" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;