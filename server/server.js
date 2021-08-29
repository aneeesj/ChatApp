const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
//my common routes
app.use('/api',require('./routes/index'))

db.sequelize.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log(`DB Contected Server Listing at: http://localhost:${PORT}`);
    });

});