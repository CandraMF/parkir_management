
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const employeeRoutes = require('./routes/employee.routes')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

export default (app, http) => {
    
    app.use('/api/employees', employeeRoutes)

}
