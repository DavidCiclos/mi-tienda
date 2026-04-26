"use client";
import { useState } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [brandFilter, setBrandFilter] = useState("TODOS");
  const [showTerms, setShowTerms] = useState(false);

  const products = [
    { id: 1, name: "Submariner 'Starbucks' 1.1", brand: "ROLEX", price: 850000, tier: "TOP TIER", images: ["https://unsplash.com"], specs: ["Acero 316L", "Bisel Cerámico", "Movimiento Automático", "Garantía 2 Años"] },
    { id: 2, name: "Santos Skeleton Gold", brand: "CARTIER", price: 980000, tier: "TOP TIER", images: ["https://unsplash.com"], specs: ["Oro Ionizado 18k", "Piedra en Corona", "Cierre Mariposa"] },
    { id: 3, name: "PRX Powermatic 80", brand: "TISSOT", price: 580000, tier: "PREMIUM", images: ["https://unsplash.com"], specs: ["Tablero Tapisserie", "Acero Integrado", "Reserva de Marcha 40h"] }
  ];

  const filteredProducts = brandFilter === "TODOS" ? products : products.filter(p => p.brand === brandFilter);

  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const texto = `Hola APEX TIME, deseo adquirir esta pieza:\n⌚ *${product.name}*\n💰 Valor: $${product.price.toLocaleString()}\n¿Está disponible para envío inmediato?`;
    window.open(`https://wa.me{numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div style={{ background: "#fcfcfc", color: "#0D1B2A", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* HEADER */}
      <header style={{ background: "#0D1B2A", padding: "50px 5%", textAlign: "center" }}>
        <h1 style={{ color: "#E0C56E", margin: 0, fontSize: "32px", letterSpacing: "12px", fontWeight: "300" }}>APEX TIME</h1>
        <div style={{ width: "80px", height: "1px", background: "#E0C56E", margin: "20px auto" }}></div>
        <p style={{ color: "#FFF", fontSize: "11px", letterSpacing: "5px", margin: 0, opacity: 0.8 }}>ALTA RELOJERÍA & PIEZAS SELECTAS</p>
      </header>

      {/* FILTROS */}
      <nav style={{ padding: "20px 5%", background: "white", borderBottom: "1px solid #f0f0f0", textAlign: "center", position: "sticky", top: 0, zIndex: 90, overflowX: "auto", whiteSpace: "nowrap" }}>
        {["TODOS", "ROLEX", "CARTIER", "TISSOT", "RICHARD MILLE", "DIESEL", "HILFIGER", "HUBLOT", "BREITLING", "OMEGA"].map(b => (
          <button key={b} onClick={() => setBrandFilter(b)} style={{ 
            background: brandFilter === b ? "#0D1B2A" : "transparent", 
            color: brandFilter === b ? "#E0C56E" : "#0D1B2A", 
            border: "1px solid #0D1B2A", padding: "8px 16px", fontSize: "10px", cursor: "pointer", margin: "0 5px"
          }}>{b}</button>
        ))}
      </nav>

      {/* GRID DE PRODUCTOS */}
      <main style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px", padding: "15px", maxWidth: "1200px", margin: "0 auto" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ background: "white", padding: "12px", border: "1px solid #f0f0f0", textAlign: "center", cursor: "pointer", borderRadius: "8px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontSize: "8px", background: "#E0C56E", color: "#0D1B2A", padding: "2px 6px", fontWeight: "bold", borderRadius: "2px" }}>{p.tier}</span>
            </div>
            <div style={{ background: "#f9f9f9", borderRadius: "4px", overflow: "hidden", marginBottom: "10px" }}>
              <img src={p.images} alt={p.name} style={{ width: "100%", height: "180px", objectFit: "contain" }} />
            </div>
            <p style={{ color: "#E0C56E", fontSize: "9px", fontWeight: "bold", letterSpacing: "2px", margin: "5px 0" }}>{p.brand}</p>
            <h3 style={{ fontSize: "12px", margin: "0 0 8px 0", height: "32px", overflow: "hidden" }}>{p.name}</h3>
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>${p.price.toLocaleString()}</p>
          </div>
        ))}
      </main>

      {/* FOOTER CON BOTÓN LEGAL */}
      <footer style={{ padding: "60px 5%", background: "#0D1B2A", color: "white", textAlign: "center" }}>
        <button 
          onClick={() => setShowTerms(true)} 
          style={{ background: "none", border: "1px solid #E0C56E", color: "#E0C56E", padding: "12px 25px", fontSize: "11px", cursor: "pointer", borderRadius: "4px", fontWeight: "bold", letterSpacing: "1px" }}
        >
          AVISO LEGAL Y POLÍTICA DE INSPECCIÓN
        </button>
        <p style={{ fontSize: "9px", marginTop: "20px", opacity: 0.5 }}>APEX TIME COLOMBIA © 2024</p>
      </footer>

      {/* MODAL DETALLES PRODUCTO */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto" }}>
          <div style={{ padding: "15px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eee", background: "#fcfcfc" }}>
            <span style={{ fontWeight: "bold", letterSpacing: "1px", fontSize: "13px" }}>DETALLES TÉCNICOS</span>
            <button onClick={() => setSelectedProduct(null)} style={{ background: "#0D1B2A", color: "white", border: "none", padding: "8px 15px", borderRadius: "4px" }}>VOLVER</button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", padding: "20px 5%" }}>
            <div style={{ flex: "1 1 350px", textAlign: "center" }}>
              <img src={selectedProduct.images} style={{ width: "100%", maxWidth: "450px" }} />
            </div>
            <div style={{ flex: "1 1 350px", padding: "20px" }}>
              <span style={{ color: "#E0C56E", fontWeight: "bold", fontSize: "11px", letterSpacing: "2px" }}>{selectedProduct.brand} | {selectedProduct.tier}</span>
              <h2 style={{ fontSize: "28px", margin: "10px 0" }}>{selectedProduct.name}</h2>
              <div style={{ background: "#f9f9f9", borderLeft: "4px solid #E0C56E", padding: "15px", margin: "20px 0" }}>
                <p style={{ fontWeight: "bold", fontSize: "12px", marginBottom: "8px" }}>ESPECIFICACIONES:</p>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "13px", margin: "5px 0", color: "#444" }}>• {s}</p>)}
              </div>
              <p style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "25px" }}>$ {selectedProduct.price.toLocaleString()} COP</p>
              <button onClick={() => whatsappAction(selectedProduct)} style={{ width: "100%", background: "#25D366", color: "white", padding: "18px", border: "none", fontWeight: "bold", borderRadius: "6px", cursor: "pointer" }}>
                SOLICITAR PIEZA POR WHATSAPP 📱
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL TÉRMINOS Y CONDICIONES (Personalizado para Reventa) */}
      {showTerms && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 2000, overflowY: "auto", padding: "40px 8%" }}>
          <h2 style={{ color: "#0D1B2A", borderBottom: "3px solid #E0C56E", paddingBottom: "15px", letterSpacing: "2px" }}>TÉRMINOS, CONDICIONES Y DESCARGO DE RESPONSABILIDAD</h2>
          <div style={{ fontSize: "14px", lineHeight: "1.8", color: "#333", marginTop: "30px" }}>
            <p><strong>1. NATURALEZA DE LOS PRODUCTOS:</strong> APEX TIME comercializa piezas de alta gama (Grado 1.1) inspiradas en modelos icónicos de marcas como <strong>Rolex, Cartier, Tissot, Richard Mille, Hublot</strong>, entre otras. El cliente declara conocer que estas piezas son reventas de alta fidelidad técnica y no guardan relación comercial directa ni oficial con las marcas mencionadas ni con sus distribuidores autorizados.</p>
            
            <p><strong>2. PERITAJE TÉCNICO PARA DEVOLUCIONES:</strong> Al recibir una solicitud de devolución, la pieza deberá ingresar a nuestra sede para una <strong>Inspección Técnica de Integridad</strong>. Dado el alto valor y precisión de los componentes, se verificará que no existan micro-rayones en el acero, marcas de herramientas en los tornillos de ajuste o manipulación del movimiento interno.</p>
            
            <p><strong>3. POLÍTICA DE NO REEMBOLSO POR USO:</strong> No se aceptará la devolución de dinero si el reloj presenta señales de uso por mínimas que sean. La pieza debe retornar en estado 10/10 con sus plásticos y empaques originales. Contamos con registro de video-evidencia de cada despacho realizado.</p>
            
            <p><strong>4. LIMITACIÓN DE GARANTÍA:</strong> La garantía de 2 años cubre fallos en la maquinaria interna. No cubre: daños por inmersión en agua, golpes accidentales, magnetización o pérdida de color por contacto con agentes químicos (perfumes o lociones).</p>
          </div>
          <button onClick={() => setShowTerms(false)} style={{ marginTop: "40px", background: "#0D1B2A", color: "#E0C56E", padding: "15px 50px", border: "none", fontWeight: "bold", cursor: "pointer", borderRadius: "5px" }}>ENTENDIDO / VOLVER</button>
        </div>
      )}
    </div>
  );
}
