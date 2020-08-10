const mongoose = require('mongoose');
const Schema = mongoose.Schema;

noTimeSchema = new Schema({
    content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Notime', noTimeSchema);