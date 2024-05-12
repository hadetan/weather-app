// var for data
// var to store the element
// function to get the data from weather api
// maniplate the var of already created element


let data;

const inputBox = document.getElementById("inputBox");
const count = document.getElementById("count");
const state = document.getElementById("state");
const city1 = document.getElementById("city");
const humidity = document.getElementById("hum");
const wind = document.getElementById("wind");
const tem = document.getElementById("tem");
const logo = document.querySelector("img");
const text = document.getElementById("text");

const getData = async (event) => {
    event.preventDefault();
    if(!inputBox.value){
        alert("Please Enter A City Name");
        return;
    }

    const city = inputBox.value;
    const degree = "°C";
    const kmph = "KMPH";

    // fetch details
    const fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=cf69656e5fc04ef9a60190530240805&q=${city}}`);
    const orgData = await fetchData.json();
    data = orgData;
    console.log(data);

    //manipulation

    // count.innerHTML = data.location.country;
    // state.innerHTML = data.location.region;
    city1.innerHTML = data.location.name;
    humidity.innerHTML = data.current.humidity;
    tem.innerHTML = data.current.temp_c + degree;
    wind.innerHTML = data.current.wind_kph + kmph;
    logo.src = data.current.condition.icon;
    text.innerHTML = data.current.condition.text
}