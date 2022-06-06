const asyncHandler = require("express-async-handler");
const axios = require('axios');
const Promise = require("bluebird");
const config = require('../config');

const Sneaker = require("../models/sneakerModel");

//@route GET /api/sneakers

const getSneakers = asyncHandler(async (req, res) => {
    const sneakers = await axios.get(`"https://v1-sneakers.p.rapidapi.com/v1/sneakers/1?app_id=${config.APP_ID}&app_key=${config.API_KEY} `
    );

    return res.status(200).json({sneakers: sneakers.data.results});
});

module.exports = {
    getSneakers
};