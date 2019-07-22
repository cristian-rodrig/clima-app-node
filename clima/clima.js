const axios = require('axios');

const getClima = async( lat, lng)=>{

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=75afdc0bb318d1c495fe1e840ef5cd44&units=metric`)

    return resp.data.main.temp;
}



module.exports ={
    getClima
}