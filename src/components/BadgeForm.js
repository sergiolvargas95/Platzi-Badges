import React from 'react';

class BadgeForm extends React.Component {
    state = {
        jobTitle: 'Designer'
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleClick = () => {
        console.log('buttom was clicked')
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submitted')
        console.log(this.state)
    };

    render() {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" value={this.state.firstName} name="firstName"/>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" value={this.state.lastName} name="lastName"/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.handleChange} className="form-control" type="email"  value={this.state.email} name="email"/>
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.handleChange} className="form-control" type="text" value={this.state.jobTitle} name="jobTitle"/>
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.handleChange} className="form-control" type="text" value={this.state.twitter} name="twitter"/>
                    </div>

                    <button className="btn btn-primary" onClick={this.handleClick}>Save</button>
                </form>
            </div>
        )
    };
};

export default BadgeForm;