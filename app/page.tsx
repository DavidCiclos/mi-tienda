"use client";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [styleFilter, setStyleFilter] = useState("TODOS");
  const [showTerms, setShowTerms] = useState(false);

  const products = [
    { 
      id: 1, 
      name: "Ocean Master 1.1 Elite", 
      line: "CROWN SERIES", 
      price: 950000, 
      tier: "TOP TIER", 
      limited: true,
      image: "https://unsplash.com", 
      specs: ["Maquinaria Suiza Base ETA", "Acero Quirúrgico 904L", "Bisel Cerámica Real", "Vidrio con Logo Grabado", "Grabado entre Aspas", "2 Años de Garantía"],
      guarantee: "2 Años - Funcionamiento Integral"
    },
    { 
      id: 2, 
      name: "Classic Urban V2", 
      line: "URBAN TECH", 
      price: 135000, 
      tier: "ESSENTIAL", 
      limited: false,
      image: "https://unsplash.com", 
      specs: ["Movimiento Cuarzo", "Caja Aleación", "Resistente a Salpicaduras"],
      guarantee: "30 Días - Maquinaria"
    }
  ];

  const filteredProducts = useMemo(() => {
    return styleFilter === "TODOS" ? products : products.filter(p => p.line === styleFilter);
  }, [styleFilter]);

  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const texto = `Hola APEX TIME, deseo información sobre esta pieza ${product.limited ? 'de EDICIÓN LIMITADA' : ''}:\n⌚ *${product.name}*\n💰 Valor: $${product.price.toLocaleString()}\n¿Está disponible?`;
    window.open(`https://wa.me{numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div style={{ background: "#FBFBFB", color: "#0D1B2A", minHeight: "100vh", fontFamily: "serif" }}>
      
      {/* HEADER BOUTIQUE */}
      <header style={{ background: "#0D1B2A", padding: "50px 5%", textAlign: "center" }}>
        <h1 style={{ color: "#E0C56E", margin: 0, fontSize: "28px", letterSpacing: "8px", fontWeight: "300" }}>APEX TIME</h1>
        <div style={{ width: "60px", height: "1px", background: "#E0C56E", margin: "15px auto" }}></div>
        <p style={{ color: "#FFF", fontSize: "9px", letterSpacing: "4px", margin: 0, opacity: 0.7 }}>CURADURÍA DE ALTA RELOJERÍA</p>
      </header>

      {/* FILTRO ÚNICO Y DISCRETO (Sin 'Todos' si prefieres, pero lo dejo optimizado) */}
      <nav style={{ padding: "20px 5%", background: "white", borderBottom: "1px solid #EEE", textAlign: "center", position: "sticky", top: 0, zIndex: 90 }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", overflowX: "auto", whiteSpace: "nowrap", paddingBottom: "5px" }}>
          {["TODOS", "CROWN SERIES", "CONCEPT O", "GEOMETRIC", "URBAN TECH"].map(s => (
            <button key={s} onClick={() => setStyleFilter(s)} style={{ 
              background: styleFilter === s ? "#0D1B2A" : "transparent", 
              color: styleFilter === s ? "#E0C56E" : "#0D1B2A", 
              border: "1px solid #0D1B2A", padding: "8px 15px", fontSize: "10px", cursor: "pointer", letterSpacing: "1px"
            }}>{s}</button>
          ))}
        </div>
      </nav>

      {/* VITRINA DE UNA SOLA COLUMNA (DISEÑO EXCLUSIVO) */}
      <main style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ 
            background: "#F0F0F0", padding: "12px", borderRadius: "2px", cursor: "pointer", marginBottom: "30px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" 
          }}>
            <div style={{ background: "white", padding: "20px", borderRadius: "2px", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <span style={{ fontSize: "8px", background: "#0D1B2A", color: "#E0C56E", padding: "3px 8px", fontWeight: "bold" }}>{p.tier}</span>
                {p.limited && <span style={{ fontSize: "8px", background: "#E0C56E", color: "#0D1B2A", padding: "3px 8px", fontWeight: "bold" }}>LIMITADO</span>}
              </div>
              
              <img src={p.image} alt={p.name} style={{ width: "100%", height: "auto", maxHeight: "350px", objectFit: "contain", marginBottom: "20px" }} />
              
              <p style={{ color: "#E0C56E", fontSize: "10px", fontWeight: "bold", letterSpacing: "3px", margin: 0 }}>{p.line}</p>
              <h3 style={{ fontSize: "18px", margin: "10px 0", fontWeight: "400" }}>{p.name}</h3>
              <p style={{ fontSize: "18px", fontWeight: "bold", color: "#0D1B2A" }}>${p.price.toLocaleString()}</p>
              <div style={{ marginTop: "15px", fontSize: "11px", color: "#888" }}>Ver detalles →</div>
            </div>
          </div>
        ))}
      </main>

      {/* MODAL DETALLES */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto" }}>
          <div style={{ padding: "20px", textAlign: "right", borderBottom: "1px solid #EEE" }}>
            <button onClick={() => setSelectedProduct(null)} style={{ background: "#0D1B2A", color: "#FFF", border: "none", padding: "10px 25px", cursor: "pointer" }}>VOLVER</button>
          </div>
          
          <div style={{ padding: "40px 10% 100px 10%" }}>
            <div style={{ textAlign: "center", background: "#F9F9F9", padding: "40px", borderRadius: "4px" }}>
              <img src={selectedProduct.image} style={{ width: "100%", maxWidth: "450px" }} />
            </div>
            
            <div style={{ marginTop: "40px" }}>
              <p style={{ color: "#E0C56E", letterSpacing: "3px", fontSize: "13px", fontWeight: "bold" }}>{selectedProduct.line} • {selectedProduct.tier}</p>
              <h2 style={{ fontSize: "32px", margin: "15px 0", fontWeight: "400" }}>{selectedProduct.name}</h2>
              
              <div style={{ background: "#0D1B2A", color: "white", padding: "25px", margin: "30px 0", borderLeft: "5px solid #E0C56E" }}>
                <p style={{ color: "#E0C56E", fontWeight: "bold", fontSize: "13px", marginBottom: "15px" }}>🛡️ ESPECIFICACIONES TÉCNICAS</p>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "14px", margin: "10px 0", opacity: 0.9 }}>• {s}</p>)}
                <p style={{ fontSize: "11px", marginTop: "20px", opacity: 0.6 }}>* Garantía: {selectedProduct.guarantee}</p>
              </div>

              <p style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "40px" }}>$ {selectedProduct.price.toLocaleString()} COP</p>

              <button onClick={() => whatsappAction(selectedProduct)} style={{ width: "100%", background: "#25D366", color: "white", padding: "22px", border: "none", fontWeight: "bold", cursor: "pointer", fontSize: "16px", borderRadius: "4px" }}>
                ADQUIRIR POR WHATSAPP 📱
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ padding: "40px 5%", background: "#0D1B2A", color: "#E0C56E", textAlign: "center" }}>
        <button onClick={() => setShowTerms(true)} style={{ background: "none", border: "1px solid #E0C56E", color: "#E0C56E", padding: "10px 20px", fontSize: "10px", cursor: "pointer" }}>POLÍTICAS</button>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <div onClick={() => window.open('https://wa.me')} style={{ position: "fixed", bottom: "30px", right: "25px", background: "#25D366", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "30px", boxShadow: "0 6px 15px rgba(0,0,0,0.2)", cursor: "pointer", zIndex: 900 }}>
        💬
      </div>
    </div>
  );
}
