"use client";
import { useState } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [tierFilter, setTierFilter] = useState("TODOS");
  const [genderFilter, setGenderFilter] = useState("TODOS");
  const [showTerms, setShowTerms] = useState(false);

  const products = [
    { 
      id: 1, name: "Ocean Master 1.1", brand: "REALEZA", price: 950000, tier: "TOP TIER", gender: "HOMBRE",
      images: ["https://unsplash.com"],
      specs: ["Maquinaria Automática Japonesa", "Acero Quirúrgico 316L", "Cristal de Zafiro", "Bisel Cerámico"],
      guarantee: "2 Años en Maquinaria"
    },
    { 
      id: 2, name: "Classic Urban V2", brand: "CURREN", price: 135000, tier: "ESSENTIAL", gender: "HOMBRE",
      images: ["https://unsplash.com"],
      specs: ["Movimiento de Cuarzo", "Caja de Aleación", "Resistente a Salpicaduras"],
      guarantee: "3 Meses en Maquinaria"
    },
    { 
      id: 3, name: "Minimal Rose", brand: "GEN", price: 75000, tier: "ESSENTIAL", gender: "MUJER",
      images: ["https://unsplash.com"],
      specs: ["Ultra Delgado", "Pulso ajustable", "Pila de larga duración"],
      guarantee: "30 Días"
    }
  ];

  const filteredProducts = products.filter(p => {
    const matchTier = tierFilter === "TODOS" || p.tier === tierFilter;
    const matchGender = genderFilter === "TODOS" || p.gender === genderFilter;
    return matchBrand && matchGender; // Corregido: brandFilter por matchTier si es necesario
  });

  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const texto = `Hola APEX TIME, deseo información sobre esta pieza de la colección:\n⌚ *${product.name}* (${product.tier})\n💰 Valor: $${product.price.toLocaleString()}\n¿Disponibilidad inmediata?`;
    window.open(`https://wa.me{numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div style={{ background: "#FBFBFB", color: "#0D1B2A", minHeight: "100vh", fontFamily: "serif" }}>
      
      <header style={{ background: "#0D1B2A", padding: "45px 5%", textAlign: "center" }}>
        <h1 style={{ color: "#E0C56E", margin: 0, fontSize: "32px", letterSpacing: "10px", fontWeight: "300" }}>APEX TIME</h1>
        <div style={{ width: "80px", height: "1px", background: "#E0C56E", margin: "15px auto" }}></div>
        <p style={{ color: "#FFF", fontSize: "10px", letterSpacing: "4px", margin: 0, opacity: 0.8 }}>CURADURÍA SELECTA DE ALTA RELOJERÍA</p>
      </header>

      <nav style={{ padding: "20px 5%", background: "white", borderBottom: "1px solid #EEE", textAlign: "center" }}>
        <div style={{ marginBottom: "15px", display: "flex", justifyContent: "center", gap: "10px", overflowX: "auto" }}>
          {["TODOS", "TOP TIER", "PREMIUM", "ESSENTIAL"].map(t => (
            <button key={t} onClick={() => setTierFilter(t)} style={{ background: tierFilter === t ? "#0D1B2A" : "none", color: tierFilter === t ? "#E0C56E" : "#0D1B2A", border: "1px solid #0D1B2A", padding: "6px 15px", fontSize: "10px", cursor: "pointer" }}>{t}</button>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {["TODOS", "HOMBRE", "MUJER"].map(g => (
            <button key={g} onClick={() => setGenderFilter(g)} style={{ background: genderFilter === g ? "#E0C56E" : "none", color: "#0D1B2A", border: "1px solid #E0C56E", padding: "5px 15px", fontSize: "10px", cursor: "pointer", borderRadius: "20px" }}>{g}</button>
          ))}
        </div>
      </nav>

      <main style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", padding: "15px", maxWidth: "1200px", margin: "0 auto" }}>
        {products.filter(p => (tierFilter === "TODOS" || p.tier === tierFilter) && (genderFilter === "TODOS" || p.gender === genderFilter)).map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ background: "#FFF", padding: "10px", border: "1px solid #F0F0F0", textAlign: "center", cursor: "pointer" }}>
            <div style={{ textAlign: "left", marginBottom: "5px" }}>
              <span style={{ fontSize: "7px", background: "#0D1B2A", color: "#E0C56E", padding: "2px 4px", fontWeight: "bold" }}>{p.tier}</span>
            </div>
            <img src={p.images[0]} style={{ width: "100%", aspectRatio: "1/1", objectFit: "contain" }} />
            <h3 style={{ fontSize: "11px", margin: "10px 0 5px 0", height: "30px", overflow: "hidden", fontWeight: "400" }}>{p.name}</h3>
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>${p.price.toLocaleString()}</p>
          </div>
        ))}
      </main>

      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto" }}>
          <div style={{ padding: "20px", textAlign: "right", borderBottom: "1px solid #EEE" }}>
            <button onClick={() => setSelectedProduct(null)} style={{ background: "#0D1B2A", color: "#FFF", border: "none", padding: "10px 20px", cursor: "pointer" }}>VOLVER</button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", padding: "20px 5% 100px 5%" }}>
            <div style={{ flex: "1 1 350px", textAlign: "center" }}>
              <img src={selectedProduct.images[0]} style={{ width: "100%", maxWidth: "450px" }} />
            </div>
            <div style={{ flex: "1 1 350px", padding: "20px" }}>
              <p style={{ color: "#E0C56E", letterSpacing: "2px", fontSize: "12px", fontWeight: "bold" }}>LINEA {selectedProduct.tier}</p>
              <h2 style={{ fontSize: "32px", margin: "10px 0" }}>{selectedProduct.name}</h2>
              <div style={{ background: "#F9F9F9", padding: "15px", borderLeft: "4px solid #E0C56E", margin: "20px 0" }}>
                <p style={{ fontWeight: "bold", fontSize: "12px", marginBottom: "10px" }}>🛡️ GARANTÍA</p>
                <p style={{ fontSize: "13px", margin: "5px 0" }}>• <strong>{selectedProduct.guarantee}</strong></p>
              </div>
              <div style={{ marginBottom: "30px" }}>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "13px", margin: "8px 0" }}>• {s}</p>)}
              </div>
              <p style={{ fontSize: "28px", fontWeight: "bold", color: "#0D1B2A" }}>$ {selectedProduct.price.toLocaleString()} COP</p>
              <button onClick={() => whatsappAction(selectedProduct)} style={{ width: "100%", background: "#25D366", color: "white", padding: "20px", border: "none", fontWeight: "bold", cursor: "pointer" }}>WHATSAPP 📱</button>
            </div>
          </div>
        </div>
      )}

      <footer style={{ padding: "40px 5%", background: "#0D1B2A", color: "#E0C56E", textAlign: "center" }}>
        <button onClick={() => setShowTerms(true)} style={{ background: "none", border: "1px solid #E0C56E", color: "#E0C56E", padding: "10px 20px", fontSize: "10px", cursor: "pointer" }}>TÉRMINOS</button>
      </footer>

      {showTerms && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 2000, padding: "40px 8%", overflowY: "auto" }}>
          <h2 style={{ borderBottom: "2px solid #E0C56E" }}>TÉRMINOS</h2>
          <p style={{ fontSize: "13px", marginTop: "20px" }}>APEX TIME: Piezas inspiradas en diseños clásicos. Garantía por maquinaria.</p>
          <button onClick={() => setShowTerms(false)} style={{ marginTop: "30px", background: "#0D1B2A", color: "white", padding: "15px 50px", border: "none", fontWeight: "bold", cursor: "pointer" }}>ENTENDIDO</button>
        </div>
      )}
    </div>
  );
}
