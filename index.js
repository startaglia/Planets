let planetList = [];

this.options = {
  method: "GET",
  url: "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list",
  headers: {
    "X-RapidAPI-Key": "19a341467emsh878cefef351974dp18e28ejsn1c85136c2aa0",
    "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
  },
};
let dati = (this.nomePianeta = axios
  .request(this.options)
  .then(function (response) {
    let planetApi = response.data;
    console.log(planetApi);
    planetApi.forEach((planet) => {
      let planetName = planet.name;
      let planetUrl = planet.imgSrc[0].img;
      let wiki = planet.description;
      let mass = planet.basicDetails[0].mass;
      let volume = planet.basicDetails[0].volume;
      let order = parseInt(planet.planetOrder);

      // Nuova istanza della classe Planet

      let newPlanet = new Planet(
        planetName,
        planetUrl,
        wiki,
        mass,
        volume,
        order
      );

      // Inserisco la nuova istanza nell'array
      planetList.push(newPlanet);

      // Ora la funzione generatePlanets non è più static, quindi i parametri
      // li prende direttamente dagli attributi dell'istanza.
      // Questo va un po' a semplificare la chiamata della funzione
      newPlanet.generatePlanets();
    });
    console.log(planetList);
  })
  .catch(function (error) {
    console.error(error);
  }));
