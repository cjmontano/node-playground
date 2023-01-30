const http = require('http')
const baseUrl = 'http://api.weatherstack.com/current?access_key=d86e4eef6d75528024bde4e42230c998&units=f&query=45,-75'

const request = http.request(baseUrl, (response) => {
  // let simply means 'not const'
  let data = ''

  response.on('data', (chunk) => {
    data = data + chunk.toString()
    // console.log(chunk)
  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})

request.on('error', (error) => {
  console.log('An error:', error)
})

request.end()
