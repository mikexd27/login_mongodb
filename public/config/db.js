const mongoose = require('mongoose')

const conectarDB = async () => {
    try {
        awai = mongoose.connect('mongodb://127.0.0.1:27017/BDEP3', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`BD Conectada`)


    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = conectarDB