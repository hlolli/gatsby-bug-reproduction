const express = require("express")
const app = express()
const port = 3000

app.use("/de", express.static("public", { redirect: false }))

app.get("/de", function(req, res) {
  res.sendFile(__dirname + "/public/index.html")
})

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
