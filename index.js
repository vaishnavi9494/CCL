const express = require("express");
//const Marks = require("./model/marks");
const path = require("path");
//require("./model/conn");

const app = express();
const port = process.env.PORT||3000;


//app.set('view engine', 'html');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.get("/", (req, res) => {
//     res.render("index");
// })

// app.get("/marks", async (req, res) => {
//     try {
//         //const mark = await Marks.find({});
//         //res.render("marks", { mark });
//         //const mark = req.body;
//         //console.log(mark);
//         res.render("marks");
//     }
//     catch (e) {
//         console.log(e);
//         res.send(e);
//     }

// })

app.use(express.static(path.join( __dirname, 'public')))

// app.listen(80, () => {
//     console.log("Serving running")
// })

app.listen(port, () => {
    console.log("Server running")
})