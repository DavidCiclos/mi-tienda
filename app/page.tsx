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
    <div style={{ background: "#FBFBFB", color: "#0D1B2A", minHeight: "100vh", fontFamily: "serif" }}>
      
      {/* HEADER NO FIJO */}
      <header style={{ background: "#0D1B2A", padding: "40px 5%", textAlign: "center" }}>
        <h1 style={{ color: "#E0C56E", margin: 0, fontSize: "32px", letterSpacing: "10px", fontWeight: "300" }}>
          AETERNA HOROLOGY
        </h1>
        <div style={{ width: "80px", height: "1px", background: "#E0C56E", margin: "15px auto" }}></div>
        <p style={{ color: "#FFF", fontSize: "10px", letterSpacing: "4px", margin: 0, opacity: 0.8 }}>CURADURÍA DE PIEZAS SELECTAS</p>
      </header>

      {/* FILTROS REFINADOS */}
      <div style={{ padding: "25px 5%", background: "#FFF", borderBottom: "1px solid #EEE", textAlign: "center" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", marginBottom: "15px" }}>
          {["TODOS", "CURREN", "CASIO", "GARMIN"].map(b => (
            <button key={b} onClick={() => setBrandFilter(b)} style={{ 
              background: brandFilter === b ? "#0D1B2A" : "none", 
              color: brandFilter === b ? "#E0C56E" : "#0D1B2A",
              border: "1px solid #0D1B2A", padding: "6px 15px", fontSize: "10px", cursor: "pointer", letterSpacing: "1px"
            }}>{b}</button>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {["TODOS", "HOMBRE", "MUJER"].map(g => (
            <button key={g} onClick={() => setGenderFilter(g)} style={{ 
              background: genderFilter === g ? "#E0C56E" : "none", 
              color: "#0D1B2A", border: "1px solid #E0C56E", padding: "5px 12px", fontSize: "10px", cursor: "pointer"
            }}>{g}</button>
          ))}
        </div>
      </div>

      {/* VITRINA: 2 COLUMNAS EN MOVIL */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "30px 10px 100px 10px" }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(2, 1fr)", // Fuerza 2 columnas en móvil
          gap: "15px" 
        }}>
          {filteredProducts.map(p => (
            <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ 
              background: "#FFF", padding: "10px", cursor: "pointer", textAlign: "center",
              borderRadius: "2px", border: "1px solid #F0F0F0"
            }}>
              <img src={p.images} style={{ width: "100%", height: "auto", aspectRatio: "1/1", objectFit: "contain", marginBottom: "10px" }} />
              <p style={{ color: "#E0C56E", fontSize: "9px", letterSpacing: "1px", fontWeight: "bold", margin: 0 }}>{p.brand}</p>
              <h3 style={{ fontSize: "13px", margin: "5px 0", height: "32px", overflow: "hidden" }}>{p.name}</h3>
              <p style={{ fontSize: "14px", fontWeight: "bold", color: "#0D1B2A" }}>${p.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL DETALLES */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto" }}>
          <button onClick={() => setSelectedProduct(null)} style={{ position: "absolute", top: "20px", right: "20px", border: "none", background: "#0D1B2A", color: "#FFF", padding: "10px", cursor: "pointer", zIndex: 1100 }}>VOLVER</button>
          
          <div style={{ display: "flex", flexWrap: "wrap", minHeight: "100vh" }}>
            <div style={{ flex: "1 1 400px", background: "#F9F9F9", display: "flex", alignItems: "center", padding: "40px" }}>
              <img src={selectedProduct.images} style={{ width: "100%" }} />
            </div>
            <div style={{ flex: "1 1 400px", padding: "60px 10%" }}>
              <p style={{ color: "#E0C56E", letterSpacing: "3px", fontSize: "12px" }}>{selectedProduct.brand} | {selectedProduct.gender}</p>
              <h2 style={{ fontSize: "36px", margin: "10px 0 30px 0" }}>{selectedProduct.name}</h2>
              <div style={{ marginBottom: "30px" }}>
                <p style={{ fontWeight: "bold", borderBottom: "1px solid #EEE", paddingBottom: "10px" }}>ESPECIFICACIONES</p>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "14px", margin: "10px 0", color: "#555" }}>• {s}</p>)}
              </div>
              <p style={{ fontSize: "28px", marginBottom: "40px" }}>$ {selectedProduct.price.toLocaleString()}</p>
              <button onClick={() => whatsappAction(selectedProduct)} style={{ width: "100%", background: "#0D1B2A", color: "#E0C56E", padding: "20px", border: "none", fontWeight: "bold", cursor: "pointer", letterSpacing: "2px" }}>
                CONSULTAR POR WHATSAPP
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BOTÓN WHATSAPP FLOTANTE */}
      <div 
        onClick={() => window.open('https://wa.me')}
        style={{ position: "fixed", bottom: "30px", right: "20px", background: "#25D366", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "30px", boxShadow: "0 4px 15px rgba(0,0,0,0.2)", cursor: "pointer", zIndex: 900 }}
      >
        💬
      </div>

      <footer style={{ padding: "40px 5%", background: "#0D1B2A", color: "#E0C56E", textAlign: "center", fontSize: "10px", letterSpacing: "2px" }}>
        AETERNA HOROLOGY COLOMBIA
      </footer>

      {/* Estilo para pantallas grandes (Computador) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          main > div { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important; gap: 30px !important; }
        }
      `}} />
    </div>
  );
}
