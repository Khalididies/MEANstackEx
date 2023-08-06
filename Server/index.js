const express = require("express")
const cors = require("cors")
const app =  express()

// DB connections:
require("./configs/database")

// Parse the incoming body from JSON => OBJECT so we can use it in JS
app.use(express.json())

// Allow cross origin requests (such as requests from HTML pages)
app.use(cors())


// ROUTES:
const personRouter = require("./Routers/PersonRouter")
app.use("/persons", personRouter)


app.listen(8000, () => {
    console.log("Server is listening on port 8000")
})
