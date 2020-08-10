const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    content: {
        type: String,
       required: true
    },
    date: {
        type: Date,

    }
});

module.exports = mongoose.model('List', listSchema);