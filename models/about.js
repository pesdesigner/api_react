const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var about = new Schema({
    title: {
        type: String
    },
    desc: {
        type: String
    },
    originName: {
        type: String
    },
    fileName: {
        type: String
    }
},
    {
        timestamps: true //creatAt updateAt
    }
);
mongoose.model('About', about);