import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class Onepet extends Component {
constructor(props) {
    super(props);
    this.state = {
    pet: {
        PetName: "",
        PetType: "",
        Description: "",
        Skill1: "",
        Skill2: "",
        Skill3: "",
        Likes: ""
    }, 
    errors: {
        PetName: "",
        PetType: "",
        Description: "",
        Skill1: "",
        Skill2: "",
        Skill3: ""
    }
    }
}

componentDidMount() {
    let _id = this.props.match.params._id;
    axios.get(`http://localhost:8000/pet/${_id}`)
    .then(res => {
        this.setState({pet: res.data});
    })
    .catch(err => console.log(err));
}
Increase = () => {

    let _id = this.props.match.params._id;
    axios.put(`http://localhost:8000/pet/${_id}` , {likes:this.state.pet.Likes + 1 })
    .then(res => {
        console.log(res);
        this.setState({pet: {...this.state.pet, Likes: this.state.pet.Likes + 1 } , liked:true});
        localStorage.setItem("likes",this.state.pet._id);


    })
    .catch(err => console.log(err));
}
addALike = e => {
    e.preventDefault();
    document.querySelector("#likeButton").disabled = true; 
    let _id = this.props.match.params._id;
    this.state.pet.Likes = this.state.pet.Likes + 1;
    axios.put(`http://localhost:8000/pet/${_id}`, this.state.pet)
    .then(res => {
        axios.get(`http://localhost:8000/pet/${_id}`)
        .then(res => {
        console.log(res);
        this.setState({ pet: res.data });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

    

delete = (_id, e) => {
    e.preventDefault();
    axios.delete(`http://localhost:8000/pet/${_id}`)
    .then(res => {
        console.log(res);
        if(res.data.errors) {
        this.setState({errors: res.data.errors});
        } else {
        this.props.history.push("/");
        }
    })
    .catch(err => {
        console.log(err);
    });
}
render() {
    return (
    <>
    <h2>Details about {this.state.pet.PetName}</h2>
        <p>Pet Type: {this.state.pet.PetType}</p>
        <p>Description: {this.state.pet.Description}</p>
        <p>Skills:<ul>
            <li>{this.state.pet.Skill1}</li>
            <li>{this.state.pet.Skill2}</li>
            <li>{this.state.pet.Skill3}</li>
            </ul>
            </p>
        <p>Likes: {this.state.pet.Likes}</p>
        <button id="likeButton" className="btn btn-success" onClick={this.addALike.bind(this)}>Like this pet</button>
        &nbsp;|&nbsp;
        <a href="/" onClick={this.delete.bind(this, this.state.pet._id)}>
            <button className="btn btn-success">Adopt</button>
        </a>
        
    </>
    );
}
}

export default Onepet;