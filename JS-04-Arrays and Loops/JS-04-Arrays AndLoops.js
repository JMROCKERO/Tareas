/* 1: Sum of Resistors in Series */ console.log("Suma de resistencias en serie")
/* Calculate the sum of all resistors connected in series.
Examples: - `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
          - `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
          - `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)
Note: This approach uses the absolute value of each resistance to ensure all values are positive.*/

function sumarResistencias(resistencia) {
    let totalResistencias = resistencia.reduce((ohms, resistencia) => ohms + Math.abs(resistencia), 0);
    return totalResistencias + " ohms";}

  console.log(sumarResistencias([-1, 5, 6, 3]));
  console.log(sumarResistencias([14, 3.5, 6]));
  console.log(sumarResistencias([8, 15, 100]));

/*2: Number divided into halves*/ console.log("\n" + "Número divivido en mitades");
/*Given a number, return the number divided into its halves in an array.
Examples: - `numDiv(4)` should return `[2, 2]`.
          - `numDiv(10)`should return `[5, 5]`. */
const numero = prompt("Escribe un número que será dividido por su mitad");
  let mitad = numero / 2;
  let mitadArray = [mitad, mitad];

  console.log(mitadArray);

/* 3: Secret Society */ console.log("\n" + "Sociedad secreta")
/* Find the name of a secret society based on the first letter of each member's name.
Examples: - `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
          - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
          - `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`. */

  function secretSociety(nombres) {
    return nombres.sort().map(sigla => sigla[0]).join('');}

  console.log(secretSociety(["Esperanza", "Franco", "Nia"]));
  console.log(secretSociety(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
  console.log(secretSociety(['Harry', 'Ron', 'Hermione']));
  
/* 4: Array of Multiples */ console.log("\n" + "Array de multiplos")
/* Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
Examples: - `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
          - `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`. */  
          
function arrayMultiplos(number, length) {
    let multiplos = [];
    for (let i = 1; i <= length; i++) {
      multiplos.push(number * i);
    }
    return multiplos;
  }
  
  console.log(arrayMultiplos(2, 10));
  console.log(arrayMultiplos(17, 6));
