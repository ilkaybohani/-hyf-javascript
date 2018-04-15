// 1.1 Add the string to your file and log it. 
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
// 1.2 logging the lenght of myString.
let lenghtOfMyString = myString.length;
console.log(lenghtOfMyString);
//1.3 removing the commas from myString using replace method  global, case-insensitive .
let newString = myString.replace(/,/gi, " ");
//1.4 chwcking out if it worked.
console.log(newString);


//2. adding the array
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
// 2.1 & 2.2 adding turtle and logging the new array
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
// 2.3 adding meerkat array splice() method
favoriteAnimals.splice(1, 0, "meerkat");
// 2.4 what i thing the new value is
console.log("the new value of the array is going to be [ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle']");
// 2.5 logging the new value
console.log(favoriteAnimals);
//2.6 the length of the array
let arrayLenght = favoriteAnimals.length;
console.log("the array has a length of " + arrayLenght);
//2.7 deleting girrafe
favoriteAnimals.splice(3, 1);
//2.8 logging the new value
console.log(favoriteAnimals)
//2.9 finding the position of 'meerkat'
let position = favoriteAnimals.indexOf('meerkat');
//2.10 logging the index of 'meerkat'
console.log("The item you are looking for is at index " + position);


//More javascript
//1.function, 3 arguments and returns the sum of the these arguments.
function total(a, b, c) {
    return a + b + c;
}
console.log(total(1, 2, 3));

//2.Create a function named colorCar
function colorCar(x) {
    return "a " + x + " car";
}
console.log(colorCar("red"));

//3.Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
let v60 = { märke: "volvo", modell: "2014", color: "red" };
function carInfo() {
    console.log(v60);
}
console.log(carInfo(v60));




//4.vehicleType
function vehicleType(y, z) {
    if (z === 1) {
        console.log("a " + y + " motorbike");
    }
    if (z === 2) {
        console.log("a " + y + " car");
    }
}
console.log(vehicleType("blue", 1));//should print out "a blue motorbike"
console.log(vehicleType("red", 2));//should print out "a red car"


//5. 3====3
console.log(3 === 3);

//6. Creating another function called vehicle with age parameter

function vehicle(y, z, age) {
    let vehicleType;
    let vehicleAge;

    if (z === 1) {
        vehicleType = 'car';
    } else if (z === 2) {
        vehicleType = 'motorbike';
    }


    if (age === 0) {
        vehicleAge = 'new';
    } else {
        vehicleAge = 'used';
    }

    console.log("a " + y + " " + vehicleAge + " " + vehicleType);
}

console.log(vehicle("blue", 1, 5));// prints out a blue used car




//7. making a list of vehicle, an array
let vehicleList = ["motorbike", "caravan", "bike", "car", "truck"];
console.log(vehicleList); // expected to print ["motorbike", "caravan", "bike", "car", "truck"]

//8. getting the third element of the list
let thirdElement = vehicleList[2];
console.log(thirdElement); // expected to print "bike"

//9.
function whatVehicle(y, z, age) {
    let vehicleType = vehicleList[z - 1];
    let vehicleAge;
    if (age === 1) {
        vehicleAge = 'new';
    } else {
        vehicleAge = 'used';
    }

    console.log("a " + y + " " + vehicleAge + " " + vehicleType);
}
console.log(whatVehicle("green", 3, 1));//a green new bike


//10.
let announs = "Amazing Joe's Garage, we service ";
let len = vehicleList.length
for (i = 0; i < len - 2; i++) {

    announs += vehicleList[i] + "s, ";
}
announs += vehicleList[len - 2] + "s and " + vehicleList[len - 1] + "s.";

console.log(announs);// prints out Amazing Joe's Garage, we service motorbikes, caravans, bikes, cars and trucks.

//11. adding an element
vehicleList.push("boat");
console.log(vehicleList);//prints out ["motorbike", "caravan", "bike", "car", "truck", "boat"]
announs = "Amazing Joe's Garage, we service ";
len = vehicleList.length;
for (i = 0; i < len - 2; i++) {

    announs += vehicleList[i] + "s, ";
}
announs += vehicleList[len - 2] + "s and " + vehicleList[len - 1] + "s.";

console.log(announs);//prints out Amazing Joe's Garage, we service motorbikes, caravans, bikes, cars, trucks and boats.

//12. creating an empty object
let object = {};
console.log(object);// prints out {}

//13. 14 creating an object with the teachers name and the languages
let hyf = { teachers: "viktor, tommy and Wojtek", languages: "html,css and js" };
console.log(hyf);// prints out {teachers: "viktor, tommy and Wojtek", languages: "html,css and js"}

//15. == and ===
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log(z);//prints out [1, 2, 3]
console.log(x == y);//prints out false
console.log(x === y);//prints out false
console.log(z == y);//prints out true
console.log(z === y);//prints out true

//16.
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2
console.log(o3);// prints out {foo: "bar"}
o2 = "tree";
console.log(o2);// prints out tree, o2 is changed
console.log(o3);// prints out {foo: "bar"} , so changing o2 does not change o3!!
o2 = o3;// trying the other order
console.log(o2);// prints out {foo: "bar"} so there's no difference 
o1 = "bird";
console.log(o1);// prints out bird, o1 is changed
console.log(o3);// prints out {foo: "bar"} , so changing o1 does not change o3!!


//17.