//Solving problems using array functions on rest countries data.

let request = new XMLHttpRequest();
let url = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json";
request.open('GET',url);
request.onload=()=>{
    
	let data = JSON.parse(request.responseText);

    //Q.1 Get all the countries from Asia continent /region using Filter function
	let reg = data.filter( element => element.region === "Asia");
	console.log(reg);

//Q2 Get all the countries with a population of less than 2 lakhs using Filter function

    
	let population = data.filter( element => element.population < 200000);
    console.log(population);

// Q3) Print the following details name, capital, flag using forEach function


	data.forEach(function(element){
        console.log(`
        Name:${element.name}
        Capital: ${element.capital}
        Flag: ${element.flag}
        `)
    })


//Q4)  Print the total population of countries using reduce function


	let total_population=data.reduce((prev, element) => element.population + prev, 0);
    console.log(total_population);

//Q5) Print the country which uses US Dollars as currency.currencies: Array(1)


	let countries_USD=data.filter( element => element.currencies[0].code == 'USD');
    console.log(countries_USD);
}

request.send();