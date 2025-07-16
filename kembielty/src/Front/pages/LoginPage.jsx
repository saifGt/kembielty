import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "../styles/Login.css";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    cin: "",
    telephone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.message === "success") {
        localStorage.setItem("userId", response.data.userId); 

      

        if (response.data.role === "ADMIN") {
          navigate("/dashboard");
        } else if (response.data.role === "CLIENT") {
          navigate("/welcome");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text:
          error.response?.data?.error ||
          "Erreur réseau : impossible de contacter le serveur.",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: "warning",
        title: "Attention",
        text: "Les mots de passe ne correspondent pas !",
        confirmButtonColor: "#facc15",
      });
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/register", {
        nom: formData.nom,
        prenom: formData.prenom,
        cin: formData.cin,
        numtel: formData.telephone,
        email: formData.email,
        password: formData.password,
      });

      Swal.fire({
        icon: "success",
        title: "Inscription réussie",
        text: "Votre compte a été créé avec succès !",
        confirmButtonColor: "#22c55e",
      });

      setIsSignUp(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text:
          error.response?.data?.error ||
          "Erreur réseau : impossible de contacter le serveur.",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-grid">
          <div className="login-form-container">
            <div className="login-form-card">
              <h2 className="login-title">{isSignUp ? "Sign Up" : "Sign In"}</h2>

              <form
                onSubmit={isSignUp ? handleSignUpSubmit : handleLoginSubmit}
                className="login-form"
              >
                {isSignUp && (
                  <>
                    <div className="form-group">
                      <label className="form-label">Nom</label>
                      <input
                        type="text"
                        name="nom"
                        placeholder="Entrez votre nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Prénom</label>
                      <input
                        type="text"
                        name="prenom"
                        placeholder="Entrez votre prénom"
                        value={formData.prenom}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">CIN</label>
                      <input
                        type="text"
                        name="cin"
                        placeholder="Entrez votre CIN"
                        value={formData.cin}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Téléphone</label>
                      <input
                        type="text"
                        name="telephone"
                        placeholder="Entrez votre téléphone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </>
                )}

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Entrez votre email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Mot de passe</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Entrez votre mot de passe"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                {isSignUp && (
                  <div className="form-group">
                    <label className="form-label">
                      Confirmer le mot de passe
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirmez votre mot de passe"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                )}

                <button type="submit" className="login-submit-btn">
                  {isSignUp ? "Créer un compte" : "Connexion"}
                </button>
                <div style={{ textAlign: "center" }}>
                <button
                  type="button"
                  className="forgot-password-btn"
                  onClick={() => navigate("/forget-password")}
                >
                  Mot de passe oublié ?
                </button>
              </div>

              </form>

              <div className="login-footer">
                {isSignUp ? (
                  <p>
                    Vous avez déjà un compte ?{" "}
                    <span
                      className="create-account-link"
                      onClick={() => setIsSignUp(false)}
                    >
                      Connexion
                    </span>
                  </p>
                ) : (
                  <p>
                    Pas encore de compte ?{" "}
                    <span
                      className="create-account-link"
                      onClick={() => setIsSignUp(true)}
                    >
                      Créer un compte
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="login-image-container">
            <div className="login-image-frame">
              <img
                src="image.jpg"
                alt="Kembialty Platform"
                className="login-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
