const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Reservation = new Schema({
    catwayNumber: {
        type: Number,
        trim: true,
        required: [true, 'le numéro est requis'],
    },
    clientName: {
        type: String,
        trim: true,
        required: [true, 'le numéro est requis'],
    },
    boatName: {
        type: String,
        trim: true,
        required: [true, 'le nom du bateau est requis'],
    },
    checkIn: {
        type: Date, default: Date.now,
    },
    checkOut: {
        ttype: Date
    },
},{
    timestamps: true
})

module.exports= mongoose.model('Reservation',Reservation)