const {readFileSync, writeFileSync, writeFile} = require("fs");
const data = require("./mockData.js");
const path = require("path");

writeFileSync(path.join(__dirname, "./data/db.json"), JSON.stringify(data));