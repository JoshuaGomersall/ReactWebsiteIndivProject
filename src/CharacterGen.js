import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class CharacterGen extends Component {
   
   constructor(props) {
      super(props);
      this.state = {
        playerName: '',
        racename : '' ,
        classname : '' ,
        attackBonus: '',
        dodgeBonus: '',
        vigorBonus : '',
        smartsBonus : '',
        charmBonus : ''
      }

   this.addRequest = (e) => {
      console.log ("START Adding");

      axios.post(`http://localhost:8080/individual_Project/api/Player/createPlayer`, {
         "playerName": document.getElementById('name').value,
         "racename": document.getElementById('race').value,
         "classname": document.getElementById('class').value,
         "attackBonus": document.getElementById('Strength').innerHTML,
         "dodgeBonus": document.getElementById('Dex').innerHTML,
         "vigorBonus": document.getElementById('Vigor').innerHTML,
         "smartsBonus": document.getElementById('Smart').innerHTML,
         "charmBonus": document.getElementById('Cha').innerHTML})
      .then(response => {
        console.log(response.data);
        console.log("Done");
        });
      };
   }

   randomCharacter = () => {
      var ran1 = document.getElementById("rannumber1").innerHTML = Math.floor(Math.random() * 10) + 1;
      var ran2 = document.getElementById("rannumber2").innerHTML = Math.floor(Math.random() * 13) + 1;
      var ran3 = document.getElementById("rannumber3").innerHTML = Math.floor(Math.random() * 10) + 1;

      if (ran1 === 1) {
         document.getElementById('name').value = "John";
      }
      else if (ran1 === 2) {
         document.getElementById('name').value = "Greg";
      }
      else if (ran1 === 3) {
         document.getElementById('name').value = "Richard";
      }
      else if (ran1 === 4) {
         document.getElementById('name').value = "Susan";
      }
      else if (ran1 === 5) {
         document.getElementById('name').value = "Tiffany";
      }
      else if (ran1 === 6) {
         document.getElementById('name').value = "Gwen";
      }
      else if (ran1 === 7) {
         document.getElementById('name').value = "Namfuddle";
      }
      else if (ran1 === 8) {
         document.getElementById('name').value = "Rahoon";
      }
      else if (ran1 === 9) {
         document.getElementById('name').value = "KLARK";
      }
      else if (ran1 > 9) {
         console.log("boop");
      }

      if (ran2 === 1) {
         document.getElementById('DragonBorn').selected = "true";
      }
      else if (ran2 === 2) {
         document.getElementById('Dwarf').selected = "true";
      }
      else if (ran2 === 3) {
         document.getElementById('Elf').selected = "true";
      }
      else if (ran2 === 4) {
         document.getElementById('Gnome').selected = "true";
      }
      else if (ran2 === 5) {
         document.getElementById('Half-Elf').selected = "true";
      }
      else if (ran2 === 6) {
         document.getElementById('Half-Orc').selected = "true";
      }
      else if (ran2 === 7) {
         document.getElementById('Halfling').selected = "true";
      }
      else if (ran2 === 8) {
         document.getElementById('Human').selected = "true";
      }
      else if (ran2 === 9) {
         document.getElementById('Tiefling').selected = "true";
      }
      else if (ran2 > 9) {
         console.log("boop");
      }

      if (ran3 === 1) {
         document.getElementById('Barbarian').selected = "true";
      }
      else if (ran3 === 2) {
         document.getElementById('Bard').selected = "true";
      }
      else if (ran3 === 3) {
         document.getElementById('Cleric').selected = "true";
      }
      else if (ran3 === 4) {
         document.getElementById('Druid').selected = "true";
      }
      else if (ran3 === 5) {
         document.getElementById('Fighter').selected = "true";
      }
      else if (ran3 === 6) {
         document.getElementById('Monk').selected = "true";
      }
      else if (ran3 === 7) {
         document.getElementById('Paladin').selected = "true";
      }
      else if (ran3 === 8) {
         document.getElementById('Ranger').selected = "true";
      }
      else if (ran3 === 9) {
         document.getElementById('Rouge').selected = "true";
      }
      else if (ran3 === 10) {
         document.getElementById('Sorcerer').selected = "true";
      }
      else if (ran3 === 11) {
         document.getElementById('Warlock').selected = "true";
      }
      else if (ran3 === 12) {
         document.getElementById('Wizard').selected = "true";
      }
      else {
         console.log("boop");
      }

      this.displayScore();
   }

   displayScore = () => {
      var racestr = 1;
      var racedex = 1;
      var racesmart = 1;
      var racevigor = 1;
      var racecha = 1;

      var classstr = 1;
      var classdex = 1;
      var classsmart = 1;
      var classvigor = 1;
      var classcha = 1;

      var race = document.getElementById('race');

      if (race.options[race.selectedIndex].text === "DragonBorn") {
         racestr = 1;
         racedex = 0;
         racesmart = 0;
         racevigor = 0;
         racecha = 2;
      }
      if (race.options[race.selectedIndex].text === "Dwarf") {
         racestr = 1;
         racedex = 0;
         racesmart = 0;
         racevigor = 2;
         racecha = 0;
      }
      if (race.options[race.selectedIndex].text === "Elf") {
         racestr = 0;
         racedex = 2;
         racesmart = 1;
         racevigor = 0;
         racecha = 0;
      }
      if (race.options[race.selectedIndex].text === "Gnome") {
         racestr = 0;
         racedex = 1;
         racesmart = 2;
         racevigor = 0;
         racecha = 0;
      }
      if (race.options[race.selectedIndex].text === "Half-Elf") {
         racestr = 1;
         racedex = 1;
         racesmart = 0;
         racevigor = 0;
         racecha = 2;
      }
      if (race.options[race.selectedIndex].text === "Half-Orc") {
         racestr = 2;
         racedex = 0;
         racesmart = 0;
         racevigor = 1;
         racecha = 0;
      }
      if (race.options[race.selectedIndex].text === "Halfling") {
         racestr = 0;
         racedex = 2;
         racesmart = 0;
         racevigor = 0;
         racecha = 1;
      }
      if (race.options[race.selectedIndex].text === "Human") {
         racestr = 1;
         racedex = 1;
         racesmart = 1;
         racevigor = 1;
         racecha = 1;
      }
      if (race.options[race.selectedIndex].text === "Tiefling") {
         racestr = 0;
         racedex = 0;
         racesmart = 1;
         racevigor = 0;
         racecha = 2;
      }

      var clazz = document.getElementById('class');
      if (clazz.options[clazz.selectedIndex].text === "Barbarian") {
         classstr = 2;
         classdex = 0;
         classsmart = 0;
         classvigor = 2;
         classcha = 0;
      }
      if (clazz.options[clazz.selectedIndex].text === "Bard") {
         classstr = 0;
         classdex = 2;
         classsmart = 0;
         classvigor = 0;
         classcha = 2;
      }
      if (clazz.options[clazz.selectedIndex].text === "Cleric") {
         classstr = 1;
         classdex = 0;
         classsmart = 0;
         classvigor = 1;
         classcha = 2;
      }
      if (clazz.options[clazz.selectedIndex].text === "Druid") {
         classstr = 0;
         classdex = 1;
         classsmart = 2;
         classvigor = 1;
         classcha = 0;
      }
      if (clazz.options[clazz.selectedIndex].text === "Fighter") {
         classstr = 2;
         classdex = 1;
         classsmart = 0;
         classvigor = 1;
         classcha = 0;
      }
      if (clazz.options[clazz.selectedIndex].text === "Monk") {
         classstr = 0;
         classdex = 2;
         classsmart = 1;
         classvigor = 1;
         classcha = 0;
      }
      if (clazz.options[clazz.selectedIndex].text === "Paladin") {
         classstr = 1;
         classdex = 0;
         classsmart = 0;
         classvigor = 1;
         classcha = 2;
      }
      if (clazz.options[clazz.selectedIndex].text === "Ranger") {
         classstr = 0;
         classdex = 2;
         classsmart = 0;
         classvigor = 1;
         classcha = 1;
      }
      if (clazz.options[clazz.selectedIndex].text === "Rouge") {
         classstr = 0;
         classdex = 2;
         classsmart = 1;
         classvigor = 0;
         classcha = 1;
      }
      if (clazz.options[clazz.selectedIndex].text === "Sorcerer") {
         classstr = 0;
         classdex = 1;
         classsmart = 1;
         classvigor = 0;
         classcha = 2;
      }
      if (clazz.options[clazz.selectedIndex].text === "Warlock") {
         classstr = 0;
         classdex = 1;
         classsmart = 0;
         classvigor = 1;
         classcha = 2;
      }
      if (clazz.options[clazz.selectedIndex].text === "Wizard") {
         classstr = 0;
         classdex = 1;
         classsmart = 2;
         classvigor = 0;
         classcha = 1;
      }

      let strengthtotal = racestr + classstr;
      let dextotal = racedex + classdex;
      let smarttotal = racesmart + classsmart;
      let vigortotal = racevigor + classvigor;
      let chatotal = racecha + classcha;


      let strength = document.getElementById('Strength');
      strength.innerHTML = strengthtotal;
      let dex = document.getElementById('Dex');
      dex.innerHTML = dextotal;
      let smart = document.getElementById('Smart');
      smart.innerHTML = smarttotal;
      let vigor = document.getElementById('Vigor');
      vigor.innerHTML = vigortotal;
      let cha = document.getElementById('Cha');
      cha.innerHTML = chatotal;
   }

   render() {
      return (
         <div>
            <h3>Character Creation</h3>
            <form>
               <h4>
                  Character Name :
      <br></br>
                  <input id="name" type="text" onChange={this.displayScore} name="Name"></input>
               </h4>

               <h4>Race :
    <select id="race" onChange={this.displayScore}>
                     <option id="DragonBorn" value="dragonborn">DragonBorn</option>
                     <option id="Dwarf" value="dwarf">Dwarf</option>
                     <option id="Elf" value="elf">Elf</option>
                     <option id="Gnome" value="gnome">Gnome</option>
                     <option id="Half-Elf" value="halfelf">Half-Elf</option>
                     <option id="Half-Orc" value="halforc">Half-Orc</option>
                     <option id="Halfling" value="halfling">Halfling</option>
                     <option id="Human" value="human">Human</option>
                     <option id="Tiefling" value="tiefling">Tiefling</option>
                  </select>
               </h4>

               <h4>Class :
      <select id="class" onChange={this.displayScore}>
                     <option id="Barbarian" value="barbarian">Barbarian</option>
                     <option id="Bard" value="bard">Bard</option>
                     <option id="Cleric" value="cleric">Cleric</option>
                     <option id="Druid" value="Druid">Druid</option>
                     <option id="Fighter" value="fighter">Fighter</option>
                     <option id="Monk" value="monk">Monk</option>
                     <option id="Paladin" value="paladin">Paladin</option>
                     <option id="Ranger" value="ranger">Ranger</option>
                     <option id="Rouge" value="rouge">Rouge</option>
                     <option id="Sorcerer" value="sorcerer">Sorcerer</option>
                     <option id="Warlock" value="warlock">Warlock</option>
                     <option id="Wizard" value="wizard">Wizard</option>
                  </select>
               </h4>
               <div id="randomdisplay">
                  <p id="rannumber1"></p>
                  <p id="rannumber2"></p>
                  <p id="rannumber3"></p>
               </div>
               <input type="button" onClick={this.randomCharacter} value='Random'></input>
               </form>
               <br></br>
               <input type='submit' onClick={this.addRequest} value="Add"></input>
            

            <h4>Character Ratings
                <br></br>
               Strength : <span id="Strength"></span>
               <br></br>
               Dexterity : <span id="Dex"></span>
               <br></br>
               Smarts :<span id="Smart"></span>
               <br></br>
               Vigor : <span id="Vigor"></span>
               <br></br>
               Charisma : <span id="Cha"></span>
            </h4>
         </div>
      );
   }
}

export default CharacterGen;
