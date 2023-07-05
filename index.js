const express = require('express');
const app = express();

const port = 7000;

app.use('/', require('./routes'));

// set up view engine 
app.set('view engine', 'ejs');
app.set('views', './views');




app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is Running on port: ${port}`);
});
