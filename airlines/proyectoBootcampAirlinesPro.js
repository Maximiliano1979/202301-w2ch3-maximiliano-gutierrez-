// console.clear()



const userName = [];

const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
  ];
  

function welcomeAndUser() {
    do {
      screenWelcomeUser = String(window.prompt("Bienvenido, dinos tu nombre y apellido", "Usuario"));
        if (Number(screenWelcomeUser) || screenWelcomeUser === "Usuario" || screenWelcomeUser === "" || screenWelcomeUser === " " || screenWelcomeUser === "Usuario" || screenWelcomeUser === "null") {
                 window.alert ("Necesito saber al menos tu nombre")
         } else {
            userName.push(screenWelcomeUser);
         };
    } while (userName.length === 0);
};



function flightsInfo() {
  console.log ("***************************************INFORMACIĆON DE VUELOS***************************************")
  flights.forEach(function(flight) {
    if (flight.scale === true) {
      console.log("El vuelo con origen " + flight.from + " y destino " + flight.to + " tiene un coste de: " + flight.cost + " € y es un vuelo CON AL MENOS UNA ESCALA.")
    } else {
      console.log("El vuelo con origen " + flight.from + " y destino " + flight.to + " tiene un coste de: " + flight.cost + " € y es un vuelo SIN ESCALAS.") 
    };
  });
};


function averageCostAndScales() {
  let totalCostFlights = null;
  flights.forEach(function(flight) {
      totalCostFlights = flight.cost + totalCostFlights;
  });
  console.log(`***************************************COSTE PROMEDIO DE LOS VUELOS***************************************`);
  console.log(`El coste promedio de todos los vuelos es: ${totalCostFlights / flights.length} €`);
  const flightsWithScales = flights.filter(flight => flight.scale === true);
  console.log(`********************************************VUELOS CON ESCALA********************************************`);
  console.log(`Hay un total de ${flightsWithScales.length} vuelos con escala.`);
};


function lastFlights() {
    console.log(`**********************************Los siguientes vuelos son los ultimos del día**********************************`);
  for (let i = 5; i < flights.length; i++) {
     console.log(`Origen: ${flights[i].from} con destino a: ${flights[i].to}`);
  };
};



let adminOrUser = () => {
    adminUser = Boolean(confirm(`${userName} dinos si eres ADMIN o USER.
            Pulsa "Aceptar" para ADMIN o "Cancelar" para USER`));
    if (adminUser === true) {
        return admin();
    } else {
        return user();
    }    
}



let admin = () => {
    alert(`${userName} veamos si actualizamos la base de datos y agregamos algunos vuelos. Quizá quieras cambiar o eliminar otros`);
    let confirmNewFlights = confirm(`Presiona Aceptar si quieres agregar nuevos vuelos, sino presiona Cancelar para eliminar vuelos`);
    if (confirmNewFlights === true) {
        flightsInfo()
        return addFlights();
    } else {
        return removeFlights();
    };    
};



let addFlights = () => {
    const newFlights = {
        id: "",
        to: "",
        from: "",
        cost: Number(),
        scale: undefined,
    };
    if (flights.length === 15) {
      const optionExcessFlights = Number(prompt(`No podemos tener más de 15 vuelos en nuestra base de datos. 
      Escribe 1 si quieres eliminar algun vuelo; 
      2 para volver al menú primcipal;
      o presiona cualquier tecla y damos por finalizada nuestra sesión`));
      if (optionExcessFlights === 1) {
        return removeFlights();
      } else if (optionExcessFlights === 2) {
        return admin()
      } else {
        flightsInfo();
        averageCostAndScales();
        lastFlights();
        return alert(`Hemos alcanzado el máximo de vuelos, buen trabajo`);
      }
    };

    do {
      newFlights.from = prompt(`Indica el origen del vuelo que estás creando - Sirvete de la info de debajo para ver los que ya existen y no los repitas 😜​`);
    } while (newFlights.from === `` || newFlights.from === null);
    do {
      newFlights.to = prompt(`¿Y cual sería el destino de este vuelo?`);
    } while (newFlights.to === `` || newFlights.to === null);
    do {
      newFlights.cost = Number(prompt('¿Cuál será el precio de este vuelo'));
    } while (newFlights.cost === 0 || isNaN(newFlights.cost));
    newFlights.scale = confirm(`¿Es un vuelo con escalas? Presiona "Aceptar" para vuelo con escales o "Cancelar" para un vuelo directo`);

    if (newFlights.scale === true ? true : false);

    newFlights.id = flights.length + 1;

    flights.push(newFlights);
    console.log(flights);

    let extraFlights = confirm(`Si quieres agregar otro vuelo presiona Aceptar, para terminar presiona Cancelar`);
    if (extraFlights && flights.length <= 15) {
      return addFlights();
    } else {
        return alert(`Gracias por trabajar con nuestro sistema`);
    };
};        




let removeFlights = () => {
    for (flight in flights) {
      console.log(`El vuelo con id ${flight}, destino ${flights[flight].to} procede de ${flights[flight].from}.`);
    };

    flightsToRemoved = Number(prompt(`Debajo podrás ver cuáles son los vuelos que puedes eliminar. Por favor elije el que quieras borrar según su número de id:`));

    for(flight in flights){
        if(flights[flight].id === Number(flightsToRemoved)) {
            console.log(`***********************************************************************VUELOS ELIMINADOS*************************************************************`)
            console.log(`El vuelo con id ${flights[flight].id} cuyo origen era ${flights[flight].from} y destino ${flights[flight].to} ha sido borrado.`)
            flights.splice([flight],1)
        }
    }
    console.log(flights)
    reConfirm = confirm(`¿Quieres eliminar algun otro vuelo?`)
    if (reConfirm === true) {
      return removeFlights();
    } else {
      return alert('Debajo podrás consultar toda la información referente a los vuelos. ¡Qué tengas un día buenísimo capo!')
    };
};



let user = () => {
  const flightsByPrice = Number(prompt(`Aquí podrás filtrar los vuelos que están disponibles según tu presupuesto. Una vez confirmes el monto, debajo verás los vuelos. Dime cuánto tienes y te diré adonde puedes ir`))
  if(flightsByPrice === '' || flightsByPrice === ' ' || isNaN(Number(flightsByPrice))) {
      alert('Sabía que existia la posibilidad de que pusieras un caracter que no sea un número aunque lo haya pedido. Vamos, ahora pon un numero por favor');
      user();    
  }; 
  console.log(`****************************VUELOS CON TU PRESUPUESTO: ${flightsByPrice} € ****************************`)
  for (flight in flights) {
      if (flightsByPrice >= flights[flight].cost) {
          console.log(`${flights[flight].from} con destino ${flights[flight].to} y tiene un costo de ${flights[flight].cost}`);
      };
  };
  const newSearch = Number(prompt(`¿Te gustaria realizar una nueva busqueda? Pues entonces escribe 1, si quieres volver al menu principal 2 y si quieres terminar con todo pues dale a Aceptar`))
  if (newSearch === 1) {
    user(); 
  } else if (newSearch === 2) {
    adminOrUser();
  } else {
    alert(`Hasta pronto y nos vemos`);
  };
};


welcomeAndUser();
String(window.alert(`Muchas gracias ${userName}, debajo encontrarás toda la información referente a los vuelos.`));
adminOrUser();
flightsInfo();
averageCostAndScales();
lastFlights();








