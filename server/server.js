const express = require('express');
const path = require ('path');
const fs = require('fs');
const bodyParser = require('body-parser');

let app = express(); // THIS WILL CREATE AND RETURN OUR APP//

app.use(bodyParser.urlencoded({extended: false}));

app.post('/contact-form', (req, res) =>{
    console.log(req.body.email);
    console.log(req.body.name);
    res.send('thank you for the form')
})













// //THIS IS A LOGGER MIDDLEWARE// EVER REQUST THAT COMES THROUGH IT WILL CALL THIS FUNCTION//
// app.use((req, res, next) => {
//     fs.appendFileSync('log.txt', `${req.url}\n`);// THIS IS HOW I CAN TRACK EVERY REQUEST//
//     next(); // NEED TO PASS IT ON WITH THIS CALL//
// });


// app.get('/', (req,res) => {
//     res.send("Hello World");
// });

//^^ THE ABOVE CODE WILL RUN IF IT IS PLACED ABOVE THE STATIC^^//

app.use(express.static(path.join(__dirname, '../public'))) // THIS IS THE MIDDLWARE COMPONENT FOR APPLICATION FLOW//




// // THIS IS THE CREATION OF MY ROUTE//
// app.get('/order/:name', (req, res) =>{ // THIS WILL ALLOW ME TO RESPOND WITH ANY PARAMETER//
//     let name = req.params.name;
//     let email = req.query.email; //CAN BE COMPLETELY DYNAMIC BECAUSE OF THE QUERY STRING//
//     res.send(`this is ${name} and the email is ${email}`)
// });


app.listen(3000);// this is the browser request// WILL OPEN LOCALHOST 3000//

//^^ THE ABOVE IS THE BASICS TO CREATING A WEB SERVER//










//**THIS IS THE LONG WAY OF GRABING FILES **/
//app.get('/', (req, res) => { //THE IS THE CALLBACK OF THE ROOTSERVER//
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// app.get('/css/styles.css', (req, res) => { // THIS WILL GRAB MY STYLES.CSS FILES//
//     res.sendFile(path.join(__dirname, '../public/css/styles.css'));
// })