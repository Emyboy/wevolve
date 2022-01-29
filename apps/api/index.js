const express = require('express');
const app = express();
const PORT = 3001;
app.use(express.static("../main_app/build"));

app.get('/hi',(req, res) => {
    res.send("Hi")
})

app.listen(PORT, () => {
    console.log("server has started")
});

