import React, { Component } from 'react';
import axios from 'axios';

class Update extends Component {
constructor(props) {
    super(props);
    this.state = {
    pet: {
        PetName: "",
        PetType: "",
        Description: "",
        Skill1: "",
        Skill2: "",
        Skill3: ""
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

changePetName = e => {
    let pet = {...this.state.pet};
    pet.PetName = e.target.value;
    this.setState({pet: pet});
}

changePetType = e => {
    let pet = {...this.state.pet};
    pet.PetType = e.target.value;
    this.setState({pet: pet});
}

changeDescription = e => {
    let pet = {...this.state.pet};
    pet.Description = e.target.value;
    this.setState({pet: pet});
}
changeSkill1 = e => {
    let pet = {...this.state.pet};
    pet.Skill1 = e.target.value;
    this.setState({pet: pet});
}
changeSkill2 = e => {
    let pet = {...this.state.pet};
    pet.Skill2 = e.target.value;
    this.setState({pet: pet});
}
changeSkill3 = e => {
    let pet = {...this.state.pet};
    pet.Skill3 = e.target.value;
    this.setState({pet: pet});
}

updatePet = e => {
    e.preventDefault();
    let _id = this.props.match.params._id;
    axios.put(`http://localhost:8000/pet/${_id}`, this.state.pet)
    .then(res => {
        if(res.data.errors) {
        this.setState({errors: res.data.errors});
        } else {
        this.props.history.push("/")
        }
    })
    .catch(err => console.log(err));

}

render() {
    return (
    <form onSubmit={this.updatePet}>
        <input 
        type="text" 
        placeholder="Pet Name" 
        onChange={this.changePetName} 
        value={this.state.pet.PetName} 
        />
        {
        this.state.errors.PetName ?
        <span>{this.state.errors.PetName.message}</span> :
        ""
        }
        <br/>
        <input 
        type="text" 
        placeholder="Pet Type" 
        onChange={this.changePetType} 
        value={this.state.pet.PetType}
        />
        {
        this.state.errors.PetType ?
        <span>{this.state.errors.PetType.message}</span> :
        ""
        }
        <br/>
        <input 
        type="text" 
        placeholder="Description" 
        onChange={this.changeDescription} 
        value={this.state.pet.Description}
        />
        {
        this.state.errors.Description ?
        <span>{this.state.errors.Description.message}</span> :
        ""
        }
        <br/>
        <input 
        type="text" 
        placeholder="" 
        onChange={this.changeSkill1} 
        value={this.state.pet.Skill1}
        />
        {
        this.state.errors.Skill1 ?
        <span>{this.state.errors.Skill1.message}</span> :
        ""
        }
        <br/>
        <input 
        type="text" 
        placeholder="" 
        onChange={this.changeSkill2} 
        value={this.state.pet.Skill2}
        />
        {
        this.state.errors.Skill2 ?
        <span>{this.state.errors.Skill2.message}</span> :
        ""
        }
        <br/>
        <input 
        type="text" 
        placeholder="" 
        onChange={this.changeSkill3} 
        value={this.state.pet.Skill3}
        />
        {
        this.state.errors.Skill3 ?
        <span>{this.state.errors.Skill3.message}</span> :
        ""
        }
        <br/>
        <input type="submit" />
    </form>
    );
}
}

export default Update;