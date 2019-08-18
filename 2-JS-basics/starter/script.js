/**************************
* Variables and Data Types
*/

/*
var firstName = "John";
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
*/


/**************************
* Variable Mutations and type coercion
*/

//Type Coercion
/*
var firstName = "John";
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;

job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old '+ job + '. Is he married? ' + isMarried);

// Variable Mutation

age = 'twenty eight';
alert(firstName + ' is a ' + age + ' year old '+ job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(lastName);
*/


/**************************
* Basic Operators
*/

/*
var Curryear, birthYearJohn, birthYearMark, ageJohn, ageMark;

//Math Operators
Curryear = 2019
ageJohn = 28;
ageMark = 33

birthYearJohn = Curryear - ageJohn;
birthYearMark = Curryear - ageMark;


console.log(birthYearJohn);
console.log(Curryear + 2);
console.log(Curryear * 2);
console.log(Curryear / 10);

// Logical Operator

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeOf Operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");

var x;
console.log(typeof x);
*/
/**************************
* Operator Precedence
*/

/*
var now = 2019;
var yearJohn = 1989;
var legalDrinkingAge = 18;

// Multople Operators
var isLegalDrinkingAge = now - yearJohn >= legalDrinkingAge;
console.log(isLegalDrinkingAge);


// Grouping 
ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple Assignments
var x, y;

x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);
*/

/**************************
*Code Challenge #1 - Correct!
*/

/*
var massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark, isgreaterBMI;

massJohn = prompt("Enter John's weight in kg");
heightJohn = prompt("Enter John's height in m");

massMark = prompt("Enter Marks's weight in kg");
heightMark = prompt("Enter Marks's height in m");

bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);

console.log("john :  " +bmiJohn + " mark : " + bmiMark)

isgreaterBMI = bmiJohn > bmiMark;

console.log("Is John's BMI greater than Marks? " + isgreaterBMI);
*/

/**************************
*Conditionals - If / else statements
*/

/*
var massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark, isgreaterBMI;

massJohn = prompt("Enter John's weight in kg");
heightJohn = prompt("Enter John's height in m");

massMark = prompt("Enter Marks's weight in kg");
heightMark = prompt("Enter Marks's height in m");

bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);

if(bmiJohn > bmiMark){
    console.log('John\'s BMI is greater than marks');
}
else{
    console.log('Marks BMI is greater than john\'s');
}
*/


/**************************
*Boolean Logic
*/

/*
var firstName = 'John';
var age = 20;

if(age < 13){
    console.log(firstName + ' is a boy');
}
else if(age >=13 && age < 20){
    console.log(firstName + ' is a teenager');
}
else if(age >=20 && age < 30){
    console.log(firstName + ' is a young man');
}
else{
    console.log(firstName + ' is a man');
}
*/

/**************************
*Turnery operator and switch statements
*/

/*
var firstName = 'John';
var age = 20;

// Turnary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch statement

var job = 'instructor';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code');
        break;

    case 'driver':
        console.log(firstName + ' drives an uber in lisbon');
        break;

    case 'designer':
        console.log(firstName + ' designes beautiful websites');
        break;
    
    default:
        console.log(firstName + ' does something else');

}

switch (true){
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >=13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >=20 && age <30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
        break;
}

*/

/**************************
*Truthy and Falsy Values and equality operators
*/

//Falsy Values: undefined, null, 0, '', NaN
//Truthy Values: Not Falsy Values

/*
var height = 23;

if(height || height === 0){
    console.log('Variable is defined');
} 
else {
    console.log('Variable has not been defined');
}

// Equality operators

if(height == '23'){
    console.log('The == operator does type coercion!');
}

*/

/**************************
*Coding Challenge 2
*/

var johnGame1 = 189;
var johnGame2 = 120;
var johnGame3 = 103;

var mikeGame1 = 129;
var mikeGame2 = 94;
var mikeGame3 = 123;

var maryGame1 = 97;
var maryGame2 = 134;
var maryGame3 = 105;

var johnAverage = (johnGame1 + johnGame2 + johnGame3) / 3;
var mikeAverage = (mikeGame1 + mikeGame2 + mikeGame3) / 3;
var maryAverage = (maryGame1 + maryGame2 + maryGame3) / 3;



if (johnAverage > mikeAverage && maryAverage) {
        console.log('John\'s team wins with an average of ' + johnAverage);
    } 
    else if (mikeAverage > johnAverage && maryAverage) {
        console.log('Mike\'s team wins with an average of ' + mikeAverage);
    }
    else if(maryAverage > johnAverage && mikeAverage){
        console.log('Mary\'s team wins with an average of ' + maryAverage);
    }
    else if( johnAverage === mikeAverage && maryAverage){
        console.log('John\s team has an average of ' + johnAverage + ', Mike\'s team has an average of ' + mikeAverage + ' and Mary\'s team has an average of ' + maryAverage + ', therefore its a Draw' );
    }

  