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
    window.open(`https://wa.me{numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div style={{ background: "#F8F9FA", color: "#1A2238", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* HEADER */}
      <header style={{ background: "#1A2238", padding: "25px 5%", textAlign: "center", position: "sticky", top: 0, zIndex: 100 }}>
        <h1 style={{ color: "#C19A6B", margin: 0, fontSize: "28px", letterSpacing: "8px", fontWeight: "300" }}>
          AETERNA <span style={{ color: "#FFF" }}>HOROLOGY</span>
        </h1>
      </header>

      {/* FILTROS */}
      <div style={{ padding: "30px 5%", background: "#FFF", borderBottom: "1px solid #E9ECEF" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center" }}>
          
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "10px", letterSpacing: "2px", fontWeight: "bold", marginBottom: "12px", color: "#C19A6B" }}>MARCA</p>
            <div style={{ display: "flex", gap: "8px" }}>
              {["TODOS", "CURREN", "CASIO", "GARMIN"].map(b => (
                <button key={b} onClick={() => setBrandFilter(b)} style={{ 
                  padding: "8px 18px", border: "1px solid #1A2238", fontSize: "10px", cursor: "pointer",
                  background: brandFilter === b ? "#1A2238" : "transparent", color: brandFilter === b ? "#FFF" : "#1A2238"
                }}>{b}</button>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "10px", letterSpacing: "2px", fontWeight: "bold", marginBottom: "12px", color: "#C19A6B" }}>GÉNERO</p>
            <div style={{ display: "flex", gap: "8px" }}>
              {["TODOS", "HOMBRE", "MUJER"].map(g => (
                <button key={g} onClick={() => setGenderFilter(g)} style={{ 
                  padding: "8px 18px", border: "1px solid #1A2238", fontSize: "10px", cursor: "pointer",
                  background: genderFilter === g ? "#1A2238" : "transparent", color: genderFilter === g ? "#FFF" : "#1A2238"
                }}>{g}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* VITRINA */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "50px 5% 120px 5%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "35px" }}>
          {filteredProducts.map(p => (
            <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ 
              background: "#FFF", padding: "20px", cursor: "pointer", textAlign: "center",
              borderRadius: "4px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
            }}>
              <img src={p.images[0]} style={{ width: "100%", height: "280px", objectFit: "contain", marginBottom: "15px" }} />
              <p style={{ color: "#C19A6B", fontSize: "11px", letterSpacing: "2px", fontWeight: "bold" }}>{p.brand}</p>
              <h3 style={{ fontSize: "17px", margin: "10px 0" }}>{p.name}</h3>
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>$ {p.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.9)", zIndex: 1000, display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
          <div style={{ background: "#FFF", width: "100%", maxWidth: "900px", display: "flex", flexWrap: "wrap", position: "relative" }}>
            <button onClick={() => setSelectedProduct(null)} style={{ position: "absolute", top: "20px", right: "20px", border: "none", background: "#1A2238", color: "#FFF", padding: "5px 10px", cursor: "pointer" }}>✕</button>
            <div style={{ flex: "1 1 400px", background: "#F8F9FA", padding: "40px" }}>
              <img src={selectedProduct.images[0]} style={{ width: "100%" }} />
            </div>
            <div style={{ flex: "1 1 400px", padding: "50px 40px" }}>
              <p style={{ color: "#C19A6B", fontSize: "12px", fontWeight: "bold" }}>{selectedProduct.brand} | {selectedProduct.gender}</p>
              <h2 style={{ fontSize: "32px", margin: "10px 0" }}>{selectedProduct.name}</h2>
              <div style={{ marginBottom: "25px" }}>
                <p style={{ fontWeight: "bold", fontSize: "12px", borderBottom: "1px solid #C19A6B", paddingBottom: "5px" }}>ESPECIFICACIONES</p>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "13px", margin: "5px 0" }}>• {s}</p>)}
              </div>
              <p style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "30px" }}>$ {selectedProduct.price.toLocaleString()} COP</p>
              <button onClick={() => whatsappAction(selectedProduct)} style={{ width: "100%", background: "#1A2238", color: "#FFF", padding: "18px", border: "none", fontWeight: "bold", cursor: "pointer" }}>
                CONSULTAR DISPONIBILIDAD
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BAR */}
      <footer style={{ position: "fixed", bottom: 0, width: "100%", background: "#1A2238", color: "#FFF", display: "flex", justifyContent: "space-around", padding: "15px 0", borderTop: "2px solid #C19A6B" }}>
        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => window.scrollTo(0,0)}>INICIO</div>
        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => setGenderFilter("HOMBRE")}>HOMBRES</div>
        <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => setGenderFilter("MUJER")}>MUJERES</div>
        <div style={{ textAlign: "center", cursor: "pointer", color: "#C19A6B" }} onClick={() => window.open('https://wa.me')}>WHATSAPP</div>
      </footer>
    </div>
  );
}
