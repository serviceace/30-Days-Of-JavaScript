/*========================================
==========================================
            Ejercicios Nivel 1
==========================================
==========================================
1. Declare a function fullName and it print out your full name.

2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

3. Declare a function addNumbers and it takes two two parameters and it returns sum.

4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more

14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0

/*-----------------------------------------
            Ejercicio N° 1          
------------------------------------------*/

function fullName () {
    let firstName = 'Gustavo';
    let lastName = 'Robles';
    let espacio = ' ';
    let nombreCompleto = firstName + espacio + lastName;
    console.log(nombreCompleto)
}

fullName()

/*-----------------------------------------
            Ejercicio N° 2          
------------------------------------------*/

function fullName02 (nombre1 , nombre2) {
    let firstName = nombre1;
    let lastName = nombre2;
    let espacio = ' ';
    let nombreCompleto = firstName + espacio + lastName;
    console.log(nombreCompleto)
}

fullName02('Michi', 'Gomez')


/*-----------------------------------------
            Ejercicio N° 3          
------------------------------------------*/

function addNumbers (num1, num2) {
    let numeroA = num1;
    let numeroB = num2;
    let suma = numeroA + numeroB;
    return suma
}

console.log(addNumbers(2, 3))

/*-----------------------------------------
            Ejercicio N° 4          
------------------------------------------*/

function areaOfRectangle (num1, num2) {
    let length = num1;
    let width = num2;
    let area = length * width
    return area
}

console.log(areaOfRectangle(10, 7))

/*-----------------------------------------
            Ejercicio N° 5          
------------------------------------------*/

function perimeterOfRectangle (num1, num2) {
    let length = num1;
    let width = num2;
    let perimeter = 2 * (length + width);
    return perimeter
}

console.log(perimeterOfRectangle(5, 8))

/*-----------------------------------------
            Ejercicio N° 6          
------------------------------------------*/

function volumeOfRectPrism (num1, num2, num3) {
    let length = num1;
    let width = num2;
    let height = num3;
    let prism = length * width * height
    return prism
}

console.log(volumeOfRectPrism(4, 9, 3))

/*-----------------------------------------
            Ejercicio N° 7         
------------------------------------------*/

function areaOfCircle(r) {
    let area = Math.PI * r * r;
    return area
}

console.log(areaOfCircle(10))

/*-----------------------------------------
            Ejercicio N° 8         *********************************************************
------------------------------------------*/

/*-----------------------------------------
            Ejercicio N° 9         
------------------------------------------*/

function density(num1, num2) {
    let masa = num1;
    let volumen = num2;
    let density = masa / volumen ;
    return density
}

console.log(density(12, 22))

/*-----------------------------------------
            Ejercicio N° 10         
------------------------------------------*/

function speed(num1, num2) {
    let distance = num1;
    let timeTaken = num2;
    let speed = distance / timeTaken;
    return speed
}

console.log(speed(100, 2))

/*-----------------------------------------
            Ejercicio N° 11         
------------------------------------------*/

function weight (num1) {
    let masa = num1;
    let gravity = 9.81;
    let weight = masa * gravity;
    return weight
}

console.log(weight(25))

/*-----------------------------------------
            Ejercicio N° 12         
------------------------------------------*/

function convertCelsiusToFahrenheit (num1) {
    let gradosCelsius = num1;
    let gradosFarenheit = (gradosCelsius * 9 / 5) + 32;
    return gradosFarenheit
}

console.log(convertCelsiusToFahrenheit(40))

/*-----------------------------------------
            Ejercicio N° 13         
------------------------------------------*/

function bodyMassIndex(num1, num2) {
    let weight = num1;
    let height = num2;
    let bmi = weight / (height * height)
    if (bmi <= 18.5 ) {
        console.log('Your body mass index is Underweight')
    } else if ( bmi <= 24.9 ) {
        console.log('Your body mass index is Normal')
    } else if ( bmi <= 29.9 ) {
        console.log('Your body mass index is Overweight')
    } else if ( bmi >= 30 ) { 
        console.log('Your body mass index is Obese')}
}

bodyMassIndex(80, 1.75)

/*-----------------------------------------
            Ejercicio N° 14         
------------------------------------------*/

