const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "static")));
app.use("/pages", express.static(path.resolve(__dirname, "pages")));

app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "index.html"));
});




app.listen(process.env.PORT || 3000, () => console.log("Server running..."));