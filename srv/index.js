
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// const employeeRoutes = require('./routes/employee.routes')
const userRoutes = require('./routes/user.routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

export default (app, http) => {
    
    // app.use('/api/employees', employeeRoutes)
    app.use('/api/users', userRoutes)

}
