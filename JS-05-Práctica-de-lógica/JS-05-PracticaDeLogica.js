// 1: User profile
//Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
const userName = prompt("Escribe un username");
const edad = parseInt(prompt("Escribe tu edad"));
const peli1 = prompt("Escribe tu película favorita");
const peli2 = prompt("Escribe tu segunda película favorita");
const peli3 = prompt("Escribe tu tercera película favorita");
console.log("Username:", userName + "\n" + "edad:", edad + "\n" + "Top películas favoritas:" + "\n" + "1. " + peli1 + "\n" + "2. " + peli2 + "\n" + "3. " + peli3);
/* Segundo método
const userName = prompt("Escribe un username");
const edad = parseInt(prompt("Escribe tu edad"));
const pelis = prompt("Escribe tus películas favoritas, separadas por comas");
const arraymMovies = pelis.split(",").map(movie => movie.trim()); //Una opción para convertir a array limpiar espacios en cada peli o puede ser un foreach
console.log(`Me llamo ${userName}, tengo ${edad} años y mis películas favoritas son: ${arraymMovies}`); */

// 2: Highest number
//Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
    let maximo = null;

    for (let i = 0; i < 10; i++) {
        const diezNumeros = prompt(`Ingresa el número ${i + 1}:`);
        const numero = parseFloat(diezNumeros);

        if (!isNaN(numero)) {
            if (maximo === null || numero > maximo) {
                maximo = numero;
            }
        } else {
            console.log(`"${diezNumeros}" no es un número.`);
            i = i-1;
        }
    }
    console.log(`El número más alto que ingresaste es ${maximo} :)`);
/* Segundo método  
    function findHighestNumber(){
        let numbers = -infinity;
        for (let i = 0; i < 10; i++) {
            const numberImput = number(prompt("Ingresa el número " + (i+1)));
            console.log(numberImput);
            if (!isNaN(numberImput)) {
                if(numberImput > numbers){
                    numbers = numberImput;
                }else{
                    numbers = numbers;
                }
            }else{
                console.log(numbers + " No es un número");
                i--;
            }   
        }
            console.log("El número más alto que ingresaste es " + numbers + " :)");
        }
    findHighestNumber(); */
    
//3: Palindrome
//Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
        let usuario = prompt("Ingresa un palíndromo:", "Ejemplo: Anita lava la tina");
        
        const respuesta = usuario.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        const palindromo = respuesta.split('').reverse().join('');
        
        if (respuesta === palindromo) {
            console.log(`"${respuesta}" es un palíndromo.`);
        } else {
            console.log(`"${respuesta}" no es un palíndromo.`);
        }
alert("¡Gracias por participar! :)")

