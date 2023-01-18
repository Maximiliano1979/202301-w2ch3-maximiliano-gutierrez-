let bingoCard1 = [];
let bingoCard2 = [];
let bingoCard3 = [];
let checkRepetitions = [];
let cartonBingo = [];
const numbersBasketBingo = [];
const namePlayer = [];
let counterRounds = 0;
const points = [
  107,
  93,
  80,
  "https://www.youtube.com/watch?v=x8zFL-0rBAw&ab_channel=DiditDeelon",
  0,
];
const players = [
  { name: "Juan Carlos I", puntuacion: 93 },
  { name: "Carles Puigdemont", puntuacion: 80 },
  { name: "Julio Iglesias", puntuacion: 107 },
  { name: "Carmen de Mairena", puntuacion: 95 },
  { name: "Miguel 'alias El Quijote' Cervantes", puntuacion: 78 },
];

const letStartTheGame = () => {
  function welcomeAndUser() {
    do {
      screenWelcomeUser = String(
        window.prompt(
          "Bienvenido al BINGO ISDI, dinos tu nombre y apellido",
          "Nombre del jugador"
        )
      );
      if (
        Number(screenWelcomeUser) ||
        screenWelcomeUser === "Nombre del jugador" ||
        screenWelcomeUser === "" ||
        screenWelcomeUser === " " ||
        screenWelcomeUser === "null"
      ) {
        window.alert("Necesito saber al menos tu nombre");
      } else {
        namePlayer.push(screenWelcomeUser);
        console.log(
          `%cEl jugador actual es: ` + namePlayer,
          "color:yellow; background-color:blue"
        );
      }
    } while (namePlayer.length === 0);
  }

  const getRules = () => {
    const rules = `El juego consiste en completar en la menor cantidad de turnos el cartón con los números que vayan saliendo de la cesta.
  Si lo sonsigues antes de la bola numero 75 te daré 107 ISDINES. Si lo consigues despues del turno 82 tendrás que cumplir una prenda. ¡¡¡Ánimo!!!`;
    alert(rules);
    console.log(`LAS REGLAS DEL JUEGO:
  ___________________________________________________________________________________________________________________________________________________
  ${rules}
  ___________________________________________________________________________________________________________________________________________________`);
  };

  function generateCardBingo(min, max) {
    /*     For (let i = 0; i < 5; i++) {
      numberRandom = Math.floor((Math.random() * (max - min + 1)) + min);
          bingoCard1.push(numberRandom);
    } */
    do {
      numberRandom = Math.floor(Math.random() * (max - min + 1) + min);
      bingoCard1.push(numberRandom);
    } while (bingoCard1.length < 5);

    do {
      numberRandom = Math.floor(Math.random() * (max - min + 1) + min);
      bingoCard2.push(numberRandom);
    } while (bingoCard2.length < 5);

    do {
      numberRandom = Math.floor(Math.random() * (max - min + 1) + min);
      bingoCard3.push(numberRandom);
    } while (bingoCard3.length < 5);

    checkRepetitions = [...bingoCard1, ...bingoCard2, ...bingoCard3];
    if (repeated(checkRepetitions) === true) {
      bingoCard1 = [];
      bingoCard2 = [];
      bingoCard3 = [];
      return generateCardBingo(1, 90);
    }

    const mergeBingoCards = (...bingoCards) => {
      cartonBingo = [...bingoCards];
      return cartonBingo;
    };

    mergeBingoCards(bingoCard1, bingoCard2, bingoCard3);
    doYouLikeCard();
  }

  function repeated(elements) {
    return elements.some(
      (element, position) => elements.indexOf(element, position + 1) !== -1
    );
  }

  function generateRandomBallsToCompare() {
    numberRandomFromBasket = Math.floor(Math.random() * (90 - 1 + 1) + 1);
    numbersBasketBingo.push(numberRandomFromBasket);
    for (let counter = 0; counter < 89; counter++) {
      let newRandomNumber = Math.floor(Math.random() * (90 - 1 + 1) + 1);
      while (numbersBasketBingo.lastIndexOf(newRandomNumber) !== -1) {
        newRandomNumber = Math.floor(Math.random() * (90 - 1 + 1) + 1);
      }

      numbersBasketBingo.push(newRandomNumber);
    }
  }

  function doYouLikeCard() {
    const cardYesOrNot =
      confirm(`${namePlayer} ¿te gustaría jugar con este cartón?: (pulsa Cancelar para generar uno nuevo)
      ${cartonBingo[0].slice(0, 5).join(" | ")}   
      ${cartonBingo[1].slice(0, 5).join(" | ")}  
      ${cartonBingo[2].slice(0, 5).join(" | ")}`);
    if (cardYesOrNot === true) {
      generateRandomBallsToCompare();
      getRules();
      return playBingo();
    }

    return generateCardBingo(1, 90);
  }

  function isFullRow(row) {
    return row.every((num) => num === "X");
  }

  function isBingo() {
    return cartonBingo.every((row) => isFullRow(row));
  }

  function checkInBingoCard(num) {
    for (let i = 0; i < cartonBingo.length; i++) {
      let isRow = isFullRow(cartonBingo[i]);
      if (isRow) {
        continue;
      } else {
        cartonBingo[i] = cartonBingo[i].map((lineNum) =>
          lineNum === num ? "X" : lineNum
        );
        isRow = isFullRow(cartonBingo[i]);
        if (isRow) {
          alert(
            `${namePlayer} has completado la linea ${
              i + 1
            } en el turno número ${counterRounds}`
          );
        }
      }
    }

    alert(`Turno número: ${counterRounds}. Tu cartón en este momento: 
          ${cartonBingo[0].slice(0, 5).join(" | ")}
          ${cartonBingo[1].slice(0, 5).join(" | ")}
          ${cartonBingo[2].slice(0, 5).join(" | ")}`);
  }

  function playBingo() {
    for (num of numbersBasketBingo) {
      counterRounds++;
      alert(`Ha salido el número: ${num}`);
      checkInBingoCard(num);
      if (isBingo()) {
        alert(
          `${namePlayer} has conseguido Bingo en el turno número ${counterRounds}`
        );
        if (counterRounds <= 75) {
          players.push({ name: namePlayer[0], puntuacion: points[0] });
          alert(`Te voy a dar ${points[0]} ISDINES, `);
          return;
        }

        if (counterRounds < 79) {
          players.push({ name: namePlayer[0], puntuacion: points[1] });
          alert(`Te voy a dar ${points[1]} ISDINES`);
          return;
        }

        if (counterRounds < 83) {
          players.push({ name: namePlayer[0], puntuacion: points[2] });
          alert(
            `Ahhh, pero tenés mucha mala suerte. Te corresponden ${points[2]} ISDINES`
          );
          return;
        }

        if (counterRounds >= 83) {
          players.push({ name: namePlayer[0], puntuacion: points[4] });
          alert(
            `El haber excedido el turno 82 no solo no puntúa, sino que castiga 👊; copia la siguiente dirección y visualiza integramente el siguiente video: ${points[3]}`
          );
          return;
        }
      }
    }
  }

  function orderRanking() {
    players.sort((a, b) =>
      a.puntuacion > b.puntuacion
        ? 1
        : a.puntuacion === b.puntuacion
        ? a.name.toLowerCase() > b.name.toLowerCase()
          ? 1
          : -1
        : -1
    );
    players.forEach((player) => {
      console.log(player);
    });
  }

  playAgain = () => {
    const repeatGame = prompt(
      `${namePlayer}, ¿te gustaría volver a jugar? (si/no)`
    );
    if (
      repeatGame === "si" ||
      repeatGame === "Si" ||
      repeatGame === "sí" ||
      repeatGame === "Sí"
    ) {
      namePlayer.splice(0, namePlayer.length);
      bingoCard1.splice(0, bingoCard1.length);
      bingoCard2.splice(0, bingoCard2.length);
      bingoCard3.splice(0, bingoCard3.length);
      checkRepetitions.splice(0, checkRepetitions.length);
      cartonBingo.splice(0, cartonBingo.length);
      numbersBasketBingo.splice(0, numbersBasketBingo.length);
      counterRounds = 0;
      return letStartTheGame();
    }

    if (repeatGame === "no") {
      return console.log(
        console.log(
          `%cGracias ` + namePlayer + `, nos vemos pronto.`,
          "color:yellow; background-color:blue"
        )
      );
    }

    if (
      Number(repeatGame) ||
      repeatGame === "" ||
      repeatGame === " " ||
      repeatGame === "null" ||
      repeatGame == null
    ) {
      window.alert("Tienes que escribir Si o No");
      return playAgain();
    }
  };

  welcomeAndUser();
  generateCardBingo(1, 90);
  console.log(
    `⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩ EL RANKING ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩`
  );
  orderRanking();
  if (counterRounds >= 83) {
    console.log(
      `No olvides que tienes una prenda que cumplir: https://www.youtube.com/watch?v=x8zFL-0rBAw&ab_channel=DiditDeelon`
    );
  }

  playAgain();
};

letStartTheGame();
