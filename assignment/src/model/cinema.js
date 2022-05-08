const mongoose = require('mongoose');

var cinemaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    // ticketPrice: {
    //     type: Number,
    //     required: true,
    // },
    city: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    screenNumber:{
        type: Number,
        required: true,
        trim:true
    }
    // seats: {
    //     type: [Schema.Types.Mixed],
    //     required: true,
    // },
    // seatsAvailable: {
    //     type: Number,
    //     required: true,
    // }
}, { timestamps: true });

module.exports = mongoose.model('cinema', cinemaSchema)