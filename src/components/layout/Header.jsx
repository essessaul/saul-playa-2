
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useLanguage } from "../../context/LanguageContext";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const { session, profile } = useAuth();

  const role = profile?.role || "guest";

  return (
    <header className="site-header luxury-header">
      <div className="container luxury-header-shell">

        <div className="luxury-header-left">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>

        <div className="luxury-header-right two-line-actions">

          {/* FIRST LINE */}
          <div className="header-top-actions">
            <a href="tel:+50766164212">📞</a>
            <a href="mailto:saul@playa.com">✉️</a>

            <select onChange={(e)=>setLanguage(e.target.value)} value={language}>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
          </div>

          {/* SECOND LINE */}
          <div className="header-bottom-actions">
            {(role === "owner" || role === "admin") && (
              <Link to="/owner-portal" className="compact-btn">OWNER</Link>
            )}
            <Link to="/admin" className="compact-btn admin-btn">ADMIN</Link>
          </div>

        </div>
      </div>
    </header>
  );
}
