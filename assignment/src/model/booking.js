const mongoose = require('mongoose');

var bookingSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    startAt: {
        type: String,
        required: true,
        trim: true,
    },
    seats: {
        type: [Schema.Types.Mixed],
        required: true,
    },
    ticketPrice: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    movieId: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        required: true,
    },
    cinemaId: {
        type: Schema.Types.ObjectId,
        ref: 'Cinema',
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    checkin: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('booking', bookingSchema)