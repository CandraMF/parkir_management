
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


export default (app, http) => {
    
    app.use('/api/v1/employees', employeeRoutes)
    
}
