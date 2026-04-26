"use client";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [styleFilter, setStyleFilter] = useState("TODOS");
  const [genderFilter, setGenderFilter] = useState("TODOS");
  const [showTerms, setShowTerms] = useState(false);

  // ESTRUCTURA DE PRODUCTOS - AQUÍ CARGARÁS TUS 45+ FOTOS
  const products = [
    { 
      id: 1, 
      name: "Daytona Platinum S", 
      line: "CROWN SERIES", // Discreto para Rolex
      gender: "HOMBRE",
      price: 3450000, 
      tier: "GAMA S", 
      limited: true,
      image: "https://unsplash.com", 
      specs: ["Maquinaria Suiza Base ETA", "Acero Quirúrgico 904L", "Bisel Cerámica Real", "Vidrio con Logo Grabado", "Grabado entre Aspas", "100% Funcional", "2 Años de Garantía"],
      guarantee: "2 Años - Maquinaria y Funcionamiento"
    },
    { 
      id: 2, 
      name: "Sea Diver Pro 1.1", 
      line: "CONCEPT O", // Discreto para Omega
      gender: "HOMBRE",
      price: 920000, 
      tier: "PREMIUM 1.1", 
      limited: false,
      image: "https://unsplash.com", 
      specs: ["Acero Quirúrgico 316L", "Cristal Zafirado", "Movimiento Automático Japonés", "Súper Lumínico"],
      guarantee: "1 Año - Maquinaria"
    },
    { 
      id: 3, 
      name: "Urban Classic Leather", 
      line: "URBAN TECH", // Para líneas económicas/Dropshipping
      gender: "UNISEX",
      price: 135000, 
      tier: "ESSENTIAL", 
      limited: false,
      image: "https://unsplash.com", 
      specs: ["Movimiento Cuarzo", "Caja Aleación", "Resistente a Salpicaduras"],
      guarantee: "30 Días - Maquinaria"
    }
  ];

  // LOGICA DE FILTRADO DOBLE
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchStyle = styleFilter === "TODOS" || p.line === styleFilter;
      const matchGender = genderFilter === "TODOS" || p.gender === genderFilter;
      return matchStyle && matchGender;
    });
  }, [styleFilter, genderFilter]);

  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const texto = `Hola APEX TIME, deseo información sobre esta pieza ${product.limited ? 'de EDICIÓN LIMITADA' : ''}:\n⌚ *${product.name}*\n💎 Línea: ${product.line}\n💰 Valor: $${product.price.toLocaleString()}\n¿Está disponible?`;
    window.open(`https://wa.me{numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div style={{ background: "#fcfcfc", color: "#0D1B2A", minHeight: "100vh", fontFamily: "serif" }}>
      
      {/* HEADER BOUTIQUE */}
      <header style={{ background: "#0D1B2A", padding: "50px 5%", textAlign: "center" }}>
        <h1 style={{ color: "#E0C56E", margin: 0, fontSize: "34px", letterSpacing: "12px", fontWeight: "300" }}>APEX TIME</h1>
        <div style={{ width: "80px", height: "1px", background: "#E0C56E", margin: "18px auto" }}></div>
        <p style={{ color: "#FFF", fontSize: "10px", letterSpacing: "5px", margin: 0, opacity: 0.8 }}>CURADURÍA DE PIEZAS SELECTAS</p>
      </header>

      {/* DOBLE FILTRO: ESTILO Y GÉNERO */}
      <nav style={{ padding: "25px 5%", background: "white", borderBottom: "1px solid #f0f0f0", textAlign: "center", position: "sticky", top: 0, zIndex: 90 }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", overflowX: "auto", whiteSpace: "nowrap", marginBottom: "15px", paddingBottom: "5px" }}>
          {["TODOS", "CROWN SERIES", "CONCEPT O", "GEOMETRIC", "URBAN TECH"].map(s => (
            <button key={s} onClick={() => setStyleFilter(s)} style={{ 
              background: styleFilter === s ? "#0D1B2A" : "transparent", 
              color: styleFilter === s ? "#E0C56E" : "#0D1B2A", 
              border: "1px solid #0D1B2A", padding: "8px 18px", fontSize: "10px", cursor: "pointer", borderRadius: "2px", letterSpacing: "1px"
            }}>{s}</button>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          {["TODOS", "HOMBRE", "MUJER"].map(g => (
            <button key={g} onClick={() => setGenderFilter(g)} style={{ 
              background: genderFilter === g ? "#E0C56E" : "#f8f8f8", 
              color: "#0D1B2A", border: genderFilter === g ? "1px solid #0D1B2A" : "1px solid #eee", 
              padding: "6px 20px", fontSize: "11px", cursor: "pointer", borderRadius: "20px", fontWeight: "bold"
            }}>{g}</button>
          ))}
        </div>
      </nav>

      {/* VITRINA DE DOBLE RECUADRO (2 COLUMNAS EN MÓVIL) */}
      <main style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px", padding: "15px", maxWidth: "1200px", margin: "0 auto" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ 
            background: "#f0f0f0", padding: "8px", borderRadius: "4px", cursor: "pointer", transition: "0.3s" 
          }}>
            <div style={{ background: "white", padding: "10px", borderRadius: "2px", textAlign: "center", boxShadow: "0 4px 10px rgba(0,0,0,0.03)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontSize: "7px", background: "#0D1B2A", color: "#E0C56E", padding: "2px 5px", fontWeight: "bold" }}>{p.tier}</span>
                {p.limited && <span style={{ fontSize: "7px", background: "#E0C56E", color: "#0D1B2A", padding: "2px 5px", fontWeight: "bold" }}>LIMITADO</span>}
              </div>
              <img src={p.image} alt={p.name} style={{ width: "100%", aspectRatio: "1/1", objectFit: "contain", marginBottom: "8px" }} />
              <p style={{ color: "#E0C56E", fontSize: "9px", fontWeight: "bold", letterSpacing: "2px", margin: 0 }}>{p.line}</p>
              <h3 style={{ fontSize: "11px", margin: "5px 0", height: "30px", overflow: "hidden", fontWeight: "400" }}>{p.name}</h3>
              <p style={{ fontSize: "13px", fontWeight: "bold", color: "#0D1B2A" }}>${p.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </main>

      {/* MODAL DETALLES DE LUJO */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto" }}>
          <div style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eee" }}>
            <span style={{ fontWeight: "bold", fontSize: "12px", letterSpacing: "2px" }}>PIEZA SELECCIONADA</span>
            <button onClick={() => setSelectedProduct(null)} style={{ background: "#0D1B2A", color: "white", border: "none", padding: "10px 20px", cursor: "pointer" }}>VOLVER</button>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", padding: "20px 5% 100px 5%" }}>
            <div style={{ flex: "1 1 350px", textAlign: "center", background: "#f9f9f9", padding: "30px", borderRadius: "10px" }}>
              <img src={selectedProduct.image} style={{ width: "100%", maxWidth: "450px" }} />
            </div>

            <div style={{ flex: "1 1 350px", padding: "20px" }}>
              {selectedProduct.limited && <p style={{ color: "#E0C56E", fontWeight: "bold", fontSize: "11px", letterSpacing: "2px" }}>✦ EDICIÓN LIMITADA</p>}
              <h2 style={{ fontSize: "32px", margin: "10px 0", fontWeight: "400" }}>{selectedProduct.name}</h2>
              <p style={{ color: "#888", fontSize: "13px" }}>Línea: {selectedProduct.line} | {selectedProduct.gender}</p>
              
              <div style={{ background: "#0D1B2A", color: "white", padding: "20px", margin: "25px 0", borderLeft: "5px solid #E0C56E" }}>
                <p style={{ color: "#E0C56E", fontWeight: "bold", fontSize: "13px", marginBottom: "12px" }}>🛡️ ESPECIFICACIONES DE ALTA GAMA</p>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "13px", margin: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "5px" }}>• {s}</p>)}
                <p style={{ fontSize: "11px", marginTop: "15px", opacity: 0.7 }}>* Incluye estuche de la marca. Pagos contra entrega disponibles.</p>
              </div>

              <p style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "35px" }}>$ {selectedProduct.price.toLocaleString()} COP</p>

              <button onClick={() => whatsappAction(selectedProduct)} style={{ width: "100%", background: "#25D366", color: "white", padding: "20px", border: "none", fontWeight: "bold", borderRadius: "4px", cursor: "pointer", fontSize: "16px" }}>
                ADQUIRIR POR WHATSAPP 📱
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER Y AVISO LEGAL */}
      <footer style={{ padding: "60px 5%", background: "#0D1B2A", color: "white", textAlign: "center" }}>
        <button onClick={() => setShowTerms(true)} style={{ background: "none", border: "1px solid #E0C56E", color: "#E0C56E", padding: "12px 30px", fontSize: "10px", cursor: "pointer", letterSpacing: "2px" }}>
          POLÍTICAS Y GARANTÍA
        </button>
        <p style={{ fontSize: "9px", marginTop: "25px", opacity: 0.5, letterSpacing: "2px" }}>APEX TIME COLOMBIA © 2024 • PIEZAS GRADO 1.1</p>
      </footer>

      {/* MODAL TÉRMINOS - PROTECCIÓN LEGAL */}
      {showTerms && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 2000, overflowY: "auto", padding: "40px 8%" }}>
          <h2 style={{ color: "#0D1B2A", borderBottom: "3px solid #E0C56E", paddingBottom: "15px", letterSpacing: "3px" }}>TÉRMINOS Y CONDICIONES</h2>
          <div style={{ fontSize: "14px", lineHeight: "1.8", color: "#333", marginTop: "30px" }}>
            <p><strong>1. NATURALEZA DE LAS PIEZAS:</strong> APEX TIME es una curaduría independiente de relojería de alta ingeniería (Grado 1.1). No guardamos relación oficial con marcas internacionales.</p>
            <p><strong>2. GARANTÍA:</strong> Cubre defectos de maquinaria según el Tier del producto. No cubre daños por agua (excepto impermeabilizados bajo pedido), golpes o mal uso.</p>
            <p><strong>3. PERITAJE:</strong> Toda devolución requiere inspección técnica para verificar que no hubo manipulación de componentes internos.</p>
          </div>
          <button onClick={() => setShowTerms(false)} style={{ marginTop: "40px", background: "#0D1B2A", color: "#E0C56E", padding: "15px 50px", border: "none", fontWeight: "bold", cursor: "pointer" }}>ENTENDIDO</button>
        </div>
      )}
    </div>
  );
            }
      
