

class Forcast{
    constructor(){
        this.key = 'EOeq1R04YRTtmJXSzPTaQ7Ryss5kpOeF';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city){
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeatherCondition(cityDetails.Key);
        
        // NB: object shaorthand notation - if property name and value are same, you can use just one name.
        return { cityDetails, weather };
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const res = await fetch(this.cityURI + query);
        const data = await res.json();

        return data[0];
    }
    async getWeatherCondition(id){
        const query = `${id}?apikey=${this.key}`;
        const res = await fetch(this.weatherURI + query);
        const data = await res.json();

        return data[0]
    }
}


// //Call and test the API call
// getCity("Melbourne").then(data=> {
//     return getWeatherCondition(data.Key)
// }).then(data=>{
//     console.log(data)
// })
// .catch(err=> console.log(err));


//getWeatherCondition(26216);
