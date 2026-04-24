"use client";
import { useState } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [brandFilter, setBrandFilter] = useState("TODOS");
  const [genderFilter, setGenderFilter] = useState("TODOS");

  const products = [
    { 
      id: 1, name: "Chronos Executive", brand: "CURREN", gender: "HOMBRE", price: 185000, 
      images: ["https://unsplash.com"],
      specs: ["Maquinaria Japonesa", "Caja de Aleación", "Cronógrafo de Precisión"],
      guarantee: "6 Meses en Maquinaria"
    },
    { 
      id: 2, name: "Lady Rose Deluxe", brand: "CURREN", gender: "MUJER", price: 155000, 
      images: ["https://unsplash.com"],
      specs: ["Acero Ionizado", "Cristal de Alta Resistencia", "Detalles en Oro Rosa"],
      guarantee: "6 Meses en Maquinaria"
    },
    { 
      id: 3, name: "Heritage Silver AAA", brand: "GENÉRICO", gender: "HOMBRE", price: 320000, 
      images: ["https://unsplash.com"],
      specs: ["Calidad AAA", "Resistencia 5 Bar", "Calendario Automático"],
      guarantee: "3 Meses en Maquinaria"
    }
  ];

  const filteredProducts = products.filter(p => {
    const matchBrand = brandFilter === "TODOS" || p.brand === brandFilter;
    const matchGender = genderFilter === "TODOS" || p.gender === genderFilter;
    return matchBrand && matchGender;
  });

  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const texto = `Hola APEX TIME, me gustaría recibir más información sobre la pieza: *${product.name}* ($${product.price.toLocaleString()})`;
    window.open(`https://wa.me{numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div style={{ background: "#FBFBFB", color: "#0D1B2A", minHeight: "100vh", fontFamily: "serif" }}>
      
      {/* HEADER - APEX TIME */}
      <header style={{ background: "#0D1B2A", padding: "45px 5%", textAlign: "center" }}>
        <h1 style={{ color: "#E0C56E", margin: 0, fontSize: "32px", letterSpacing: "12px", fontWeight: "300" }}>
          APEX TIME
        </h1>
        <div style={{ width: "80px", height: "1px", background: "#E0C56E", margin: "15px auto" }}></div>
        <p style={{ color: "#FFF", fontSize: "10px", letterSpacing: "4px", margin: 0, opacity: 0.8 }}>ALTA RELOJERÍA Y ESTILO</p>
      </header>

      {/* FILTROS */}
      <nav style={{ padding: "20px 5%", background: "#FFF", borderBottom: "1px solid #EEE", textAlign: "center" }}>
        <div style={{ marginBottom: "15px", display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
          {["TODOS", "CURREN", "GENÉRICO", "CASIO"].map(b => (
            <button key={b} onClick={() => setBrandFilter(b)} style={{ background: brandFilter === b ? "#0D1B2A" : "white", color: brandFilter === b ? "#E0C56E" : "#0D1B2A", border: "1px solid #0D1B2A", padding: "5px 12px", fontSize: "10px", cursor: "pointer" }}>{b}</button>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {["TODOS", "HOMBRE", "MUJER"].map(g => (
            <button key={g} onClick={() => setGenderFilter(g)} style={{ background: genderFilter === g ? "#E0C56E" : "white", border: "1px solid #E0C56E", color: "#0D1B2A", padding: "5px 12px", fontSize: "10px", cursor: "pointer" }}>{g}</button>
          ))}
        </div>
      </nav>

      {/* GRID DE RELOJES (2 COLUMNAS) */}
      <main style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", padding: "15px", maxWidth: "1200px", margin: "0 auto" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ background: "#FFF", padding: "10px", border: "1px solid #F0F0F0", textAlign: "center", cursor: "pointer" }}>
            <img src={p.images[0]} alt={p.name} style={{ width: "100%", aspectRatio: "1/1", objectFit: "contain" }} />
            <p style={{ color: "#E0C56E", fontSize: "9px", fontWeight: "bold", margin: "10px 0 0 0" }}>{p.brand}</p>
            <h3 style={{ fontSize: "12px", margin: "5px 0", height: "30px", overflow: "hidden" }}>{p.name}</h3>
            <p style={{ fontSize: "13px", fontWeight: "bold" }}>${p.price.toLocaleString()}</p>
          </div>
        ))}
      </main>

      {/* SECCIÓN LOGÍSTICA */}
      <section style={{ margin: "40px 0", padding: "30px 5%", background: "#F1F1F1", textAlign: "center" }}>
        <p style={{ fontSize: "11px", letterSpacing: "2px", marginBottom: "15px", fontWeight: "bold" }}>LOGÍSTICA Y ENVÍOS</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "25px", opacity: 0.5, fontSize: "12px", fontWeight: "bold", flexWrap: "wrap" }}>
          <span>INTERRAPIDÍSIMO</span>
          <span>SERVIENTREGA</span>
          <span>ENVÍA</span>
        </div>
      </section>

      {/* MODAL DETALLES Y GARANTÍA */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto" }}>
          <div style={{ padding: "20px", textAlign: "right" }}>
            <button onClick={() => setSelectedProduct(null)} style={{ background: "#0D1B2A", color: "#FFF", border: "none", padding: "10px 20px", cursor: "pointer" }}>VOLVER</button>
          </div>
          
          <div style={{ display: "flex", flexWrap: "wrap", padding: "0 5% 100px 5%" }}>
            <div style={{ flex: "1 1 350px", textAlign: "center" }}>
              <img src={selectedProduct.images[0]} alt={selectedProduct.name} style={{ width: "100%", maxWidth: "450px" }} />
            </div>
            
            <div style={{ flex: "1 1 350px", padding: "20px" }}>
              <p style={{ color: "#E0C56E", letterSpacing: "2px", fontSize: "12px" }}>{selectedProduct.brand}</p>
              <h2 style={{ fontSize: "32px", margin: "10px 0" }}>{selectedProduct.name}</h2>
              <p style={{ fontSize: "24px", fontWeight: "bold", margin: "20px 0", color: "#0D1B2A" }}>${selectedProduct.price.toLocaleString()} COP</p>
              
              <div style={{ marginBottom: "30px", padding: "15px", background: "#F9F9F9", borderLeft: "4px solid #E0C56E" }}>
                <p style={{ fontWeight: "bold", fontSize: "13px", marginBottom: "10px" }}>🛡️ GARANTÍA APEX</p>
                <p style={{ fontSize: "13px", margin: "5px 0" }}>• <strong>{selectedProduct.guarantee}</strong></p>
                <p style={{ fontSize: "12px", color: "#666", lineHeight: "1.4" }}>Válida por defectos de maquinaria. No incluye daños por agua, golpes o desgaste natural.</p>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <p style={{ fontWeight: "bold", borderBottom: "1px solid #EEE", paddingBottom: "5px", fontSize: "13px" }}>ESPECIFICACIONES</p>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "13px", margin: "8px 0" }}>• {s}</p>)}
              </div>

              <button onClick={() => whatsappAction(selectedProduct)} style={{ width: "100%", background: "#0D1B2A", color: "#E0C56E", padding: "20px", border: "none", fontWeight: "bold", cursor: "pointer", letterSpacing: "2px" }}>
                CONSULTAR POR WHATSAPP
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WHATSAPP FLOTANTE */}
      <div onClick={() => window.open('https://wa.me')} style={{ position: "fixed", bottom: "20px", right: "20px", background: "#25D366", width: "55px", height: "55px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "28px", boxShadow: "0 4px 12px rgba(0,0,0,0.2)", cursor: "pointer", zIndex: 900 }}>
        💬
      </div>

      <footer style={{ padding: "40px 5%", background: "#0D1B2A", color: "#E0C56E", textAlign: "center", fontSize: "10px", letterSpacing: "2px" }}>
        APEX TIME COLOMBIA
      </footer>
    </div>
  );
}
