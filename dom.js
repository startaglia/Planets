class Dom {
  // Non è un errore, ma considera di fare il controllo con questa funzione
  // Ancora non viene utilizzata, semplicemente, tutti i controlli che fai
  // in createPlanetDiv li fai qui e la funzione la chiami all'inizio
  // Il commento sotto è un esempio su come usare la funzione
  static checkParameters(mainTitle, imgUrl, wiki, mass, volume, planetOrder) {
    if (
      typeof mainTitle === "string" &&
      typeof imgUrl === "string" &&
      typeof wiki === "string" &&
      typeof mass === "string" &&
      typeof volume === "string" &&
      typeof planetOrder === "number"
    ) {
      return true;
    }
    return false;
  }

  static createPlanetDiv(
    mainTitle,
    imgUrl,
    wiki,
    mass,
    volume,
    planetOrder,
    classes = [],
    inRoot = false
  ) {
    // //Una cosa del genere
    // if (
    //   Dom.checkParameters(mainTitle, imgUrl, wiki, mass, volume, planetOrder) ==
    //   false
    // ) {
    //   console.error("Invalid parameters");
    //   return;
    // }
    // Ovviamente tutti gli if non ti servono più

    const newDiv = document.createElement("div");

    if (typeof mainTitle === "string") {
      ////////////
      let title = document.createElement("h1");
      title.innerText = mainTitle;
      newDiv.appendChild(title);
    } else {
      console.error("mainTitle must be a string");
      return;
    }
    if (typeof imgUrl === "string") {
      ////////////
      let planetImg = document.createElement("img");
      planetImg.setAttribute("src", imgUrl);
      planetImg.classList.add("img-card");
      newDiv.appendChild(planetImg);
    } else {
      console.error("imgUrl must be a string");
      return;
    }
    if (typeof wiki === "string") {
      ////////////
      let descriptionTitle = document.createElement("h2");
      descriptionTitle.innerText = "DESCRIPTION";
      let wikiText = document.createElement("h6");
      wikiText.innerText = wiki;
      descriptionTitle.appendChild(wikiText);
      newDiv.appendChild(descriptionTitle);
    } else {
      console.error("wiki must be a string");
      return;
    }
    if (typeof mass === "string") {
      ////////////
      let massTitle = document.createElement("h2");
      massTitle.innerText = "MASS";
      let massContent = document.createElement("h6");
      massContent.innerText = mass;
      massTitle.appendChild(massContent);
      newDiv.appendChild(massTitle);
    } else {
      console.error("mass must be a string");
      return;
    }
    if (typeof volume === "string") {
      ////////////
      let volumeTitle = document.createElement("h2");
      volumeTitle.innerText = "VOLUME";
      let volumeContent = document.createElement("h6");
      volumeContent.innerText = volume;
      volumeTitle.appendChild(volumeContent);
      newDiv.appendChild(volumeTitle);
    } else {
      console.error("volume must be a string");
      return;
    }
    if (typeof planetOrder === "number") {
      ////////////
      let orderTitle = document.createElement("h2");
      orderTitle.innerText = "PLANET ORDER";
      let orderContent = document.createElement("h6");
      orderContent.innerText = planetOrder;
      orderTitle.appendChild(orderContent);
      newDiv.appendChild(orderTitle);
    } else {
      console.error("planetOrder must be a number");
      return;
    }
    if (classes.length) {
      classes.forEach((classe) => {
        newDiv.classList.add(classe);
      });
    }
    if (inRoot) root.appendChild(newDiv);
  }
}
