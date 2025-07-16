import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
import "../styles/WelcomePage.css";
import "../styles/profile.css";

export default function Profile({ onLogout, userName }) {
  const userId = localStorage.getItem("userId");

  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    cin: "",
    mail: "",
    numtel: "",
  });

  useEffect(() => {
    if (!userId) return;

    axios
      .get(`http://localhost:3000/api/users/${userId}`)
      .then((res) => {
        setUser(res.data);
        setFormData({
          nom: res.data.nom,
          prenom: res.data.prenom,
          cin: res.data.cin,
          mail: res.data.email,
          numtel: res.data.numtel,
        });
      })
      .catch((err) => console.error("Erreur de chargement du profil:", err));
  }, [userId]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3000/api/profil/${userId}`,
        formData
      );
      setUser(res.data);
      setIsEditing(false);
      alert("Profil mis à jour !");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la mise à jour");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    if (user) {
      setFormData({
        nom: user.nom,
        prenom: user.prenom,
        cin: user.cin,
        mail: user.email,
        numtel: user.numtel,
      });
    }
  };

  if (!user) return <p>Chargement du profil...</p>;

  return (
    <div className="page-container">
      <NavBar onLogout={onLogout} userName={userName} />
      <section className="profile-section">
        <div className="profile-container">
          {!isEditing ? (
            <div className="profile-layout">
              <div className="profile-image-container">
                <div className="profile-image">
                  <div className="profile-avatar">
                    <svg viewBox="0 0 24 24" className="avatar-icon">
                      <path
                        fill="currentColor"
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
                        1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2
                        c0-2.66-5.33-4-8-4z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="profile-separator"></div>

              <div className="profile-info-container">
                <div className="profile-info">
                  <div className="profile-field">
                    <span className="field-label">Nom</span>
                    <span className="field-separator">:</span>
                    <span className="field-value">{user.nom}</span>
                  </div>

                  <div className="profile-field">
                    <span className="field-label">Prénom</span>
                    <span className="field-separator">:</span>
                    <span className="field-value">{user.prenom}</span>
                  </div>

                  <div className="profile-field">
                    <span className="field-label">CIN</span>
                    <span className="field-separator">:</span>
                    <span className="field-value">{user.cin}</span>
                  </div>

                  <div className="profile-field">
                    <span className="field-label">Mail</span>
                    <span className="field-separator">:</span>
                    <span className="field-value">{user.email}</span>
                  </div>

                  <div className="profile-field">
                    <span className="field-label">Téléphone</span>
                    <span className="field-separator">:</span>
                    <span className="field-value">{user.numtel}</span>
                  </div>
                </div>

                <div className="profile-actions">
                  <button
                    className="edit-profile-btn"
                    onClick={() => setIsEditing(true)}
                  >
                    Modifier
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <section className="profile-update-wrapper">
              <div className="profile-update-card">
                <h2 className="profile-update-title">Modifier votre profil</h2>
                <form
                  className="profile-update-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSave();
                  }}
                >
                  <div className="profile-update-group">
                    <label className="profile-update-label">Nom</label>
                    <input
                      className="profile-update-input"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="profile-update-group">
                    <label className="profile-update-label">Prénom</label>
                    <input
                      className="profile-update-input"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="profile-update-group">
                    <label className="profile-update-label">CIN</label>
                    <input
                      className="profile-update-input"
                      name="cin"
                      value={formData.cin}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="profile-update-group">
                    <label className="profile-update-label">Email</label>
                    <input
                      className="profile-update-input"
                      name="mail"
                      value={formData.mail}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="profile-update-group">
                    <label className="profile-update-label">Téléphone</label>
                    <input
                      className="profile-update-input"
                      name="numtel"
                      value={formData.numtel}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="profile-update-actions">
                    <button type="submit" className="profile-update-save">
                      Enregistrer
                    </button>
                    <button
                      type="button"
                      className="profile-update-cancel"
                      onClick={handleCancel}
                    >
                      Annuler
                    </button>
                  </div>
                </form>
              </div>
            </section>
          )}
        </div>
      </section>
    </div>
  );
}
