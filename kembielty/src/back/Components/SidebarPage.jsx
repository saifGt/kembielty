import { BarChart3, Users, FileText, LogOut, Settings, Home } from "lucide-react";
import "../styles/SidebarPage.css";
import { useNavigate } from "react-router-dom";

export default function SidebarPage({ activeItem = "dashboard" }) {
  const menuItems = [
    {
      id: "dashboard",
      label: "Tableau de bord",
      icon: BarChart3,
      href: "/dashboard",
    },
    {
      id: "users",
      label: "Gestion des Utilisateurs",
      icon: Users,
      href: "/users",
    },
    {
      id: "claims",
      label: "Gestion des réclamations",
      icon: FileText,
      href: "/claims",
    },
    {
      id: "settings",
      label: "Paramètres",
      icon: Settings,
      href: "/settings",
    },
  ];

  const navigate = useNavigate();
   const handleLogout = () => {
    localStorage.clear(); 
    navigate("/"); 
  };

  return (
    <aside className="admin-sidebar">
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Home className="w-6 h-6 text-green-500" />
          <span className="sidebar-logo-text">Kembielty</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <li key={item.id} className="sidebar-menu-item">
                <a
                  href={item.href}
                  className={`sidebar-link ${isActive ? "sidebar-link-active" : ""}`}
                >
                  <Icon className="sidebar-icon" />
                  <span className="sidebar-text">{item.label}</span>
                  {isActive && <div className="sidebar-active-indicator"></div>}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          <LogOut className="w-4 h-4" />
          <span>Déconnecter</span>
        </button>
      </div>
    </aside>
  );
}