function checkSeason(mes) {
    let estacion = mes;
    if ( mes == 'enero' || mes == 'febrero' || mes == 'marzo' ) {
        console.log('Estamos en Verano')
    } else if ( mes == 'abril' || mes == 'mayo' || mes == 'junio') {
        console.log('Estamos en Otoño')
    } else if ( mes == 'julio' || mes == 'agosto' || mes == 'septiembre' ) {
        console.log('Estamos en Invierno')
    } else {
        console.log('Estamos en Primavera')
    }
}

checkSeason('julio')

/*-----------------------------------------
            Ejercicio N° 15         
------------------------------------------*/

function findMax(num1, num2, num3) {
    let numeroMaximo = Math.max(num1, num2, num3)
    return numeroMaximo
}

console.log(findMax(5, 9, 1))

/*========================================
==========================================
            Ejercicios Nivel 2
==========================================
==========================================

1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

showDateTime()
08/01/2020 04:08

5. Declare a function name swapValues. This function swaps value of x to y.

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4

6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.

14. Write a function which takes any number of arguments and return the sum of the arguments

sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10

15. Writ a function which generates a randomUserIp.

16. Write a function which generates a randomMacAddress

17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

console.log(randomHexaNumberGenerator());
'#ee33df'

18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

console.log(userIdGenerator());
41XTDbE


/*-----------------------------------------
            Ejercicio N° 1         ************************************************************
------------------------------------------*/

function solveLinEquation(numA, numB, numC) {
    let valorA = numA;
    let valorB = numB;
    let valorC = numC;
    let equationLinear = (valorA * x) + (valorB * y) + valorC == 0
    return equationLinear
}

console.log(solveLinEquation(3, 9, 1))

// como le pongo valor a "X" y a "Y" ?

/*-----------------------------------------
            Ejercicio N° 2         *******************************************************************
------------------------------------------*/

function solveQuadEquation(numA, numB, numC) {
    let valorA = numA;
    let valorB = numB;
    let valorC = numC;
    let quadraticEquation = ((valorA * x) * 2) + (valorB * x) + valorC == 0
}

console.log(solveQuadEquation(1, 4, 4))

// como pongo valor a "x" y a "y" ??

/*-----------------------------------------
            Ejercicio N° 3         
------------------------------------------*/

const pichichos = ['Erzo', 'Batuta', 'Goku', 'Snoopy', 'Cosita', 'Cuisi', 'Rubia', 'Negrita', 'Pancha', 'Perrote', 'Nano' ];

function printArray(array) {
    for (let i = 0; i < pichichos.length; i++) {
        console.log(array[i])
}}

printArray(pichichos)

/*-----------------------------------------
            Ejercicio N° 4         
------------------------------------------*/

function showDateTime() {
    const now = new Date();
    const horas = now.getHours();
    let segundos = now.getSeconds();
    let mostrarFecha = `${now.getDay()}/${now.getMonth()}/${now.getFullYear()}  ${now.getHours()}:${now.getMinutes()} `
    return mostrarFecha
}

console.log(showDateTime())

/*-----------------------------------------
            Ejercicio N° 5         
------------------------------------------*/

/*-----------------------------------------
            Ejercicio N° 6         
------------------------------------------*/

const arrayNumeritos = [1, 2, 3, 4, 5];
const arrayReverso = [];

function reverseArray(array) {
    for ( let i = array.length - 1; i >= 0; --i ) {
        arrayReverso.push(array[i])
    }
}

console.log(arrayNumeritos)
console.log(reverseArray(arrayNumeritos))
console.log(arrayReverso)

/*-----------------------------------------
            Ejercicio N° 7        
------------------------------------------*/

const arrayCosas = ['alfa','beta','gamma','omega' ];
const capitalizedarray = [];

function capitalizeArray(array) {
    for ( let i = 0; i < array.length; i++ ) {
        capitalizedarray.push(array[i].toUpperCase())
    }  
}

capitalizeArray(arrayCosas)
console.log(capitalizedarray)

/*-----------------------------------------
            Ejercicio N° 8        
------------------------------------------*/

const arrayExample = [];

function addItem(item) {
    arrayExample.push(item)
}

addItem('caca')
console.log(arrayExample)

/*-----------------------------------------
            Ejercicio N° 9        
------------------------------------------*/

const pichichos02 = ['Erzo', 'Batuta', 'Goku', 'Snoopy', 'Cosita', 'Cuisi', 'Rubia', 'Negrita', 'Pancha', 'Perrote', 'Nano' ];

