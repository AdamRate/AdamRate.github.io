/*jslint node: true */
'use strict';

let Person;
let Person2;

function VarTest(x, y) {
	return console.log(x + y);
}

function helloWorld() {
	return console.log("Hello World");
}

function increaseAge() {
	Person.Age += 1;
	return console.log(Person.Age);
}

function increaseAgeP2() {
	Person2.Age += 1;
	return console.log(Person2.Age);
}

function square(a) {
	return console.log(a * a);
}

function sumThree(a, b, c) {
	return console.log(a + b + c);
}

function submitForm() {
	let x = document.getElementById("PersonForm");
	let name = (x.elements[0].value);
	let age = (x.elements[1].value);
	let occ = (x.elements[2].value);
	makePerson(name, age, occ);
}

function makePerson(a, b, c) {
	Person2 = { Name: "", Age: 0, Occupation: "" };
	Person2.Name = a;
	Person2.Age = parseInt(b);
	Person2.Occupation = c;
	console.log(Person2.Name, Person2.Age, Person2.Occupation);
}

function makeAdam() {
	Person = { Name: "Adam", Age: 22, Occupation: "IT" };
	console.log(Person.Name, Person.Age, Person.Occupation);
	console.log("Editing Person");
	Person.Name = "Nick";
	Person.Age = 21;
	Person.Occupation = "Bad IT Consultant";
	console.log(Person.Name, Person.Age, Person.Occupation);
}

function displayPerson() {
	console.log(Person);
}

function upper() {
	let One = 'He said "My name is Adam"';
	console.log(One);
	One = One.toUpperCase();
	console.log(One);
}

function concat() {
	let str = "Adam";
	let num = 12;
	let conc = str + num;
	console.log(conc);
}

function stringArray() {
	let arr = ['Adam', 'is', 'the', 'Best'];
	console.log(arr);
	arr.push("Ever");
	console.log(arr);
	arr.splice(4, 4);
	console.log(arr);
}

function checkAge() {
	if (parseInt(Person.Age) < 40 && parseInt(Person.Age) > 20)
	{ return console.log(true); }
	else {
		return console.log(false);
	}
}

function forLoop() {
	for (let i = 1; i < 11; i++) {
		console.log(i);
	}
}

function forLoopDiv() {
	for (let i = 1; i < 11; i++) {
		if (i % 2 === 0) {
			console.log(i);
		}
	}
}

function fizzBuzz() {
	customFizzBuzz(100, "Fizz", "Buzz");
}

function submitFBForm() {
	let x = document.getElementById("FizzBuzzForm");
	let count = (x.elements[0].value);
	let fizz = (x.elements[1].value);
	let buzz = (x.elements[2].value);
	customFizzBuzz(count, fizz, buzz);
}
function customFizzBuzz(count, fizz, buzz) {
	let response = "";
	for (let i = 1; i < count; i++) {
		response = "";
		if (i % 3 === 0) {
			response += fizz;
		}
		if (i % 5 === 0) {
			response += buzz;
		}
		console.log(i + "= " + response);
	}
}

function iteration4() {
	let x = document.getElementById("iteration4Form");
	let count = parseInt((x.elements[0].value));

	while (count != 1) {
		if (count % 3 === 0) {
			console.log(count + " is divisble by 3");
			count = count / 3;
		}
		else if (count % 3 === 1) {
			console.log(count + " is not divisible by 1, subtracting 1");
			count += 1;
		}
		else if (count % 3 === 2) {
			console.log(count + " is not divisible by 1, adding 1");
			count += 1;
		}
	}
}

function strings4() {
	let x = document.getElementById("strings4Form");
	let string = x.elements[0].value;
	let t = 0;
	for (let i = 0; i < string.length; i++) {
		if (string.charAt(i) === string.charAt(i + 1) && string.charAt(i) === string.charAt(i + 2)) {
			t += 1;
			console.log(t);
			console.log(string.charAt(i));
		}
	}
}

function createDom() {
	let x = document.getElementById("dom1");
	x.innerHTML = "<p> </p>";
}

function addToDom() {
	let x = document.getElementById("dom1");
	let y = document.getElementById("addToDomForm");
	let string = y.elements[0].value;
	x.innerHTML = string;
}

function removeFromDom() {
	let x = document.getElementById("dom1");
	x.innerHTML = "";
}

function json1Ting() {
	let requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
	let request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function () {
		let requestData = request.response;
		console.log(requestData);
	};
}

let requestData;
function json2Ting() {
	let requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json';
	let request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function () {
		requestData = request.response;
		console.log(requestData);
		console.log(requestData[0]);
		alert("JSON Data has been Loaded");
	};
}

function printKingsNicely() {
	let length = requestData.length;
	for (let i = 0; i < length; i++) {
		console.log(requestData[i].nm);
		console.log(requestData[i].cty);
		console.log(requestData[i].hse);
		console.log(requestData[i].yrs + "\n");
	}
}

function searchKings() {
	let x = document.getElementById("searchKings");
	let input = x.elements[0].value;
	let length = requestData.length;

	for (let i = 0; i < length; i++) {
		let data = requestData[i];
		for (let name in data) {
			if (data.hasOwnProperty(name)) {
				if (input.indexOf(data[name]) !== -1) {
					console.log(requestData[i]);
				}
			}
		}
	}
}

let garageStore = [];
// function createGarage() {
// 	garageStore = {};
// }

function submitCar() {
	let x = document.getElementById("garageForm");
	let type = x.elements[0].value;
	let size = x.elements[1].value;
	let reg = x.elements[2].value;
	let iss = x.elements[3].value;
	addToGarage(type, size, reg, iss);
}

let vehicle;
function addToGarage(type, size, reg, issues) {
	vehicle = { type, size, reg, issues };
	garageStore.push(vehicle);
	let x = garageStore.length;
	console.log(x);
	console.log(garageStore[0]);
	console.log("Car Added:" + JSON.stringify(garageStore[x - 1]) + " Total: " + garageStore.length);
}

function removeFromGarage() {
	let id = document.getElementById("garageDelForm");
	let x = id.elements[0];
	garageStore.splice(x, 1);
	console.log(garageStore);
}

function showAllGarage() {
	console.log(garageStore);
}

function calcBill() {
	let id = document.getElementById("garageDelForm");
	let x = parseInt(id.elements[0].value);
	console.log(garageStore.length);
	if (x <= garageStore.length && x > 0) {
		console.log(`Car ${x} Fix Cost: £${(garageStore[x - 1].size) * 4 + (garageStore[x - 1].issues) * 100}  `);
	}
	else {
		console.log("Car does not exist");
	}
}

function calcBillAll() {
	for (let i = 0; i < garageStore.length; i++) {
		console.log(`Car ${i + 1} Fix Cost: £${(garageStore[i].size) * 4 + (garageStore[i].issues) * 100}  `);
	}
}

function getCommand() {
	let comm = document.getElementById("garageCommand");
	let val = comm.elements[0].value;
	val = val.split(" ");

	if (val[0].includes("add")) {
		if (val.length === 6) {
			addToGarage(val[1], val[2], val[3] + val[4], val[5]);
		}
		else {
			addToGarage(val[1], val[2], val[3], val[4]);
		}
	}

	if (val[0].includes("print")) {
		if (val.length === 2 && val[1] <= garageStore.length && val[1] != 0) {
			console.log(garageStore[val[1] - 1]);
		}
		else {
			showAllGarage();
		}
	}

	if (val[0].includes("bill")) {
		if (val.length === 2 && val[1] <= garageStore.length && val[1] != 0) {
			bill(val[1]);
		}
		else {
			calcBillAll();
		}
	}
}