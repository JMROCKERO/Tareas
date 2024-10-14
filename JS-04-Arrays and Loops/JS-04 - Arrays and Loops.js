/* 1: Sum of Resistors in Series */ console.log("Suma de resistencias en serie")

function sumarResistencias(resistencia) {
    let totalResistencias = resistencia.reduce((x, resistencia) => x + Math.abs(resistencia), 0);
    return totalResistencias + " ohms";
  }

  console.log(sumarResistencias([-1, 5, 6, 3]));
  console.log(sumarResistencias([14, 3.5, 6]));
  console.log(sumarResistencias([8, 15, 100]));

/* 2: Secret Society */ console.log("\n" + "Sociedad secreta")

  function secretSociety(nombres) {
    return nombres.map(sigla => sigla[0]).join('');
  }

  console.log(secretSociety(["Esperanza", "Franco", "Nia"]));
  console.log(secretSociety(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
  console.log(secretSociety(['Harry', 'Ron', 'Hermione']));
  
/* 3: Array of Multiples */ console.log("\n" + "Array de multiplos")
  function arrayMultiplos(number, length) {
    let multiplos = [];
    for (let i = 1; i <= length; i++) {
      multiplos.push(number * i);
    }
    return multiplos;
  }
  
  console.log(arrayMultiplos(2, 10));
  console.log(arrayMultiplos(17, 6));
  
