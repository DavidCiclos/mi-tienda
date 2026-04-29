"use client";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("SUIZOS-S");
  const [brandFilter, setBrandFilter] = useState("TODAS");
  const [currentImage, setCurrentImage] = useState(null);
  const [showTerms, setShowTerms] = useState(false);

  // Tus productos (estos quedan igual)
  const products = [
    { 
      id: 1, 
      name: "Daytona S-Clon", 
      brand: "ROLEX", 
      line: "SUIZOS-S", 
      price: 3450000, 
      images: ["https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800"] 
    },
    // ... agrega tus otros productos aquí ...
  ];

  const availableBrands = useMemo(() => {
    const map = {
      "SUIZOS-S": ["ROLEX"],
      "PREMIUM 1.1": [
        "ROLEX", "CARTIER", "RICHARD MILLE", "BREITLING", "HUBLOT", "CASIO", "TISSOT", "OMEGA", "Q&Q"
      ],
      "AAA": [
        "CASIO", "Q&Q", "TISSOT", "OMEGA", "ROLEX", "CARTIER", "RICHARD MILLE", "BREITLING", "HUBLOT"
      ]
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
    <div style={{ background: "#fff", color: "#111", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif", minHeight: "100vh" }}>

      {/* --- EL HEADER (Lo que te gusta encerrado en amarillo) --- */}
      <section style={{ padding: "80px 20px", textAlign: "center", position: "relative" }}>
        <h1 style={{ letterSpacing: "12px", fontWeight: 300, margin: 0, fontSize: "28px", textTransform: "uppercase" }}>
          APEX TIME
        </h1>
        <p style={{ marginTop: "15px", color: "#777", letterSpacing: "4px", fontSize: "11px", fontWeight: 400, textTransform: "uppercase" }}>
          ALTA RELOJERÍA • CURADURÍA SELECTA
        </p>
      </section>

      {/* --- NUEVA BARRA DE NAVEGACIÓN PREMIUM (Reemplazo total de lo simple) --- */}
      <nav style={{ 
        position: "sticky", 
        top: 0, 
        background: "rgba(255,255,255,0.95)", 
        zIndex: 100,
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)",
        borderTop: "1px solid #f0f0f0",
        borderBottom: "1px solid #f0f0f0"
      }}>
        {/* Contenedor Centrado */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          
          {/* Fila 1: Las Categorías (Lo que estaba encerrado en rojo) */}
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "5px", 
            padding: "20px 0 15px", 
            borderBottom: "1px solid #f9f9f9"
          }}>
            {["SUIZOS-S", "PREMIUM 1.1", "AAA"].map(cat => (
              <button 
                key={cat}
                onClick={() => { setCategoryFilter(cat); setBrandFilter("TODAS"); }}
                style={{
                  padding: "10px 22px",
                  borderRadius: "2px", // Menos redondeado
                  border: "none",
                  // Fondo oscuro solo si está seleccionado
                  background: categoryFilter === cat ? "#111" : "#fbfbfb", 
                  // Texto blanco o negro según selección
                  color: categoryFilter === cat ? "#fff" : "#555",
                  cursor: "pointer",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "2.5px", // Más espacio entre letras
                  textTransform: "uppercase",
                  transition: "all 0.3s ease", // Animación suave
                  outline: "none"
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Fila 2: Las Marcas (Más premium y espaciadas) */}
          <div style={{ 
            display: "flex", 
            gap: "25px", // Más espacio
            padding: "15px 0 20px", 
            overflowX: "auto", 
            scrollbarWidth: "none", // Ocultar scrollbar
            justifyContent: "center" // Centrar marcas
          }}>
            {availableBrands.map(brand => (
              <span 
                key={brand}
                onClick={() => setBrandFilter(brand)}
                style={{
                  cursor: "pointer", 
                  fontSize: "11px", 
                  whiteSpace: "nowrap",
                  letterSpacing: "3px", // Más espacio entre letras
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                  fontWeight: 500,
                  color: brandFilter === brand ? "#000" : "#bbb",
                  position: "relative",
                  paddingBottom: "5px"
                }}
              >
                {brand}
                {/* Línea inferior de selección más fina y premium */}
                {brandFilter === brand && (
                  <span style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "1px", // Más delgada
                    background: "#000",
                    transition: "all 0.3s ease"
                  }}></span>
                )}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* --- GRID DE PRODUCTOS (Sin cambios, pero ahora se ve mejor por la nav) --- */}
      <main style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "50px" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ cursor: "pointer", transition: "transform 0.3s ease" }}>
            <div style={{ overflow: "hidden", borderRadius: "2px", background: "#fbfbfb" }}>
              <img src={p.images[0]} alt={p.name} style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <p style={{ fontSize: "10px", color: "#888", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 400 }}>{p.brand}</p>
              <h3 style={{ fontWeight: 400, fontSize: "19px", margin: "8px 0", letterSpacing: "0.5px" }}>{p.name}</h3>
              <p style={{ fontWeight: 600, fontSize: "17px", color: "#222" }}>${p.price.toLocaleString()}</p>
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
