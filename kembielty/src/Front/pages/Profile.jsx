import { useState } from "react";
import NavBar from "../Components/NavBar";
import "../styles/WelcomePage.css";
import "../styles/profile.css";

export default function Profile({ onLogout, userName }) {
  const [profileData, setProfileData] = useState({
    nom: "Saif",
    prenom: "Meddeb",
    cin: "123456789",
    mail: "saif@gmail.com",
    motDePasse: "*********",
  });

  const handleEdit = () => {
    // Logique pour modifier le profil
    console.log("Modifier le profil");
  };

  return (
    <div className="page-container">
      {/* NavBar pour utilisateurs connectés */}
      <NavBar onLogout={onLogout} userName={userName} />

      {/* Contenu principal de la page profil */}
      <section className="profile-section">
        <div className="profile-container">
          <div className="profile-layout">
            {/* Image de profil */}
            <div className="profile-image-container">
              <div className="profile-image">
                <div className="profile-avatar">
                  <svg viewBox="0 0 24 24" className="avatar-icon">
                    <path
                      fill="currentColor"
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Ligne de séparation */}
            <div className="profile-separator"></div>

            {/* Informations du profil */}
            <div className="profile-info-container">
              <div className="profile-info">
                <div className="profile-field">
                  <span className="field-label">Nom</span>
                  <span className="field-separator">:</span>
                  <span className="field-value">{profileData.nom}</span>
                </div>

                <div className="profile-field">
                  <span className="field-label">Prénom</span>
                  <span className="field-separator">:</span>
                  <span className="field-value">{profileData.prenom}</span>
                </div>

                <div className="profile-field">
                  <span className="field-label">CIN</span>
                  <span className="field-separator">:</span>
                  <span className="field-value">{profileData.cin}</span>
                </div>

                <div className="profile-field">
                  <span className="field-label">Mail</span>
                  <span className="field-separator">:</span>
                  <span className="field-value">{profileData.mail}</span>
                </div>

                <div className="profile-field">
                  <span className="field-label">Mot de Passe</span>
                  <span className="field-separator">:</span>
                  <span className="field-value">{profileData.motDePasse}</span>
                </div>
              </div>

              <div className="profile-actions">
                <button onClick={handleEdit} className="edit-profile-btn">
                  Modifier
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}