//Node modules

const https = require("https");
const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

//Folders & files
const productsRouter = require("./routes/products.js");
const categoriesRouter = require("./routes/categories.js");
const cartRouter = require("./routes/cart.js");

//init app
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDb database connection has been established successfully");
});

module.exports = app;
//Use routes
app.use("/", productsRouter);
app.use("/", categoriesRouter);
app.use("/", cartRouter);

const server = https.createServer(
  {
    key: fs.readFileSync("./server.key"),
    cert: fs.readFileSync("./server.cert")
  },
  app
);

server.listen(PORT, () => {
  console.log(`Server has started on https://localhost:${PORT}`);
});
