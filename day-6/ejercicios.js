/*========================================
==========================================
            Ejercicios Nivel 1
==========================================
==========================================

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

1. Iterate 0 to 10 using for loop, do the same using while and do while loop

2. Iterate 10 to 0 using for loop, do the same using while and do while loop

3. Iterate 0 to n using for loop

4. Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######

5.     Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100

6. Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000

7. Use for loop to iterate from 0 to 100 and print only even numbers

8. Use for loop to iterate from 0 to 100 and print only odd numbers

9. Use for loop to iterate from 0 to 100 and print only prime numbers

10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

The sum of all numbers from 0 to 100 is 5050.

11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

  [2550, 2500]

13. Develop a small script which generate array of 5 random numbers

14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

15. Develop a small script which generate a six characters random id:

5j2khz

/*-----------------------------------------
            Ejercicio N° 1          
------------------------------------------*/

for (let i = 0; i <= 10; i++) {
  console.log(i)
}

let example001 = 0;

while (example001 <= 10) {
  console.log(example001)
  example001++
}

do {
  console.log(example001)
  example001++
} while (example001 <= 10)


/*-----------------------------------------
            Ejercicio N° 2          
------------------------------------------*/

for (let i = 10; i >= 0; i--) {
  console.log(i)
}

let example002 = 10;

while (example002 >= 0) {
  console.log(example002)
  example002--
}

do {
  console.log(example002)
  example002--
} while (example002 >= 0)

/*-----------------------------------------
            Ejercicio N° 3          ????
------------------------------------------*/

let example003 = 20;

for (let i = 0 ; i <= example003; i++) {
  console.log(i)
}

/*-----------------------------------------
            Ejercicio N° 4          **********************************************************
------------------------------------------*/

let example004 = '#';

for (let i = 0; i <= 7; ++i) {
  console.log(example004)
  example004 += '#'
}

// No se porqué me queda mas largo de 7

/*-----------------------------------------
            Ejercicio N° 5          
------------------------------------------*/

for (let i = 0; i <= 10; i++) {
  console.log(`${i} X ${i} = ${i * i} `)
}

/*-----------------------------------------
            Ejercicio N° 6          ********************************************************
------------------------------------------*/

for ( let i = 0; i <= 10; i++) {
  console.log(`${i} ${i * i} ${i * i * i} `)
}

// Funciona, pero intenté usar Math.pow pero me daba error D:

/*-----------------------------------------
            Ejercicio N° 7          
------------------------------------------*/

for ( let i = 0; i <= 100; i++) {
  if (i % 2 == 0 ) {
    console.log(i)
  } else {}
}

/*-----------------------------------------
            Ejercicio N° 8          
------------------------------------------*/

for ( let i = 0; i <= 100; i++) {
  if (i % 2 !== 0 ) {
    console.log(i)
  } else {}
}

/*-----------------------------------------
            Ejercicio N° 9          ******************************************************
------------------------------------------*/

for ( let i = 0; i <= 100; i++) {
  if (i % i == 0 ) {
    console.log(i)
  } else if ( i % 1 == 0) { 
    console.log(i)
  } else {}
}

// no se me ocurre como sacar los numeros primos D:

/*-----------------------------------------
            Ejercicio N° 10          
------------------------------------------*/

const example005 = [];
let sum01 = 0;

for ( let i = 1; i <= 100 ; i++) {
    example005.push(i)
  }

for (let i = 0; i < example005.length; i++) {
  sum = sum + example005[i]
}

console.log(`La suma de todos los numeros del 0 al 100 es ${sum}`)

/*-----------------------------------------
            Ejercicio N° 11          
------------------------------------------*/

const example006 = [];
let sumPAR = 0;
let sumIMPAR = 0;

for ( let i = 1; i <= 100 ; i++) {
    example006.push(i)
  }

