import React from 'react';

import Header from '../images/badge-header.svg';

import './styles/BadgeNew.css';

import Badges from '../components/Badges';
import Navbar from '../components/Navbar';

class BadgeNew extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={Header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                        <Badges
                            firstName="Sergio"
                            lastName="Vargas"
                            jobTitle="Frontend Engineer"
                            twitter="vargasDev"
                            avatarURL="https://s.gravatar.com/avatar/46babe91c08cfa5e0cd80aefff6f5d54?s=80"
                        />
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default BadgeNew;


