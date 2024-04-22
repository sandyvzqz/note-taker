//import dependencies
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const PORT = process.env.PORT || 3001;
//initialize app with express
const app = express();

//express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use(htmlRoutes);
app.use(apiRoutes);

//listen method for specified port
app.listen(PORT, () =>{
    console.log(`Listening at http://localhost:${PORT}`)
});