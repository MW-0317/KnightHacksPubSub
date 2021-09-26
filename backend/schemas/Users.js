var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
    name: String,
    phone_number: String,
    pubsubs: [String] // List of query names
});

var UserModel = mongoose.model('UserModel', UserModelSchema);

module.exports = {
    UserModelSchema,
    UserModel
}