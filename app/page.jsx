"use client";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("SUIZOS-S");
  const [brandFilter, setBrandFilter] = useState("TODAS");
  const [currentImage, setCurrentImage] = useState(null);
  const [showTerms, setShowTerms] = useState(false);

  // Tus productos (Mantén tu lista de 200 aquí)
  const products = [
    // Ejemplo para SUIZOS-S
    { 
      id: 1, 
      name: "Daytona S-Clon", 
      brand: "ROLEX", 
      line: "SUIZOS-S", 
      price: 3450000, 
      warranty: "2 años", 
      images: ["https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800"] 
    },
    // Ejemplo para ORIGINALES (Copia y pega este para probar el selector)
    { 
      id: 2, 
      name: "Reloj Original Test", 
      brand: "CASIO", 
      line: "CASIO-ORIGINAL", 
      price: 250000, 
      warranty: "1 año", 
      images: ["https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800"] 
    },
  ];

  const availableBrands = useMemo(() => {
    const map = {
      "SUIZOS-S": ["ROLEX"],
      "PREMIUM 1.1": ["ROLEX", "CARTIER", "RICHARD MILLE", "BREITLING", "HUBLOT", "CASIO", "TISSOT", "OMEGA", "Q&Q"],
      "AAA": ["CASIO", "Q&Q", "TISSOT", "OMEGA", "ROLEX", "CARTIER", "RICHARD MILLE", "BREITLING", "HUBLOT"]
    };
    return ["TODAS", ...(map[categoryFilter] || [])];
  }, [categoryFilter]);

  const filteredProducts = useMemo(() => {
    return products.filter(
      p => p.line === categoryFilter &&
      (brandFilter === "TODAS" || p.brand === brandFilter)
    );
  }, [categoryFilter, brandFilter, products]);

  return (
    // CAMBIO: Fuente Inter o System-ui para un look más moderno y limpio
    <div style={{ background: "#fff", color: "#111", fontFamily: "'Inter', system-ui, sans-serif", minHeight: "100vh" }}>

      {/* --- HEADER (Elegancia minimalista) --- */}
      <section style={{ padding: "100px 20px 60px", textAlign: "center" }}>
        <h1 style={{ letterSpacing: "15px", fontWeight: 200, margin: 0, fontSize: "35px", textTransform: "uppercase" }}>
          APEX TIME
        </h1>
        <p style={{ marginTop: "15px", color: "#888", letterSpacing: "6px", fontSize: "10px", fontWeight: 400, textTransform: "uppercase" }}>
          ALTA RELOJERÍA • CURADURÍA SELECTA
        </p>
      </section>

{/* --- NAVEGACIÓN --- */}
      <nav style={{ 
        position: "sticky", top: 0, background: "rgba(255,255,255,0.98)", zIndex: 100, 
        boxShadow: "0 10px 40px -15px rgba(0,0,0,0.05)", borderBottom: "1px solid #f0f0f0" 
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          
          {/* Fila 1: Categorías y Selector de Originales */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", padding: "25px 0 15px", flexWrap: "wrap" }}>
            {["SUIZOS-S", "PREMIUM 1.1", "AAA"].map(cat => (
              <button key={cat} onClick={() => { setCategoryFilter(cat); setBrandFilter("TODAS"); }}
                style={{
                  padding: "12px 24px", borderRadius: "4px",
                  border: categoryFilter === cat ? "1px solid #000" : "1px solid #e0e0e0",
                  background: categoryFilter === cat ? "#000" : "#fbfbfb", 
                  color: categoryFilter === cat ? "#fff" : "#666",
                  cursor: "pointer", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", transition: "all 0.2s ease", outline: "none",
                  boxShadow: categoryFilter === cat ? "0 4px 12px rgba(0,0,0,0.15)" : "none"
                }}>{cat}</button>
            ))}
            
            <div style={{ width: "1px", height: "20px", background: "#eee", margin: "0 5px" }}></div>
            
            <select 
              value={categoryFilter.includes("ORIGINAL") ? categoryFilter : ""} 
              onChange={(e) => { setCategoryFilter(e.target.value); setBrandFilter("TODAS"); }}
              style={{ padding: "12px 24px", borderRadius: "4px", border: "2px solid #000", background: categoryFilter.includes("ORIGINAL") ? "#000" : "#fff", color: categoryFilter.includes("ORIGINAL") ? "#fff" : "#000", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", cursor: "pointer", outline: "none", appearance: "none", textAlign: "center", minWidth: "200px" }}>
              <option value="" disabled hidden>✨ ORIGINALES ▼</option>
              {["CHRONOS", "CURREN", "NAVIFORCE", "CASIO", "PULSO", "BENYAR", "G-SHOCK", "SCOTTIE", "ONOLA", "SKMEI", "SANDA", "FOXBOX", "CASSRAY", "Q&Q", "KOSMO", "EXPONI", "RD"].sort().map(marca => (
                <option key={marca} value={`${marca}-ORIGINAL`}>{marca} (ORIGINAL)</option>
              ))}
            </select>
          </div>

          {/* Fila 2: Marcas con scroll lateral corregido */}
          <div style={{ 
            display: "flex", gap: "35px", padding: "15px 0 25px", 
            overflowX: "auto", scrollbarWidth: "none", 
            justifyContent: "flex-start", 
            WebkitOverflowScrolling: "touch" 
          }}>
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
            {availableBrands.map(brand => (
              <span key={brand} onClick={() => setBrandFilter(brand)}
                style={{ 
                  cursor: "pointer", fontSize: "11px", whiteSpace: "nowrap", 
                  letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700, 
                  color: brandFilter === brand ? "#000" : "#ccc", 
                  position: "relative", paddingBottom: "8px", 
                  flexShrink: 0 
                }}>
                {brand}
                {brandFilter === brand && <span style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "2px", background: "#000" }}></span>}
              </span>
            ))}
          </div>
        </div> 
      </nav>

   {/* --- GRID DE PRODUCTOS (DISEÑO BOUTIQUE) --- */}
      <main style={{ 
        maxWidth: "1200px", 
        margin: "40px auto", 
        padding: "0 20px", 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
        gap: "40px 25px" 
      }}>
        {filteredProducts.map(p => (
          <div key={p.id} 
            onClick={() => setSelectedProduct(p)} 
            style={{ 
              cursor: "pointer",
              transition: "transform 0.3s ease"
            }}>
            
            {/* Contenedor de Imagen con Proporción Fija */}
            <div style={{ 
              position: "relative",
              overflow: "hidden", 
              background: "#f7f7f7",
              borderRadius: "12px", 
              aspectRatio: "1/1", // Imagen cuadrada perfecta para uniformidad
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
            }}>
              <img 
                src={p.images[0]} 
                alt={p.name} 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover", 
                  display: "block", 
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)" 
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.08)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
              
              {/* Etiqueta sutil de línea */}
              <div style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "rgba(255,255,255,0.9)",
                padding: "4px 8px",
                fontSize: "8px",
                fontWeight: "800",
                letterSpacing: "1px",
                borderRadius: "4px",
                color: "#000",
                textTransform: "uppercase"
              }}>
                {p.line.split('-')[0]}
              </div>
            </div>

            {/* Información con jerarquía clara */}
            <div style={{ 
              marginTop: "20px", 
              textAlign: "center"
            }}>
              <p style={{ 
                fontSize: "10px", 
                color: "#999", 
                letterSpacing: "3px", 
                textTransform: "uppercase", 
                margin: "0 0 6px 0" 
              }}>
                {p.brand}
              </p>
              
              <h3 style={{ 
                fontWeight: "500", 
                fontSize: "16px", 
                margin: "0", 
                color: "#1a1a1a",
                lineHeight: "1.2"
              }}>
                {p.name}
              </h3>

              <p style={{ 
                fontWeight: "700", 
                fontSize: "15px", 
                color: "#000",
                marginTop: "10px" 
              }}>
                ${p.price.toLocaleString()} <span style={{ fontSize: "10px", fontWeight: "400" }}>COP</span>
              </p>
            </div>
          </div>
        ))}
      </main>

      {/* MODAL DE PRODUCTO */}
      {selectedProduct && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "20px" }}>
          <div style={{ background: "#fff", maxWidth: "450px", width: "100%", borderRadius: "20px", padding: "25px", position: "relative", maxHeight: "90vh", overflowY: "auto" }}>
            
            <button onClick={() => { setSelectedProduct(null); setCurrentImage(null); }} 
              style={{ position: "absolute", top: "15px", right: "15px", background: "#eee", border: "none", borderRadius: "50%", width: "30px", height: "30px", cursor: "pointer", zIndex: 10 }}>✕</button>

            {/* GALERÍA */}
            <div style={{ width: "100%", marginTop: "10px" }}>
              <div style={{ overflow: "hidden", borderRadius: "12px", cursor: "zoom-in", background: "#f9f9f9", marginBottom: "15px" }}>
                <img src={currentImage || selectedProduct.images[0]} 
                  style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.3s ease" }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.5)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} />
              </div>
              <div style={{ display: "flex", gap: "10px", marginBottom: "20px", overflowX: "auto" }}>
                {selectedProduct.images.map((img, idx) => (
                  <img key={idx} src={img} onClick={() => setCurrentImage(img)}
                    style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "8px", cursor: "pointer", flexShrink: 0, border: (currentImage === img || (!currentImage && idx === 0)) ? "2px solid #D4AF37" : "2px solid transparent" }} />
                ))}
              </div>
            </div>

            {/* INFO */}
            <div style={{ marginTop: "10px" }}>
              <span style={{ background: "#ffebee", color: "#d32f2f", padding: "4px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: "bold" }}>🔴 CASI AGOTADO</span>
              <h2 style={{ marginTop: "15px", fontWeight: "600", fontSize: "22px" }}>{selectedProduct.name}</h2>
              <p style={{ fontSize: "24px", fontWeight: "700", margin: "10px 0" }}>${selectedProduct.price.toLocaleString()} COP</p>
              <div style={{ margin: "20px 0", padding: "15px", borderTop: "1px solid #eee" }}>
                <p style={{ fontWeight: "700", fontSize: "12px", marginBottom: "10px" }}>CARACTERÍSTICAS:</p>
                <p style={{ fontSize: "14px", margin: "5px 0" }}>⌚ HORA ANÁLOGA</p>
                <p style={{ fontSize: "14px", margin: "5px 0" }}>💍 CRISTAL MINERAL RESISTENTE</p>
                <p style={{ fontSize: "14px", margin: "5px 0" }}>🎁 INCLUYE CAJA DE PRESENTACIÓN</p>
              </div>
              {/* SECCIÓN DE TÉRMINOS DESPLEGABLE */}
<div style={{ marginTop: "15px", borderTop: "1px solid #eee" }}>
  <div 
    onClick={() => setShowTerms(!showTerms)} 
    style={{ 
      cursor: "pointer", 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      padding: "12px 0"
    }}
  >
    <span style={{ fontSize: "12px", fontWeight: "700", color: "#333" }}>
      📄 TÉRMINOS, GARANTÍA Y DEVOLUCIONES
    </span>
    <span style={{ fontSize: "12px" }}>{showTerms ? "▲" : "▼"}</span>
  </div>

  {showTerms && (
    <div style={{ 
      fontSize: "11px", 
      color: "#666", 
      lineHeight: "1.4", 
      padding: "12px", 
      background: "#f9f9f9", 
      borderRadius: "10px",
      marginBottom: "10px"
    }}>
      {/* 1. LÍNEA DE GARANTÍA DINÁMICA (SOLO UNA) */}
      <p style={{ marginBottom: "5px" }}>
        • ⚙️ <strong>Garantía:</strong> {selectedProduct.warranty} por maquinaria.
      </p>
      
      <p style={{ marginBottom: "5px" }}>
        • 🔍 <strong>Peritaje:</strong> No se aceptan cambios de satisfaccion, si la pieza tiene rayones o marcas de uso. 
      </p>
      
      <p>
        • 📸 <strong>Seguridad:</strong> Grabamos video del estado de cada reloj antes del envío.
      </p>
    </div>
  )}
</div>

<button onClick={() => {
  const mensaje = `Hola APEX TIME, deseo adquirir esta pieza:

⌚ *Modelo:* ${selectedProduct.name}
🏷️ *Ref:* ${selectedProduct.brand}-${selectedProduct.id}
💰 *Precio:* $${selectedProduct.price.toLocaleString()} COP
🛡️ *Garantía:* ${selectedProduct.warranty}

*He leído y acepto los términos de garantía y peritaje técnico.* ¿Sigue disponible?`;

  window.open(`https://wa.me/573126934247?text=${encodeURIComponent(mensaje)}`, "_blank");
}}
style={{ 
  width: "100%", 
  padding: "16px", 
  background: "#25D366", 
  color: "#fff", 
  border: "none", 
  borderRadius: "12px", 
  fontWeight: "700", 
  cursor: "pointer", 
  marginTop: "10px" 
}}>
  SOLICITAR POR WHATSAPP 📱
</button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
