const mongoose = require('mongoose')

async function connect(){
    try {
        await mongoose.connect('mongodb://thaihuy-project.herokuapp.com/nodemy');
        console.log('Thanh cong')
    }
    catch (err) {
        console.log('Loi')
    }
}
module.exports = {connect}