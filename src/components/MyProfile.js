import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
    state = {
        name: "",
        gender: "Male",
        myDescription: "",
        isReadTerm: false
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        });
    }

    handleGenderChange = event => {
        this.setState({
            gender: event.target.value
        });
    }

    handleDescriptionChange = event => {
        this.setState({
            myDescription: event.target.value
        });
    }

    handleReadTermChange = () => {
        this.setState({
            isReadTerm: !this.state.isReadTerm
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("Name: " + this.state.name + ", Gender: " + this.state.gender + ", Description: " +
            this.state.myDescription);
    }

    render() {
        return (
            <form>
                <h1>My Profile</h1>
                <label>
                    <h3>Name</h3>
                    <input type="text" placeholder="Your name" onChange={this.handleNameChange}/>
                </label>
                <label>
                    <h3>Gender</h3>
                    <select onChange={this.handleGenderChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </label>
                <label>
                    <h3>Description</h3>
                    <textarea placeholder="Description about yourself" onChange={this.handleDescriptionChange} id="description"/>
                </label>
                <label>
                    <p><input type="checkbox" onChange={this.handleReadTermChange} id="checkbox"/>I have read the term of conduct</p>
                </label>
                <label>
                    <button type="submit" onClick={this.handleSubmit} disabled={!this.state.name || !this.state.myDescription || !this.state.isReadTerm}>Submit</button>
                </label>
            </form>
        );
    }
}

export default MyProfile;


