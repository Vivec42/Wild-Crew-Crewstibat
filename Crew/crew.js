const wildersList = document.querySelector("#wilders");

const adoptWilders = [
  {
    wName: "Quentin Silmain",
    wImage: "../Assets/Dugolemwave.png",
    wAlt: "Photo de Quentin",
    wDescription:
      "Panda roux, responsable du Crewstibat, Quentin est polyvalent et adepte du bien nommé ChatGPT. Il s'est occupé du menu burger du site et de la partie GitHub.",
    wObjectif: "Landscaping, Elder Scrolls, L'espace",
  },
  {
    wName: "Camille le Gloanic",
    wImage: "../Assets/realcamille.png",
    wAlt: "Photo de Camille",
    wDescription: "",
    wObjectif: "Livres, Chats, Gateaux",
  },
  {
    wName: "Ilias Ryffel dit La Grogne",
    wImage: "../Assets/realilias.jpg",
    wAlt: "Photo de Ilias",
    wDescription:
      "Ilias est un hacker de l'extrême : capuche, bonnet, son visage est toujours camouflé par un couvre-chef. D'une volonté a toute épreuve, quand il a décidé de faire un caroussel, il le fait.",
    wObjectif: "Barbe a papa, Licornes, Fission nucléaire",
  },

  {
    wName: "Alicia Coquérant",
    wImage: "../Assets/realalicia.jpg",
    wAlt: "Photo de Alicia",
    wDescription: "",
    wObjectif: "Etre developpeur web, Faire une fusée, Aller vivre sur Mars",
  },
  {
    wName: "Angélique Chartrain",
    wImage: "../Assets/realAngelique.jpg",
    wAlt: "Photo de Angelique",
    wDescription: "",
    wObjectif:
      "Etre dev web full stack, Testeuse de resto  Faire du web design",
  },

  {
    wName: "Benjamin Laroche",
    wImage: "../Assets/realbenjamin.jpg",
    wAlt: "Photo de Benjamin",
    wDescription: "",
    wObjectif: "Devenir dev web, Etre en freelance, Partir a l'étranger",
  },
  {
    wName: "Bertrand Robert",
    wImage: "../Assets/realbertrand.jpg",
    wAlt: "Photo de Bertrand",
    wDescription: "",
    wObjectif: "Devenir dev web, Maitriser Git, Inventer un Git plus simple",
  },
  {
    wName: "Cassandra Heroin",
    wImage: "../Assets/realcassandra.jpg",
    wAlt: "Photo de Cassandra",
    wDescription: "",
    wObjectif: "Devenir dev web, Etre écrivain, Etre dev de jeux",
  },
  {
    wName: "Erwan Cherel",
    wImage: "../Assets/realerwan.jpg",
    wAlt: "Photo de Erwan",
    wDescription: "",
    wObjectif:
      "Devenir dev web, Emincer des carottes intergalaciques, Devenir fromager",
  },
  {
    wName: "Florian Esnault",
    wImage: "../Assets/Florian.jpg",
    wAlt: "Photo de Florian",
    wDescription: "",
    wObjectif: "Etre dev web, Devenir caviste, devenir joueur d'E-sport",
  },
  {
    wName: "Jean-Baptiste Blond",
    wImage: "../Assets/realjeanbaptiste.jpg",
    wAlt: "Photo de Jean-Baptiste",
    wDescription: "",
    wObjectif: "Etre dev web, Developper Chat GPT, Il cherche encore",
  },
  {
    wName: "Jessica Ribeiro",
    wImage: "../Assets/realjessica.jpg",
    wAlt: "Photo de Jessica",
    wDescription: "",
    wObjectif:
      "Devenir dev web, Etre testeuse de canapé pro, devenir actrice hollywoodienne",
  },
  {
    wName: "Julien Leroux",
    wImage: "../Assets/Julien.jpg",
    wAlt: "Photo de Julien",
    wDescription: "",
    wObjectif: "Devenir dev web, Créer son entreprise, Développer son site web",
  },
  {
    wName: "Luc Lefebure",
    wImage: "../Assets/lucalo.jpg",
    wAlt: "Photo de luc",
    wDescription: "",
    wObjectif:
      "Devenir dev web, Developper son entreprise, Faire un élevage de licornes cannibales",
  },
  {
    wName: "Marion Baston",
    wImage: "../Assets/realMarion.jpg",
    wAlt: "Photo de Marion",
    wDescription: "",
    wObjectif:
      "Devenir dev web, Etre éleveuse de dauphins, Etre pilote de kart",
  },
  {
    wName: "Xavier Georget",
    wImage: "../Assets/realxavier.png",
    wAlt: "Photo de Xavier",
    wDescription: "Le Maître du Code",
    wObjectif: "",
  },
];

function createProfil(profilW, index) {
  const li = document.createElement("li");
  li.className = "photoProfil";
  if (index === 2 || index === -1) {
    li.classList.add("photo3");
  }

  wildersList.appendChild(li);

  const photo = document.createElement("img");
  photo.className = "photoWilder";
  photo.src = profilW.wImage;
  photo.alt = profilW.wAlt;

  li.appendChild(photo);

  const zoom = document.createElement("div");
  zoom.className = "zoom";
  li.appendChild(zoom);

  const name = document.createElement("h2");
  name.innerText = profilW.wName;

  zoom.appendChild(name);

  const description = document.createElement("p");
  description.innerText = profilW.wDescription;

  zoom.appendChild(description);

  const objectif = document.createElement("p");
  objectif.innerText = profilW.wObjectif;

  zoom.appendChild(objectif);

  li.addEventListener("click", () => zoomWilder(profilW));

  wilders.appendChild(li);
}

function zoomWilder(zoomProfils) {
  console.log("click");
  const article = document.createElement("article");
  article.className = "zoomProfil";

  const image = document.createElement("img");
  image.className = "zoomImage";
  image.src = zoomProfils.wImage;
  image.alt = zoomProfils.wAlt;

  article.appendChild(image);

  const paragraphe = document.createElement("section");
  paragraphe.className = "paragraphe";
  article.appendChild(paragraphe);

  const name = document.createElement("h2");
  name.innerText = zoomProfils.wName;

  paragraphe.appendChild(name);

  const description = document.createElement("p");
  description.innerText = zoomProfils.wDescription;

  paragraphe.appendChild(description);

  const objectif = document.createElement("p");
  objectif.className = "zoomObjectif";
  objectif.innerText = zoomProfils.wObjectif;

  paragraphe.appendChild(objectif);

  document.body.appendChild(article);

  article.addEventListener("click", () => {
    article.remove();
  });
}

for (let i = 0; i < adoptWilders.length; i++) {
  if (i === adoptWilders.length - 1) {
    createProfil(adoptWilders[i], -1);
  } else {
    createProfil(adoptWilders[i], i);
  }
}
