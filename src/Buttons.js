import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Buttons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
      CharacterName: ''
    }

    this.changeName = (e) => {
      e.preventDefault();
      this.setState({
        CharacterName: e.target.value
      });
    }


    this.getall = () => {
        axios.get('http://localhost:8080/individual_Project/api/Player/getAllPlayers').then(response => {
  
          console.log(response.data);
          this.setState({
            data: response.data
          });
  
        });
      }

    this.makeRequest = (e) => {
      axios.get('http://www.omdbapi.com/?apikey=' + this.state.filmTitle).then(response => {

        console.log(response.data);
        this.setState({
          data: response.data
        });

      });
    }
  }


  render() {
    return (
      <div>
        <br></br>
        <input type="button" className="blockfirst" value="Get All" onClick={this.getall}></input>
        <input type="button" className="block" value="Get One" onClick={this.makeRequest}></input>
        <input type="button" className="block" value="Update"></input>
        <input type="button" className="block" value="Delete"></input>
        <input type="text" className="blocktext" placeholder='Id' onChange={this.changeName} ></input>
        <br></br><br></br>
        <input readOnly type="text" className="blocklabel" placeholder='Invalid Input'></input>
      </div>
    );
  }
}

export default Buttons;
