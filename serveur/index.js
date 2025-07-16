const express = require('express');
const mongoose = require('mongoose');
const cross = require('cors');
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');


const app = express();

const UserModel = require('./models/Users');

app.use(express.json());
app.use(cross());

app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await UserModel.create({
      ...req.body,
      password: hashedPassword
    });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Mot de passe incorrect" });
    }

    res.json({ message: "success", role: user.role, userId: user._id });
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

app.put('/api/profil/:id', async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ error: "Utilisateur non trouvé" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});


app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id).select("-password"); 
    if (!user) return res.status(404).json({ error: "Utilisateur introuvable" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});


app.post('/send-code', async (req, res) => {
  const { email } = req.body;

  const code = Math.floor(100000 + Math.random() * 900000).toString();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "saif.meddeb.52@gmail.com",
      pass: "imhf kyne uysc nbze" 
    }
  });

  const mailOptions = {
    from: '"Kembialty" <saif.meddeb.52@gmail.com>',
    to: email,
    subject: "Votre code de réinitialisation",
    html: `<p>Voici votre code de vérification : <strong>${code}</strong></p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Code envoyé avec succès", code });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de l'envoi du code" });
  }
});

app.post('/reset-password', async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).json({ error: "Utilisateur non trouvé." });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    await user.save();
    res.json({ message: "Mot de passe mis à jour avec succès." });
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

app.get("/api/users", async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
});

app.delete("/api/users/:id", async (req, res) => {
  await UserModel.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

app.put("/api/users/:id", async (req, res) => {
  try {
    const { role } = req.body;
    const allowedRoles = ["ADMIN", "CLIENT"];
    if (!allowedRoles.includes(role)) {
      return res.status(400).json({ error: "Rôle invalide" });
    }

    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true, runValidators: true }
    );
    res.json(user);
  } catch (err) {
    console.error("Erreur lors de la mise à jour :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});





mongoose.connect("mongodb://localhost:27017/kembielty").then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
