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

/*========================================
==========================================
            Ejercicios Nivel 2
==========================================
==========================================


1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h)
2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
7. Compare the slope of above two questions.
8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
10. If the length of your name is greater than 7 say, your name is long else say your name is short.
11. Compare your first name length and your family name length and you should get this output.
12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
15. Create a human readable time format using the Date time object


/*-----------------------------------------
            Ejercicio N° 1        
------------------------------------------*/

let triangleBase = prompt('Ingrese la base de su triangulo', 'Base del Triangulo') ;
let triangleHeight = prompt('Ingrese la altura de su triangulo', 'Altura del triangulo') ;


console.log('El area de su triangulo es '+(0.5 * triangleBase * triangleHeight));

/*-----------------------------------------
            Ejercicio N° 2        
------------------------------------------*/

let triangleSideA = parseInt(prompt('Ingrese el largo de la primer cara del triangulo'));
let triangleSideB = parseInt(prompt('Ingrese el largo de la segunda cara del triangulo'));
let triangleSideC = parseInt(prompt('Ingrese el largo de la tercer cara del triangulo'));

console.log('El perímetro de su triangulo es '+(triangleSideA += triangleSideB += triangleSideC));

/*-----------------------------------------
            Ejercicio N° 3        
------------------------------------------*/

let userLength = parseInt(prompt('Ingrese un valor para el largo'));
let userWidth = parseInt(prompt('Ingrese un valor para el ancho'));

let rectangleArea = userLength * userWidth ;
let rectanglePerimeter = 2 * (userLength += userWidth);

alert('El area de un rectangulo con esas medidas sería: ' + rectangleArea);
alert('El perimetro de un rectangulo con esas medidas sería: ' + rectanglePerimeter);

/*-----------------------------------------
            Ejercicio N° 4        
------------------------------------------*/

let userRadius = parseInt(prompt('Ingrese el radio de si circulo: '));
const PI = 3.14;

let circleArea = PI * userRadius * userRadius ;
let circleCircumference = 2 * PI * userRadius ;

alert('El area de su circulo es: ' + circleArea);
alert('La Circumferencia de si circulo es: ' + circleCircumference);

/*-----------------------------------------
            Ejercicio N° 5        
------------------------------------------*/

/*-----------------------------------------
            Ejercicio N° 6     
------------------------------------------*/

/*-----------------------------------------
            Ejercicio N° 7       
------------------------------------------*/

/*-----------------------------------------
            Ejercicio N° 8      
------------------------------------------*/

let valorX = parseInt(prompt('Ingrese el valor de X: ')) ;
let valorY = (valorX ** 2) + (6 * valorX) + 9 ;

console.log('El valor de Y es: ' + valorY);

// X debe ser "-3" para que su valor llegue a 0 

/*-----------------------------------------
            Ejercicio N° 9      
------------------------------------------*/

let userHours = parseInt(prompt('Ingrese las horas trabajadas en la semana: '));
let userRate  = parseInt(prompt('Ingrese el pago por horas trabjadas: '));


console.log('Tu cobro por semanas es de: '+(userRate * userHours));

/*-----------------------------------------
            Ejercicio N° 10      
------------------------------------------*/

let userName01 = prompt('Ingrese su Nombre: ');

userName01.length > 7
  ? console.log('Tu nombre es largo.')
  : console.log('Tu nombre es corto.')

/*-----------------------------------------
            Ejercicio N° 11
------------------------------------------*/

let userFirstName = prompt('Ingrese su Nombre: ');
let userLastName = prompt('Ingrese su Apellido: ');

userFirstName.length > userLastName.length
  ? console.log(`Tu primer nombre ${userFirstName} es mas largo que tu apellido ${userLastName} `)
  : console.log(`Tu primer nombre ${userFirstName} es mas corto que tu apellido ${userLastName} `)

/*-----------------------------------------
            Ejercicio N° 12
------------------------------------------*/

let myAge = 250;
let yourAge = 25;

console.log('Yo soy '+ (myAge -= yourAge) + ' años mas viejo que tú.')

/*-----------------------------------------
            Ejercicio N° 13
------------------------------------------*/

let userAge = parseInt(prompt('Ingrese su año de nacimiento: ', 'Ej. 1986')) ;

const now08 = new Date()
let ageOK = now08.getFullYear() - userAge;
let ageNot = 18 - ageOK;


ageOK > 18
? alert(`Tienes ${ageOK} años. Eres lo suficientemente mayor para conducir.`)
: alert(`Tienes ${ageOK} años. Tendrás permiso para conducir dentro de ${ageNot} años.`)

/*-----------------------------------------
            Ejercicio N° 14
------------------------------------------*/


