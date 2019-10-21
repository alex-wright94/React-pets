import React, { Component } from 'react';
import axios from 'axios';


class New extends Component {

constructor(props) {
    super(props);
    this.state = {
    newPet: {
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

addPet = e => {
    e.preventDefault();
    axios.post("http://localhost:8000/pet", this.state.newPet)
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

changePetName = e => {
    let newPet = {...this.state.newPet};
    newPet.PetName = e.target.value;
    this.setState({newPet: newPet});
    console.log(e.target.value);
}

changePetType = e => {
    let newPet = {...this.state.newPet};
    newPet.PetType = e.target.value;
    this.setState({newPet: newPet});
}

changeDescription = e => {
    let newPet = {...this.state.newPet};
    newPet.Description = e.target.value;
    this.setState({newPet: newPet});
}
changeSkill1 = e => {
    let newPet = {...this.state.newPet};
    newPet.Skill1 = e.target.value;
    this.setState({newPet: newPet});
}
changeSkill2 = e => {
    let newPet = {...this.state.newPet};
    newPet.Skill2 = e.target.value;
    this.setState({newPet: newPet});
}
changeSkill3 = e => {
    let newPet = {...this.state.newPet};
    newPet.Skill3 = e.target.value;
    this.setState({newPet: newPet});
}

render() {
    return (
    <form onSubmit={this.addPet}>
        <input 
        type="text" 
        placeholder="Pet Name" 
        onChange={this.changePetName} 
        value={this.state.newPet.PetName} 
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
        value={this.state.newPet.PetType}
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
        value={this.state.newPet.Description}
        />
        {
        this.state.errors.Description ?
        <span>{this.state.errors.Description.message}</span> :
        ""
        }
        <br/>
        <input 
        type="text" 
        placeholder="Skill 1" 
        onChange={this.changeSkill1} 
        value={this.state.newPet.Skill1}
        />
        {
        this.state.errors.Skill1 ?
        <span>{this.state.errors.Skill1.message}</span> :
        ""
        }
        <br/>
        <input 
        type="text" 
        placeholder="Skill 2" 
        onChange={this.changeSkill2} 
        value={this.state.newPet.Skill2}
        />
        {
        this.state.errors.Skill2 ?
        <span>{this.state.errors.Skill2.message}</span> :
        ""
        }
        <br/>
        <input 
        type="text" 
        placeholder="Skill 3" 
        onChange={this.changeSkill3} 
        value={this.state.newPet.Skill3}
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

export default New;