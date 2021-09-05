const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/cases', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Conectado ao Mongo'))
    .catch((err) => console.error(err))