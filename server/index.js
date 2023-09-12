const express = require("express")
var mongoose = require('mongoose');
const cors = require("cors")
const EmployeeModel =  require("./models/Employee")
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1:27017/employee';
mongoose.connect(mongoDB);
 //Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express()
app.use(express.json())
app.use(cors())

app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body).then(employees => res.json(employees)).catch(err=>res.json(err))
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email, password: password })
        .then(user => {
            if (user) {
                res.json("Success");
            } else {
                res.json("Invalid email or password");
            }
        })
        .catch(err => {
            res.json(err);
        });
});

app.listen(3001, ()=>{
    console.log("server is running")
})
