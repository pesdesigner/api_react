const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var home = new Schema({
    title: {
        type: String
    },
    caption: {
        type: String
    },
    icon1: {
        type: String
    },
    servTitle1: {
        type: String
    },
    servDesc1: {
        type: String
    },

    icon2: {
        type: String
    },
    servTitle2: {
        type: String
    },
    servDesc2: {
        type: String
    },

    icon3: {
        type: String
    },
    servTitle3: {
        type: String
    },
    servDesc3: {
        type: String
    },
},
    {
        timestamps: true
    }
);
mongoose.model('Home', home);