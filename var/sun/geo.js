function locate() {
   const locInfo = document.querySelector("loc");
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
      const lat  = position.coords.latitude;
      const lon = position.coords.longitude;
      locInfo.innerHTML = `Latitude: ${lat}, Longitude: ${lon}`;
      console.log("this");
      });
   }
   else{locInfo.innerHTML = "error"; console.log("error");}
}
