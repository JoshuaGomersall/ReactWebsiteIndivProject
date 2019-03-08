import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class BackStoryGen extends Component {

   constructor(props) {
      super(props);
      this.state = {
            hook : '',
            hometown : '',
            farther : '',
            mother : ''
      }

   this.addRequest = (e) => {
      console.log ("START Adding");
      alert("BackStory Added");
      axios.post(`http://35.189.101.154:8888/individual_Project/api/BackStory/createBackStory`, {
         "hook": document.getElementById('backstoryhook').value ,
         "hometown" : document.getElementById('hometown').value ,
         "farther" : document.getElementById('father').value ,
         "mother" : document.getElementById('mother').value 
      })
      .then(response => {
        console.log(response.data);
        console.log("Done");
        });
      };
   }

   render() {
      return (
         <div>
            <h3>
               BackStory Hook
   <select id="backstoryhook">
                  <option value="I Dont Know">I Dont Know</option>
                  <option value="My Village Was Attacked">My Village Was Attacked</option>
                  <option value="I Trained My Whole Life In Magic Or Weapons">I Trained My Whole Life In Magic Or Weapons</option>
                  <option value="I Am Naturally Gifted With Magic">I Am Naturally Gifted With Magic</option>
               </select>
            </h3>

            <h3>
               Home Town
   <select id="hometown">
                  <option value="I Dont Know">I Dont Know</option>
                  <option value="A Wealthy Town Were You Were A Noble">A Wealthy Town Were You Were A Noble</option>
                  <option value="A Wealthy Town Were You Worked In Harsh Conditions">A Wealthy Town Were You Worked In Harsh Conditions</option>
                  <option value="In The Forest Amoungst Nature">In The Forest Amoungst Nature</option>
               </select>
            </h3>

            <h3>
               Father
   <select id="father">
                  <option value="I Dont Know">I Dont Know</option>
                  <option value="Was Killed While You Were Young">Was Killed While You Were Young</option>
                  <option value="Died Of Old Age">Died Of Old Age</option>
                  <option value="Was A Powerful Magic User">Was A Powerful Magic User</option>
               </select>
            </h3>

            <h3>
               Mother
   <select id="mother">
                  <option value="I Dont Know">I Dont Know</option>
                  <option value="Died During Child Birth">Died During Child Birth</option>
                  <option value="Died Of Old Age">Died Of Old Age</option>
                  <option value="Was A Powerful Magic User">Was A Powerful Magic User</option>
               </select>
            </h3>

            <input type="submit" value="Done" onClick={this.addRequest}></input>

         <h1 id="BackStory">
         </h1>
         </div>
      );
   }
}

export default BackStoryGen;
