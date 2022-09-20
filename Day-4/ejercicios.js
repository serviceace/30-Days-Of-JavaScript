/*========================================
==========================================
            Ejercicios Nivel 1
==========================================
==========================================

1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input. 

3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
    - using if else
    - ternary operator.

4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

*/

/*-----------------------------------------
            Ejercicio N° 1           
------------------------------------------*/

let userAge = prompt('Ingrese su edad');
let ageOK = 18 - userAge;

if (userAge >= 18) {
    console.log('Eres lo suficientemente mayor para conducir')
    } else { 
        console.log("Te faltan "+ ageOK +" años para poder conducir")
}

/*-----------------------------------------
            Ejercicio N° 2           
------------------------------------------*/

let myAge = prompt('¿Cuál es tú edad?');
let yourAge = prompt('¿Cuál es mí edad?');


if (myAge > yourAge) {
    console.log('Eres '+ (myAge -= yourAge) +' años mayor que yo')
} else if (myAge < yourAge) {
    console.log('Soy '+ (yourAge -= myAge) +' años mayor que tú')
} else {
    console.log('Tenemos la mísma edad')
}

/*-----------------------------------------
            Ejercicio N° 3           
------------------------------------------*/

let a = 4;
let b = 3;

if (a > b) {
    console.log(`${a} es mayor que ${b}`)
} else if ( a < b) {
    console.log(`${a} es menor que ${b}`)
} else {
    console.log(`${a} y ${b} son lo mismo`)
}

a > b ? console.log(`${a} es mayor que ${b}`) : console.log(`${a} es menor que ${b}`)

/*-----------------------------------------
            Ejercicio N° 4           
------------------------------------------*/

let userNumber = prompt('Ingrese un número');

if (userNumber % 2 == 0) {
    console.log(`${userNumber} es un numero par`)
} else {
    console.log(`${userNumber} es un numero impar`)
}

/*========================================
==========================================
            Ejercicios Nivel 2
==========================================
==========================================

1. Write a code which can give grades to students according to theirs scores:
    80-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F

2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer

3. Check if a day is weekend day or a working day. Your script will take day as an input.

    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.

/*-----------------------------------------
            Ejercicio N° 1           
------------------------------------------*/

let studentScore = prompt('Puntaje del estudiante');

if (studentScore >= 80) {
    console.log(`Tu calificacion es de grado "A"`)
} else if (studentScore >= 70) {
    console.log(`Tu calificacion es de grado "B"`)
} else if (studentScore >= 60) {
    console.log(`Tu calificacion es de grado "C"`)
} else if (studentScore >= 50) {
    console.log(`Tu calificacion es de grado "D"`)
} else {
    console.log(`Tu calificacion es de grado "F"`)
}

/*-----------------------------------------
            Ejercicio N° 2           
------------------------------------------*/

let userSeason =  prompt('En qué mes del año estámos ahora?');
let season = userSeason.toLocaleLowerCase()

if (season == "septiembre" || season == "octubre" || season == "noviembre" ) {
    console.log("Entonces estamos en Primavera")
} else if (season == "diciembre" || season == "enero" || season == "febrero" ) {
    console.log("Entonces estamos en Verano")
} else if ( season == "marzo" || season == "abril" || season == "mayo") {
    console.log("Entonces estamos en Otoño")
} else if ( season == "junio" || season == "julio" || season == "agosto") {
    console.log("Entonces estamos en Invierno")
} else {
    console.log("No reconozco ese mes del año.")
}

/*-----------------------------------------
            Ejercicio N° 3           
------------------------------------------*/

let userDay = prompt("Que dia de la semana es hoy?");
let weekDay = userDay.toLowerCase();

if (weekDay == "lunes" || weekDay == "martes" ||weekDay == "miercoles" || weekDay == "jueves" || weekDay == "viernes" ) {
    console.log(`${weekDay} es un día laboral`)
} else if (weekDay == "sabado" || weekDay == "domingo") {
    console.log(`${weekDay} es dia de fin de semana`)
} else { 
    console.log('No reconozco ese día de la semana...')
}

/*========================================
==========================================
            Ejercicios Nivel 3
==========================================
==========================================

1. Write a program which tells the number of days in a month.

2. Write a program which tells the number of days in a month, now consider leap year.

*/
/*-----------------------------------------
            Ejercicio N° 1           
------------------------------------------*/

let userMonth = prompt("Ingresa un mes del año: ");
let month = userMonth.toLocaleLowerCase();

if (month == "enero" || month == "marzo" || month == "mayo" || month == "julio" || month == "agosto" || month == "octubre" || month == "diciembre" ) {
    console.log(`${month} tiene 31 días`)
} else if (month == "abril" || month == "junio" || month == "septiembre" || month == "noviembre") {
    console.log(`${month} tiene 30 días`)
} else {
    console.log(`${month} tiene 28 días`)
}
