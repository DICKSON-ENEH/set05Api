require("dotenv").config()
const express = require ("express")
const port =process.env.PORT || 4444

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
  res.send("API don set ooo")
})
app.listen(port,()=>{
console.log("listening to port" +port)
})