function removeItem(index) {
    pichichos02.splice(index,1)
}

removeItem(3)
console.log(pichichos02)

/*-----------------------------------------
            Ejercicio N° 10        
------------------------------------------*/

/*-----------------------------------------
            Ejercicio N° 11        
------------------------------------------*/

/*-----------------------------------------
            Ejercicio N° 12        
------------------------------------------*/

/*-----------------------------------------
            Ejercicio N° 13        
------------------------------------------*/

function evensAndOdds(num) {
    let numPAR = 0;
    let numIMPAR = 0;
    let resultado = ''
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            numPAR += 1;
        } else if (!(i % 2 == 0)) {
            numIMPAR += 1;
        }
    } return console.log(`Numeros Pares: ${numPAR} y Numeros Impares: ${numIMPAR}`)
}

evensAndOdds(100)

/*-----------------------------------------
            Ejercicio N° 14        
------------------------------------------*/

function sumAllNums() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

sumAllNums(1,2,3,4)

/*-----------------------------------------
            Ejercicio N° 15        
------------------------------------------*/

function randomUserIp() {
    let numIP = `${Math.round(Math.random() * 255)}.${Math.round(Math.random() * 255)}.${Math.round(Math.random() * 255)}.${Math.round(Math.random() * 255)}`
    return numIP
}

console.log(randomUserIp())

/*-----------------------------------------
            Ejercicio N° 16        
------------------------------------------*/

function randomMacAddress() {
    const arrayMacAdress = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let numMac = `${arrayMacAdress[Math.round(Math.random() * 15)]}${arrayMacAdress[Math.round(Math.random() * 15)]}-${arrayMacAdress[Math.round(Math.random() * 15)]}${arrayMacAdress[Math.round(Math.random() * 15)]}-${arrayMacAdress[Math.round(Math.random() * 15)]}${arrayMacAdress[Math.round(Math.random() * 15)]}-${arrayMacAdress[Math.round(Math.random() * 15)]}${arrayMacAdress[Math.round(Math.random() * 15)]}-${arrayMacAdress[Math.round(Math.random() * 15)]}${arrayMacAdress[Math.round(Math.random() * 15)]}-${arrayMacAdress[Math.round(Math.random() * 15)]}${arrayMacAdress[Math.round(Math.random() * 15)]}`
    return numMac
}

console.log(randomMacAddress())

/*-----------------------------------------
            Ejercicio N° 17        
------------------------------------------*/

function randomHexaNumberGenerator() {
    const exaNumPool = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    const exaNumFinal = [];
    for (i = 0; i <= 5; i++) {
        let randomNum = Math.round(Math.random() * 15 );
        exaNumFinal.push(exaNumPool[randomNum])
    } 
    return `#${exaNumFinal.join('')}` 
}

randomHexaNumberGenerator()

/*-----------------------------------------
            Ejercicio N° 18        
------------------------------------------*/

function userIdGenerator() {
    const charactersPool = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'x', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const userID = [];
    for (i = 0; i <= 7; i++) {
        let randomNum =  Math.round(Math.random() * 35 );
        userID.push(charactersPool[randomNum])
    }
    return userID.join('')
}

console.log(userIdGenerator())

// podría poner letras en mayúsculas, pero debería repetirlas.

/*========================================
==========================================
            Ejercicios Nivel 3
==========================================
==========================================

1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'

2. Write a function name rgbColorGenerator and it generates rgb colors.

rgbColorGenerator()
rgb(125,244,255)

3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

7. Write a function generateColors which can generate any number of hexa or rgb colors.

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

11. Call your function sum, it takes any number of arguments and it returns the sum.

12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
  'Not Found'

15. Write a function called isPrime, which checks if a number is prime number.

16. Write a functions which checks if all items are unique in the array.

17. Write a function which checks if all the items of the array are the same data type.

18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

sevenRandomNumbers()
[(1, 4, 5, 7, 9, 8, 0)]

20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

/*-----------------------------------------
            Ejercicio N° 1        ************************************************************
------------------------------------------*/

    let largoID = 2; //poner promp acá
    let howManyTimes = 2;
    
    const userID02 = [''];
    const userIDGeneratorResult = [''];

function userIdGeneratedByUser() {
    const charactersPool = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'x', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for ( let e = 0; e <= howManyTimes; e++) {
        for (let i = 0; i <= largoID ; i++) {
            let randomNum = Math.round(Math.random() * 35 );
            userID02.push(charactersPool[randomNum])
            }   
            userIDGeneratorResult.push(userID02.join())
    }   
    return  userIDGeneratorResult.split
}

