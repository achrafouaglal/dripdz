const express = require("express");
const path = require("path");
const dotenv = require("dotenv")
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose")
const session = require('express-session')
const app = express();
const cors = require("cors")
dotenv.config("./.env")

const DB_URL = process.env.DB_URL


app.use(express.static(path.join(__dirname , "static")))

app.use(cors())
app.use(express.json());

app.set("view engine", "ejs")
app.set("views","views")


app.use(session({
    secret: process.env.secret, 
    resave: false, 
    saveUninitialized: true,
    cookie: { secure: false } // set secure: true for HTTPS
}));

app.use(express.json());


app.use("/",require("./routes/index.route"));
app.use("/",require("./routes/home.route"));
app.use("/",require("./routes/productdetail.route"));
app.use("/",require("./routes/product.route"));
app.use("/",require("./routes/contact.route"));
app.use("/",require("./routes/order.route"));


mongoose.connect(DB_URL)

app.listen(PORT , () => {
    console.log("server run on :" , PORT)
})