
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forcast();


const UpdateUI = (data) => {
    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    // or we can destructure the data like below:
    const {cityDetails, weather } = data;

   console.log(data)

    //update detauils template
    details.innerHTML = `<h5 class="my-3">${cityDetails.EnglishName}</h5> 
               <div class="my-3">${weather.WeatherText}</div>
               <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
               </div>`;  
               
    // update the night/day icon images

       let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
       
        // if(weather.IsDayTime){
        //     timeSrc = 'img/day.svg'
        // } else {
        //     timeSrc = 'img/night.svg'
        // }
    
        time.setAttribute('src', timeSrc)

    // Update the night/day icon images;
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
        icon.setAttribute('src', iconSrc)
    
    // remove display none (d-none) class if present
        if(card.classList.contains('d-none')){
            card.classList.remove('d-none')
        }         
};


cityForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update UI with the new city
    forecast.updateCity(city)
        .then(data => UpdateUI(data))
        .catch(err => console.log(err));

        // set local storage

        localStorage.setItem('city', city);
});

if (localStorage.getItem('city')){
     // update UI with the new city
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => UpdateUI(data))
        .catch(err => console.log(err));
}




