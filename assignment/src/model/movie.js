const mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    cinetypemaId: {
        required: 'Cinema is required',
        type: mongoose.Types.ObjectId, 
        refs: 'cinema'
    },
    language: {
        type: String,
        enum: ['english', 'hindi', 'french'],
        required: true,
        trim: true,
        lowercase: true,
    },
    genre: {
        type: String,
        enum: ['action','adventure', 'comedy', 'historical', 'horror', 'mystery', 'romance','science fiction', 'thriller'],
        required: true,
        trim: true,
        lowercase: true,
      },
    director: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    cast: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    releaseDate: {
        type: String,
        required: true,
    },
    seatCategories: [{
        seat: {type:String , enum: ['regular', 'premum'],  trim: true},
        price: {type:Number , trim: true},
        totalseat: {type:String, trim: true}
     }]
}, { timestamps: true });

module.exports = mongoose.model('movie', movieSchema)