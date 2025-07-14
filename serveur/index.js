const express = require('express');
const mongoose = require('mongoose');
const cross = require('cors');

const app = express();

const UserModel = require('./models/Users');

app.use(express.json());
app.use(cross());

app.post('/register',(req,res)=>{
    UserModel.create(req.body).then((data)=>{
        res.json(data);
    }).catch((err)=>{
        res.status(500).json({error: err.message});
    });
})
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email, password: password }).then((data) => {
    if (data) {
      if (data.password === password) {
        res.json({
          message: "success",
          role: data.role 
        });
      } else {
        res.status(401).json({ error: "Mot de passe incorrect" });
      }
    } else {
      res.status(404).json({ error: "Utilisateur non trouvé" });
    }
  });
});




mongoose.connect("mongodb://localhost:27017/kembielty").then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
