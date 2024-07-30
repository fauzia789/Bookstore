// const express = require("express");
// const app = express();

// require ("dotenv").config();
// require("./conn/conn");
//  const user = require("./routes/user");

//  app.use(express.json());
// // routes
// app.use("/api/v1", user);
// // creating port 
// app.listen(process.env.PORT, () =>{
//     console.log(`server started ${process.env.PORT}`);
// });

const express = require("express");
const app = express();

require("dotenv").config();
require("./conn/conn");
const user = require("./routes/user");

app.use(express.json());

// Define a route for the root URL
app.get("/", (req, res) => {
    res.send("hello from backend");
});

// Routes for API
app.use("/api/v1", user);

// Creating port
app.listen(1000, () => {
    console.log("Server started on port 1000");
});

