class Planet {
  nome;
  img;
  wiki;
  mass;
  volume;
  order;
  constructor(nome, img, wiki, mass, volume, order) {
    this.nome = nome;
    this.img = img;
    this.wiki = wiki;
    this.mass = mass;
    this.volume = volume;
    this.order = order;
  }

  // Invece di usare una funzione "di classe" (quindi static), qui viene usata una funzione "di istanza", in modo da non dover passare alcun
  // parametro alla funzione. I valori vengono presi direttamente dagli attributi dell'istanza
  //
  generatePlanets() {
    Dom.createPlanetDiv(
      this.nome,
      this.img,
      this.wiki,
      this.mass,
      this.volume,
      this.order,
      ["flex", "card"],
      true
    );
  }
}
