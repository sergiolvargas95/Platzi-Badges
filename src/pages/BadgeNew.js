import React from 'react';

import Header from '../images/badge-header.svg';

import './styles/BadgeNew.css';

import Badges from '../components/Badges';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component{
    state = { form: {
        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:'',
    } };

    handleChange = e => {
        this.setState({
            form: {
                /*ahora necesitamos sobre escribir los datos, esto podemos hacerlo de dos formas diferentes
                /const nextForm = this.state.form
                /nextForm[e.target.name] = e.target.value
                /form: nextForm,*/
                //la segunda forma de hacerlo es usando spread propagation para sobre escribir directamente en el form
                ... this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render(){
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={Header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <Badges
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            jobTitle={this.state.form.jobTitle}
                            twitter={this.state.form.twitter}
                            email={this.state.form.email}
                            avatarURL="https://s.gravatar.com/avatar/46babe91c08cfa5e0cd80aefff6f5d54?s=80"
                        />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };
};

export default BadgeNew;


