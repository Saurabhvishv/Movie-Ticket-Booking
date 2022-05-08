//const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
//const mongoose = require('mongoose')
//const userModel = require('../model/user.js')
const cinemaModel = require('../model/cinema.js')
//const middleware = require('../middleware/middleware.js')

const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}


const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === "string" && value.trim().length === 0) return false
    return true;
}


//  API 1 Register Cinema
const registerCinema = async function (req, res) {

    try {
        const requestBody = req.body

        if (!isValidRequestBody(requestBody)) {
            return res.status(400).send({ status: false, Message: "please provide user details in body" })
        }

        let { name, city, screenNumber } = requestBody //destructuring

        if (!isValid(name)) {
            return res.status(400).send({ status: false, Message: "Please provide name" })
        }

        // if (!isValid(ticketPrice)) {
        //     return res.status(400).send({ status: false, Message: "Please provide ticketPrice" })
        // }

        if (!isValid(city)) {
            return res.status(400).send({ status: false, Message: "Please provide city" })
        }

        if (!isValid(screenNumber)) {
            return res.status(400).send({ status: false, Message: "Please provide screenNumber" })
        }

        // if (!isValid(seatsAvailable)) {
        //     return res.status(400).send({ status: false, Message: "Please provide seatsAvailable" })
        // }

        

        const cinemaData = {  name, city, screenNumber  }
        const createcinema = await cinemaModel.create(cinemaData)
        return res.status(201).send({ status: true, Message: "cinema registered successfully", data: createcinema })
    } catch (error) {
        return res.status(500).send({ status: false, Message: error.message })
    }
}

module.exports = { registerCinema }