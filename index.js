'use strict'

let mongoose = require('mongoose');
let app = require('./app');
let port = 3900;

mongoose.set('useFindAndModify',false); // desactiva este metodo viejo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog',{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("Conexion existosa");

    //crear servidor
    app.listen(port,() => {
        console.log("Servidor corriendo en http://localhost:"+port);
    });
});


