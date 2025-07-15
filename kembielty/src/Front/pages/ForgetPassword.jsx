import { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendCode = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/send-code", {
        email: email,
      });

      const code = response.data.code;

      Swal.fire({
        icon: "success",
        title: "Code envoyé",
        text: `Un code a été envoyé à l'adresse ${email}`,
        confirmButtonColor: "#22c55e",
      });

      navigate("/verify-code", { state: { email, code } });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text:
          err.response?.data?.error ||
          "Erreur lors de l'envoi du code. Veuillez réessayer.",
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
              <h2 className="login-title">Mot de passe oublié</h2>
              <form className="login-form" onSubmit={handleSendCode}>
                <div className="form-group">
                  <label className="form-label">Adresse Email</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Entrez votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="login-submit-btn">
                  Envoyer le code
                </button>
              </form>
            </div>
          </div>

          <div className="login-image-container">
            <div className="login-image-frame">
              <img
                src="image.jpg"
                alt="Reset Password"
                className="login-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
