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

  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const texto = `Hola AETERNA HOROLOGY, me gustaría recibir más información sobre la pieza: *${product.name}* ($${product.price.toLocaleString()})`;
    // Enlace optimizado para evitar la pantalla de descarga
    window.open(`https://wa.me{numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div style={{ background: "#F8F9FA", color: "#1A2238", minHeight: "100vh", fontFamily: "'Montserrat', sans-serif" }}>
      
      {/* HEADER ELEGANTE */}
      <header style={{ background: "#1A2238", padding: "25px 5%", textAlign: "center", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
        <h1 style={{ color: "#C19A6B", margin: 0, fontSize: "28px", letterSpacing: "8px", fontWeight: "300", fontFamily: "'Playfair Display', serif" }}>
          AETERNA <span style={{ color: "#FFF" }}>HOROLOGY</span>
        </h1>
      </header>

      {/* FILTROS REFINADOS */}
      <div style={{ padding: "30px 5%", background: "#FFF", borderBottom: "1px solid #E9ECEF" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center" }}>
          
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "10px", letterSpacing: "2px", fontWeight: "bold", marginBottom: "12px", color: "#C19A6B" }}>FILTRAR POR MARCA</p>
            <div style={{ display: "flex", gap: "8px" }}>
              {["TODOS", "CURREN", "CASIO", "GARMIN"].map(b => (
                <button key={b} onClick={() => setBrandFilter(b)} style={{ 
                  padding: "8px 18px", border: "1px solid #1A2238", fontSize: "10px", cursor: "pointer", borderRadius: "2px", letterSpacing: "1px",
                  background: brandFilter === b ? "#1A2238" : "transparent", color: brandFilter === b ? "#FFF" : "#1A2238", transition: "0.3s"
                }}>{b}</button>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "10px", letterSpacing: "2px", fontWeight: "bold", marginBottom: "12px", color: "#C19A6B" }}>GÉNERO</p>
            <div style={{ display: "flex", gap: "8px" }}>
              {["TODOS", "HOMBRE", "MUJER"].map(g => (
                <button key={g} onClick={() => setGenderFilter(g)} style={{ 
                  padding: "8px 18px", border: "1px solid #1A2238", fontSize: "10px", cursor: "pointer", borderRadius: "2px",
                  background: genderFilter === g ? "#1A2238" : "transparent", color: genderFilter === g ? "#FFF" : "#1A2238", transition: "0.3s"
                }}>{g}</button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* VITRINA DE PRODUCTOS */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "50px 5% 120px 5%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "35px" }}>
          {filteredProducts.map(p => (
            <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ 
              background: "#FFF", padding: "20px", cursor: "pointer", textAlign: "center",
              transition: "0.4s", borderRadius: "4px", boxShadow: "0 5px 20px rgba(0,0,0,0.02)"
            }} className="card-hover">
              <div style={{ overflow: "hidden", background: "#FDFDFD", marginBottom: "15px" }}>
                <img src={p.images} style={{ width: "100%", height: "280px", objectFit: "contain", padding: "15px" }} />
              </div>
              <p style={{ color: "#C19A6B", fontSize: "11px", letterSpacing: "2px", fontWeight: "bold", margin: "10px 0" }}>{p.brand}</p>
              <h3 style={{ fontSize: "16px", margin: "0 0 12px 0", color: "#1A2238", fontFamily: "'Playfair Display', serif" }}>{p.name}</h3>
              <p style={{ fontSize: "18px", fontWeight: "500", color: "#1A2238" }}>$ {p.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL DETALLES LUXURY */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(26, 34, 56, 0.95)", zIndex: 1000, display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
          <div style={{ background: "#FFF", width: "100%", maxWidth: "900px", display: "flex", flexWrap: "wrap", position: "relative", boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }}>
            <button onClick={() => setSelectedProduct(null)} style={{ position: "absolute", top: "20px", right: "20px", border: "none", background: "none", fontSize: "20px", cursor: "pointer", color: "#1A2238" }}>✕</button>
            
            <div style={{ flex: "1 1 400px", background: "#F8F9FA", display: "flex", alignItems: "center", padding: "40px" }}>
              <img src={selectedProduct.images} style={{ width: "100%", height: "auto" }} />
            </div>

            <div style={{ flex: "1 1 400px", padding: "50px 40px" }}>
              <p style={{ color: "#C19A6B", fontSize: "12px", letterSpacing: "3px", fontWeight: "bold" }}>{selectedProduct.brand} | {selectedProduct.gender}</p>
              <h2 style={{ fontSize: "32px", color: "#1A2238", margin: "10px 0 25px 0", fontFamily: "'Playfair Display', serif" }}>{selectedProduct.name}</h2>
              
              <div style={{ marginBottom: "30px" }}>
                <p style={{ fontWeight: "bold", fontSize: "12px", borderBottom: "1px solid #C19A6B", paddingBottom: "8px", marginBottom: "15px" }}>ESPECIFICACIONES</p>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "13px", color: "#555", margin: "8px 0" }}>• {s}</p>)}
              </div>

              <p style={{ fontSize: "28px", fontWeight: "300", color: "#1A2238", marginBottom: "35px" }}>$ {selectedProduct.price.toLocaleString()} COP</p>

              <button onClick={() => whatsappAction(selectedProduct)} style={{ 
                width: "100%", background: "#1A2238", color: "#FFF", padding: "18px", border: "none", 
                fontWeight: "bold", cursor: "pointer", fontSize: "14px", letterSpacing: "2px" 
              }}>
                CONSULTAR DISPONIBILIDAD
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BAR (FIJO MÓVIL) */}
      <footer style={{ position: "fixed", bottom: 0, width: "100%", background: "#1A2238", color: "#FFF", display: "flex", justifyContent: "space-around", padding: "15px 0", zIndex: 99, borderTop: "2px solid #C19A6B" }}>
        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => {setBrandFilter("TODOS"); setGenderFilter("TODOS"); window.scrollTo(0,0);}}>
          <span style={{ fontSize: "10px", letterSpacing: "1px" }}>INICIO</span>
        </div>
        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => setGenderFilter("HOMBRE")}>
          <span style={{ fontSize: "10px", letterSpacing: "1px" }}>HOMBRES</span>
        </div>
        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => setGenderFilter("MUJER")}>
          <span style={{ fontSize: "10px", letterSpacing: "1px" }}>MUJERES</span>
        </div>
        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => window.open('https://wa.me')}>
          <span style={{ fontSize: "10px", letterSpacing: "1px", color: "#C19A6B" }}>WHATSAPP</span>
        </div>
      </footer>

      {/* IMPORTACIÓN DE FUENTES (ESTO VA EN TU HEAD) */}
      <style jsx global>{`
        @import url('https://googleapis.com');
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08) !important;
        }
      `}</style>

    </div>
  );
}