userIdGeneratedByUser()
console.log(userIDGeneratorResult)

// tengo que separar los distintos ID

/*-----------------------------------------
            Ejercicio N° 2       ************************************************************
------------------------------------------*/


function rgbColorGenerator() {
    let rgbColor = '';
    let rgbR = Math.round(Math.random() * 255)
    let rgbG = Math.round(Math.random() * 255)
    let rgbB = Math.round(Math.random() * 255)
    rgbColor = `rgb: (${rgbR},${rgbG},${rgbB})`;
    return rgbColor
    
}

console.log(rgbColorGenerator())

// No me convence tener que llamar a la funcion antes del console.log. ¿Otra forma?


/*-----------------------------------------
            Ejercicio N° 3       *************************************
------------------------------------------*/


function arrayOfHexaColors() {
    const charactersPool = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    const hexaColors = ['#'];

    for (let i = 0; i < 5; i++) {
        let randomNum = Math.round( Math.random() * 16 )
        hexaColors.push(charactersPool[randomNum])

    }
    return hexaColors.join('')
} 

console.log(arrayOfHexaColors())

// tengo la funcion, pero necesito hacer que se repita y acomode como las anteriores

/*-----------------------------------------
            Ejercicio N° 4       
------------------------------------------*/

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
            Ejercicio N° 8       ***********************************
------------------------------------------*/

const pichichos03 = ['Erzo', 'Batuta', 'Goku', 'Snoopy', 'Cosita', 'Cuisi', 'Rubia', 'Negrita', 'Pancha', 'Perrote', 'Nano' ]; 
const arrayShuffle = [];

function shuffleArray(arr) {
    for (let i = 0; i <= arr.length; i++) {
        let randomNum = Math.round( Math.random() * (arr.length - 1) )
            if (arr[randomNum] !== arrayShuffle ) {
                arrayShuffle.push(arr[randomNum])
            }

        }
    return arrayShuffle
}

shuffleArray(pichichos03)

// funciona, pero se repiten items

/*-----------------------------------------
            Ejercicio N° 9       *************************************************
------------------------------------------*/

function factorial(num) {
    for (let i = 0; i <= num; i++) {
        let pasoA = i * i;
        let pasoB = (i+1) * pasoA;
        console.log(pasoB)
    }
}

factorial(5)

// No es lo que me piden... me maree @_@

/*-----------------------------------------
            Ejercicio N° 10       
------------------------------------------*/

// keh!?

/*-----------------------------------------
            Ejercicio N° 11       
------------------------------------------*/

function sum(){
    let numero = 0;
    for (let i = 0; i < arguments.length; i++) {
        numero += arguments[i]
    }
    return numero
}

sum(2,3,4,5,6,7)

/*-----------------------------------------
            Ejercicio N° 12       ***********************************************
------------------------------------------*/

const arrayDePrueba = ['1','2','3','4','5'];

function sumOfArrayItems() {
    const numerito = 5;
        if ( typeof numerito == typeof arguments ) {
            for (let i = 0; i < arguments.length; i++) {
                let suma = 0;
                suma += arguments[i];
                return suma
        }
    } 
}

sumOfArrayItems(arrayDePrueba)

//no se, no me sale...

/*-----------------------------------------
            Ejercicio N° 13       
------------------------------------------*/

/*-----------------------------------------
            Ejercicio N° 14       ******************************************************
------------------------------------------*/

const arrayDePrueba02 = ['UNO', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS', 'SIETE'];

function modifyArray() {
    if (arrayDePrueba02.length <= 5) {
        let mensajito = 'vamos bien';
    } 
    return mensajito
}

modifyArray(arrayDePrueba02)

// no se qué hago mal...

/*-----------------------------------------
            Ejercicio N° 15       
------------------------------------------*/
/*-----------------------------------------
            Ejercicio N° 16       
------------------------------------------*/
/*-----------------------------------------
            Ejercicio N° 17       
------------------------------------------*/
/*-----------------------------------------
            Ejercicio N° 18       
------------------------------------------*/
/*-----------------------------------------
            Ejercicio N° 19       
------------------------------------------*/
/*-----------------------------------------
            Ejercicio N° 20       
------------------------------------------*/


