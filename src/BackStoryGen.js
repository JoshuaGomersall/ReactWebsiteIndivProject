import React, { Component } from 'react';
import './App.css';

class BackStoryGen extends Component {

   displayStory = () => {
      
      let Hook = document.getElementById('backstoryhook');
      
      let hooktxt = '';
      let Town = 'House'
      let farther = '';
      let mother = '';


      let stroy = 'I lived in a' + Town + ' I lived with my mum and dad' +' my life is normal other than ' + hooktxt ;
      console.log(stroy);



      let storytxt = document.getElementById('BackStory');
      storytxt.innerHTML = stroy;
   }

   render() {
      return (
         <div>
            <h3>
               BackStory Hook
   <select className="backstoryhook" onChange={this.displayStory}>
                  <option value="dontknow">I Dont Know</option>
                  <option value="villageattacked">My Village Was Attacked</option>
                  <option value="trained">I Trained My Whole Life In Magic Or Weapons</option>
                  <option value="magic">I Am Naturally Gifted With Magic</option>
               </select>
            </h3>

            <h3>
               Home Town
   <select className="hometown" onChange={this.displayStory}>
                  <option value="dontknow">I Dont Know</option>
                  <option value="wealthytownnoble">A Wealthy Town Were You Were A Noble</option>
                  <option value="wealthytownworker">A Wealthy Town Were You Worked In Harsh Conditions</option>
                  <option value="forest">In The Forest Amoungst Nature</option>
               </select>
            </h3>

            <h3>
               Farther
   <select className="farther" onChange={this.displayStory}>
                  <option value="dontknow">I Dont Know</option>
                  <option value="waskilled">Was Killed While You Were Young</option>
                  <option value="diedofoldage">Died Of Old Age</option>
                  <option value="magic">Was A Powerful Magic User</option>
               </select>
            </h3>

            <h3>
               Mother
   <select className="mother" onChange={this.displayStory}>
                  <option value="dontknow">I Dont Know</option>
                  <option value="childbirthdeath">Died During Child Birth</option>
                  <option value="diedofoldage">Died Of Old Age</option>
                  <option value="magic">Was A Powerful Magic User</option>
               </select>
            </h3>


            <input type="submit" value="Done"></input>
         </div>
      );
   }
}

export default BackStoryGen;
