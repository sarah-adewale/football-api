// const { response } = require('express')
const express = require('express')
const app = express() //consuming all the stuff that comes with express.
const PORT = 8000
const cors = require('cors')

app.use(cors()) //so that localhost users can use api

//create obj
const tea = {
    'oolong':{
        'type': 'herbal',
        'origin': 'idora-falls',
        'waterTemp': 200,
        'caffinated': true,
        'flavor': 'lemon'
    },
       'lipton':{
        'type': 'green-tea',
        'origin': 'idora-falls',
        'waterTemp': 180,
        'caffinated': false,
        'flavor': 'lemon'
    },
       'unknown':{
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'caffinated': false,
        'flavor': 'unknown'
    }
}

//eventlistener to a network request
app.get('/', (request, response) => { //when our server hears a request do parenthesis
    response.sendFile(__dirname + '/index.html') //sending the html file in the main directory
})

app.get('/api/:name', (request, response)=>{ //name is a query parameter
    const teaName = request.params.name.toLowerCase() //request the parameters and attach to variable teaName
    if( tea[teaName] ){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
    // response.json(tea)
})

app.listen(process.env.PORT || PORT, ()=> { //if this port is on heroku, use heroku's port number or use mine if it isnt on heroku
    console.log(`The server is running on port ${PORT}! Better go catch it!`)
})
