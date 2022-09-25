/*========================================
==========================================
            Ejercicios Nivel 1
==========================================
=========================================*/

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
/*

1. Declare an empty array;
2. Declare an array with more than 5 number of elements
3. Find the length of your array
4. Get the first item, the middle item and the last item of the array
5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
7. Print the array using console.log()
8. Print the number of companies in the array
9. Print the first company, middle and last company
10. Print out each company
11. Change each company name to uppercase one by one and print them out
12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
14. Filter out companies which have more than one 'o' without the filter method
15. Sort the array using sort() method
16. Reverse the array using reverse() method
17. Slice out the first 3 companies from the array
18. Slice out the last 3 companies from the array
19. Slice out the middle IT company or companies from the array
20. Remove the first IT company from the array
21. Remove the middle IT company or companies from the array
22. Remove the last IT company from the array
23. Remove all IT companies

*/

/*-----------------------------------------
            Ejercicio N° 1           
------------------------------------------*/

const array001 = [];

/*-----------------------------------------
            Ejercicio N° 2          
------------------------------------------*/

const array002 = [1, 2, 3, 4, 5];

/*-----------------------------------------
            Ejercicio N° 3          
------------------------------------------*/

const array003 = [1, 2, 3, 4, 5];
console.log(array003.length)

/*-----------------------------------------
            Ejercicio N° 4          
------------------------------------------*/

const array004 = [1, 2, 3, 4, 5];

let firstItem = array004[0];
let middleItem = array004[Math.floor(array004.length / 2)];
let lastItem = array004[array004.length - 1]
console.log(firstItem, middleItem, lastItem)

/*-----------------------------------------
            Ejercicio N° 5          
------------------------------------------*/

const mixedDataTypes = [
    'Gustavo',
    false,
    35,
    'Iky',
    ['Milu', 'Michi'],
    7
    ];

/*-----------------------------------------
            Ejercicio N° 6          
------------------------------------------*/

const itCompanies01 = [ Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon ];

/*-----------------------------------------
            Ejercicio N° 7          
------------------------------------------*/

const itCompanies02 = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ];
console.log(itCompanies02)

/*-----------------------------------------
            Ejercicio N° 8          
------------------------------------------*/

const itCompanies03 = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ];
console.log(itCompanies03.length)

/*-----------------------------------------
            Ejercicio N° 9          
------------------------------------------*/

const itCompanies04 = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ];
let middleCompanie = itCompanies04[Math.floor(itCompanies04.length / 2)]

console.log(itCompanies04[0], middleCompanie, itCompanies04[itCompanies04.length - 1])

/*-----------------------------------------
            Ejercicio N° 10          
------------------------------------------*/

const itCompanies05 = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ];

console.log(itCompanies05.join(', '))

/*-----------------------------------------
            Ejercicio N° 11          
------------------------------------------*/

const itCompanies06 = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ];
let arrayPrint = itCompanies06.join(', ');

console.log(arrayPrint.toUpperCase())


/*-----------------------------------------
            Ejercicio N° 12          
------------------------------------------*/

const itCompanies07 = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ];

itCompanies07[itCompanies07.length - 1] = `and ${itCompanies07[itCompanies07.length - 1]} are big IT companies.`;


console.log(itCompanies07.join(', '))

/*-----------------------------------------
            Ejercicio N° 13          
------------------------------------------*/

const itCompanies08 =  [ 'facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon' ];
let userCompany = prompt('Ingrese una compañía de Internet', 'Ej, "Google"');

if (itCompanies08.includes(userCompany.toLowerCase())) {
    console.log(`Ya existe ${userCompany}`)
} else {
    console.log('No se encontró esa compañia')
}

// Averiguar como poner el array en minúsculas no-manualmente

/*-----------------------------------------
            Ejercicio N° 14          
------------------------------------------*/


/*-----------------------------------------
            Ejercicio N° 15          
------------------------------------------*/

const itCompanies09 =  [ 'facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon' ];

itCompanies09.sort();

console.log(itCompanies09);

/*-----------------------------------------
            Ejercicio N° 16          
------------------------------------------*/

const itCompanies10 = [ 'facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon' ];

itCompanies10.reverse();

console.log(itCompanies10);

/*-----------------------------------------
            Ejercicio N° 17          
------------------------------------------*/

const itCompanies11 = [ 'facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon' ];

console.log(itCompanies11.slice(0,3))

/*-----------------------------------------
            Ejercicio N° 18          
------------------------------------------*/

const itCompanies12 = [ 'facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon' ];

console.log(itCompanies12.slice((itCompanies12.length - 1) - 2,(itCompanies12.length)))

/*-----------------------------------------
            Ejercicio N° 19          
------------------------------------------*/

const itCompanies13 = [ 'facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon' ];

let middleCompanie2 = Math.floor(itCompanies13.length / 2)

console.log(itCompanies13.slice(middleCompanie2, middleCompanie2 + 1))

/*-----------------------------------------
            Ejercicio N° 20          
------------------------------------------*/

const itCompanies14 = [ 'facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon' ];

itCompanies14.shift();

console.log(itCompanies14);

/*-----------------------------------------
            Ejercicio N° 21          
------------------------------------------*/

