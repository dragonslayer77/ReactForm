import React, { Component } from 'react';

class FormEmployee extends Component {
    constructor(props){
        super(props);
        this.state={
            lastname: '',
            firstname: '',
            email: ''
        }
        // this.onChange = this.onChange.bind(this);
        // this.submitForm = this.submitForm.bind(this);
    }
    onChange = () => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    submitForm = () => {
        e.preventDefault();
    }
    render(){
        return (
                <div className="FormEmployee">
                    <h1> Employee Entry </h1>

                    <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Information</legend>
                        <div className="form-data">
                        <label htmlFor="lastname">Name</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            onChange={this.onChange}
                            value={this.state.lastname}
                        />
                        </div>

                        <div className="form-data">
                        <label htmlFor="firstname">Firstname</label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            onChange={this.onChange}
                            value={this.state.firstname}
                        />
                        </div>

                        <div className="form-data">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={this.onChange}
                            value={this.state.email}
                        />
                        </div>
                        <hr />
                        <div className="form-data">
                        <input type="submit" value="Submit" />
                        </div>
                    </fieldset>
                    </form>
                </div>
        );
    }
};

export default FormEmployee;