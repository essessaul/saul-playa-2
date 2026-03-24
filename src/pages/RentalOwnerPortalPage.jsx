import React from "react";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import { Card, Button } from "../components/common/ui";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";

export default function RentalOwnerPortalPage() {
  const { profile } = useAuth();
  const { language } = useLanguage();

  return (
    <ProtectedRoute>
      <section className="section">
        <div className="container">
          <div className="admin-shell">
            <aside className="admin-sidebar">
              <div className="admin-brand-card">
                <div className="admin-kicker">{language === "es" ? "PROPIETARIO DE ALQUILER" : "RENTAL OWNER"}</div>
                <h2 style={{ margin: ".35rem 0 0" }}>{language === "es" ? "PORTAL DEL PROPIETARIO" : "OWNER PORTAL"}</h2>
                <p className="muted" style={{ lineHeight: 1.7, marginTop: ".85rem" }}>
                  {language === "es"
                    ? "Este portal es para propietarios de unidades en alquiler. Los listados de venta son administrados por el equipo interno."
                    : "This portal is for rental-unit owners. Sale listings are handled internally by the website team."}
                </p>
              </div>
            </aside>

            <div className="admin-content">
              <div className="admin-page-header">
                <div>
                  <div className="admin-kicker">{language === "es" ? "ACCESO DE PROPIETARIO" : "OWNER ACCESS"}</div>
                  <h1 style={{ margin: ".4rem 0 0" }}>
                    {language === "es" ? `BIENVENIDO ${profile?.display_name || ""}` : `WELCOME ${profile?.display_name || ""}`}
                  </h1>
                </div>
                <Button>{language === "es" ? "DESCARGAR ESTADO" : "DOWNLOAD STATEMENT"}</Button>
              </div>

              <div className="admin-stat-grid">
                <Card style={{ padding: "1rem" }}>
                  <div className="admin-stat-card">
                    <div className="muted admin-kicker">{language === "es" ? "UNIDADES DE ALQUILER" : "RENTAL UNITS"}</div>
                    <div className="admin-stat-value">1</div>
                  </div>
                </Card>
                <Card style={{ padding: "1rem" }}>
                  <div className="admin-stat-card">
                    <div className="muted admin-kicker">{language === "es" ? "RESERVAS ACTIVAS" : "ACTIVE BOOKINGS"}</div>
                    <div className="admin-stat-value">4</div>
                  </div>
                </Card>
                <Card style={{ padding: "1rem" }}>
                  <div className="admin-stat-card">
                    <div className="muted admin-kicker">{language === "es" ? "PRÓXIMO PAGO" : "NEXT PAYOUT"}</div>
                    <div className="admin-stat-value">$2,150</div>
                  </div>
                </Card>
              </div>

              <Card style={{ padding: "1rem" }}>
                <div className="admin-kicker">{language === "es" ? "REGLA DE OPERACIÓN" : "OPERATING RULE"}</div>
                <p className="muted" style={{ lineHeight: 1.8, marginTop: ".75rem" }}>
                  {language === "es"
                    ? "Los propietarios de alquiler pueden revisar sus reservas, estados de cuenta y pagos. Los listados en venta y la publicación de inventario inmobiliario los administra exclusivamente el equipo interno."
                    : "Rental owners can review bookings, statements, and payouts. Sale listings and real-estate publishing are managed exclusively by the internal team."}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
}
