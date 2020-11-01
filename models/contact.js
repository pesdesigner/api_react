const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contact = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    subject: {
        type: String
    },
    message: {
        type: String
    }
},
    {
        timestamps: true
    }
);
mongoose.model('Contact', contact);