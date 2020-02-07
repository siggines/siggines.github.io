window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let fah;
    let cel;
    let temp;
    let que;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/"
            const api = `${proxy}https://api.darksky.net/forecast/e4be2535a1a7f99bdcdac04a9466214d/${lat},${long}`;
            const api_windy = `${proxy}https://api.windy.com/point-forecast/h1BNNFesa7krzTbEeD2d56izmmfS5Y6E/${lat},${long}`;
            
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                console.log(data);
                const {temperature, summary, icon}= data.currently;
                
                fah = temperature;
                cel = (fah-32)/1.8;
                temp = Math.round(cel);
                que = temp.toString() + ' celcius';
                temperatureDegree.textContent = que;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
                setIcons(icon, document.querySelector(".icon"));
            })
        });
    }

    function setIcons(icon, iconID) {
        const skycons = new Skycons({color:"white"});
        const currentIcon = icon.replace(/-/g,"_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});