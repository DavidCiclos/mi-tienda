"use client";
import { useState } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [brandFilter, setBrandFilter] = useState("TODOS");
  const [showTerms, setShowTerms] = useState(false);

  const products = [
    { id: 1, name: "Submariner 'Starbucks' 1.1", brand: "ROLEX", price: 850000, tier: "TOP TIER", images: ["https://unsplash.com"], specs: ["Maquinaria Calibre 3235", "Acero Quirúrgico 316L", "Bisel Cerámico Real", "Garantía de 2 Años"] },
    { id: 2, name: "RM-011 Carbon Edition", brand: "RICHARD MILLE", price: 1250000, tier: "EXOTIC", images: ["https://unsplash.com"], specs: ["Caja de Carbono Forjado", "Cristal de Zafiro Curvo", "Maquinaria Skeleton Funcional"] },
    { id: 3, name: "PRX Powermatic 80", brand: "TISSOT", price: 580000, tier: "PREMIUM", images: ["https://unsplash.com"], specs: ["Cierre Mariposa", "Tablero Tapisserie 3D", "Reserva de Marcha 40h"] },
    { id: 4, name: "Santos Skeleton Gold", brand: "CARTIER", price: 980000, tier: "TOP TIER", images: ["https://unsplash.com"], specs: ["Oro Ionizado 18k", "Piedra Espinela en Corona", "Tornillos de Acero Real"] }
  ];

  const filteredProducts = brandFilter === "TODOS" ? products : products.filter(p => p.brand === brandFilter);

  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const texto = `Hola APEX TIME, deseo adquirir esta pieza:\n⌚ *${product.name}*\n💰 Valor: $${product.price.toLocaleString()}\n¿Está disponible para envío inmediato?`;
    window.open(`https://wa.me{numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div style={{ background: "#fcfcfc", color: "#0D1B2A", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* HEADER LUXURY */}
      <header style={{ background: "#0D1B2A", padding: "50px 5%", textAlign: "center" }}>
        <h1 style={{ color: "#E0C56E", margin: 0, fontSize: "32px", letterSpacing: "12px", fontWeight: "300" }}>APEX TIME</h1>
        <div style={{ width: "80px", height: "1px", background: "#E0C56E", margin: "20px auto" }}></div>
        <p style={{ color: "#FFF", fontSize: "11px", letterSpacing: "5px", margin: 0, opacity: 0.8 }}>ALTA RELOJERÍA & PIEZAS SELECTAS</p>
      </header>

      {/* FILTROS REDISEÑADOS */}
      <nav style={{ padding: "20px 5%", background: "white", borderBottom: "1px solid #f0f0f0", textAlign: "center", position: "sticky", top: 0, zIndex: 90, overflowX: "auto", whiteSpace: "nowrap" }}>
        {["TODOS", "ROLEX", "CARTIER", "TISSOT", "RICHARD MILLE", "DIESEL", "HUBLOT"].map(b => (
          <button key={b} onClick={() => setBrandFilter(b)} style={{ 
            background: brandFilter === b ? "#0D1B2A" : "transparent", 
            color: brandFilter === b ? "#E0C56E" : "#0D1B2A", 
            border: "1px solid #0D1B2A", padding: "8px 16px", fontSize: "10px", cursor: "pointer", margin: "0 5px", transition: "0.3s", letterSpacing: "1px"
          }}>{b}</button>
        ))}
      </nav>

      {/* GRID DE PRODUCTOS */}
      <main style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ background: "white", padding: "15px", border: "1px solid #f0f0f0", textAlign: "center", cursor: "pointer", borderRadius: "8px", transition: "all 0.3s" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ fontSize: "9px", background: "#E0C56E", color: "#0D1B2A", padding: "3px 8px", fontWeight: "bold", borderRadius: "3px" }}>{p.tier}</span>
              <span style={{ fontSize: "9px", color: "#888" }}>ID: #{p.id}</span>
            </div>
            
            <div style={{ background: "#f9f9f9", borderRadius: "5px", overflow: "hidden", marginBottom: "15px" }}>
              <img src={p.images} alt={p.name} style={{ width: "100%", height: "200px", objectFit: "contain" }} />
            </div>

            <p style={{ color: "#E0C56E", fontSize: "10px", fontWeight: "bold", letterSpacing: "2px", marginBottom: "5px" }}>{p.brand}</p>
            <h3 style={{ fontSize: "14px", margin: "0 0 10px 0", color: "#1a1a1a", height: "35px", overflow: "hidden" }}>{p.name}</h3>
            <p style={{ fontSize: "16px", fontWeight: "bold", color: "#0D1B2A" }}>${p.price.toLocaleString()}</p>
          </div>
        ))}
      </main>

      {/* SECCIÓN LEGAL Y GARANTÍA */}
      <section style={{ margin: "50px 5%", padding: "30px", background: "#f1f1f1", borderRadius: "10px", textAlign: "center" }}>
        <h4 style={{ fontSize: "14px", letterSpacing: "3px", marginBottom: "15px" }}>RESPALDO APEX</h4>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap", fontSize: "11px", color: "#555" }}>
          <span>🛡️ Garantía de 2 Años</span>
          <span>🚚 Envío Asegurado</span>
          <span>💎 Acero Inoxidable 316L</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "60px 5%", background: "#0D1B2A", color: "white", textAlign: "center" }}>
        <button onClick={() => setShowTerms(true)} style={{ background: "none", border: "1px solid #E0C56E", color: "#E0C56E", padding: "10px 20px", fontSize: "11px", cursor: "pointer", borderRadius: "4px" }}>
          Términos de Garantía e Inspección Técnica
        </button>
        <p style={{ fontSize: "9px", marginTop: "20px", opacity: 0.5 }}>APEX TIME COLOMBIA © 2024</p>
      </footer>

      {/* MODAL DETALLES PRODUCTO */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto" }}>
          <div style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eee" }}>
            <span style={{ fontWeight: "bold", letterSpacing: "2px" }}>DETALLES DE PIEZA</span>
            <button onClick={() => setSelectedProduct(null)} style={{ background: "#0D1B2A", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}>CERRAR</button>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", padding: "30px 5%" }}>
            <div style={{ flex: "1 1 400px", textAlign: "center", background: "#f9f9f9", borderRadius: "10px", padding: "20px" }}>
              <img src={selectedProduct.images} style={{ width: "100%", maxWidth: "500px", height: "auto" }} />
            </div>

            <div style={{ flex: "1 1 400px", padding: "30px 20px" }}>
              <span style={{ color: "#E0C56E", fontWeight: "bold", fontSize: "12px", letterSpacing: "3px" }}>{selectedProduct.brand} | {selectedProduct.tier}</span>
              <h2 style={{ fontSize: "32px", margin: "15px 0", color: "#0D1B2A" }}>{selectedProduct.name}</h2>
              
              <div style={{ background: "#f8f9fa", borderLeft: "5px solid #E0C56E", padding: "20px", margin: "25px 0" }}>
                <p style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "10px" }}>ESPECIFICACIONES TÉCNICAS:</p>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "13px", margin: "8px 0", color: "#444" }}>• {s}</p>)}
              </div>

              <p style={{ fontSize: "30px", fontWeight: "bold", color: "#0D1B2A", marginBottom: "30px" }}>$ {selectedProduct.price.toLocaleString()} COP</p>

              <button onClick={() => whatsappAction(selectedProduct)} style={{ width: "100%", background: "#25D366", color: "white", padding: "20px", border: "none", fontWeight: "bold", fontSize: "16px", borderRadius: "8px", cursor: "pointer", boxShadow: "0 10px 20px rgba(37, 211, 102, 0.2)" }}>
                PEDIR POR WHATSAPP 📱
              </button>
              <p style={{ fontSize: "11px", textAlign: "center", marginTop: "15px", color: "#888" }}>Sujeto a disponibilidad e inspección técnica previa.</p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL TÉRMINOS Y CONDICIONES EXPANDIDO */}
      {showTerms && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 2000, overflowY: "auto", padding: "40px 10%" }}>
          <h2 style={{ color: "#0D1B2A", borderBottom: "3px solid #E0C56E", paddingBottom: "15px", letterSpacing: "2px" }}>TÉRMINOS, CONDICIONES Y POLÍTICAS</h2>
          <div style={{ fontSize: "14px", lineHeight: "1.8", color: "#333", marginTop: "30px" }}>
            <p><strong>1. PROCESO DE DEVOLUCIÓN Y REEMBOLSO:</strong> Al ser piezas de alta gama (Grado 1.1), el cliente acepta que cualquier solicitud de devolución debe realizarse en un plazo máximo de 24 horas tras la recepción. El reloj deberá ser enviado a nuestra sede técnica para un <strong>peritaje obligatorio</strong>.</p>
            <p><strong>2. INSPECCIÓN TÉCNICA RIGUROSA:</strong> No se realizará ningún reembolso si la pieza presenta: micro-rayones en el acero, marcas en los tornillos de la correa (indicando ajuste manual), o si los sellos de seguridad internos han sido alterados. El reloj debe retornar en estado 10/10, igual a como fue despachado bajo video-evidencia.</p>
            <p><strong>3. SOBRE LA MAQUINARIA:</strong> La garantía de 2 años cubre exclusivamente defectos internos de fabricación. No cubre daños por golpes, magnetización por cercanía a imanes potentes, ni daños por agua en modelos no certificados para inmersión profunda.</p>
            <p><strong>4. CAMBIO DE PIEZAS:</strong> Queda prohibida la devolución si se detecta que alguna pieza interna (rubíes, volante, tija) ha sido sustituida. Contamos con registros fotográficos internos de cada movimiento despachado.</p>
          </div>
          <button onClick={() => setShowTerms(false)} style={{ marginTop: "40px", background: "#0D1B2A", color: "#E0C56E", padding: "15px 50px", border: "none", fontWeight: "bold", cursor: "pointer", borderRadius: "5px" }}>ACEPTAR Y VOLVER</button>
        </div>
      )}
    </div>
  );
}
