// Nothing here yet...
// Make sure to link your JS in index.html!
//constructor with parameters
class pop {
    constructor (country, soda, year) {
        this.country = country;
        this.soda = soda;
        this.year = year;
  
    }

    //method that returns a piece of information
    describe () {
        return `${this.soda} soda was created in ${this.country} in ${this.year}.`;
}
}

//four new variables that group information
const pop1 = new pop ('The United States', 'Pepsi', '1893');
const pop2 = new pop ('The United States', 'Coca-Cola', '1886');
const pop3 = new pop ('The United States', 'Dr Pepper', '1885');
const pop4 = new pop ('The United States', 'Barqs Root Beer', '1898');

//new array for all sodas
const allPops = [pop3, pop2, pop1, pop4];

// Write a function with a single parameter car that, when called, will console.log the Car.describe method for the car used in the parameter.
// Inside the function's code block, simply return car.describe; so the function returns the describe phrase for the car in the parameters.

// Declare the function using function {{ functionName }} (car) {};
function read (pop) {
    console.log(pop.describe());
};

//loop through all sodas with allPops and a for loop with .length. Call the function with the function name and parenthesis around parameters.

for (var i = 0; i < allPops.length ; i++) {
 
    read(allPops[i]);
}

//a function to append pop to dom and create a new div in the preexisting container for each pop. 
function appendPopToDOM(pop) {
    var container = document.getElementById('container');
    var newDiv = document.createElement('div');
    newDiv.className = 'popContainer'; 
    var describeText = document.createTextNode(`${pop.describe()}`);
    newDiv.appendChild(describeText);
    container.appendChild(newDiv);
}

for (var i = 0; i < allPops.length; i++) {
    appendPopToDOM(allPops[i]);
}
