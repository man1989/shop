const mens_outerwear = require("./data/mens_outerwear.json");
const mens_tshirts = require("./data/mens_tshirts.json");
const ladies_outerwear = require("./data/ladies_outerwear.json");
const ladies_tshirts = require("./data/ladies_tshirts.json");

module.exports = {
    mens_outerwear,
    ladies_outerwear,
    mens_tshirts,
    ladies_tshirts,
    categories: [{
        "name": "mens_outerwear",
        "title": "Men's Outerwear",
        "banner": "/images/mens_outerwear.jpg"
    },{
        "name": "ladies_outerwear",
        "title": "Ladies Outerwear",
        "banner": "/images/ladies_outerwear.jpg"
    },{
        "name": "mens_tshirts",
        "title": "Men's T-Shirts",
        "banner": "/images/mens_tshirts.jpg"
    },{
        "name": "ladies_tshirts",
        "title": "ladies T-Shirts",
        "banner": "/images/ladies_tshirts.jpg"
    }]
};