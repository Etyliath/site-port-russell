const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Catway = new Schema({
    catwayNumber: {
        type: Number,
        trim: true,
        required: [true, 'le numéro est requis'],
        unique: true,
    },
    type: {
        type: String,
        trim: true,
    },
    catwayState: {
        type: String,
        trim: true,
        required: [true, 'l\'état est requis'],
    },
},{
    timestamps: true
})

module.exports= mongoose.model('Catway',Catway)