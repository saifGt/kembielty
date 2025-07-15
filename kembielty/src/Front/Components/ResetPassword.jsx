import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/Login.css";
import axios from "axios";
   

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

const handleReset = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    Swal.fire({
      icon: "warning",
      title: "Les mots de passe ne correspondent pas",
      confirmButtonColor: "#facc15",
    });
    return;
  }

  try {
    const response = await axios.post("http://localhost:3000/reset-password", {
      email,
      newPassword: password,
    });

    Swal.fire({
      icon: "success",
      title: "Mot de passe réinitialisé",
      text: response.data.message,
      confirmButtonColor: "#22c55e",
    });

    navigate("/");
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Erreur",
      text:
        error.response?.data?.error ||
        "Une erreur s'est produite lors de la mise à jour.",
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
              <h2 className="login-title">Réinitialiser le mot de passe</h2>
              <form className="login-form" onSubmit={handleReset}>
                <div className="form-group">
                  <label className="form-label">Nouveau mot de passe</label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Entrez un nouveau mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Confirmer le mot de passe
                  </label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Confirmez votre mot de passe"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="login-submit-btn">
                  Réinitialiser
                </button>
              </form>
            </div>
          </div>

          <div className="login-image-container">
            <div className="login-image-frame">
              <img src="image.jpg" alt="Mot de passe oublié" className="login-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
