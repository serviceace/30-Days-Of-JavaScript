/*========================================
==========================================
            Ejercicios Nivel 1
==========================================
==========================================

1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

2. Check if type of '10' is equal to 10

3. Check if parseInt('9.8') is equal to 10

4. Boolean value is either true or false.
    - Write three JavaScript statement which provide truthy value.
    - Write three JavaScript statement which provide falsy value.

5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
Find the length of python and jargon and make a falsy comparison statement.

6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python

7. Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.


/*-----------------------------------------
            Ejercicio N° 1          
------------------------------------------*/

let firstName = 'Gustavo';
let lastName = 'Robles';
let country = 'Argentina';
let city = 'Merlo';
let age = 35;
let isMarried = false;
let year = 2022;

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

/*-----------------------------------------
            Ejercicio N° 2          
------------------------------------------*/

console.log(typeof('10') === typeof(10));

/*-----------------------------------------
            Ejercicio N° 3          
------------------------------------------*/

console.log(parseInt('9.8') === 10);

/*-----------------------------------------
            Ejercicio N° 4          
------------------------------------------*/

let uno = 1;
let dos = "2";
let tres = true;

let cuatro = '';
let cinco = false;
let seis = 7 < 4;

/*-----------------------------------------
            Ejercicio N° 5          
------------------------------------------*/

let comparison01 = 4 > 3;       // True
console.log(comparison01);
let comparison02 = 4 >= 3;      // True
console.log(comparison02);
let comparison03 = 4 < 3;       // False
console.log(comparison03);
let comparison04 = 4 <= 3;      // False
console.log(comparison04);
let comparison05 = 4 == 4;      // True
console.log(comparison05);
let comparison06 = 4 === 4;     // True
console.log(comparison06);
let comparison07 = 4 != 4;      // False
console.log(comparison07);
let comparison08 = 4 !== 4;     // False
console.log(comparison08);
let comparison09 = 4 != '4';    // False
console.log(comparison09);
let comparison10 = 4 == '4';    // True
console.log(comparison10);
let comparison11 = 4 === '4';   // False
console.log(comparison11);

let sentence001 = 'python';
let sentence002 = 'jargon';

let coso = sentence001.length;
let coso02 = sentence002.length + 1;

console.log(coso == coso02)

/*-----------------------------------------
            Ejercicio N° 6          
------------------------------------------*/

let comparacion001 = 4 > 3 && 10 < 12       // True
console.log(comparacion001)
let comparacion002 = 4 > 3 && 10 > 12       // False
console.log(comparacion001)
let comparacion003 = 4 > 3 || 10 < 12       // True
console.log(comparacion001)
let comparacion004 = 4 > 3 || 10 > 12       // True
console.log(comparacion001)
let comparacion005 = !(4 > 3)               // False
console.log(comparacion001)
let comparacion006 = !(4 < 3)               // True
console.log(comparacion001)
let comparacion007 = !(false)               // True
console.log(comparacion001)
let comparacion008 = !(4 > 3 && 10 < 12)    // False
console.log(comparacion001)
let comparacion009 = !(4 > 3 && 10 > 12)    // False
console.log(comparacion001)
let comparacion010 = !(4 === '4')           // True
console.log(comparacion001)

let sentence003 = 'dragon';
let sentence004 = 'python';
console.log( !sentence003.includes('on') && sentence003.includes('on')  )

/*-----------------------------------------
            Ejercicio N° 7         
------------------------------------------*/

// What is the year today?
const now01 = new Date();
console.log(now.getFullYear());

//What is the month today as a number?
const now02 = new Date();
console.log(now02.getMonth());

//What is the date today?
const now03 = new Date();
console.log(now03.getDate());

//What is the day today as a number?
const now04 = new Date();
console.log(now04.getDay());

//What is the hours now?
const now05 = new Date();
console.log(now05.getHours());

//What is the minutes now?
const now06 = new Date();
console.log(now06.getMinutes());

//Find out the numbers of seconds elapsed from January 1, 1970 to now.
const now07 = new Date();
console.log(now07.getTime());