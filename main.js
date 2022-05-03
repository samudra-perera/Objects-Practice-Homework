// Objects Practice - From javascript.info/object
// The basics

//Hello Object
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name

// check for emptiness 
function isEmpty(obj) {
    return Object.keys(obj).length === 0
}
// Test 
let schedule = {};
alert(isEmpty(schedule))

//Sum object properties 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumObjectSalaries(obj) {
    sum = 0;
    for (let prop in obj) {
        sum += obj[prop]
    }
    return sum
}
alert(sumObjectSalaries(salaries))

// Create a function that modifies all numbers in an object and multiplies it by 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function multiplyNumeric(obj) {
      for (let prop in obj) {
          if (typeof obj[prop] == 'number') {
              obj[prop]*=2
          }
      }
      return obj
  }

  multiplyNumeric(menu)

  // Object Literals - Object Methods 

  //Make a calculator object that takes in two values and returns the sum and product
  let calculator = {
      read() {
        this.a = +prompt('Please enter the first number', 1)
        this.b = +prompt('Please enter the second number', 2)
      },

      sum() {
        return this.a + this.b 
      },

      mul() {
        return this.a * this.b
      }
  }

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this
    },
    down() {
      this.step--;
      return this 
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this
    }
  };

  ladder.up().up().down().showStep().down().showStep(); 

  // Constructor, Operator New

  // Re-create Calculator as a constructor function 

function Calculator() {
    this.read = function() {
        this.a = +prompt('Please enter the first number', 1)
        this.b = +prompt('Please enter the second number', 2)      
      };
    this.sum = function() {
        return this.a + this.b
      };
    this.mul = function() {
        return this.a * this.b
      };
  }

function Accumulator(num) {
    this.value = num;
    this.read = function() {
        this.value+= +prompt('Please enter a value to add', 0)
    }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);