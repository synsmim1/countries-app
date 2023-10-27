let country = {
    fetchCountry: function(countryName) {
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((response) => response.json())
    .then((data) => this.displayCountry(data));
    },
    displayCountry: function(data) {
        const {name} = data;
        document.querySelector(".countryImp").innerText= "Data for " + data[0].name.common;
        document.querySelector(".icon").src = data[0].flags.png;
        document.querySelector(".continent").innerText = 'Continent: '+ data[0].continents[0];
        document.querySelector(".population").innerText = "Population: " + data[0].population;
        document.querySelector(".demonyms").innerText = "Demonyms: " + data[0].demonyms.eng.f;
        document.querySelector(".country").classList.remove("loading");
        document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/?" + data[0].name.common +"')";
    },
    search (){
        this.fetchCountry(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function(){
    country.search();
    });

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        country.search();
    }
});
country.fetchCountry("italy");

