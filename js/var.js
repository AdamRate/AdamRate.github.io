var Person;
var Person2;

function VarTest(x ,y) {
	return console.log(x + y);
	}
	
function helloWorld() {
	return console.log("Hello World");
	}

function increaseAge(){
		Person.Age += 1;
		return console.log(Person.Age);
	}

function increaseAgeP2(){
		Person2.Age += 1;
		return console.log(Person2.Age);
	}

function square(a){
		return console.log(a*a);
	}

function sumThree(a, b, c){
		return console.log(a + b + c);
	}

function submitForm(){
	var x = document.getElementById("PersonForm");
	var name =(x.elements[0].value);
	var age =(x.elements[1].value);
	var occ =(x.elements[2].value);
	makePerson(name,age,occ);
}

function makePerson(a,b,c){
	Person2 = {Name: "", Age: 0, Occupation: ""};
	Person2.Name =a;
	Person2.Age = parseInt(b);
	Person2.Occupation =c;
	console.log(Person2.Name, Person2.Age, Person2.Occupation);
}

function makeAdam(){
	Person = {Name: "Adam", Age: 22, Occupation: "IT"};
	console.log(Person.Name, Person.Age, Person.Occupation);
	console.log("Editing Person");
	Person.Name = "Nick";
	Person.Age = 21;
	Person.Occupation= "Bad IT Consultant";
	console.log(Person.Name, Person.Age, Person.Occupation);
}

function displayPerson(){
	console.log(Person);
}

function upper(){
	var One = 'He said "My name is Adam"';
	console.log(One);
	var One = One.toUpperCase();
	console.log(One);
}

function concat(){
	var str = "Adam"
	var num = 12;
	var conc = str + num;
	console.log(conc);
}

function stringArray(){
	var arr = ['Adam', 'is', 'the', 'Best'];
	console.log(arr);
	arr.push("Ever");
	console.log(arr);
	arr.splice(4,4);
	console.log(arr);
}

function checkAge(){
	if (parseInt(Person.Age) < 40 && parseInt(Person.Age) > 20)
		return console.log(true);
	else
		return console.log(false);
}

function forLoop(){
	for(var i = 1; i<11; i++){
		console.log(i);
	}
}

function forLoopDiv(){
	for(var i=1; i<11; i++){
		if(i%2 === 0){
			console.log(i);
		}
	}
}

function fizzBuzz(){
	customFizzBuzz(100, "Fizz", "Buzz");	
}

function submitFBForm(){
	var x = document.getElementById("FizzBuzzForm");
	var count =(x.elements[0].value);
	var fizz =(x.elements[1].value);
	var buzz =(x.elements[2].value);
	customFizzBuzz(count,fizz,buzz);
}
function customFizzBuzz(count, fizz, buzz){
	var response="";
	for(var i=1; i<count; i++){
		response ="";
		if(i%3 === 0){
			response += fizz;
		}
		if(i%5 === 0){
			response += buzz;
		}
		console.log(i + "= " + response);
	}
}

function iteration4(){
	var x = document.getElementById("iteration4Form");
	var count= parseInt((x.elements[0].value));

	while (count !=1){
		if (count % 3 === 0)
		{	
			console.log(count + " is divisble by 3");
			count = count/3;
		}
		else if (count %3 === 1)
		{
			console.log(count + " is not divisible by 1, subtracting 1");
			count += 1;
		}
		else if (count %3 === 2)
		{
			console.log(count + " is not divisible by 1, adding 1");
			count += 1;
		}
	}
}

function strings4(){
	var x = document.getElementById("strings4Form");
	var string = x.elements[0].value;
	var t =0;
	for (var i = 0; i<string.length; i++){
		if (string.charAt(i) === string.charAt(i+1) && string.charAt(i) === string.charAt(i+2)){
			t +=1;
			console.log(t);
			console.log(string.charAt(i));
		}
	}
}

function createDom(){
	var x=document.getElementById("dom1");
	x.innerHTML = "<p> </p>";
}

function addToDom(){
	var x =document.getElementById("dom1");
	var y = document.getElementById("addToDomForm");
	var string = y.elements[0].value;
	x.innerHTML = string;
}

function removeFromDom(){
	var x =document.getElementById("dom1");
	x.innerHTML ="";
}


