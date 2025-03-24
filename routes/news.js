const express = require('express');
const axios = require('axios');
const router = express.Router();

const NEWS_API_KEY = '92a57060e4ce4fa8b086585bfeb649ce';
const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;

router.get("/", async (req, res) => {
    try {
        const response = await axios.get(NEWS_URL);
        res.render("news", { articles: response.data.articles });
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).send("Error fetching news");
    }
});

module.exports = router;
