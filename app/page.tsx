"use client";
import { useState } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [brandFilter, setBrandFilter] = useState("TODOS");
  const [genderFilter, setGenderFilter] = useState("TODOS");

  const products = [
    { 
      id: 1, name: "Curren Grand Sport", brand: "CURREN", gender: "HOMBRE", price: 185000, 
      images: ["https://unsplash.com"],
      specs: ["Pulso en Cuero", "Cronógrafo funcional", "Resistente al agua"]
    },
    { 
      id: 2, name: "Curren Lady Rose", brand: "CURREN", gender: "MUJER", price: 155000, 
      images: ["https://unsplash.com"],
      specs: ["Acero Inoxidable", "Cristal Mineral", "Diseño Minimalista"]
    },
    { 
      id: 3, name: "Casio G-Shock Rugged", brand: "CASIO", gender: "HOMBRE", price: 540000, 
      images: ["https://unsplash.com"],
      specs: ["Resistencia a impactos", "Luz LED", "Alarma múltiple"]
    },
    { 
      id: 4, name: "Garmin Venu 2S", brand: "GARMIN", gender: "MUJER", price: 1850000, 
      images: ["https://unsplash.com"],
      specs: ["Pantalla AMOLED", "Monitor de salud femenina", "GPS integrado"]
    }
  ];

  // Lógica de Doble Filtro
  const filteredProducts = products.filter(p => {
    const matchBrand = brandFilter === "TODOS" || p.brand === brandFilter;
    const matchGender = genderFilter === "TODOS" || p.gender === genderFilter;
    return matchBrand && matchGender;
  });

  const whatsappAction = (product: any) => {
    const msg = `¡Hola AETERNA! 👋\nMe interesa este modelo:\n⌚ *${product.name}*\n💰 Precio: $${product.price.toLocaleString()}\n¿Tienen disponibilidad?`;
    window.open(`https://whatsapp.com{encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div style={{ background: "#f4f4f4", color: "#121212", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* HEADER ESTILO CURREN */}
      <header style={{ background: "#121212", padding: "15px 5%", textAlign: "center", position: "sticky", top: 0, zIndex: 100 }}>
        <h1 style={{ color: "#fff", margin: 0, fontSize: "24px", letterSpacing: "4px", fontWeight: "bold" }}>
          AETERNA <span style={{ color: "#d32f2f" }}>HOROLOGY</span>
        </h1>
      </header>

      {/* BANNER DE ANUNCIO */}
      <div style={{ background: "#d32f2f", color: "white", textAlign: "center", padding: "8px", fontSize: "12px", fontWeight: "bold" }}>
        ENVÍOS SEGUROS A TODA COLOMBIA 🇨🇴
      </div>

      {/* SECCIÓN DE FILTROS (MARCA Y GÉNERO) */}
      <div style={{ padding: "20px 5%", background: "#fff", borderBottom: "1px solid #ddd" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between" }}>
          
          {/* Filtro Marca */}
          <div>
            <p style={{ margin: "0 0 8px 0", fontSize: "12px", fontWeight: "bold" }}>MARCA</p>
            <div style={{ display: "flex", gap: "10px" }}>
              {["TODOS", "CURREN", "CASIO", "GARMIN"].map(b => (
                <button key={b} onClick={() => setBrandFilter(b)} style={{ 
                  padding: "6px 12px", border: "1px solid #121212", fontSize: "11px", cursor: "pointer",
                  background: brandFilter === b ? "#121212" : "transparent", color: brandFilter === b ? "#fff" : "#121212"
                }}>{b}</button>
              ))}
            </div>
          </div>

          {/* Filtro Género */}
          <div>
            <p style={{ margin: "0 0 8px 0", fontSize: "12px", fontWeight: "bold" }}>GÉNERO</p>
            <div style={{ display: "flex", gap: "10px" }}>
              {["TODOS", "HOMBRE", "MUJER"].map(g => (
                <button key={g} onClick={() => setGenderFilter(g)} style={{ 
                  padding: "6px 12px", border: "1px solid #d32f2f", fontSize: "11px", cursor: "pointer",
                  background: genderFilter === g ? "#d32f2f" : "transparent", color: genderFilter === g ? "#fff" : "#d32f2f"
                }}>{g}</button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* GRILLA DE PRODUCTOS */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "30px 5% 100px 5%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          {filteredProducts.map(p => (
            <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ background: "#fff", border: "1px solid #eee", padding: "10px", cursor: "pointer", textAlign: "center" }}>
              <img src={p.images[0]} style={{ width: "100%", height: "250px", objectFit: "contain" }} />
              <p style={{ color: "#888", fontSize: "11px", margin: "10px 0 5px 0" }}>{p.brand} | {p.gender}</p>
              <h3 style={{ fontSize: "15px", margin: "0 0 10px 0", height: "40px", overflow: "hidden" }}>{p.name}</h3>
              <p style={{ fontSize: "18px", fontWeight: "bold", color: "#d32f2f" }}>${p.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL DETALLES */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.8)", zIndex: 1000, display: "flex", justifyContent: "center", alignItems: "center", padding: "15px" }}>
          <div style={{ background: "#fff", width: "100%", maxWidth: "800px", maxHeight: "90vh", overflowY: "auto", borderRadius: "8px", position: "relative", display: "flex", flexWrap: "wrap" }}>
            <button onClick={() => setSelectedProduct(null)} style={{ position: "absolute", top: "10px", right: "10px", border: "none", background: "#121212", color: "#fff", padding: "5px 10px", cursor: "pointer" }}>CERRAR X</button>
            
            <div style={{ flex: "1 1 350px", padding: "20px" }}>
              <img src={selectedProduct.images[0]} style={{ width: "100%" }} />
            </div>

            <div style={{ flex: "1 1 350px", padding: "40px 20px" }}>
              <h2 style={{ margin: "0 0 10px 0" }}>{selectedProduct.name}</h2>
              <p style={{ background: "#121212", color: "#fff", display: "inline-block", padding: "4px 10px", fontSize: "12px" }}>{selectedProduct.brand}</p>
              <p style={{ margin: "20px 0", fontSize: "24px", fontWeight: "bold", color: "#d32f2f" }}>${selectedProduct.price.toLocaleString()} COP</p>
              
              <div style={{ marginBottom: "30px" }}>
                <p style={{ fontWeight: "bold", borderBottom: "1px solid #ddd" }}>CARACTERÍSTICAS</p>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "14px", margin: "5px 0" }}>• {s}</p>)}
              </div>

              <button onClick={() => whatsappAction(selectedProduct)} style={{ width: "100%", background: "#25d366", color: "#fff", padding: "15px", border: "none", fontWeight: "bold", cursor: "pointer", fontSize: "16px" }}>
                PEDIR POR WHATSAPP
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BARRA INFERIOR (FOOTER FIJO) */}
      <footer style={{ position: "fixed", bottom: 0, width: "100%", background: "#121212", color: "#fff", display: "flex", justifyContent: "space-around", padding: "12px 0", borderTop: "3px solid #d32f2f", zIndex: 99 }}>
        <div style={{ textAlign: "center", fontSize: "10px" }} onClick={() => {setBrandFilter("TODOS"); setGenderFilter("TODOS");}}>
          <p style={{ margin: 0, fontSize: "18px" }}>🏠</p> INICIO
        </div>
        <div style={{ textAlign: "center", fontSize: "10px" }} onClick={() => setGenderFilter("HOMBRE")}>
          <p style={{ margin: 0, fontSize: "18px" }}>👨</p> HOMBRES
        </div>
        <div style={{ textAlign: "center", fontSize: "10px" }} onClick={() => setGenderFilter("MUJER")}>
          <p style={{ margin: 0, fontSize: "18px" }}>👩</p> MUJERES
        </div>
        <div style={{ textAlign: "center", fontSize: "10px" }} onClick={() => window.open('https://whatsapp.com')}>
          <p style={{ margin: 0, fontSize: "18px" }}>💬</p> SOPORTE
        </div>
      </footer>

    </div>
  );
}
