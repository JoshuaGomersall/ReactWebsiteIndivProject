import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import CharacterGen from './CharacterGen';

class Buttons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
      CharacterName: '',
      race : ''
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
      axios.get('http://35.189.101.154:8888/individual_Project/api/Player/getAllPlayers').then(response => {

        console.log(response.data);
        this.setState({
          data: response.data 
        });
        
        let wordnice = JSON.stringify(response.data);
        wordnice = wordnice.replace('['," ");
        wordnice = wordnice.replace(']'," ");
        wordnice = wordnice.replace(/{/g," <divdis>");
        wordnice = wordnice.replace(/}/g," </divdis> </br>");
        wordnice = wordnice.replace(/\"/g, "");
        wordnice = wordnice.replace(/,/g,"<br/>");

  
        document.getElementById('testid').innerHTML =  wordnice;
      });
    }

    this.getone = (e) => {
      axios.get('http://35.189.101.154:8888/individual_Project/api/Player/getAPlayerByName/' + this.state.CharacterName).then(response => {
        console.log(response.data);
        this.setState({
          data: response.data
        });
        let wordnice = JSON.stringify(response.data);
        wordnice = wordnice.replace('['," ");
        wordnice = wordnice.replace(']'," ");
        wordnice = wordnice.replace(/{/g," <divdis>");
        wordnice = wordnice.replace(/}/g," </divdis> </br>");
        wordnice = wordnice.replace(/\"/g, "");
        wordnice = wordnice.replace(/,/g,"<br/>");

  
        document.getElementById('testid').innerHTML =  wordnice;
      });
  }

  this.deleteRequest = () => {
    console.log ("START DELETE");
    alert("Deleting Character");
    axios.delete('http://35.189.101.154:8888/individual_Project/api/Player/deletePlayer/' + this.state.CharacterName).then(response => {
      console.log(response.data);
      console.log("Done");
       alert("Character Deleted");
      });
      document.getElementById('testid').innerHTML =  '';
    };

    this.updateRequest = () => {
      console.log ("START DELETE");
      axios.delete('http://35.189.101.154:8888/individual_Project/api/Player/deletePlayer/' + this.state.CharacterName)
      .then(response => {
        console.log(response.data);
        console.log("Done");
        alert("Click Add To Confirm Changes To Character");
        });
        document.getElementById('testid').innerHTML =  '';
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


        <h5 id='testid'> </h5>
      </div>
    );
  }
}

export default Buttons;
