import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-subtitle">Page non trouvée</p>
        <p className="notfound-description">
          Oups ! La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <button
          className="notfound-button"
          onClick={() => navigate("/")}
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
}
