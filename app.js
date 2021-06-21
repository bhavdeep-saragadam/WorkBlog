const express = require('express')

app = express()


app.use(express.static("public"));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/home.html")
    
})
app.listen(process.env.PORT || 3000, function() {
    console.log("Server Listening");
})