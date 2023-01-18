const questions1 = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  {
    letter: "r",
    answer: "raton",
    status: 0,
    question: "CON LA R. Roedor",
  },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

let counterAnswer = 0;
let userName = "";
let endGame = false;
const players = [
  { name: "Maceo Plex", points: 24 },
  { name: "Boris Brejcha", points: 19 },
  { name: "Sam Paganini", points: 20 },
  { name: "Dubfire", points: 21 },
  { name: "Enrico Sangiuliano", points: 22 },
];

const askForNameAndGreet = () => {
  const inPut = prompt(
    "Hello! Welcome to Isdi Pasapalabra. Please, enter your name!"
  );
  if (inPut === null || inPut === "" || inPut === " ") {
    return askForNameAndGreet();
  }

  console.log(`%cHola ${inPut}`, "color:yellow; background-color:blue");
  alert(`Ok ${inPut}. Vayamos a por el juego`);
  console.log(`Ok ${inPut}.Vayamos a por el juego`);
  userName = inPut;
};

const getRules = () => {
  const rules = `El juego trata de algo muy complejo. Se te dirá una letra, y una definición. Tendrás que adivinar a cuál palabra, que comienza por esa letra, hace referencia la definición. En el caso de que se te diga "CONTIENE tal letra", no significa que comience por ella, sino que está incluida en la palabra. Es una cosa de locos, ¿a que sí? `;
  alert(rules);
  console.log(
    `%cLAS REGLAS DEL JUEGO:
_____________________________________________________________________________________________________________________________________________________________________________________
${rules}
_____________________________________________________________________________________________________________________________________________________________________________________`,
    "color:black; background-color:white"
  );
};

const game = () => {
  const minutesFromStart = new Date().getMinutes();
  do {
    questions1.forEach((pregunta) => {
      if (endGame === false) {
        if (pregunta.status === 0) {
          const answerUser = prompt(pregunta.question);
          if (answerUser === null) {
            pregunta.status = 1;
            alert(`Respuesta Incorrecta`);
          } else if (answerUser.toLowerCase() === pregunta.answer) {
            // REFACTORIZAR CON SWITCH
            pregunta.status = 1;
            counterAnswer++;
            alert(
              `Respuesta correcta. ${userName}, en este momento tienes estos puntos: ${counterAnswer}`
            );
          } else if (answerUser.toLowerCase() === "pasapalabra") {
            pregunta.status = 0;
          } else if (answerUser.toLowerCase() === "end") {
            questions1.forEach((element) => {
              element.status = 1;
            });
            alert(`Has decidido terminar el juego`);
          } else {
            alert(`Respuesta incorrecta`);
            pregunta.status = 1;
          }
        }

        const minutesNow = new Date().getMinutes();
        if (minutesNow >= minutesFromStart + 0.3) {
          endGame = true;
          alert("El tiempo se ha acabado");
        }
      }
    });
  } while (
    questions1.some((element) => element.status === 0) &&
    endGame === false
  );
};

const orderRanking = () => {
  alert(`Debajo podrás consultar el ranking`);
  players.push({ name: userName, points: counterAnswer });
  players.sort((value1, value2) =>
    value1.points > value2.points
      ? 1
      : value1.points === value2.points
      ? value1.name.toLowerCase() > value2.name.toLowerCase()
        ? 1
        : -1
      : -1
  );
  players.forEach((player) => {
    console.log(player);
  });
};

const playAgain = () => {
  const repeatGame = prompt(
    `${userName}, ¿te gustaría volver a jugar? (si/no)`
  );
  if (
    repeatGame === "si" ||
    repeatGame === "Si" ||
    repeatGame === "sí" ||
    repeatGame === "Sí"
  ) {
    userName = "";
    counterAnswer = 0;
    endGame = false;
    for (const question of questions1) {
      question.status = 0;
    }

    pasapalabraApp();
  } else if (repeatGame === "no" || repeatGame === "No") {
    return console.log(
      console.log(
        `%cGracias ` + userName + `, nos vemos pronto.`,
        "color:yellow; background-color:blue"
      )
    );
  } else if (
    Number(repeatGame) ||
    repeatGame === "" ||
    repeatGame === " " ||
    repeatGame === null
  ) {
    window.alert("Tienes que escribir Si o No");
    return playAgain();
  }
};

const pasapalabraApp = () => {
  askForNameAndGreet();
  getRules();
  game();
  orderRanking();
  playAgain();
};

pasapalabraApp();