for (let i = 0; i < example006.length; i++) {
  if ( i % 2 == 0 ) {
    sumPAR = sumPAR + example006[i]
  } else if ( i < example006.length) {
    sumIMPAR = sumIMPAR + example006[i]
  } else {}
}

console.log(`La suma de todos los numeros par del 0 al 100 es ${sumPAR}. La suma de todos los numeros impar del 0 al 100 es ${sumIMPAR}`)

/*-----------------------------------------
            Ejercicio N° 12          
------------------------------------------*/

const example007 = [];
let sumPAR01 = 0;
let sumIMPAR01 = 0;
const example008 = [];

for ( let i = 1; i <= 100 ; i++) {
    example007.push(i)
  }

for (let i = 0; i < example007.length; i++) {
  if ( i % 2 == 0 ) {
    sumPAR01 = sumPAR01 + example007[i]
  } else if ( i < example007.length) {
    sumIMPAR01 = sumIMPAR01 + example007[i]
  } else {}
}

example008.push(sumPAR01)
example008.push(sumIMPAR01)

console.log(example008)

/*-----------------------------------------
            Ejercicio N° 13          
------------------------------------------*/

const example009 = [];

for (let i = 0; example009.length <= 4; ++i) {
    example009.push(Math.round(Math.random() * 100))
  }

console.log(example009)

/*-----------------------------------------
            Ejercicio N° 14          
------------------------------------------*/

const example010 = [];

while ( example010.length <= 4) {
  let numerillo = Math.round(Math.random() * 10)
  if ( example010.includes(numerillo) ) {
    console.log('YASTA!', numerillo)
  } else {
    example010.push(numerillo)
  }
}

console.log(example010)

    
/*-----------------------------------------
            Ejercicio N° 15          
------------------------------------------*/

const abcdario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'x', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let idRandom = [];

for (let i = 0; i <= 5; i++) {
  let randomNum = Math.round(Math.random() * 36 )
  idRandom.push(abcdario[randomNum])
}

console.log(idRandom.join(''))

/*========================================
==========================================
            Ejercicios Nivel 2
==========================================
==========================================

1. Develop a small script which generate any number of characters random id:

  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba

2. Write a script which generates a random hexadecimal number.

  '#ee33df'

3. Write a script which generates a random rgb color number.

  rgb(240,180,80)

4. Using the above countries array, create the following new array.

  ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

5. Using the above countries array, create an array for countries length'.

  [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

6. Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]

7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

  ['Finland','Ireland', 'Iceland']

8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

  ['Albania', 'Bolivia','Ethiopia']

9. Using the above countries array, find the country containing the biggest number of characters.

  Ethiopia

10. Using the above countries array, find the country containing only 5 characters.

  ['Japan', 'Kenya']

11. Find the longest word in the webTechs array

12. Use the webTechs array to create the following array of arrays:

  [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

16. Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
    ]
  
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB

  */

/*-----------------------------------------
            Ejercicio N° 1          
------------------------------------------*/

const abcdario02 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'x', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let numeroRandom = Math.round(Math.random() * 100) ;
let idRandom02 = [];


for (let i = 0; i <=  numeroRandom; i++) {
  let randomNum02 = Math.round(Math.random() * 36 )
  idRandom02.push(abcdario02[randomNum02])
}

console.log(idRandom02.join(''))

// Funciona, pero la longitud del ID no es del todo random

/*-----------------------------------------
            Ejercicio N° 2          
------------------------------------------*/

const example011 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
let numHex = [];

for (let i = 0; i <= 5; i++) {
  let randomNum = Math.round(Math.random() * 16 )
  numHex.push(example011[randomNum])
}

console.log(`#${numHex.join('')}`)

/*-----------------------------------------
            Ejercicio N° 3          
------------------------------------------*/

let rgbR = Math.round(Math.random() * 255)
let rgbG = Math.round(Math.random() * 255)
let rgbB = Math.round(Math.random() * 255)

console.log(`rgb (${rgbR},${rgbG},${rgbB})`)

/*-----------------------------------------
            Ejercicio N° 4          
------------------------------------------*/

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

