"use client";
import { useState } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [brandFilter, setBrandFilter] = useState("TODOS");
  const [genderFilter, setGenderFilter] = useState("TODOS");

  const products = [
    { 
      id: 1, name: "Curren Chrono Steel", brand: "CURREN", gender: "HOMBRE", price: 185000, 
      images: ["https://unsplash.com"],
      specs: ["Maquinaria Japonesa", "Caja de Aleación", "Cronógrafo de Precisión"]
    },
    { 
      id: 2, name: "Curren Rose Gold Lady", brand: "CURREN", gender: "MUJER", price: 155000, 
      images: ["https://unsplash.com"],
      specs: ["Acero Ionizado", "Cristal de Alta Resistencia", "Detalles en Oro Rosa"]
    },
    { 
      id: 3, name: "Casio Heritage Silver", brand: "CASIO", gender: "HOMBRE", price: 320000, 
      images: ["https://unsplash.com"],
      specs: ["Clásico Atemporal", "Resistencia 5 Bar", "Calendario Automático"]
    },
    { 
      id: 4, name: "Garmin Venu Luxe", brand: "GARMIN", gender: "MUJER", price: 1850000, 
      images: ["https://unsplash.com"],
      specs: ["Pantalla AMOLED", "Seguimiento Avanzado", "Bisel de Acero"]
    }
  ];

  const filteredProducts = products.filter(p => {
    const matchBrand = brandFilter === "TODOS" || p.brand === brandFilter;
    const matchGender = genderFilter === "TODOS" || p.gender === genderFilter;
    return matchBrand && matchGender;
  });

  return (
    <div style={{ background: "#FBFBFB", color: "#0D1B2A", minHeight: "100vh", fontFamily: "serif", paddingBottom: "100px" }}>
      
      {/* HEADER */}
      <header style={{ background: "#0D1B2A", padding: "40px 5%", textAlign: "center" }}>
        <h1 style={{ color: "#E0C56E", margin: 0, fontSize: "30px", letterSpacing: "8px", fontWeight: "300" }}>
          AETERNA HOROLOGY
        </h1>
        <div style={{ width: "60px", height: "1px", background: "#E0C56E", margin: "15px auto" }}></div>
        <p style={{ color: "#FFF", fontSize: "10px", letterSpacing: "3px", margin: 0 }}>PIEZAS DE ALTA GAMA</p>
      </header>

      {/* FILTROS */}
      <nav style={{ padding: "20px 5%", background: "#FFF", borderBottom: "1px solid #EEE", textAlign: "center" }}>
        <div style={{ marginBottom: "15px", display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
          {["TODOS", "CURREN", "CASIO", "GARMIN"].map(b => (
            <button key={b} onClick={() => setBrandFilter(b)} style={{ background: brandFilter === b ? "#0D1B2A" : "white", color: brandFilter === b ? "#E0C56E" : "#0D1B2A", border: "1px solid #0D1B2A", padding: "5px 12px", fontSize: "10px", cursor: "pointer" }}>{b}</button>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {["TODOS", "HOMBRE", "MUJER"].map(g => (
            <button key={g} onClick={() => setGenderFilter(g)} style={{ background: genderFilter === g ? "#E0C56E" : "white", border: "1px solid #E0C56E", color: "#0D1B2A", padding: "5px 12px", fontSize: "10px", cursor: "pointer" }}>{g}</button>
          ))}
        </div>
      </nav>

      {/* GRID DE RELOJES (2 COLUMNAS EN MÓVIL) */}
      <main style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(2, 1fr)", 
        gap: "10px", 
        padding: "15px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ background: "#FFF", padding: "10px", border: "1px solid #F0F0F0", textAlign: "center" }}>
            <img src={p.images[0]} style={{ width: "100%", aspectRatio: "1/1", objectFit: "contain" }} />
            <p style={{ color: "#E0C56E", fontSize: "9px", fontWeight: "bold", margin: "10px 0 0 0" }}>{p.brand}</p>
            <h3 style={{ fontSize: "12px", margin: "5px 0", height: "30px", overflow: "hidden" }}>{p.name}</h3>
            <p style={{ fontSize: "13px", fontWeight: "bold" }}>${p.price.toLocaleString()}</p>
          </div>
        ))}
      </main>

      {/* SECCIÓN DE ENVÍOS */}
      <section style={{ margin: "40px 0", padding: "30px 5%", background: "#F1F1F1", textAlign: "center" }}>
        <p style={{ fontSize: "12px", letterSpacing: "2px", marginBottom: "20px", fontWeight: "bold" }}>NUESTROS ALIADOS DE ENVÍO</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap", opacity: 0.6, fontSize: "14px", fontWeight: "bold" }}>
          <span>INTERRAPIDÍSIMO</span>
          <span>SERVIENTREGA</span>
          <span>ENVÍA</span>
        </div>
        <p style={{ fontSize: "10px", marginTop: "15px", color: "#666" }}>Envíos 100% asegurados a todo el país</p>
      </section>

      {/* MODAL DE DETALLES */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto" }}>
          <div style={{ padding: "20px", textAlign: "right" }}>
            <button onClick={() => setSelectedProduct(null)} style={{ background: "#0D1B2A", color: "#FFF", border: "none", padding: "10px 20px", cursor: "pointer" }}>VOLVER</button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", padding: "0 5% 50px 5%" }}>
            <div style={{ flex: "1 1 300px", textAlign: "center" }}>
              <img src={selectedProduct.images[0]} style={{ width: "100%", maxWidth: "400px" }} />
            </div>
            <div style={{ flex: "1 1 300px", padding: "20px" }}>
              <p style={{ color: "#E0C56E", letterSpacing: "2px" }}>{selectedProduct.brand}</p>
              <h2 style={{ fontSize: "28px", margin: "10px 0" }}>{selectedProduct.name}</h2>
              <p style={{ fontSize: "22px", fontWeight: "bold", margin: "20px 0" }}>${selectedProduct.price.toLocaleString()}</p>
              <button 
                onClick={() => window.open(`https://wa.me interesa el ${selectedProduct.name}`)}
                style={{ width: "100%", background: "#0D1B2A", color: "#E0C56E", padding: "15px", border: "none", fontWeight: "bold", cursor: "pointer" }}
              >
                COMPRAR POR WHATSAPP
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BOTÓN FLOTANTE */}
      <div 
        onClick={() => window.open('https://wa.me')}
        style={{ position: "fixed", bottom: "20px", right: "20px", background: "#25D366", width: "50px", height: "50px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "24px", boxShadow: "0 4px 10px rgba(0,0,0,0.3)", cursor: "pointer", zIndex: 900 }}
      >
        💬
      </div>

    </div>
  );
}
