const fetch = require("node-fetch");
const fs = require("fs");

// CONSTANTS
// NOTE: For more information to https://openweathermap.org
const URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&APPID=d0769cf4ca29e4fed1db6a1803334822';

// DESC: City name amd country Code
const ID = 551487;
const CITY = 'Kazan'; // Should start capitalize letter
const CODE = 'RU'; // Should be uppercase

function fetchCity(id, name, code) {
  const rawdata = fs.readFileSync("./datasets/city.list.json");
  const cities = JSON.parse(rawdata);

  if (typeof id === 'number') {
    return cities.find(citydata => id === citydata.id);
  }

  if (typeof name === 'string') {
    return cities.find(citydata => name === citydata.name);
  }

  if (typeof code === 'string') {
    return cities.find(citydata => code === citydata.country);
  }
}

// DESC: Get weather by city name
// NOTES: ASYNC and AWAIT always return Promises
async function fetchWeather(city, code) {
  const rawdata = await fetch(`${URL}${city},${code}${API_KEY}`);
  return await rawdata.json(); // Retrun a geo-data abt weather in <CITY> from <URL>
}

const city = fetchCity(ID, CITY, CODE)
const geodata = fetchWeather(CITY, CODE);

console.log(geodata);
