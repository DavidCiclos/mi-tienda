"use client";
import { useState } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [styleFilter, setStyleFilter] = useState("TODOS");
  const [showTerms, setShowTerms] = useState(false);

  // PRODUCTOS CON NOMBRES DE COLECCIÓN (Más seguro legalmente)
  const products = [
    { 
      id: 1, 
      name: "Deep Sea Elite 1.1", 
      style: "PROFESIONAL", 
      price: 850000, 
      tier: "TOP TIER", 
      image: "https://unsplash.com", 
      specs: ["Acero Quirúrgico 316L", "Bisel Cerámico", "Movimiento Automático", "Garantía 2 Años"] 
    },
    { 
      id: 2, 
      name: "Square Skeleton Gold", 
      style: "CLÁSICO", 
      price: 980000, 
      tier: "TOP TIER", 
      image: "https://unsplash.com", 
      specs: ["Oro Ionizado 18k", "Cristal de Alta Resistencia", "Cierre Mariposa"] 
    },
    { 
      id: 3, 
      name: "Waffle Dial Heritage", 
      style: "CLÁSICO", 
      price: 580000, 
      tier: "PREMIUM", 
      image: "https://unsplash.com", 
      specs: ["Tablero Tapisserie 3D", "Acero Integrado", "Reserva de Marcha 40h"] 
    },
    { 
      id: 4, 
      name: "Exotic Carbon Tourbillon", 
      style: "EXÓTICO", 
      price: 1250000, 
      tier: "EXOTIC", 
      image: "https://unsplash.com", 
      specs: ["Caja de Carbono Forjado", "Cristal Curvo", "Maquinaria Visible"] 
    }
  ];

  const filteredProducts = styleFilter === "TODOS" ? products : products.filter(p => p.style === styleFilter);

    const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const texto = `Hola APEX TIME, deseo adquirir esta pieza de la colección:\n⌚ *${product.name}*\n💰 Valor: $${product.price.toLocaleString()}\n¿Está disponible?`;
    
    // He corregido la sintaxis agregando el $ antes de {numero}
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };
  

  return (
    <div style={{ background: "#fcfcfc", color: "#0D1B2A", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* HEADER */}
      <header style={{ background: "#0D1B2A", padding: "45px 5%", textAlign: "center" }}>
        <h1 style={{ color: "#E0C56E", margin: 0, fontSize: "30px", letterSpacing: "10px", fontWeight: "300" }}>APEX TIME</h1>
        <div style={{ width: "80px", height: "1px", background: "#E0C56E", margin: "15px auto" }}></div>
        <p style={{ color: "#FFF", fontSize: "10px", letterSpacing: "4px", margin: 0, opacity: 0.8 }}>CURADURÍA DE PIEZAS SELECTAS</p>
      </header>

      {/* FILTROS POR ESTILO */}
      <nav style={{ padding: "20px 5%", background: "white", borderBottom: "1px solid #f0f0f0", textAlign: "center", position: "sticky", top: 0, zIndex: 90, overflowX: "auto", whiteSpace: "nowrap" }}>
        {["TODOS", "PROFESIONAL", "CLÁSICO", "EXÓTICO", "MODA"].map(s => (
          <button key={s} onClick={() => setStyleFilter(s)} style={{ 
            background: styleFilter === s ? "#0D1B2A" : "transparent", 
            color: styleFilter === s ? "#E0C56E" : "#0D1B2A", 
            border: "1px solid #0D1B2A", padding: "8px 18px", fontSize: "10px", cursor: "pointer", margin: "0 5px", borderRadius: "2px"
          }}>{s}</button>
        ))}
      </nav>

      {/* VITRINA DE PRODUCTOS (2 COLUMNAS) */}
      <main style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", padding: "15px", maxWidth: "1200px", margin: "0 auto" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ background: "white", padding: "12px", border: "1px solid #f0f0f0", textAlign: "center", cursor: "pointer" }}>
            <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "8px" }}>
              <span style={{ fontSize: "8px", background: "#E0C56E", color: "#0D1B2A", padding: "2px 6px", fontWeight: "bold" }}>{p.tier}</span>
            </div>
            
            <div style={{ background: "#f9f9f9", marginBottom: "10px" }}>
              <img src={p.image} alt={p.name} style={{ width: "100%", height: "180px", objectFit: "contain" }} />
            </div>

            <p style={{ color: "#E0C56E", fontSize: "9px", fontWeight: "bold", letterSpacing: "2px", margin: "5px 0" }}>{p.style}</p>
            <h3 style={{ fontSize: "12px", margin: "0 0 8px 0", height: "32px", overflow: "hidden" }}>{p.name}</h3>
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>${p.price.toLocaleString()}</p>
          </div>
        ))}
      </main>

      {/* FOOTER */}
      <footer style={{ padding: "60px 5%", background: "#0D1B2A", color: "white", textAlign: "center" }}>
        <button onClick={() => setShowTerms(true)} style={{ background: "none", border: "1px solid #E0C56E", color: "#E0C56E", padding: "12px 25px", fontSize: "11px", cursor: "pointer" }}>
          AVISO LEGAL Y POLÍTICA DE INSPECCIÓN
        </button>
        <p style={{ fontSize: "9px", marginTop: "20px", opacity: 0.5 }}>APEX TIME COLOMBIA © 2024</p>
      </footer>

      {/* MODAL DETALLES */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto" }}>
          <div style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eee" }}>
            <span style={{ fontWeight: "bold", fontSize: "13px" }}>ESPECIFICACIONES</span>
            <button onClick={() => setSelectedProduct(null)} style={{ background: "#0D1B2A", color: "white", border: "none", padding: "10px 20px", cursor: "pointer" }}>VOLVER</button>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", padding: "20px 5%" }}>
            <div style={{ flex: "1 1 350px", textAlign: "center" }}>
              <img src={selectedProduct.image} style={{ width: "100%", maxWidth: "450px" }} />
            </div>

            <div style={{ flex: "1 1 350px", padding: "20px" }}>
              <span style={{ color: "#E0C56E", fontWeight: "bold", fontSize: "11px" }}>ESTILO {selectedProduct.style}</span>
              <h2 style={{ fontSize: "28px", margin: "10px 0" }}>{selectedProduct.name}</h2>
              
              <div style={{ background: "#f9f9f9", borderLeft: "4px solid #E0C56E", padding: "15px", margin: "20px 0" }}>
                <p style={{ fontWeight: "bold", fontSize: "12px", marginBottom: "8px" }}>DETALLES TÉCNICOS:</p>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "13px", margin: "5px 0" }}>• {s}</p>)}
              </div>

              <p style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "25px" }}>$ {selectedProduct.price.toLocaleString()} COP</p>

              <button onClick={() => whatsappAction(selectedProduct)} style={{ width: "100%", background: "#25D366", color: "white", padding: "18px", border: "none", fontWeight: "bold", borderRadius: "6px", cursor: "pointer" }}>
                ADQUIRIR POR WHATSAPP 📱
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL TÉRMINOS */}
      {showTerms && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 2000, overflowY: "auto", padding: "40px 8%" }}>
          <h2 style={{ color: "#0D1B2A", borderBottom: "3px solid #E0C56E", paddingBottom: "15px" }}>TÉRMINOS Y CONDICIONES</h2>
          <div style={{ fontSize: "14px", lineHeight: "1.8", color: "#333", marginTop: "30px" }}>
            <p><strong>1. DESCARGO DE RESPONSABILIDAD:</strong> APEX TIME es una curaduría independiente. Nuestras piezas son homenajes de alta ingeniería (Grado 1.1) inspiradas en diseños clásicos y no guardan relación oficial con ninguna casa relojera internacional mencionada en asesorías privadas.</p>
            <p><strong>2. PERITAJE TÉCNICO:</strong> Toda devolución requiere una inspección técnica obligatoria para verificar que no hubo cambio de piezas internas o manipulación de pernos.</p>
          </div>
          <button onClick={() => setShowTerms(false)} style={{ marginTop: "40px", background: "#0D1B2A", color: "#E0C56E", padding: "15px 50px", border: "none", fontWeight: "bold" }}>ENTENDIDO</button>
        </div>
      )}
    </div>
  );
}
