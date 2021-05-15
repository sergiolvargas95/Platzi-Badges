import React from 'react';
import NotFoundImg from '../images/NotFound.svg';
import './styles/NotFound.css'

function NotFound () {
    return (
        <React.Fragment>
            <div className="NotFound__container">
                <div className="NotFound__info col-6">
                    <h1>404: Not Found</h1>
                    <p>it seems you are lost</p>
                    <button className="btn btn-primary">Return</button>
                </div>
                <div className="NotFound__img col-6">
                    <img src={NotFoundImg} alt="Not Found logo"/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NotFound;