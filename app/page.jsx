"use client";
import { useState, useMemo } from "react";
import { listaProductos } from './productos';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("SUIZOS-S");
  const [brandFilter, setBrandFilter] = useState("TODAS");
  const [currentImage, setCurrentImage] = useState(null);
  const [showTerms, setShowTerms] = useState(false);

  const products = listaProductos;

 // 2. Mapa de marcas unificado (Aquí agregas las nuevas marcas cuando quieras)
  const availableBrands = useMemo(() => {
    const map = {
      "SUIZOS-S": ["ROLEX", "HUBLOT"], 
      "PREMIUM 1.1": ["ROLEX", "CARTIER", "RICHARD MILLE", "BREITLING", "HUBLOT", "CASIO", "TISSOT", "OMEGA", "Q&Q", "SMARTWATCH"],
      "AAA": ["CASIO", "Q&Q", "TISSOT", "OMEGA", "ROLEX", "CARTIER", "RICHARD MILLE", "BREITLING", "HUBLOT"],
      "ORIGINALES": ["SKMEI", "SANDA", "SCOTTIE", "TYFON", "CURREN", "NAVIFORCE", "BENYAR", "Q&Q", "PULSO", "ONOLA", "CASSRAY", "FOXBOX", "LIGE", "CASIO", "G-SHOCK", "CHENXI"]
    };

    return ["TODAS", ...(map[categoryFilter] || [])];
  }, [categoryFilter]);
  
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchLine = p.line === categoryFilter;
      const matchBrand = brandFilter === "TODAS" || p.brand === brandFilter;
      return matchLine && matchBrand;
    });
  }, [categoryFilter, brandFilter, products]);

  return (
    // CAMBIO: Fuente Inter o System-ui para un look más moderno y limpio
    <div style={{ background: "#fff", color: "#111", fontFamily: "'Inter', system-ui, sans-serif", minHeight: "100vh" }}>
      
      {/* --- HEADER (HERO SECTION CON IMAGEN DE FONDO) --- */}
      <section style={{ 
        position: "relative",
        height: "60vh", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://res.cloudinary.com/debewjkqh/image/upload/v1779329422/Gemini_Generated_Image_rei22lrei22lrei2_2_j6gwvz.jpg')`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", 
        color: "#fff",
        padding: "0 20px",
        overflow: "hidden"
      }}>
        
        {/* 1. Línea vertical superior - Ahora con margen automático para centrarse */}
        <div style={{ width: "1px", height: "50px", background: "rgba(255,255,255,0.3)", margin: "0 auto 20px auto" }}></div>

        {/* 2. Título Principal */}
        <h1 style={{ 
          letterSpacing: "20px", 
          fontWeight: 200, 
          margin: "0 0 15px 0", 
          fontSize: "clamp(30px, 5vw, 60px)", 
          textTransform: "uppercase",
          textShadow: "0 10px 30px rgba(0,0,0,0.5)"
        }}>
          APEX TIME
        </h1>

        {/* 3. Línea horizontal divisoria - Con margen automático para PC y celular */}
        <div style={{
          height: "1px",
          width: "120px",
          background: "#fff",
          margin: "0 auto 20px auto",
          opacity: 0.5
        }}></div>

        {/* 4. Subtítulo Ajustado */}
        <p style={{ 
          color: "#eee", 
          letterSpacing: "clamp(3px, 1.5vw, 8px)", 
          fontSize: "clamp(9px, 2vw, 11px)",       
          fontWeight: 400, 
          textTransform: "uppercase",
          maxWidth: "90%",                                 
          lineHeight: "2",
          margin: "0 auto",                                
          textAlign: "center"                              
        }}>
          ALTA RELOJERÍA <span style={{ margin: "0 clamp(5px, 2vw, 15px)", opacity: 0.3 }}>|</span> CURADURÍA SELECTA
        </p>

        {/* 5. Línea vertical inferior - Perfectamente alineada al eje */}
        <div style={{ width: "1px", height: "50px", background: "rgba(255,255,255,0.3)", margin: "20px auto 0 auto" }}></div>

      </section>

      {/* --- NAVEGACIÓN --- */}
      <nav style={{ 
        position: "sticky", top: 0, background: "rgba(255,255,255,0.98)", zIndex: 100, 
        boxShadow: "0 10px 40px -15px rgba(0,0,0,0.05)", borderBottom: "1px solid #f0f0f0" 
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>

          {/* Fila 1: Categorías unificadas */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", padding: "25px 0 15px", flexWrap: "wrap" }}>
            {["SUIZOS-S", "PREMIUM 1.1", "AAA", "ORIGINALES"].map(cat => (
              <button key={cat} onClick={() => { setCategoryFilter(cat); setBrandFilter("TODAS"); }}
                style={{
                  padding: "12px 24px", borderRadius: "4px",
                  border: categoryFilter === cat ? "1px solid #000" : "1px solid #e0e0e0",
                  background: categoryFilter === cat ? "#000" : "#fbfbfb", 
                  color: categoryFilter === cat ? "#fff" : "#666",
                  cursor: "pointer", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", transition: "all 0.2s ease", outline: "none",
                  boxShadow: categoryFilter === cat ? "0 4px 12px rgba(0,0,0,0.15)" : "none"
                }}>
                {cat === "ORIGINALES" ? "✨ ORIGINALES" : cat}
              </button>
            ))}
          </div>
          {/* Fila 2: Marcas con scroll lateral corregido */}
          <div style={{ 
            display: "flex", gap: "35px", padding: "15px 0 25px", 
            overflowX: "auto", scrollbarWidth: "none", 
            justifyContent: "flex-start", 
            WebkitOverflowScrolling: "touch" 
          }}>
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

      {/* --- GRID DE PRODUCTOS --- */}
      <main style={{ 
        maxWidth: "1300px", 
        margin: "40px auto", 
        padding: "0 20px", 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
        gap: "20px" 
      }}>
        {filteredProducts.map(p => {
          const isSuizo = categoryFilter === "SUIZOS-S";
          
          return (
            <div key={p.id}
              onClick={() => setSelectedProduct(p)}
              style={{
                cursor: "pointer",
                background: isSuizo ? "#0a0a0a" : "#fff",
                border: isSuizo ? "1px solid #D4AF37" : "1px solid #eee",
                position: "relative",
                overflow: "hidden",
                borderRadius: "8px",
                transition: "all 0.4s ease",
                width: "100%",
                maxWidth: "400px",
                margin: "0 auto 40px auto"
              }}
            >
              {/* CONTENEDOR DE IMAGEN */}
              <div style={{ 
                position: "relative",
                aspectRatio: "1/1",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: isSuizo ? "#000" : "#f0f0f0" 
              }}>
                <img 
                  src={p.images[0]} 
                  alt="Reflejo"
                  style={{ 
                    position: "absolute",
                    width: "120%", 
                    height: "120%", 
                    objectFit: "cover",
                    filter: "blur(25px) opacity(0.2)", 
                    zIndex: 1
                  }} 
                />
                <div style={{
                  position: "relative",
                  width: "95%", 
                  height: "95%",
                  zIndex: 2,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  border: isSuizo ? "1px solid rgba(212, 175, 55, 0.6)" : "1px solid #fff",
                  overflow: "hidden",
                  borderRadius: "0px", 
                  background: "#fff"
                }}>
                  <img src={p.images[0]} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
              
              {/* INFORMACIÓN DE LA TARJETA PRINCIPAL (MINIMALISTA) */}
              <div style={{ padding: "20px 10px", textAlign: "center" }}>
                <p style={{ 
                  fontSize: "9px", 
                  color: isSuizo ? "#D4AF37" : "#999", 
                  letterSpacing: "4px", 
                  margin: "0 0 8px 0",
                  textTransform: "uppercase",
                  fontWeight: "400"
                }}>
                  {p.brand}
                </p>
                <h3 style={{ 
                  fontWeight: "200", 
                  fontSize: "14px", 
                  color: isSuizo ? "#ccc" : "#333", 
                  margin: "0",
                  letterSpacing: "2px" 
                }}>
                  {p.name.toUpperCase()}
                </h3>

                {p.price > 0 && (
                  <p style={{ 
                    fontWeight: "600", 
                    fontSize: "16px", 
                    color: isSuizo ? "#D4AF37" : "#000", 
                    margin: "12px 0 0 0" 
                  }}>
                    {new Intl.NumberFormat('es-CO', { 
                      style: 'currency', 
                      currency: 'COP', 
                      maximumFractionDigits: 0 
                    }).format(p.price)} COP
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </main>
               
      {/* --- MODAL DE PRODUCTO (AQUÍ ESTÁ LA CORRECCIÓN CLAVE) --- */}
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
              
              {selectedProduct.price > 0 && (
                <p style={{ fontSize: "24px", fontWeight: "700", margin: "10px 0" }}>
                  {new Intl.NumberFormat('es-CO', { 
                    style: 'currency', 
                    currency: 'COP', 
                    maximumFractionDigits: 0 
                  }).format(selectedProduct.price)} COP 
                </p>
              )}

              {/* CARACTERÍSTICAS DINÁMICAS REUBICADAS (REEMPLAZAN TOTALMENTE LO QUEMADO) */}
              <div style={{ margin: "25px 0", padding: "20px 15px", background: "#fcfcfc", borderRadius: "12px", border: "1px solid #f0f0f0" }}>
                <p style={{ 
                  fontWeight: "700", 
                  fontSize: "11px", 
                  marginBottom: "12px", 
                  color: "#888", 
                  letterSpacing: "1px",
                  textTransform: "uppercase" 
                }}>
                  Especificaciones técnicas:
                </p>
                
                <div style={{ textAlign: "left" }}>
                  {selectedProduct.description ? (
                    <div style={{ 
                      display: "flex", 
                      alignItems: "flex-start", 
                      gap: "10px", 
                      fontSize: "13px",
                      lineHeight: "1.6",
                      color: "#444",
                      fontWeight: "400"
                    }}>
                      <span style={{ color: "#D4AF37", fontSize: "10px", marginTop: "2px" }}>●</span>
                      <span>{selectedProduct.description}</span>
                    </div>
                  ) : (
                    <p style={{ fontSize: "13px", color: "#999", fontStyle: "italic" }}>
                      Consulte disponibilidad de detalles y variaciones con nuestro asesor.
                    </p>
                  )}
                </div>
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
                    <p style={{ marginBottom: "5px" }}>
                      • ⚙️ <strong>Garantía:</strong> {selectedProduct.warranty} por maquinaria.
                    </p>

                    <p style={{ marginBottom: "5px" }}>
                      • 🔍 <strong>Peritaje:</strong> No se aceptan cambios de satisfaccion, si la pieza tiene rayones o marcas de uso. 
                    </p>

                    <p>
                      • 📸 <strong>Security:</strong> Grabamos video del estado de cada reloj antes del envío.
                    </p>
                  </div>
                )}
              </div>

              <button onClick={() => {
                const precioTexto = selectedProduct.price > 0 
                ? new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(selectedProduct.price)
                : "Precio a convenir";
                const mensaje = `Hola APEX TIME, deseo adquirir esta pieza:

⌚ *Modelo:* ${selectedProduct.name}
🏷️ *Ref:* ${selectedProduct.brand}-${selectedProduct.id}
💰 *Precio:* ${precioTexto}
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
