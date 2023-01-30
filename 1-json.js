const fs = require('fs')

/* creating JSON in the program, storing it file
const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)

fs.writeFileSync('1-json.json', bookJSON)
*/

/* retrieving JSON from file, placing in string buffer and printing
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const parseData = JSON.parse(dataJSON)
console.log(parseData.author)
*/

const dataBuffer = fs.readFileSync('1-json.json')
const stringBuffer = dataBuffer.toString()
const parseData = JSON.parse(stringBuffer)

parseData.name = 'CJ'
parseData.age = 45

fs.writeFileSync('1-json.json', JSON.stringify(parseData))