const countries02 = [];

for (let i = 0; i <= 9; i++ ) {
  countries02.push(countries[i].toUpperCase())
}

console.log(countries02)

/*-----------------------------------------
            Ejercicio N° 5          
------------------------------------------*/

const countries03 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];
const countries04 = [];

for (let i = 0; i <= 10; i++ ) {
  countries04.push(countries03[i].length)
}

console.log(countries04)

/*-----------------------------------------
            Ejercicio N° 6          ***************************************************************
------------------------------------------*/

const countries05 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

const countriesFullData = [
  ['Pais', 'ABC', 7] 

  ];

for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      countriesFullData[i] = [`${countries05[j]}`, 'Que tal?', '8']
    }
    
}

console.log(countriesFullData)

// No me zale~ :B

/*-----------------------------------------
            Ejercicio N° 7          *************************************************
------------------------------------------*/

const countries06 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Iceland',
  'Japan',
  'Kenya'
];
const paisesLandia = [];

for ( const pais of countries06 ) {
  if (pais.includes('land')) {
    paisesLandia.push(pais)
  } else {
    console.log('All these countries are without land')
  }
} 

console.log(paisesLandia)

// No se limita a imprimir los paises con "land" y repite el mensaje de else por cada item del array. Como evitarlo?
    
/*-----------------------------------------
            Ejercicio N° 8         ********************************************** 
------------------------------------------*/

const countries07 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Iceland',
  'Japan',
  'Kenya'
];
const paisesEndIa = [];

for ( const pais of countries07 ) {
  if (pais.includes('ia')) {
    paisesEndIa.push(pais)
  } else {
    console.log('These are countries ends without ia')
  }
} 

console.log(paisesEndIa)

// No se limita a imprimir los paises con "ia" y repite el mensaje de else por cada item del array. Como evitarlo?

/*-----------------------------------------
            Ejercicio N° 9          
------------------------------------------*/

const countries08 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Iceland',
  'Japan',
  'Kenya'
];
let paisLargo = 0;
let biggestCountrie = '';

for ( const pais of countries08 ) {
  if ( pais.length > paisLargo) {
    paisLargo =+ pais.length
  }
}

for (const pais of countries08 ) {
  if (pais.length == paisLargo )
  biggestCountrie = pais
}

console.log(biggestCountrie) 

/*-----------------------------------------
            Ejercicio N° 10          
------------------------------------------*/


const countries09 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Iceland',
  'Japan',
  'Kenya'
];

const pais5letras = [];

for ( const pais of countries09 ) {
  if ( pais.length == 5 ) {
    pais5letras.push(pais)
  }
}

console.log(pais5letras)

/*-----------------------------------------
            Ejercicio N° 11          
------------------------------------------*/

const webTechs01 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
let longestTech01 = 0;
let biggestTech01 = ' '; 

for ( const tech of webTechs01 ) {
  if ( tech.length > longestTech01 ) {
    longestTech01 =+ tech.length
  }
}

for ( const tech of webTechs01 ) {
  if ( tech.length == longestTech01 ){
    biggestTech01 = tech 
  }
}

console.log(biggestTech01)

/*-----------------------------------------
            Ejercicio N° 12          *************************************************************
------------------------------------------*/

const webTechs02 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

const techArray = [];

for (const tech of webTechs02 ){
    techArray.push([tech, tech.length])
}

console.log(techArray)

// Funciona, pero el array no se imprime como el ejemplo

/*-----------------------------------------
            Ejercicio N° 13          
------------------------------------------*/

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

let acronimo = '';

for (const tech of mernStack) {
   acronimo = acronimo+tech[0]
}

console.log(acronimo)

/*-----------------------------------------
            Ejercicio N° 14          *****************************************************
------------------------------------------*/

const webTechs03 =  ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (const tech of webTechs03) {
  console.log(tech)
}

// Supongo que está bien. Entendí esto~

