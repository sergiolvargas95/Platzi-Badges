import React from 'react';

import Header from '../images/platziconf-logo.svg';

import './styles/BadgeEdit.css';

import Badges from '../components/Badges';
import BadgeForm from '../components/BadgeForm';
import api from '../api'

import PageLoading from '../components/PageLoading';


class BadgeEdit extends React.Component{
    state = {
        loading: false,
        error: null,
        form: {
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
            twitter:'',
    } };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.read(this.props.match.params.badgeId);

            this.setState({ loading: false, form: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

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

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading:true, error: null })

        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({ loading: false });

            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render(){
        if(this.state.loading) {
            return <PageLoading />;
        }
        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="img-fluid" src={Header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <Badges
                            firstName={this.state.form.firstName || 'FIRST_NAME'}
                            lastName={this.state.form.lastName || 'LAST_NAME'}
                            jobTitle={this.state.form.jobTitle || 'JOB_TITLE' }
                            twitter={this.state.form.twitter || 'TWITTER'}
                            email={this.state.form.email}
                            avatarURL="https://s.gravatar.com/avatar/46babe91c08cfa5e0cd80aefff6f5d54?s=80"
                        />
                        </div>
                        <div className="col-6">
                        <h1>Edit Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };
};

export default BadgeEdit;

