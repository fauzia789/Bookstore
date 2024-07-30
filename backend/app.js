const express = require("express");
const app = express();

require ("dotenv").config();
require("./conn/conn");
 const user = require("./routes/user");

 app.use(express.json());
// routes
app.use("/api/v1", user);
// creating port 
app.listen(process.env.PORT, () =>{
    console.log(`server started ${process.env.PORT}`);
});