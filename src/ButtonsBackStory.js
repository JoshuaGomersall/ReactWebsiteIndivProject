import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import CharacterGen from './CharacterGen';

class Buttons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
      hook : '',
      hometown : '',
      farther : '',
      mother : ''
    }

    this.changeName = (e) => {
      document.getElementById('Label').placeholder="InValid";
      if (this.changeName != null)
      {
        document.getElementById('Label').placeholder="Valid";
      }
      e.preventDefault();
      this.setState({
        CharacterName: e.target.value
      });
    }

    this.getall = () => {
      axios.get('http://localhost:8080/individual_Project/api/BackStory/getAllBackStorys').then(response => {
        console.log(response.data);
        this.setState({
          data: response.data 
        });
      });
    }

    this.getone = (e) => {
      axios.get('http://localhost:8080/individual_Project/api/BackStory/getABackStory/' + this.state.CharacterName).then(response => {
        console.log(response.data);
        this.setState({
          data: response.data
        });
      });
  }

  this.deleteRequest = () => {
    console.log ("START DELETE");
    axios.delete('http://localhost:8080/individual_Project/api/BackStory/deleteBackStory/' + this.state.CharacterName).then(response => {
      console.log(response.data);
      console.log("Done");
      });
    };

    this.updateRequest = () => {
      console.log ("START DELETE");
      axios.delete('http://localhost:8080/individual_Project/api/BackStory/deleteBackStory/' + this.state.CharacterName)
      .then(response => {
        console.log(response.data);
        console.log("Done");
        CharacterGen.addRequest();
        });
      };
}


  render() {
    return (
      <div>
        <br></br>
        <input type="button" className="blockfirst" value="Get All" onClick={this.getall}></input>
        <input type="button" className="block" value="Get One" onClick={this.getone}></input>
        <input type="button" className="block" value="Update"  onClick={this.updateRequest}></input>
        <input type="button" className="block" value="Delete" onClick={this.deleteRequest}></input>
        <input type="text" className="blocktext" placeholder='Id' onChange={this.changeName} ></input>
        <br></br><br></br>
        <input readOnly id="Label" type="text" className="blocklabel" placeholder="Invalid"></input>


        <h5>Hook : {this.state.data.hook}
        <br></br>
        Home Town : {this.state.data.hometown}
        <br></br>
        Father : {this.state.data.farther}
        <br></br>
        Mother : {this.state.data.mother}</h5>

        {/* <h5 id='testid'> {this.response.data} </h5> */}

      </div>
    );
  }
}

export default Buttons;
