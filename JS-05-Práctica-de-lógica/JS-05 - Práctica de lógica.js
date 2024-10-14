// 1: User profile
const username = prompt("Escribe un username");
const edad = parseInt(prompt("Escribe tu edad"));
const peli1 = prompt("Escribe tu película favorita");
const peli2 = prompt("Escribe tu segunda película favorita");
const peli3 = prompt("Escribe tu tercera película favorita");
console.log("Username:", username + "\n" + "edad:", edad + "\n" + "Top películas favoritas:" + "\n" + "1. " + peli1 + "\n" + "2. " + peli2 + "\n" + "3. " + peli3);

// // 2: Highest number
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

//3: Palindrome
        let usuario = prompt("Ingresa un palíndromo:", "Ejemplo: Anita lava la tina");
        
        const respuesta = usuario.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        const palindromo = respuesta.split('').reverse().join('');
        
        if (respuesta === palindromo) {
            console.log(`"${respuesta}" es un palíndromo.`);
        } else {
            console.log(`"${respuesta}" no es un palíndromo.`);
        }
alert("¡Gracias por participar! :)")