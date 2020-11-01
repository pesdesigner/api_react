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
        timestamps: true //creatAp updateAp
    }
);
mongoose.model('About', about);