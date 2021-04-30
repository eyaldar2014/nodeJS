const bodyParser = require('body-parser');
const cors = require('cors')

const express = require('express')
const app = express();
const port = 5000;
const usersRoute = require('./routes/users.routes');
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req)=>{
//   console.log(req.method)
// });

app.use('/routes', usersRoute);

app.listen(port,()=>{
    console.log(`application start at ${port}`)
})


// 1 // Add users : Can add users to the bank. Each user has the following: passport id, cash(default 0), credit(default 0).