/*-----------------------------------------
            Ejercicio N° 15          ******************************************************
------------------------------------------*/

const fruitArray = ['banana', 'orange', 'mango', 'lemon'];

let frutasLargo = fruitArray.length

const fruitArrayReverse = [];

for (let i = frutasLargo; i >= 0; i-- ) {
    fruitArrayReverse.push(fruitArray[i])
}

console.log(fruitArrayReverse)

// Funciona, pero hay un item fantasma que no se que hace ahi

/*-----------------------------------------
            Ejercicio N° 16          
------------------------------------------*/

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

const fullStackList = fullStack[0].concat(fullStack[1]);


for (let i = 0; i < fullStackList.length; i++) {
  console.log(fullStackList[i])
}

/*========================================
==========================================
            Ejercicios Nivel 3
==========================================
==========================================

1. Copy countries array(Avoid mutation)
2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
3. Sort the webTechs array and mernStack array
4. Extract all the countries contain the word 'land' from the countries array and print it as array
5. Find the country containing the hightest number of characters in the countries array
6. Extract all the countries contain the word 'land' from the countries array and print it as array
7. Extract all the countries containing only four characters from the countries array and print it as array
8. Extract all the countries containing two or more words from the countries array and print it as array
9. Reverse the countries array and capitalize each country and stored it as an array

/*-----------------------------------------
            Ejercicio N° 1          
------------------------------------------*/

const countries10 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

const countriesCopy = [];

for (const pais of countries10) {
  countriesCopy.push(pais)
}

console.log(countriesCopy)

// Funciona, pero no se a que se refiere con "evitar la mutacion"

/*-----------------------------------------
            Ejercicio N° 2          
------------------------------------------*/

const countries11 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

const sortedCountries = [];

for (const pais of countries11) {
  sortedCountries.push(pais)
}

sortedCountries.sort()

console.log(sortedCountries)

/*-----------------------------------------
            Ejercicio N° 3          
------------------------------------------*/

const webTechs04 = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB' ];

const mernStack01 = ['MongoDB', 'Express', 'React', 'Node'];

webTechs04.sort();
mernStack01.sort();

console.log(webTechs04, mernStack01)

/*-----------------------------------------
            Ejercicio N° 4          
------------------------------------------*/

const countries12 = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];

const landArray = [];

for (const pais of countries12) {
  if ( pais.includes('land') ) {
    landArray.push(pais)
  }}

  console.log(landArray)

/*-----------------------------------------
            Ejercicio N° 5           *******************************************************
------------------------------------------*/

const countries13 = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];

let longestCountrie = 0;

for (const pais of countries13) {
    if ( pais.length > longestCountrie ) {
      longestCountrie =+ pais.length
    } 
}

for (const pais of countries13 ) {
  if ( pais.length == longestCountrie) {
    !pais.includes('Timor')
    console.log(pais)
  }
}

console.log(longestCountrie)

// Imprime 2 paises, no se como evitar que imprima el segundo

/*-----------------------------------------
            Ejercicio N° 6          
------------------------------------------*/

// Repetido?

/*-----------------------------------------
            Ejercicio N° 7          
------------------------------------------*/

const countries14 = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];

const countriesCortitos = [];

for (const pais of countries14) {
  if ( pais.length == 4 ) {
    countriesCortitos.push(pais)
  }
}

console.log(countriesCortitos)

/*-----------------------------------------
            Ejercicio N° 8          
------------------------------------------*/

const countries15 = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];

const countriesTwoWords = [];

for (const pais of countries15) {
  if (pais.includes(' ') ) {
    countriesTwoWords.push(pais)
  }
}

console.log(countriesTwoWords)

/*-----------------------------------------
            Ejercicio N° 9          
------------------------------------------*/

const countries16 = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];

const countriesRemake = [];

for (const pais of countries16) {
  countriesRemake.push(pais.toUpperCase())
  }

countriesRemake.reverse()

console.log(countriesRemake)