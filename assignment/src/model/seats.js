const mongoose = require('mongoose');

var seatsSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    cinemaId: {
        required: 'Cinema is required',
        type: mongoose.Types.ObjectId, 
        refs: 'cinema'
    }
}, { timestamps: true });

module.exports = mongoose.model('seats', seatsSchema)