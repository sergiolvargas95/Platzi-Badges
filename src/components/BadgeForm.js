import React from 'react';

class BadgeForm extends React.Component {

    handleClick = () => {
        console.log('buttom was clicked')
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submitted')
        console.log(this.state)
    };

    render() {
        const { firstName, lastName, email, twitter, jobTitle } = this.props.formValues;

        return (
            <React.Fragment>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" value={firstName} name="firstName"/>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" value={lastName} name="lastName"/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email"  value={email} name="email"/>
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" value={jobTitle} name="jobTitle"/>
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" value={twitter} name="twitter"/>
                    </div>

                    <button className="btn btn-primary" onClick={this.handleClick}>Save</button>
                </form>
            </React.Fragment>
        )
    };
};

export default BadgeForm;