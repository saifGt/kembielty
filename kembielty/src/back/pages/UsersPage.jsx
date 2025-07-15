import { useEffect, useState } from "react";
import SidebarPage from "../Components/SidebarPage";
import "../styles/UserPage.css";
import { Trash2, Edit } from "lucide-react";
import Swal from "sweetalert2";
import axios from "axios";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Erreur lors du chargement :", err));
  }, []);

  const handleDelete = (userId) => {
    Swal.fire({
      title: "Supprimer l'utilisateur ?",
      text: "Cette action est irréversible.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#94a3b8",
      confirmButtonText: "Oui, supprimer",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/api/users/${userId}`)
          .then(() => {
            setUsers(users.filter((u) => u._id !== userId));
            Swal.fire("Supprimé !", "L'utilisateur a été supprimé.", "success");
          })
          .catch(() => {
            Swal.fire("Erreur", "Impossible de supprimer l'utilisateur.", "error");
          });
      }
    });
  };

  const handleUpdateRole = (userId, currentRole) => {
    Swal.fire({
      title: "Modifier le rôle",
      input: "select",
      inputOptions: {
        ADMIN: "ADMIN",
        CLIENT: "CLIENT"
      },
      inputValue: currentRole,
      showCancelButton: true,
      confirmButtonText: "Modifier",
      cancelButtonText: "Annuler",
      confirmButtonColor: "#059669",
      inputLabel: "Nouveau rôle",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedRole = result.value;
        axios
          .put(`http://localhost:3000/api/users/${userId}`, { role: updatedRole })
          .then((res) => {
            setUsers(
              users.map((user) =>
                user._id === userId ? { ...user, role: updatedRole } : user
              )
            );
            Swal.fire("Succès", "Le rôle a été mis à jour.", "success");
          })
          .catch(() => {
            Swal.fire("Erreur", "Impossible de mettre à jour le rôle.", "error");
          });
      }
    });
  };

  return (
    <div className="admin-dashboard">
      <SidebarPage activeItem="users" />

      <div className="dashboard-main">
        <div className="users-page-content">
          <h2 className="users-title">Gestion des Utilisateurs</h2>

          <table className="users-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Rôle</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.nom}</td>
                  <td>{user.prenom}</td>
                  <td>{user.email}</td>
                  <td>{user.numtel}</td>
                  <td>{user.role}</td>
                  <td className="actions-cell">
                    <button
                      className="update-btn"
                      onClick={() => handleUpdateRole(user._id, user.role)}
                    >
                      <Edit className="update-icon" />
                      Modifier rôle
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(user._id)}
                    >
                      <Trash2 className="delete-icon" />
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="6" className="no-data">Aucun utilisateur trouvé.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
