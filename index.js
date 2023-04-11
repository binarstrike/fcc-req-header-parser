import api from "./routes/api.js"
import express from "express"
import cors from "cors"

export const app = express()
const PORT = process.env.PORT ?? 3000

app.set("trust proxy", true)
app.use(cors({ optionsSuccessStatus: 200 }))
app.use(function (req, res, next) {
  console.log(req.path)
  next()
})

app.get("/", function (req, res) {
  res.send("Hello World")
})

app.use("/api", api)

app.listen(PORT, function () {
  console.log(`Application is running... http://localhost:${PORT}`)
})
