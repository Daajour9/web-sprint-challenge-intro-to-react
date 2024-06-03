import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
const [data, setData] = useState([])
useEffect(()=>{
  async function getData(){
    const[resPlanets, resPeople] = await Promise.all([axios.get(urlPlanets), axios.get(urlPeople)])
    let character = resPeople.data.map(char=>{
      return {...char, homeworld: resPlanets.data.find(world=> world.id==char.homeworld) }
    })
    setData(character)
  }
  getData()
},[])
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of theb project for instructions on completing this challenge</p>
      {data.map(char => <Character key={char.id} data={char} /> )}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
// //const url1 = "https://api.example.com/data1";
// const url2 = "https://api.example.com/data2";

// Promise.all([
//   fetch(url1),
//   fetch(url2)
// ])
// .then((responses) => {
//   // responses is an array containing the Response objects from each fetch call
//   // To extract the JSON data from each response, we map over the array and call the json method on each response
//   return Promise.all(responses.map((response) => response.json()));
// })
// .then((data) => {
//   // data is an array containing the data from each API call
//   const data1 = data[0];
//   const data2 = data[1];

//   // Do something with data1 and data2
// })
// .catch((error) => {
//   console.error("Error:", error);
// });
