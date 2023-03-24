const wildersList = document.querySelector("#wilders");

const adoptWilders = [
  {
    wName: "Quentin Silmain",
    wImage: "../Assets/Dugolemwave.png",
    wAlt: "Photo de Quentin",
    wDescription:
      "Responsable du Crewstibat, Quentin est polyvalent et adepte du bien nommé ChatGPT. Mégalomaniaque. Veut devenir Dieu",
    wObjectif:
      "Devenir dev web, Maitriser le creation kit, Explorer dans un cutter impérial",
  },
  {
    wName: "Camille le Gloanic",
    wImage: "../Assets/realcamille.png",
    wAlt: "Photo de Camille",
    wDescription:
      "Vous avez dit maman-louve , appelez Camille. Avec du chocolat et du thé, elle est capable d'écouter avec autant de patience qu'il en faut pour coder du JS.",
    wObjectif:
      "Comprendre ce que je fais a la fin de la formation, Lire plus de livres, Terminer Horizon Forbidden West",
  },
  {
    wName: "Ilias Ryffel dit La Grogne",
    wImage: "../Assets/realilias.jpg",
    wAlt: "Photo de Ilias",
    wDescription:
      "Ilias est un Serpentard de l'extrême : capuche, bonnet, son visage est toujours camouflé par un couvre-chef. D'une volonté a toute épreuve, il EST Dieu.",
    wObjectif:
      "Etre riche, Etre célèbre, Devenir le meilleur de tous les dresseurs",
  },

  {
    wName: "Alicia Coquérant",
    wImage: "../Assets/realalicia.jpg",
    wAlt: "Photo de Alicia",
    wDescription:
      "Déterminée a se faire une place parmis les Grands du Code, Alicia est d'une patience a toute épreuve. Ses aiguilles déroulent le fil de ses ambitions, méthodique et mélodique.",
    wObjectif: "Etre developpeur web, Faire une fusée, Aller vivre sur Mars",
  },
  {
    wName: "Angélique Chartrain",
    wImage: "../Assets/realAngelique.jpg",
    wAlt: "Photo de Angelique",
    wDescription:
      "Angélique est franche et dynamique. Sa patience n'a d'égal que sa persévérance, devant elle le code fait révérence, laisse la râler sans raison, sinon, c'est la 'baston'.",
    wObjectif:
      "Etre dev web full stack, Testeuse de resto  Faire du web design",
  },

  {
    wName: "Benjamin Laroche",
    wImage: "../Assets/realbenjamin.jpg",
    wAlt: "Photo de Benjamin",
    wDescription:
      "Benjamin est un bon daron. Il a deux grandes passions: le gaming et le sport. Agissant pour le bien d'autrui, comme dans Call of Duty, de la bonté plein le chargeur, il tire en plein coeur.",
    wObjectif: "Devenir dev web, Etre en freelance, Partir a l'étranger",
  },
  {
    wName: "Bertrand Robert",
    wImage: "../Assets/realbertrand.jpg",
    wAlt: "Photo de Bertrand",
    wDescription:
      "Nonchalance, telle est sa devise. On peut le croire perdu ou tendu, mais sortir un code efficace, c'est sa mission ! Il pianote sur son clavier pour manier Git, comme Orphée sur sa lyre devant le Styx.",
    wObjectif: "Devenir dev web, Maitriser Git, Inventer un Git plus simple",
  },
  {
    wName: "Cassandra Heroin",
    wImage: "../Assets/realcassandra.jpg",
    wAlt: "Photo de Cassandra",
    wDescription:
      "Création, imagination, Cassandra retiendra toute votre attention. Aussi bien en code qu'en parole, elle est volubile, qui aurait cru qu'un aussi petit corps cachait une personne aussi habile !",
    wObjectif: "Devenir dev web, Etre écrivain, Etre dev de jeux",
  },
  {
    wName: "Erwan Cherel",
    wImage: "../Assets/realerwan.jpg",
    wAlt: "Photo de Erwan",
    wDescription:
      "Erwan est curieux et autonome, entre soif de connaissance et tasse de thé. Sur Code VS, au contraire de Linguini, il écrit la recette de la réussite, mais sans besoin d'un Rémi.",
    wObjectif:
      "Devenir dev web, Emincer des carottes intergalaciques, Devenir fromager",
  },
  {
    wName: "Florian Esnault",
    wImage: "../Assets/realflorian.jpg",
    wAlt: "Photo de Florian",
    wDescription:
      "Peu d'effort pour un résultat optimal, tel est le crédo de Florian. Solitaire, mettez-le dans une grotte avec pc et denrées et il en sortira puissant et fort, son site web fini.",
    wObjectif: "Etre dev web, Devenir caviste, devenir joueur d'E-sport",
  },
  {
    wName: "Jean-Baptiste Blond",
    wImage: "../Assets/realjeanbaptiste.jpg",
    wAlt: "Photo de Jean-Baptiste",
    wDescription:
      "Jean-Baptiste est très attentif aux besoins des autres et a un grand sens de la générosité. Musicien a ses heures perdues, gamers et cinéphile, ses multiples talents éblouissent jusqu'au soleil lui-même.",
    wObjectif: "Etre dev web, Developper Chat GPT, Il cherche encore",
  },
  {
    wName: "Jessica Ribeiro",
    wImage: "../Assets/realjessica.jpg",
    wAlt: "Photo de Jessica",
    wDescription:
      "Jessica manie humour et modestie avec habileté, mais malgré son humilité, un secret demeure caché. Jessica est Exceptionnelle, bien sur !",
    wObjectif:
      "Devenir dev web, Etre testeuse de canapé pro, devenir actrice hollywoodienne",
  },
  {
    wName: "Julien Leroux",
    wImage: "../Assets/realjulien",
    wAlt: "Photo de Julien",
    wDescription:
      "Julien a une grande capacité d'empathie et semble souvent fatigué. D'un calme a toute épreuve, tel le rocher inflexible, il ne sera jamais la source de l'incendie car tous les obstacle se gèrent, je cite, 'Comme un lundi'.",
    wObjectif: "Devenir dev web, Créer son entreprise, Développer son site web",
  },
  {
    wName: "Luc Lefebure",
    wImage: "../Assets/lucalo.jpg",
    wAlt: "Photo de luc",
    wDescription:
      "Homme au foyer, Luc cherche a exercer un contrôle absolu sur ceux qui l'entourent, a la heuteur de l'amour qu'il leur porte. Son mauvais karma plâne sur lui comme les nuages surplombent Arkham. mais tel batman, sa bonté vient régler ses problèmes a coup de tatanes.",
    wObjectif:
      "Devenir dev web, Developper son entreprise, Faire un élevage de licornes cannibales",
  },
  {
    wName: "Marion Baston",
    wImage: "../Assets/realMarion.jpg",
    wAlt: "Photo de Marion",
    wDescription:
      "Ingénieuse et débrouillarde, Marion se dépatouille des plus sombres magouilles. ne vpous fiez pas a son air 'angélique', la détermination dont elle fait preuve vous fera l'effet d'une bombe atomique.",
    wObjectif:
      "Devenir dev web, Etre éleveuse de dauphins, Etre pilote de kart",
  },
  {
    wName: "Xavier Georget",
    wImage: "../Assets/realxavier.png",
    wAlt: "Photo de Xavier",
    wDescription: "Le Maître du Code.",
    wObjectif:
      "Avoir une nouvelle cabane de jardin, Devenir dev web, Finir God of War ragnarok",
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