const itCompanies15 = [ 'facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon' ];
let middleCompanie3 = Math.floor(itCompanies15.length / 2)


console.log(itCompanies15.slice(middleCompanie3, middleCompanie3+1));

/*-----------------------------------------
            Ejercicio N° 22          
------------------------------------------*/

const itCompanies16 = [ 'facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon' ];

itCompanies16.pop();

console.log(itCompanies16);

/*-----------------------------------------
            Ejercicio N° 23          
------------------------------------------*/

const itCompanies17 = [ 'facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon' ];

itCompanies17.slice(0, itCompanies17.length);

console.log(itCompanies17)

/*========================================
==========================================
            Ejercicios Nivel 2
==========================================
==========================================

1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

2. First remove all the punctuations and change the string to array and count the number of words in the array

3. In the following shopping cart add, remove, edit items
        - Add 'Meat' in the beginning of your shopping cart if it has not been already added
        - Add Sugar at the end of you shopping cart if it has not been already added
        - Eemove 'Honey' if you are allergic to honey
        - Modify Tea to 'Green Tea'

4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

6. Concatenate the following two variables and store it in a fullStack variable.

/*-----------------------------------------
            Ejercicio N° 1          
------------------------------------------*/

/*-----------------------------------------
            Ejercicio N° 2          
------------------------------------------*/

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

text = text.replace('people.', 'people')
text = text.replace('Python.', 'Python')
text = text.replace('HTML,', 'HTML')
text = text.replace('CSS,', 'CSS')
text = text.replace('JS,', 'JS')
text = text.replace('React,', 'React')

const textArray = text.split(' ');

console.log(textArray);
console.log(textArray.length);

/*-----------------------------------------
            Ejercicio N° 3          *************************************************************
------------------------------------------*/

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey', 'Sugar'];
const honeyAlergic = true;
let honeyStart = shoppingCart.indexOf('Honey');
let honeyEnd = shoppingCart.indexOf('Honey') + 1;



if (shoppingCart.includes('Meat')) {
    console.log('Si, tiene Meat');
} else { 
    shoppingCart.unshift('Meat');
}


if (shoppingCart.includes('Sugar')) {
    console.log('Si, tiene Sugar')
} else { 
    shoppingCart.push('Sugar');
}

if (honeyAlergic == true) {
    shoppingCart.splice( honeyStart, honeyEnd )
} else {
    console.log('Se queda la miel')
}

shoppingCart[3] = 'Green Tea'

console.log(shoppingCart)

// No puedo extraer  "honey" del array. Corregir luego

/*-----------------------------------------
            Ejercicio N° 4          
------------------------------------------*/

const countries02 = [
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

if (countries02.includes('Ethiopia')) {
    let mayus = countries02[countries02.indexOf('Ethiopia')]
    console.log( mayus.toUpperCase())
} else {
    countries02.push('Ethiopia')
}

/*-----------------------------------------
            Ejercicio N° 5          
------------------------------------------*/

const webTechs02 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  if (webTechs02.includes('Sass')) {
    console.log( 'Sass is a CSS preprocess')
  } else {
    webTechs02.push('Sass')
    console.log(webTechs02)
  }

/*-----------------------------------------
            Ejercicio N° 6          
------------------------------------------*/

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

/*========================================
==========================================
            Ejercicios Nivel 3
==========================================
==========================================

1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

- Sort the array and find the min and max age
- Find the median age(one middle item or two middle items divided by two)
- Find the average age(all items divided by number of items)
- Find the range of the ages(max minus min)
- Compare the value of (min - average) and (max - average), use abs() method 

2.Slice the first ten countries from the countries array

3. Find the middle country(ies) in the countries array

4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

/*-----------------------------------------
            Ejercicio N° 1          *******************************************************
------------------------------------------*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort()

console.log(`The Min. age is: ${ages[0]} and the Max. age is: ${ages[ages.length - 1]}`);

console.log(`The range of the ages is ${ (ages[ages.length - 1]) - (ages[0]) } `)

// Completar los puntos que faltan

/*-----------------------------------------
            Ejercicio N° 2          
------------------------------------------*/

const countries03 = [
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
  ]
  
  
  console.log(`Los primeros 10 paises en el array son ${countries03.slice(0, 10)}`) ;

/*-----------------------------------------
            Ejercicio N° 3          
------------------------------------------*/


  console.log(`El país del medio del array es: ${countries03[Math.floor(countries03.length / 2)]}`) 

/*-----------------------------------------
            Ejercicio N° 4          
------------------------------------------*/ 

  if ( (countries03.length % 2) == 0) {
            
        let middleCountry = Math.floor(countries03.length / 2)
        let primeraMitad = countries03.slice(0, middleCountry)
        let segundaMitad = countries03.slice(middleCountry , countries03.length)

        console.log(primeraMitad)
        console.log(segundaMitad)
   
    } else {
                
        let middleCountry = Math.floor(countries03.length / 2)
        primeraMitad = countries03.slice(0, middleCountry+1)
        segundaMitad = countries03.slice(middleCountry+1 , countries03.length) 
        
        console.log(primeraMitad)
        console.log(segundaMitad)
    }