"use client";
import { useState } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [tierFilter, setTierFilter] = useState("TODOS");
  const [styleFilter, setStyleFilter] = useState("TODOS");
  const [showTerms, setShowTerms] = useState(false);

  // ESTRUCTURA DE PRODUCTOS REFORZADA
  const products = [
    { 
      id: 1, name: "Ocean Master 1.1 Elite", brand: "REALEZA", style: "PROFESIONAL", tier: "TOP TIER", price: 950000, 
      images: ["https://unsplash.com"],
      specs: ["Maquinaria Automática Japonesa", "Acero Quirúrgico 316L", "Cristal de Zafiro", "Bisel Cerámico"],
      guarantee: "2 Años en Maquinaria"
    },
    { 
      id: 2, name: "Classic Urban V2", brand: "CURREN", style: "CLÁSICO", tier: "ESSENTIAL", price: 135000, 
      images: ["https://unsplash.com"],
      specs: ["Movimiento de Cuarzo", "Caja de Aleación", "Resistente a Salpicaduras", "Acabado Mate"],
      guarantee: "3 Meses en Maquinaria"
    },
    { 
      id: 3, name: "Minimal Rose Gold", brand: "GEN", style: "MODA", tier: "ESSENTIAL", price: 75000, 
      images: ["https://unsplash.com"],
      specs: ["Ultra Delgado", "Pulso ajustable", "Pila de larga duración", "Cristal Mineral"],
      guarantee: "30 Días"
    }
  ];

  const filteredProducts = products.filter(p => {
    const matchTier = tierFilter === "TODOS" || p.tier === tierFilter;
    const matchStyle = styleFilter === "TODOS" || p.style === styleFilter;
    return matchTier && matchStyle;
  });

  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const texto = `Hola APEX TIME, deseo adquirir esta pieza de la colección:\n⌚ *${product.name}* (${product.tier})\n💰 Valor: $${product.price.toLocaleString()}\n¿Está disponible?`;
    window.open(`https://wa.me{numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div style={{ background: "#FBFBFB", color: "#0D1B2A", minHeight: "100vh", fontFamily: "serif" }}>
      
      {/* HEADER BOUTIQUE - RECUPERADO */}
      <header style={{ background: "#0D1B2A", padding: "45px 5%", textAlign: "center" }}>
        <h1 style={{ color: "#E0C56E", margin: 0, fontSize: "32px", letterSpacing: "12px", fontWeight: "300" }}>APEX TIME</h1>
        <div style={{ width: "80px", height: "1px", background: "#E0C56E", margin: "15px auto" }}></div>
        <p style={{ color: "#FFF", fontSize: "10px", letterSpacing: "4px", margin: 0, opacity: 0.8 }}>CURADURÍA SELECTA • ALTA RELOJERÍA</p>
      </header>

      {/* FILTROS DE LUJO - RECUPERADOS */}
      <nav style={{ padding: "20px 5%", background: "white", borderBottom: "1px solid #EEE", textAlign: "center", position: "sticky", top: 0, zIndex: 90 }}>
        <div style={{ marginBottom: "15px", display: "flex", justifyContent: "center", gap: "10px", overflowX: "auto", paddingBottom: "5px" }}>
          {["TODOS", "TOP TIER", "PREMIUM", "ESSENTIAL"].map(t => (
            <button key={t} onClick={() => setTierFilter(t)} style={{ 
              background: tierFilter === t ? "#0D1B2A" : "none", color: tierFilter === t ? "#E0C56E" : "#0D1B2A",
              border: "1px solid #0D1B2A", padding: "8px 18px", fontSize: "10px", cursor: "pointer", letterSpacing: "1px", transition: "0.3s"
            }}>{t}</button>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {["TODOS", "PROFESIONAL", "CLÁSICO", "EXÓTICO", "MODA"].map(s => (
            <button key={s} onClick={() => setStyleFilter(s)} style={{ 
              background: styleFilter === s ? "#E0C56E" : "none", color: "#0D1B2A",
              border: "1px solid #E0C56E", padding: "5px 15px", fontSize: "10px", cursor: "pointer", borderRadius: "20px", transition: "0.3s"
            }}>{s}</button>
          ))}
        </div>
      </nav>

      {/* GRID VITRINA - 2 COLUMNAS RECUPERADO */}
      <main style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", padding: "15px", maxWidth: "1200px", margin: "0 auto" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ background: "#FFF", padding: "12px", border: "1px solid #F0F0F0", textAlign: "center", cursor: "pointer", transition: "0.3s" }}>
             <div style={{ textAlign: "left", marginBottom: "5px" }}>
                <span style={{ fontSize: "8px", background: "#0D1B2A", color: "#E0C56E", padding: "2px 6px", fontWeight: "bold" }}>{p.tier}</span>
             </div>
            <img src={p.images[0]} alt={p.name} style={{ width: "100%", aspectRatio: "1/1", objectFit: "contain", marginBottom: "10px" }} />
            <p style={{ color: "#E0C56E", fontSize: "9px", fontWeight: "bold", letterSpacing: "2px", margin: 0 }}>{p.brand}</p>
            <h3 style={{ fontSize: "12px", margin: "5px 0", height: "32px", overflow: "hidden", fontWeight: "400" }}>{p.name}</h3>
            <p style={{ fontSize: "14px", fontWeight: "bold", color: "#0D1B2A" }}>${p.price.toLocaleString()}</p>
          </div>
        ))}
      </main>

      {/* LOGÍSTICA */}
      <div style={{ padding: "40px 5%", background: "#F1F1F1", textAlign: "center", marginTop: "40px" }}>
        <p style={{ fontSize: "11px", letterSpacing: "2px", fontWeight: "bold", marginBottom: "15px" }}>ENVÍOS ASEGURADOS POR:</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "25px", opacity: 0.5, fontSize: "12px", fontWeight: "bold" }}>
          <span>INTERRAPIDÍSIMO</span> <span>SERVIENTREGA</span> <span>ENVÍA</span>
        </div>
      </div>

      {/* MODAL DETALLES LUXURY - RECUPERADO */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto" }}>
          <div style={{ padding: "20px", textAlign: "right", borderBottom: "1px solid #EEE" }}>
            <button onClick={() => setSelectedProduct(null)} style={{ background: "#0D1B2A", color: "#FFF", border: "none", padding: "10px 25px", cursor: "pointer", letterSpacing: "1px" }}>VOLVER</button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", padding: "40px 5% 100px 5%" }}>
            <div style={{ flex: "1 1 400px", textAlign: "center", background: "#F9F9F9", padding: "40px", borderRadius: "10px" }}>
              <img src={selectedProduct.images[0]} style={{ width: "100%", maxWidth: "450px", objectFit: "contain" }} />
            </div>
            <div style={{ flex: "1 1 400px", padding: "20px 40px" }}>
              <p style={{ color: "#E0C56E", letterSpacing: "3px", fontSize: "13px", fontWeight: "bold" }}>{selectedProduct.tier} • {selectedProduct.style}</p>
              <h2 style={{ fontSize: "38px", margin: "10px 0", fontWeight: "400" }}>{selectedProduct.name}</h2>
              
              <div style={{ background: "#F9F9F9", padding: "20px", borderLeft: "4px solid #E0C56E", margin: "30px 0" }}>
                <p style={{ fontWeight: "bold", fontSize: "13px", marginBottom: "12px" }}>🛡️ CERTIFICADO DE GARANTÍA</p>
                <p style={{ fontSize: "14px", margin: "5px 0" }}>• Cobertura: <strong>{selectedProduct.guarantee}</strong></p>
                <p style={{ fontSize: "12px", color: "#666", marginTop: "10px", lineHeight: "1.5" }}>Válida por maquinaria. No cubre daños por agua (salvo indicación), golpes o manipulación externa.</p>
              </div>

              <div style={{ marginBottom: "40px" }}>
                <p style={{ fontWeight: "bold", borderBottom: "1px solid #EEE", paddingBottom: "8px", fontSize: "13px", letterSpacing: "1px" }}>ESPECIFICACIONES TÉCNICAS</p>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "14px", margin: "10px 0" }}>• {s}</p>)}
              </div>

              <p style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "40px", color: "#0D1B2A" }}>$ {selectedProduct.price.toLocaleString()} COP</p>
              <button onClick={() => whatsappAction(selectedProduct)} style={{ width: "100%", background: "#25D366", color: "white", padding: "22px", border: "none", fontWeight: "bold", cursor: "pointer", letterSpacing: "2px", borderRadius: "5px", fontSize: "16px" }}>CONSULTAR POR WHATSAPP 📱</button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ padding: "60px 5%", background: "#0D1B2A", color: "#E0C56E", textAlign: "center" }}>
        <button onClick={() => setShowTerms(true)} style={{ background: "none", border: "1px solid #E0C56E", color: "#E0C56E", padding: "12px 30px", fontSize: "11px", cursor: "pointer", letterSpacing: "2px" }}>TÉRMINOS Y CONDICIONES</button>
        <p style={{ marginTop: "25px", fontSize: "9px", opacity: 0.5, letterSpacing: "1px" }}>APEX TIME COLOMBIA © 2024 • CALIDAD 1.1</p>
      </footer>

      {/* MODAL TÉRMINOS - CORREGIDO PARA EVITAR ERROR VERCEL */}
      {showTerms && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 2000, overflowY: "auto", padding: "60px 8%" }}>
          <h2 style={{ borderBottom: "3px solid #E0C56E", paddingBottom: "20px", color: "#0D1B2A", letterSpacing: "2px" }}>TÉRMINOS DE SERVICIO</h2>
          <div style={{ fontSize: "14px", lineHeight: "2", color: "#333", marginTop: "30px" }}>
            <p><strong>1. NATURALEZA DE LAS PIEZAS:</strong> APEX TIME comercializa piezas inspiradas en diseños clásicos de alta ingeniería (Grado 1.1). No guardamos relación oficial con las casas relojeras mencionadas en asesorías privadas.</p>
            <p><strong>2. POLÍTICA DE INSPECCIÓN:</strong> Toda solicitud de garantía requiere un peritaje técnico para verificar la integridad de los componentes internos y el sello de seguridad.</p>
            <p><strong>3. LOGÍSTICA:</strong> Los despachos se realizan en un máximo de 48 horas hábiles tras la confirmación de disponibilidad.</p>
          </div>
          <button onClick={() => setShowTerms(false)} style={{ marginTop: "50px", background: "#0D1B2A", color: "#E0C56E", padding: "18px 60px", border: "none", fontWeight: "bold", cursor: "pointer", letterSpacing: "2px" }}>ENTENDIDO</button>
        </div>
      )}

      {/* WHATSAPP FLOTANTE */}
      <div onClick={() => window.open('https://wa.me')} style={{ position: "fixed", bottom: "25px", right: "25px", background: "#25D366", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "30px", boxShadow: "0 6px 20px rgba(0,0,0,0.2)", cursor: "pointer", zIndex: 900 }}>
        💬
      </div>
    </div>
  );
      }
        
