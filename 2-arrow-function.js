/*
// long form function
const square = function (x) {
  return x * x
}
*/

/*
// arrow function
const square = (x) => {
  return x * x
}

*/
/*
// inline arrow function
const square = (x) => x * x
*/

// console.log(square(2))

/*
// Object with a method (property as a function) that ***DOES*** work
const event = {
  name: 'Birthday Party',
  printGuestList: function () {
    console.log('Guest list for ' + this.name)
  }
}
*/

/*
// Object with an arrow function (property as a function) that ***DOES NOT** work (arrow f(x) do not bind this)
const event = {
  name: 'Birthday Party',
  printGuestList: () => {
    console.log('Guest list for ' + this.name)
  }
}
*/

// Object with a different syntax for method (property as a function) that ***DOES*** works
const event = {
  name: 'Birthday Party',
  guestList: ['CJ', 'Lyla', 'Eva'],
  printGuestList () {
    console.log('Guest list for ' + this.name)
    // The next line will not work because it IS bound.  We do not want it to bind, so we use arrow function
    // this.guestList.forEach(function (guest) {
    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name)
    })
  }
}

event.printGuestList()
