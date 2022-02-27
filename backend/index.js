const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
 try{

 const { name , email , pass , re_pass } =req.body;

     let newUser = await pool.query(
         "INSERT INTO my_table (user_name, user_email, user_password, confirm_password) VALUES ($1, $2, $3, $4) RETURNING *",
         [ name, email, pass , re_pass ]
     );

     res.json(newUser.rows[0]);
 }
 catch (err) {
     console.error(err.message);
 }



});

app.listen(5000, () => {
    console.log("server has started on port 5000");
});