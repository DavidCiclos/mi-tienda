"use client";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("CROWN SERIES");
  const [brandFilter, setBrandFilter] = useState("TODAS");
  const [currentImage, setCurrentImage] = useState(null);
  const [showTerms, setShowTerms] = useState(false);

  const products = [
    { 
      id: 1, 
      name: "Daytona S-Clon", 
      brand: "ROLEX", 
      line: "CROWN SERIES", 
      price: 3450000, 
      warranty: "12 meses",
      images: ["https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800", "https://images.unsplash.com/photo-1547996160-81dfa63595dd?w=800"] 
    },
    { 
      id: 2, 
      name: "Santos Skeleton", 
      brand: "CARTIER", 
      line: "PREMIUM 1.1", 
      price: 950000, 
      warranty: "6 meses",
      images: ["https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800"] 
    }
    // Agrega más productos aquí siguiendo el mismo formato
  ];

  const availableBrands = useMemo(() => {
    const map = {
      "CROWN SERIES": ["ROLEX"],
      "PREMIUM 1.1": ["ROLEX", "CARTIER", "RICHARD MILLE"],
      "ESSENTIAL": ["CASIO", "ROLEX"]
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

      {/* HERO */}
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
                padding: "10px 18px", borderRadius: "20px", border: "1px solid #ddd",
                background: categoryFilter === cat ? "#111" : "#fff",
                color: categoryFilter === cat ? "#fff" : "#111",
                cursor: "pointer", flexShrink: 0, fontSize: "12px", fontWeight: "600"
              }}>
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* PRODUCTOS */}
      <main style={{ maxWidth: "1100px", margin: "40px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ cursor: "pointer" }}>
            <div style={{ overflow: "hidden", borderRadius: "12px", background: "#f0f0f0" }}>
              <img src={p.images[0]} alt={p.name} style={{ width: "100%", height: "320px", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ marginTop: "15px", textAlign: "center" }}>
              <p style={{ fontSize: "10px", color: "#888", letterSpacing: "2px" }}>{p.brand}</p>
              <h3 style={{ fontWeight: 500, fontSize: "18px", margin: "5px 0" }}>{p.name}</h3>
              <p style={{ fontWeight: 700 }}>${p.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </main>

      {/* MODAL */}
      {selectedProduct && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "20px" }}>
          <div style={{ background: "#fff", maxWidth: "450px", width: "100%", borderRadius: "20px", padding: "25px", position: "relative", maxHeight: "90vh", overflowY: "auto" }}>
            
            <button onClick={() => { setSelectedProduct(null); setCurrentImage(null); setShowTerms(false); }} 
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
                    style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "8px", cursor: "pointer", border: (currentImage === img || (!currentImage && idx === 0)) ? "2px solid #D4AF37" : "2px solid transparent" }} />
                ))}
              </div>
            </div>

            {/* INFO Y TÉRMINOS */}
            <div style={{ marginTop: "10px" }}>
              <h2 style={{ fontWeight: "600", fontSize: "22px" }}>{selectedProduct.name}</h2>
              <p style={{ fontSize: "24px", fontWeight: "700", margin: "10px 0" }}>${selectedProduct.price.toLocaleString()} COP</p>
              
              <div style={{ borderTop: "1px solid #eee", marginTop: "20px" }}>
                <div onClick={() => setShowTerms(!showTerms)} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", padding: "15px 0" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700" }}>📄 TÉRMINOS Y GARANTÍA</span>
                  <span>{showTerms ? "▲" : "▼"}</span>
                </div>
                {showTerms && (
                  <div style={{ fontSize: "11px", color: "#666", background: "#f9f9f9", padding: "15px", borderRadius: "12px", marginBottom: "15px" }}>
                    <p>• ⚙️ <strong>Garantía:</strong> {selectedProduct.warranty || "6 meses"} (maquinaria).</p>
                    <p>• 🚫 <strong>Sin marcas de uso:</strong> No se aceptan cambios con rayones o sin sellos.</p>
                    <p style={{ marginTop: "10px", color: "#856404", fontWeight: "600" }}>📸 Grabamos video de cada pieza antes del envío.</p>
                  </div>
                )}
              </div>

              <button onClick={() => {
                const mensaje = `Hola APEX TIME, deseo adquirir:\n\n⌚ *Modelo:* ${selectedProduct.name}\n🏷️ *Ref:* ${selectedProduct.brand}-${selectedProduct.id}\n💰 *Precio:* $${selectedProduct.price.toLocaleString()}\n🛡️ *Garantía:* ${selectedProduct.warranty}\n\n*Acepto términos de peritaje técnico.* ¿Está disponible?`;
                window.open(`https://wa.me/573126934247?text=${encodeURIComponent(mensaje)}`, "_blank");
              }}
              style={{ width: "100%", padding: "16px", background: "#25D366", color: "#fff", border: "none", borderRadius: "12px", fontWeight: "700", cursor: "pointer" }}>
                SOLICITAR POR WHATSAPP 📱
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
