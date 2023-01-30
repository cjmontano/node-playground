// Object property shorthand

const name = 'CJ'
const userAge = 44

const user = {
  // next line is short hand for this 'name: name,'
  name,
  age: userAge,
  location: 'Crystal Lake'
}

console.log(user)

// Object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2 // if this was not here, the console would print '5' because it is a default set in the destructuring below
}

// const label = product.label
// const stock = product.stock

// const { label: productLabel, stock, rating = 5 } = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

/* Notes
  The next line is declaration, using an arrow function, but also desctructuring the product object in the argument.
  Javascript knows this because product is sent as an argument when it is called later, effectively making it the same as '{ label, stock } = product'
*/
const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock)
}

transaction('order', product)
transaction('order')
