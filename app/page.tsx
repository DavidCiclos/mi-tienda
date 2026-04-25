"use client";
import { useState } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [brandFilter, setBrandFilter] = useState("TODOS");
  const [showTerms, setShowTerms] = useState(false);

  const products = [
    { id: 1, name: "Submariner 'Starbucks' 1.1", brand: "ROLEX", price: 850000, tier: "TOP TIER", images: ["https://unsplash.com"], specs: ["Acero 316L", "Bisel Cerámico", "Garantía 2 Años"] },
    { id: 2, name: "RM-011 Carbon Edition", brand: "RICHARD MILLE", price: 1250000, tier: "EXOTIC", images: ["https://unsplash.com"], specs: ["Maquinaria Visible", "Caja de Carbono", "Edición Limitada"] },
    { id: 3, name: "PRX Powermatic 80", brand: "TISSOT", price: 580000, tier: "PREMIUM", images: ["https://unsplash.com"], specs: ["Automático", "Tablero 3D", "Estilo Retro"] },
    { id: 4, name: "Santos Skeleton Gold", brand: "CARTIER", price: 980000, tier: "TOP TIER", images: ["https://unsplash.com"], specs: ["Oro Ionizado", "Zafiro en Corona", "Full Set"] },
    { id: 5, name: "Diesel Mega Chief Black", brand: "DIESEL", price: 280000, tier: "LIFESTYLE", images: ["https://unsplash.com"], specs: ["Gran Tamaño", "Cronógrafo", "Cuero Genuino"] }
  ];

  const filteredProducts = brandFilter === "TODOS" ? products : products.filter(p => p.brand === brandFilter);

  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const texto = `Hola APEX TIME, me interesa información sobre: *${product.name}* ($${product.price.toLocaleString()})`;
    window.open(`https://wa.me{numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div style={{ background: "#FBFBFB", color: "#0D1B2A", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* HEADER */}
      <header style={{ background: "#0D1B2A", padding: "45px 5%", textAlign: "center" }}>
        <h1 style={{ color: "#E0C56E", margin: 0, fontSize: "30px", letterSpacing: "8px", fontWeight: "300" }}>APEX TIME</h1>
        <div style={{ width: "60px", height: "1px", background: "#E0C56E", margin: "15px auto" }}></div>
        <p style={{ color: "#FFF", fontSize: "10px", letterSpacing: "3px", margin: 0, opacity: 0.8 }}>ALTA RELOJERÍA & PIEZAS SELECTAS</p>
      </header>

      {/* FILTROS */}
      <nav style={{ padding: "20px 5%", background: "#FFF", borderBottom: "1px solid #EEE", textAlign: "center", overflowX: "auto" }}>
        {["TODOS", "ROLEX", "CARTIER", "TISSOT", "RICHARD MILLE", "DIESEL", "HUBLOT"].map(b => (
          <button key={b} onClick={() => setBrandFilter(b)} style={{ 
            background: brandFilter === b ? "#0D1B2A" : "none", color: brandFilter === b ? "#E0C56E" : "#0D1B2A", 
            border: "1px solid #0D1B2A", padding: "6px 15px", fontSize: "10px", cursor: "pointer", margin: "5px"
          }}>{b}</button>
        ))}
      </nav>

      {/* VITRINA */}
      <main style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", padding: "15px", maxWidth: "1200px", margin: "0 auto" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ background: "#FFF", padding: "10px", border: "1px solid #F0F0F0", textAlign: "center", cursor: "pointer", position: "relative" }}>
            <span style={{ position: "absolute", top: "5px", left: "5px", fontSize: "8px", background: "#0D1B2A", color: "#E0C56E", padding: "2px 5px", fontWeight: "bold" }}>{p.tier}</span>
            <img src={p.images[0]} alt={p.name} style={{ width: "100%", aspectRatio: "1/1", objectFit: "contain" }} />
            <p style={{ color: "#E0C56E", fontSize: "9px", fontWeight: "bold", margin: "10px 0 0 0" }}>{p.brand}</p>
            <h3 style={{ fontSize: "12px", margin: "5px 0", height: "30px", overflow: "hidden" }}>{p.name}</h3>
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>${p.price.toLocaleString()}</p>
          </div>
        ))}
      </main>

      {/* CUIDADO DEL RELOJ */}
      <section style={{ margin: "20px 5%", padding: "20px", background: "#F1F1F1", border: "1px dashed #CCC", textAlign: "center" }}>
        <p style={{ fontSize: "11px", fontWeight: "bold", marginBottom: "5px" }}>⚠️ NOTA DE MANTENIMIENTO</p>
        <p style={{ fontSize: "10px", color: "#666", lineHeight: "1.4" }}>Para preservar el acabado 1.1, evite agua caliente, vapor o perfumes.</p>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "40px 5%", background: "#0D1B2A", color: "#E0C56E", textAlign: "center" }}>
        <button onClick={() => setShowTerms(true)} style={{ background: "none", border: "none", color: "#FFF", fontSize: "11px", textDecoration: "underline", cursor: "pointer" }}>
          Términos de Garantía e Inspección Técnica
        </button>
      </footer>

      {/* MODAL TÉRMINOS */}
      {showTerms && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 2000, overflowY: "auto", padding: "30px" }}>
          <h2 style={{ borderBottom: "2px solid #E0C56E", paddingBottom: "10px" }}>Inspección Técnica</h2>
          <div style={{ fontSize: "14px", lineHeight: "1.6", color: "#444" }}>
            <p><strong>1. Peritaje:</strong> Todo reloj devuelto será inspeccionado para confirmar que la maquinaria no ha sido manipulada.</p>
            <p><strong>2. Estado:</strong> No se aceptan piezas con rayones o señales de uso.</p>
            <p><strong>3. Empaque:</strong> Debe incluir estuche y manuales originales.</p>
          </div>
          <button onClick={() => setShowTerms(false)} style={{ marginTop: "20px", background: "#0D1B2A", color: "#E0C56E", padding: "12px 30px", border: "none", fontWeight: "bold" }}>VOLVER</button>
        </div>
      )}

      {/* MODAL PRODUCTO */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto" }}>
          <div style={{ padding: "20px", textAlign: "right" }}>
            <button onClick={() => setSelectedProduct(null)} style={{ background: "#0D1B2A", color: "#FFF", border: "none", padding: "10px 20px" }}>VOLVER</button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", padding: "0 5% 80px 5%" }}>
            <div style={{ flex: "1 1 300px", textAlign: "center" }}>
              <img src={selectedProduct.images[0]} style={{ width: "100%", maxWidth: "400px" }} />
            </div>
            <div style={{ flex: "1 1 300px", padding: "20px" }}>
              <p style={{ color: "#E0C56E", fontSize: "12px", fontWeight: "bold" }}>{selectedProduct.brand} | {selectedProduct.tier}</p>
              <h2 style={{ fontSize: "28px", margin: "10px 0" }}>{selectedProduct.name}</h2>
              <div style={{ margin: "20px 0", padding: "15px", background: "#F9F9F9", borderLeft: "4px solid #E0C56E" }}>
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>🛡️ GARANTÍA DE MAQUINARIA</p>
                <p style={{ fontSize: "11px", color: "#666" }}>Sujeta a inspección técnica rigurosa previa a cualquier trámite.</p>
              </div>
              <button onClick={() => whatsappAction(selectedProduct)} style={{ width: "100%", background: "#0D1B2A", color: "#E0C56E", padding: "18px", border: "none", fontWeight: "bold" }}>
                WHATSAPP ASESORÍA
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

