import { useState } from "react";
import NavBar from "../Components/NavBar";
import "../styles/Extrait.css";

export default function Extrait({ onLogout, userName }) {
  const extraitData = [
    {
      id: 1,
      rib: "123456789",
      nomAcheteur: "Saif Meddeb",
      dateCreation: "01/01/2025",
      dateEcheance: "01/03/2025",
      agentBancaire: "UIB",
      montant: "200000",
    },
    {
      id: 2,
      rib: "123456789",
      nomAcheteur: "Saif Meddeb",
      dateCreation: "01/01/2025",
      dateEcheance: "01/03/2025",
      agentBancaire: "UIB",
      montant: "200000",
    },
  ];

  // Calculer le montant total
  const montantTotal = extraitData.reduce((total, item) => {
    return total + parseInt(item.montant);
  }, 0);

  const handleTelecharger = () => {
    console.log("Télécharger l'extrait");
    // Logique de téléchargement
  };

  return (
    <div className="page-container">
      <NavBar onLogout={onLogout} userName={userName} currentPage="extrait" />

      <section className="extrait-page-section">
        <div className="extrait-page-container">
          <div className="extrait-header">
            <h1 className="extrait-title">Extrait</h1>
          </div>

          <div className="table-container">
            <table className="extrait-table">
              <thead>
                <tr>
                  <th>RIB</th>
                  <th>Nom Acheteur</th>
                  <th>Date Création</th>
                  <th>Date Échéance</th>
                  <th>Agent bancaire</th>
                  <th>Montant</th>
                </tr>
              </thead>
              <tbody>
                {extraitData.map((item) => (
                  <tr key={item.id} className="table-row">
                    <td className="rib-cell">{item.rib}</td>
                    <td>{item.nomAcheteur}</td>
                    <td>{item.dateCreation}</td>
                    <td>{item.dateEcheance}</td>
                    <td>{item.agentBancaire}</td>
                    <td className="montant-cell">{item.montant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="total-section">
            <div className="total-container">
              <span className="total-label">Montant total :</span>
              <span className="total-amount">{montantTotal}</span>
              <span className="total-currency">DTN</span>
            </div>
          </div>

          <div className="download-container">
            <button className="download-btn" onClick={handleTelecharger}>
              Télécharger
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
