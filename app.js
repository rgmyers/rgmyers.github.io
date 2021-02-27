
const key = "3a8f879f9171d9be0e7e8e7867670af7";
//When the page loads run this function.
window.addEventListener('load', ()=>{
    let lon;
    let lat;
    let temperatureDegree = document.querySelector(".temperature-degree");
    let temperatureDescription = document.querySelector(".temperature-description");
    let locationCity = document.querySelector(".location-city");
    const Kelvin = 273;
    //Checks to see if they allow us to know their location if so take variables and populate them with location.
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(postion => {
            lon=postion.coords.longitude;
            lat=postion.coords.latitude;
            //API key needed to interaction with weather fetch.
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
            fetch(api)
                .then(res => {
                    return res.json();
            })
                .then(data => {
                console.log(data);
                const temperature = (data.main.temp)-Kelvin;
                const summary = data.weather[0].description;
                const test = data.name;
                console.log(`test results: ${test}`);        
                console.log(temperature);
                console.log(summary);
                
                temperatureDegree.textContent = Math.floor(temperature); 
                temperatureDescription.textContent = summary;
                locationCity.textContent = data.name;
                
                console.log(`This is tempDescription ${temperatureDescription}`);      
            });
            
        })
    }
});