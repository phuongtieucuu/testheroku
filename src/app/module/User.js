const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const UsersSchema = new Schema({
    username: {type: String},
    password: {type: String},
},{
    timestamps: true,
});

const Users = mongoose.model('Users', UsersSchema);
module.exports = Users

