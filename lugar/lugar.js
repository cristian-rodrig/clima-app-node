const axios = require('axios');


const getLugarLatLng = async ( dir ) => {

    const encondeUrl = encodeURI( dir );
    

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encondeUrl}`,
        headers: {
            'X-RapidAPI-Key': 'ba74a37481mshb25f429d8ff955bp14bf2fjsn91c7c91fe10d'
        }
    });

    const resp = await instance.get()
        
    if (resp.data.Results.length === 0 ){
        throw new Error(` No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng

    }
}

module.exports = {
    getLugarLatLng
}