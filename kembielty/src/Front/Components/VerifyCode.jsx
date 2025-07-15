import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Login.css";
import Swal from "sweetalert2";

export default function VerifyCode() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";
  const initialCode = location.state?.code || ""; // 👈 reçu depuis ForgetPassword
  const [code, setCode] = useState("");
  const [sentCode, setSentCode] = useState(initialCode);
  const [timer, setTimer] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(true);

  useEffect(() => {
    if (!email || !initialCode) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Aucune information de vérification trouvée.",
      });
      navigate("/forget-password");
    }
  }, []);

  useEffect(() => {
    if (resendDisabled && timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setResendDisabled(false);
    }
  }, [timer, resendDisabled]);

  const handleVerify = (e) => {
    e.preventDefault();
    if (code === sentCode) {
      Swal.fire({
        icon: "success",
        title: "Code vérifié",
        text: "Vous pouvez maintenant réinitialiser votre mot de passe.",
        confirmButtonColor: "#22c55e",
      });
      navigate("/reset-password", { state: { email } });
    } else {
      Swal.fire({
        icon: "error",
        title: "Code incorrect",
        text: "Le code saisi est incorrect.",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  const resendCode = async () => {
    try {
      const response = await axios.post("http://localhost:3000/send-code", {
        email: email,
      });
      const newCode = response.data.code;
      setSentCode(newCode);
      setTimer(60);
      setResendDisabled(true);

      Swal.fire({
        icon: "info",
        title: "Code renvoyé",
        text: `Un nouveau code a été envoyé à ${email}`,
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Impossible de renvoyer le code.",
      });
    }
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-grid">
          <div className="login-form-container">
            <div className="login-form-card">
              <h2 className="login-title">Vérification du code</h2>

              <form className="login-form" onSubmit={handleVerify}>
                <div className="form-group">
                  <label className="form-label">Code de vérification</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Saisissez le code reçu"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="login-submit-btn">
                  Vérifier
                </button>
              </form>

              <div style={{ textAlign: "center", marginTop: "16px" }}>
                <button
                  className="back-btn"
                  onClick={resendCode}
                  disabled={resendDisabled}
                >
                  {resendDisabled
                    ? `Renvoyer le code dans ${timer}s`
                    : "Renvoyer le code"}
                </button>
              </div>
            </div>
          </div>

          <div className="login-image-container">
            <div className="login-image-frame">
              <img
                src="image.jpg"
                alt="Vérification"
                className="login-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
