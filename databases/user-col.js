const mongoose = require('mongoose');
const Schems = mongoose.Schema;

const UserSchema = new Schems({
    name: String,
    age: Number
})

const UserOrigin = mongoose.model('User', UserSchema);

module.exports = UserOrigin;