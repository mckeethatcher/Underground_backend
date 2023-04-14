const express = require("express")
const router = require("./postRoutes")
const logger = require("morgan")
const cors = require("cors")

const PORT = process.env.PORT || 3001
const db = require("./db")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger("dev"))
app.use("/api", router)
app.listen(PORT, () => {  console.log(`Listening on port: ${PORT}`)})