"use client";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [styleFilter, setStyleFilter] = useState("TODOS");
  const [genderFilter, setGenderFilter] = useState("TODOS");
  const [showTerms, setShowTerms] = useState(false);

  const products = [
    { 
      id: 1, 
      name: "Daytona Platinum S-Clon", 
      line: "CROWN SERIES", 
      gender: "HOMBRE",
      price: 3450000, 
      tier: "GAMA S", 
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=500", 
      specs: [
        "📍 Maquinaria Suiza Base ETA (100% Funcional)", 
        "📍 Acero Quirúrgico 904L Inoxidable", 
        "📍 Cristal Zafirado con Logo Grabado", 
        "📍 Grabado entre Aspas y Componentes",
        "📍 Logos en Alto y Bajo Relieve",
        "📍 Incluye Estuche de Lujo de la Marca"
      ],
      guarantee: "2 Años de Garantía por Maquinaria",
      shipping: "ENVÍO GRATIS",
      payment: "PAGOS CONTRA ENTREGA 😍"
    },
    // Añade aquí el resto de tus 40 productos siguiendo esta misma estructura
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchStyle = styleFilter === "TODOS" || p.line === styleFilter;
      const matchGender = genderFilter === "TODOS" || p.gender === genderFilter;
      return matchStyle && matchGender;
    });
  }, [styleFilter, genderFilter]);

  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const texto = `Hola APEX TIME, deseo adquirir esta pieza exclusiva:\n⌚ *${product.name}*\n💰 Valor: $${product.price.toLocaleString()}\n✅ Incluye Estuche y Garantía.\n¿Disponibilidad para envío inmediato?`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div style={{ background: "#F4F4F4", color: "#0D1B2A", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* HEADER PREMIUM */}
      <header style={{ background: "#0D1B2A", padding: "50px 5%", textAlign: "center", borderBottom: "3px solid #E0C56E" }}>
        <h1 style={{ color: "#E0C56E", margin: 0, fontSize: "30px", letterSpacing: "12px", fontWeight: "300" }}>APEX TIME</h1>
        <div style={{ width: "80px", height: "1px", background: "#E0C56E", margin: "15px auto" }}></div>
        <p style={{ color: "#FFF", fontSize: "10px", letterSpacing: "5px", margin: 0, opacity: 0.8 }}>ALTA RELOJERÍA • CURADURÍA SELECTA</p>
      </header>

      {/* NAVEGACIÓN TÁCTICA */}
      <nav style={{ padding: "20px 5%", background: "white", borderBottom: "1px solid #EEE", textAlign: "center", position: "sticky", top: 0, zIndex: 90 }}>
        <div style={{ display: "flex", justifyContent: "flex-start", gap: "12px", overflowX: "auto", whiteSpace: "nowrap", marginBottom: "15px", paddingBottom: "8px" }}>
          {["TODOS", "CROWN SERIES", "CONCEPT O", "GEOMETRIC", "URBAN TECH"].map(s => (
            <button key={s} onClick={() => setStyleFilter(s)} style={{ 
              background: styleFilter === s ? "#0D1B2A" : "white", 
              color: styleFilter === s ? "#E0C56E" : "#0D1B2A", 
              border: "1px solid #0D1B2A", padding: "8px 20px", fontSize: "10px", cursor: "pointer", fontWeight: "bold" 
            }}>{s}</button>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {["TODOS", "HOMBRE", "MUJER"].map(g => (
            <button key={g} onClick={() => setGenderFilter(g)} style={{ 
              background: genderFilter === g ? "#E0C56E" : "#F5F5F5", 
              color: "#0D1B2A", border: "none", padding: "8px 25px", fontSize: "11px", cursor: "pointer", borderRadius: "25px", fontWeight: "bold" 
            }}>{g}</button>
          ))}
        </div>
      </nav>

      {/* VITRINA DE PRODUCTOS (RECUADRO NIVEL SUPERIOR) */}
      <main style={{ maxWidth: "500px", margin: "0 auto", padding: "25px" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ background: "white", padding: "1px", border: "8px solid #EAEAEA", marginBottom: "40px", cursor: "pointer", boxShadow: "0 15px 35px rgba(0,0,0,0.05)" }}>
            <div style={{ padding: "20px", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <span style={{ fontSize: "9px", background: "#0D1B2A", color: "#E0C56E", padding: "4px 10px", fontWeight: "bold" }}>{p.tier}</span>
                <span style={{ fontSize: "9px", background: "#E0C56E", color: "#0D1B2A", padding: "4px 10px", fontWeight: "bold" }}>{p.shipping}</span>
              </div>
              
              <img src={p.image} alt={p.name} style={{ width: "100%", maxHeight: "350px", objectFit: "contain", marginBottom: "15px" }} />
              
              <p style={{ color: "#E0C56E", fontSize: "11px", fontWeight: "bold", letterSpacing: "4px", textTransform: "uppercase" }}>{p.line}</p>
              <h3 style={{ fontSize: "22px", margin: "10px 0", fontWeight: "400", color: "#0D1B2A" }}>{p.name}</h3>
              <p style={{ fontSize: "24px", fontWeight: "bold", color: "#0D1B2A" }}>${p.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </main>

      {/* MODAL DE DETALLES INMERSIVO */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto" }}>
          <div style={{ padding: "20px", textAlign: "right", borderBottom: "1px solid #EEE", position: "sticky", top: 0, background: "white", zIndex: 20 }}>
            <button onClick={() => setSelectedProduct(null)} style={{ background: "#0D1B2A", color: "#FFF", border: "none", padding: "10px 25px", fontWeight: "bold", cursor: "pointer" }}>CERRAR</button>
          </div>
          
          <div style={{ padding: "30px 8% 100px 8%" }}>
            <div style={{ textAlign: "center", background: "#F9F9F9", padding: "30px", borderRadius: "4px" }}>
              <img src={selectedProduct.image} style={{ width: "100%", maxWidth: "450px" }} />
            </div>

            <div style={{ marginTop: "30px" }}>
              <span style={{ color: "#E0C56E", fontWeight: "bold", fontSize: "14px", letterSpacing: "2px" }}>PIEZA EXCLUSIVA {selectedProduct.tier}</span>
              <h2 style={{ fontSize: "32px", margin: "10px 0", color: "#0D1B2A" }}>{selectedProduct.name}</h2>
              
              <div style={{ background: "#F5F5F5", padding: "20px", borderLeft: "5px solid #0D1B2A", margin: "25px 0" }}>
                <p style={{ fontWeight: "bold", fontSize: "13px", marginBottom: "15px" }}>DETALLES TÉCNICOS:</p>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "14px", margin: "8px 0", color: "#333" }}>{s}</p>)}
              </div>

              <div style={{ background: "#E0C56E", color: "#0D1B2A", padding: "15px", textAlign: "center", fontWeight: "bold", borderRadius: "4px", marginBottom: "25px" }}>
                🚚 {selectedProduct.payment}
              </div>

              <p style={{ fontSize: "30px", fontWeight: "bold", color: "#0D1B2A" }}>$ {selectedProduct.price.toLocaleString()} COP</p>
              
              <button onClick={() => whatsappAction(selectedProduct)} style={{ 
                width: "100%", background: "#25D366", color: "white", padding: "22px", border: "none", fontWeight: "bold", 
                fontSize: "16px", borderRadius: "4px", cursor: "pointer", marginTop: "20px", boxShadow: "0 10px 20px rgba(37, 211, 102, 0.2)"
              }}>SOLICITAR POR WHATSAPP 📱</button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ padding: "60px 5%", background: "#0D1B2A", textAlign: "center" }}>
        <button onClick={() => setShowTerms(true)} style={{ background: "none", border: "1px solid #E0C56E", color: "#E0C56E", padding: "12px 30px", fontSize: "12px", cursor: "pointer" }}>POLÍTICAS DE PRIVACIDAD Y GARANTÍA</button>
        <p style={{ color: "white", opacity: 0.5, fontSize: "10px", marginTop: "30px", letterSpacing: "2px" }}>APEX TIME COLOMBIA © 2026</p>
      </footer>

      {/* MODAL TÉRMINOS */}
      {showTerms && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 2000, padding: "40px 8%", overflowY: "auto" }}>
          <h2 style={{ color: "#0D1B2A", borderBottom: "3px solid #E0C56E", paddingBottom: "15px" }}>POLÍTICAS APEX TIME</h2>
          <div style={{ marginTop: "30px", fontSize: "15px", lineHeight: "1.8", color: "#444" }}>
            <p><strong>1. CALIDAD:</strong> Nuestras piezas son catalogadas como S-Clon y Premium 1.1, garantizando la mayor fidelidad en materiales y maquinaria del mercado.</p>
            <p><strong>2. ENVÍOS:</strong> Realizamos envíos a nivel nacional con opción de pago contra entrega para su total seguridad.</p>
            <p><strong>3. GARANTÍA:</strong> Cubre funcionamiento de maquinaria. No incluye daños por maltrato físico o inmersión en agua fuera de lo recomendado para la pieza.</p>
          </div>
          <button onClick={() => setShowTerms(false)} style={{ marginTop: "40px", background: "#0D1B2A", color: "white", padding: "15px 50px", border: "none", fontWeight: "bold", borderRadius: "2px" }}>ENTENDIDO</button>
        </div>
      )}
    </div>
  );
}
