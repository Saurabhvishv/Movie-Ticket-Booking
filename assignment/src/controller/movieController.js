//const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
//const userModel = require('../model/user.js')
const movieModel = require('../model/movie.js')
const cinemaModel = require('../model/cinema.js')
//const middleware = require('../middleware/middleware.js')

const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}

const isValidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}

const isValidlanguage = function (language) {
    return ['english', 'hindi', 'french'].indexOf(language) !== -1
}

const isValidgenre = function (genre) {
    return ['action', 'adventure', 'comedy', 'historical', 'horror', 'mystery', 'romance', 'science fiction', 'thriller'].indexOf(genre) !== -1
}

const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === "string" && value.trim().length === 0) return false
    return true;
}


//  API 1 Register user
const registerMovie = async function (req, res) {

    try {
        const requestBody = req.body

        if (!isValidRequestBody(requestBody)) {
            return res.status(400).send({ status: false, Message: "please provide user details in body" })
        }

        let { title, cinemaId, language, genre, director, cast, description, duration, releaseDate, seatCategories } = requestBody //destructuring

        if (!isValid(title)) {
            return res.status(400).send({ status: false, Message: "Please provide name" })
        }

        if (!isValid(cinemaId)) {
            res.status(400).send({ status: false, message: 'cinemaId is required' })
            return
        }

        if (!isValidObjectId(cinemaId)) {
            return res.status(400).send({ status: false, Message: "Please provide cinemaId" })
        }

        if (!isValid(language)) {
            return res.status(400).send({ status: false, Message: "Please provide language" })
        }

        language = language.trim()
        if (!isValidlanguage(language)) {
            res.status(400).send({ status: false, message: `language should be among english, hindi, french` })
            return
        }

        if (!isValid(genre)) {
            return res.status(400).send({ status: false, Message: "Please provide genre" })
        }
        genre = genre.trim()
        if (!isValidgenre(genre)) {
            res.status(400).send({ status: false, message: `genre should be among action, adventure, comedy, historical, horror, mystery, romance, science fiction, thriller` })
            return
        }

        if (!isValid(director)) {
            return res.status(400).send({ status: false, Message: "Please provide director" })
        }

        if (!isValid(cast)) {
            return res.status(400).send({ status: false, Message: "Please provide cast" })
        }

        if (!isValid(description)) {
            return res.status(400).send({ status: false, Message: "Please provide description" })
        }

        if (!isValid(duration)) {
            return res.status(400).send({ status: false, Message: "Please provide duration" })
        }

        //releaseDate = new Date();
        if (!isValid(releaseDate)) {
            return res.status(400).send({ status: false, Message: "Please provide releaseDate" })
        }

        // //endDate = new Date();
        if (!isValid(seatCategories)) {
            return res.status(400).send({ status: false, Message: "Please provide seatCategories" })
        }

        const movieData = { title, cinemaId, language, genre, director, cast, description, duration, releaseDate, seatCategories }
        const createmovie = await movieModel.create(movieData)
        return res.status(201).send({ status: true, Message: "movie registered successfully", data: createmovie })
    } catch (error) {
        return res.status(500).send({ status: false, Message: error.message })
    }
}

module.exports = { registerMovie }