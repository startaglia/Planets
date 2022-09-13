class Planet {
    nome;
    img;
    wiki;
    mass;
    volume;
    order;
    constructor(nome, img, wiki, mass, volume, order){
        this.nome = nome;
        this.img = img;
        this.wiki = wiki;
        this.mass = mass;
        this.volume = volume;
        this.order = order;
    }
    static generatePlanets(nome, img, wiki, mass, volume, order){
            Dom.createPlanetDiv(nome, img, wiki, mass, volume, order, ['flex', 'card'], true)
    }
}









  




