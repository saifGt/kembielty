import { useState } from "react";
import NavBar from "../Components/NavBar";
import "../styles/HistoriquePage.css";

export default function HistoriquePage({ onBack, userName }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);

  const historiqueData = [
    {
      id: 1,
      rib: "123456789",
      nomAcheteur: "Saif Meddeb",
      dateCreation: "01/01/2025",
      dateEcheance: "01/03/2025",
      agentBancaire: "UIB",
      montant: "200000",
      status: "active",
    },
    {
      id: 2,
      rib: "123456789",
      nomAcheteur: "Saif Meddeb",
      dateCreation: "01/01/2025",
      dateEcheance: "01/03/2025",
      agentBancaire: "UIB",
      montant: "200000",
      status: "active",
    },
    {
      id: 3,
      rib: "123456789",
      nomAcheteur: "Saif Meddeb",
      dateCreation: "01/01/2025",
      dateEcheance: "01/03/2025",
      agentBancaire: "UIB",
      montant: "200000",
      status: "active",
    },
    {
      id: 4,
      rib: "123456789",
      nomAcheteur: "Saif Meddeb",
      dateCreation: "01/01/2025",
      dateEcheance: "01/03/2025",
      agentBancaire: "UIB",
      montant: "200000",
      status: "active",
    },
  ];

  const filteredData = historiqueData.filter(
    (item) =>
      item.nomAcheteur.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.rib.includes(searchTerm) ||
      item.agentBancaire.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isAllSelected = filteredData.length > 0 && filteredData.every(item => selectedIds.includes(item.id));

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds([]);
    } else {
      const newSelected = filteredData.map(item => item.id);
      setSelectedIds(newSelected);
    }
  };

  const handleVoir = (id) => {
    console.log("Voir details pour ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Supprimer pour ID:", id);
  };

  const handleExtraire = () => {
    const selectedData = historiqueData.filter(item => selectedIds.includes(item.id));
    if (selectedData.length === 0) {
      alert("Veuillez sélectionner au moins une ligne à extraire.");
    } else {
      console.log("Données à extraire :", selectedData);
      // traitement : export CSV/PDF, envoi au serveur, etc.
    }
  };

  return (
    <div className="page-container">
      <NavBar onLogout={onBack} userName={userName} currentPage="historique" />

      <section className="historique-page-section">
        <div className="historique-page-container">
          <div className="historique-header">
            <h1 className="historique-title">Historique</h1>

            <div className="search-containerr">
              <div className="search-iconn">🔍</div>

              <input
                type="text"
                placeholder="Recherche..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          <div className="table-container">
            <table className="historique-table">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      checked={isAllSelected}
                      onChange={toggleSelectAll}
                    />
                  </th>
                  <th>RIB</th>
                  <th>Nom Acheteur</th>
                  <th>Date Création</th>
                  <th>Date Échéance</th>
                  <th>Agent bancaire</th>
                  <th>Montant</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr
                    key={item.id}
                    className={`table-row ${
                      selectedIds.includes(item.id) ? "selected" : ""
                    }`}
                  >
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(item.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedIds((prev) => [...prev, item.id]);
                          } else {
                            setSelectedIds((prev) =>
                              prev.filter((id) => id !== item.id)
                            );
                          }
                        }}
                      />
                    </td>
                    <td className="rib-cell">{item.rib}</td>
                    <td>{item.nomAcheteur}</td>
                    <td>{item.dateCreation}</td>
                    <td>{item.dateEcheance}</td>
                    <td>{item.agentBancaire}</td>
                    <td className="montant-cell">{item.montant}</td>
                    <td className="actions-cell">
                      <button
                        className="voir-btn"
                        onClick={() => handleVoir(item.id)}
                      >
                        Voir
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(item.id)}
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="extract-container">
            <button className="extract-btn" onClick={handleExtraire}>
              Extraire 📄
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
