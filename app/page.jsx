"use client";
import { useState, useMemo } from "react";

export default function Home() {
const [selectedProduct, setSelectedProduct] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("CROWN SERIES");
  const [brandFilter, setBrandFilter] = useState("TODAS");
  // ESTADO PARA LA GALERÍA
  const [currentImage, setCurrentImage] = useState(null);
  // ESTADO PARA LOS TÉRMINOS (Añade esta línea abajo)
  const [showTerms, setShowTerms] = useState(false);
  // Base de datos de productos (ACTUALIZADA A ARREGLOS DE IMÁGENES)
  const products = [
    { 
      id: 1, 
      name: "Daytona S-Clon", 
      brand: "ROLEX", 
      line: "CROWN SERIES", 
      price: 3450000, 
      images: ["https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800", "https://images.unsplash.com/photo-1547996160-81dfa63595dd?w=800"] 
    },
    { 
      id: 2, 
      name: "Santos Skeleton", 
      brand: "CARTIER", 
      line: "PREMIUM 1.1", 
      price: 950000, 
      images: ["https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800"] 
    },
    { 
      id: 3, 
      name: "RM 011 Titanium", 
      brand: "RICHARD MILLE", 
      line: "PREMIUM 1.1", 
      price: 1250000, 
      images: ["https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800"] 
    },
    { 
      id: 4, 
      name: "F91-W Gold", 
      brand: "CASIO", 
      line: "ESSENTIAL", 
      price: 85000, 
      images: ["https://images.unsplash.com/photo-1508685096489-7aac291bd5b3?w=800"] 
    }
  ];

  const availableBrands = useMemo(() => {
    const map = {
      "CROWN SERIES": ["ROLEX"],
      "PREMIUM 1.1": [
        "ROLEX", 
        "CARTIER", 
        "RICHARD MILLE", 
        "BREITLING", 
        "HUBLOT", 
        "CASIO",
        "TISSOT", 
        "OMEGA", 
        "Q&Q"
      ],
      "ESSENTIAL": [
        "CASIO", 
        "Q&Q",
        "TISSOT",
        "OMEGA",
        "ROLEX", 
        "CARTIER", 
        "RICHARD MILLE",
        "BREITLING",
        "HUBLOT"
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
    <div style={{ background: "#fff", color: "#111", fontFamily: "-apple-system, sans-serif", minHeight: "100vh" }}>

      {/* HERO SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ letterSpacing: "10px", fontWeight: 500, margin: 0 }}>APEX TIME</h1>
        <p style={{ marginTop: "10px", color: "#777", letterSpacing: "3px", fontSize: "12px" }}>
          ALTA RELOJERÍA • CURADURÍA SELECTA
        </p>
      </section>

      {/* NAVEGACIÓN */}
      <nav style={{ borderTop: "1px solid #eee", borderBottom: "1px solid #eee", position: "sticky", top: 0, background: "#fff", zIndex: 100 }}>
        <div style={{ display: "flex", gap: "10px", padding: "15px", overflowX: "auto", scrollbarWidth: "none" }}>
          {["CROWN SERIES", "PREMIUM 1.1", "ESSENTIAL"].map(cat => (
            <button key={cat}
              onClick={() => { setCategoryFilter(cat); setBrandFilter("TODAS"); }}
              style={{
                padding: "10px 18px",
                borderRadius: "20px",
                border: "1px solid #ddd",
                background: categoryFilter === cat ? "#111" : "#fff",
                color: categoryFilter === cat ? "#fff" : "#111",
                cursor: "pointer",
                flexShrink: 0,
                fontSize: "12px",
                fontWeight: "600"
              }}>
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", gap: "20px", padding: "10px 20px", overflowX: "auto", scrollbarWidth: "none", borderTop: "1px solid #f9f9f9" }}>
          {availableBrands.map(brand => (
            <span key={brand}
              onClick={() => setBrandFilter(brand)}
              style={{
                cursor: "pointer", fontSize: "12px", whiteSpace: "nowrap",
                color: brandFilter === brand ? "#000" : "#aaa",
                borderBottom: brandFilter === brand ? "2px solid #000" : "none",
                flexShrink: 0, paddingBottom: "5px", fontWeight: "bold", textTransform: "uppercase"
              }}>
              {brand}
            </span>
          ))}
        </div>
      </nav>

      {/* GRID DE PRODUCTOS */}
      <main style={{ maxWidth: "1100px", margin: "40px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ cursor: "pointer" }}>
            <div style={{ overflow: "hidden", borderRadius: "12px", background: "#f0f0f0" }}>
              <img src={p.images[0]} alt={p.name} style={{ width: "100%", height: "320px", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ marginTop: "15px", textAlign: "center" }}>
              <p style={{ fontSize: "10px", color: "#888", letterSpacing: "2px", textTransform: "uppercase" }}>{p.brand}</p>
              <h3 style={{ fontWeight: 500, fontSize: "18px", margin: "5px 0" }}>{p.name}</h3>
              <p style={{ fontWeight: 700, fontSize: "16px" }}>${p.price.toLocaleString()}</p>
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
      <p style={{ marginBottom: "5px" }}>• ⚙️ <strong>Garantía:</strong> {selectedProduct.warranty || "6 meses"} por maquinaria.</p>
      <p style={{ marginBottom: "5px" }}>• 🔍 <strong>Peritaje:</strong> No se aceptan cambios por satisfacción si la pieza tiene rayones o marcas de uso.</p>
      <p>• 📸 <strong>Seguridad:</strong> Grabamos video del estado de cada reloj antes del envío.</p>
    </div>
  )}
</div>
              <button onClick={() => {
               const mensaje = `Hola APEX TIME, deseo adquirir esta pieza:

⌚ *Modelo:* ${selectedProduct.name}
🏷️ *Ref:* ${selectedProduct.brand}-${selectedProduct.id}
💰 *Precio:* $${selectedProduct.price.toLocaleString()} COP
🛡️ *Garantía:* ${selectedProduct.warranty || "A convenir"}

*He leído y acepto los términos de garantía y peritaje técnico.* ¿Sigue disponible?`;

window.open(`https://wa.me/573126934247?text=${encodeURIComponent(mensaje)}`, "_blank");
              }}
              style={{ width: "100%", padding: "16px", background: "#25D366", color: "#fff", border: "none", borderRadius: "12px", fontWeight: "700", cursor: "pointer", marginTop: "10px" }}>
                SOLICITAR POR WHATSAPP 📱
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
