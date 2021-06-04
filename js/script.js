// Step 1 Stampare numeri da 1 a 100

// Step 2 Per i numeri multipli di 3 stampare la parola "Fizz" di fianco

// Step 3 Per i numeri multipli di 5 stampare la parola "Buzz" di fianco

// Step 4 Per i numeri multipli sia di 3 che di 5 stampare la parola "FizzBuzz" di fianco

// Step 5 Bonus Se il numero è anche divisibile per 6, aggiungiamo "Boolean".6 diventerà quindi FizzBoolean, 30 diventerà FizzBuzzBoolean e via dicendo.

// Versione for

for (var i = 1; i <= 100; i++) {

    document.getElementById('lista').innerHTML += i + ' ';

    if (i % 3 === 0) {
        document.getElementById('lista').innerHTML +=' Fizz';
    }

    if (i % 5 === 0) {
        document.getElementById('lista').innerHTML +=' Buzz';
    }

    // if (i % 3 === 0 && i % 5 === 0){
    //     document.getElementById('lista').innerHTML +=' FizzBuzz';
    // }

    if(i % 6 === 0) {
        document.getElementById('lista').innerHTML +=' Boolean';
    }

    document.getElementById('lista').innerHTML += '<br>';
}



// Versione while

var i = 1;

while (i <= 100){
    document.getElementById('lista').innerHTML += i + ' ';

    if (i % 3 === 0) {
        document.getElementById('lista').innerHTML +=' Fizz';
    }

    if (i % 5 === 0) {
        document.getElementById('lista').innerHTML +=' Buzz';
    }

    // if (i % 3 === 0 && i % 5 === 0){
    //     document.getElementById('lista').innerHTML +=' FizzBuzz';
    // }

    if (i % 6 === 0) {
        document.getElementById('lista').innerHTML +=' Boolean';
    }

    document.getElementById('lista').innerHTML += '<br>';
    
    i++;
}



