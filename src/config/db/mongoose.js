const mongoose = require('mongoose')

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/nodemy');
        console.log('Thanh cong')
    }
    catch (err) {
        console.log('Loi')
    }
}
module.exports = {connect}