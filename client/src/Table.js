import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Table extends Component {

constructor(props) {
    super(props);
    this.state = {
    pets: []
    }
}

componentDidMount() {
    axios.get("http://localhost:8000/pet")
    .then(res => { this.setState({pets: res.data}) })
    .catch(err => console.log(err));
}

delete = (_id, e) => {
    e.preventDefault();
    axios.delete(`http://localhost:8000/pet/${_id}`)
    .then(res => this.componentDidMount())
    .catch(err => console.log(err));
}

render() {
    return (
    <table border="1">
        <tbody>
        <tr>
            <th>Pet Name</th>
            <th>Pet Type</th>
            <th>Actions</th>
        </tr>
        {
            this.state.pets.map(p =>
            <tr key={p._id}>
                <td>{p.PetName}</td>
                <td>{p.PetType}</td>
                <td>
                <Link to={"/details/" + p._id} >details</Link>
                &nbsp;|&nbsp;
                <Link to={"/edit/" + p._id} >edit</Link>
                </td>
            </tr>  
            )
        }
        </tbody>
    </table>
    );
}
}

export default Table;