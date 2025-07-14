import { Search, User, Bell, Menu, FileText } from "lucide-react";
import SidebarPage from "../Components/SidebarPage";
import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="admin-dashboard">
      <SidebarPage activeItem="dashboard" />

      <div className="dashboard-main">
        <nav className="dashboard-navbar">
          <div className="navbar-left">
            <button className="mobile-menu-btn">
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="page-title">Tableau de bord</h1>
          </div>

          <div className="navbar-center">
            <div className="search-container">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="search-input"
              />
            </div>
          </div>

          <div className="navbar-right">
            <button className="notification-btn">
              <Bell className="w-5 h-5" />
              <span className="notification-badge">3</span>
            </button>

            <div className="user-profile">
              <div className="user-info">
                <span className="user-name">Administrateur</span>
                <span className="user-role">Admin</span>
              </div>
              <div className="user-avatar">
                <User className="w-5 h-5"               onClick={(e) => {
                e.preventDefault();
                navigate("/profileBack");
              }} />
              </div>
            </div>
          </div>
        </nav>

        <main className="dashboard-content">
          <div className="welcome-section">
            <div className="welcome-card">
              <div className="welcome-content">
                <h1 className="welcome-title">
                  <strong>Bienvenue</strong>
                </h1>
                <p className="welcome-subtitle">
                  Interface d'administration - KEMBIETY
                </p>
                <div className="welcome-stats">
                  <div className="stat-item">
                    <span className="stat-number">24</span>
                    <span className="stat-label">Utilisateurs en ligne</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-number">156</span>
                    <span className="stat-label">Total des utilisateurs</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-number">8</span>
                    <span className="stat-label">Nouvelles notifications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="quick-actions">
            <h2 className="section-title">Actions rapides</h2>
            <div className="actions-grid">
              <button className="action-card">
                <User className="action-icon" />
                <span>Gérer utilisateurs</span>
              </button>
              <button className="action-card">
                <FileText className="action-icon" />
                <span>Voir rapports</span>
              </button>
              <button className="action-card">
                <Bell className="action-icon" />
                <span>Notifications</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
