const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const bcrypt = require("bcrypt");


//middleware
app.use(cors());
app.use(express.json());


app.post("/", async (req,res) => {

    try {
        const {  email, pass } = req.body;
        const loginUser = await pool.query("SELECT * FROM my_table where user_email = $1", [ email ]);
    
        if (loginUser.rows.length === 0) {
          return res.status(405).json("Email does not exist");
        }
    
         const validPassword = await bcrypt.compare(
          pass,
          loginUser.rows[0].user_password
        );
    
        if (!validPassword) {
          return res.status(405).json("Invalid Credential");
    
        } 
        res.json(loginUser.rows[0]);
      } catch (err) {
        console.error(err.message);
      }


});

app.post("/create", async (req, res) => {
 try{

 const { name , email , pass , re_pass } =req.body;

 const newUser1 = await pool.query("SELECT * FROM my_table WHERE user_email = $1", [email]);

 const salt = await bcrypt.genSalt(10);
  const bcryptPassword = await bcrypt.hash(pass, salt);
  const bcryptRePassword = await bcrypt.hash(re_pass, salt);

  // const validity = bcryptPassword.compare(bcryptRePassword);

  if (newUser1.rows.length > 0) {
    
     res.status(401).json("User already exists !");
  }

  

  else if(pass != re_pass) {
      res.status(403).json("Passwords do not match");
  }

  else{

     let newUser = await pool.query(
         "INSERT INTO my_table (user_name, user_email, user_password, confirm_password) VALUES ($1, $2, $3, $4) RETURNING *",
         [ name, email, bcryptPassword , bcryptRePassword ]
     );

     res.json(newUser.rows[0]);}
 }
 catch (err) {
     console.error(err.message);
 }



});



app.listen(5000, () => {
    console.log("server has started on port 5000");
});