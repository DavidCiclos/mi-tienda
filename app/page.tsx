"use client";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [styleFilter, setStyleFilter] = useState("TODOS");
  const [genderFilter, setGenderFilter] = useState("TODOS");
  const [showTerms, setShowTerms] = useState(false);

  // MUESTRA POR CADA APARTADO (Gama S, Premium y Essential)
  const products = [
    { 
      id: 1, 
      name: "Daytona Platinum S-Clon", 
      line: "CROWN SERIES", 
      gender: "HOMBRE",
      price: 3450000, 
      tier: "GAMA S", 
      limited: true,
      image: "https://unsplash.com", 
      specs: ["Maquinaria Suiza Base ETA", "Acero Quirúrgico 904L", "Bisel Cerámica Real", "Vidrio con Logo Grabado", "2 Años de Garantía"],
      guarantee: "2 Años - Integral"
    },
    { 
      id: 2, 
      name: "Seamaster Pro 1.1", 
      line: "CONCEPT O", 
      gender: "HOMBRE",
      price: 920000, 
      tier: "PREMIUM 1.1", 
      limited: false,
      image: "https://unsplash.com", 
      specs: ["Acero Quirúrgico 316L", "Cristal Zafirado", "Movimiento Automático Japonés"],
      guarantee: "1 Año - Maquinaria"
    },
    { 
      id: 3, 
      name: "Urban Classic Leather", 
      line: "URBAN TECH", 
      gender: "MUJER",
      price: 135000, 
      tier: "ESSENTIAL", 
      limited: false,
      image: "https://unsplash.com", 
      specs: ["Movimiento Cuarzo", "Caja Aleación", "Resistente a Salpicaduras"],
      guarantee: "30 Días - Maquinaria"
    }
  ];

  // FILTRADO DOBLE (Línea + Género)
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchStyle = styleFilter === "TODOS" || p.line === styleFilter;
      const matchGender = genderFilter === "TODOS" || p.gender === genderFilter;
      return matchStyle && matchGender;
    });
  }, [styleFilter, genderFilter]);

  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const texto = `Hola APEX TIME, deseo información sobre esta pieza:\n⌚ *${product.name}*\n💰 Valor: $${product.price.toLocaleString()}\n¿Está disponible?`;
    window.open(`https://wa.me{numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div style={{ background: "#FBFBFB", color: "#0D1B2A", minHeight: "100vh", fontFamily: "serif" }}>
      
      {/* HEADER */}
      <header style={{ background: "#0D1B2A", padding: "45px 5%", textAlign: "center" }}>
        <h1 style={{ color: "#E0C56E", margin: 0, fontSize: "28px", letterSpacing: "8px", fontWeight: "300" }}>APEX TIME</h1>
        <div style={{ width: "60px", height: "1px", background: "#E0C56E", margin: "15px auto" }}></div>
        <p style={{ color: "#FFF", fontSize: "9px", letterSpacing: "4px", margin: 0, opacity: 0.7 }}>ALTA RELOJERÍA</p>
      </header>

      {/* DOBLE FILTRO */}
      <nav style={{ padding: "20px 5%", background: "white", borderBottom: "1px solid #EEE", textAlign: "center", position: "sticky", top: 0, zIndex: 90 }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", overflowX: "auto", whiteSpace: "nowrap", marginBottom: "15px" }}>
          {["TODOS", "CROWN SERIES", "CONCEPT O", "GEOMETRIC", "URBAN TECH"].map(s => (
            <button key={s} onClick={() => setStyleFilter(s)} style={{ background: styleFilter === s ? "#0D1B2A" : "transparent", color: styleFilter === s ? "#E0C56E" : "#0D1B2A", border: "1px solid #0D1B2A", padding: "8px 15px", fontSize: "10px", cursor: "pointer" }}>{s}</button>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          {["TODOS", "HOMBRE", "MUJER"].map(g => (
            <button key={g} onClick={() => setGenderFilter(g)} style={{ background: genderFilter === g ? "#E0C56E" : "#F5F5F5", color: "#0D1B2A", border: "none", padding: "6px 20px", fontSize: "11px", cursor: "pointer", borderRadius: "20px", fontWeight: "bold" }}>{g}</button>
          ))}
        </div>
      </nav>

      {/* VITRINA UNA COLUMNA */}
      <main style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ background: "#F0F0F0", padding: "12px", borderRadius: "2px", cursor: "pointer", marginBottom: "35px" }}>
            <div style={{ background: "white", padding: "20px", borderRadius: "2px", textAlign: "center", position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <span style={{ fontSize: "8px", background: "#0D1B2A", color: "#E0C56E", padding: "3px 8px", fontWeight: "bold" }}>{p.tier}</span>
                {p.price >= 400000 && <span style={{ fontSize: "8px", background: "#E0C56E", color: "#0D1B2A", padding: "3px 8px", fontWeight: "bold" }}>ENVÍO GRATIS</span>}
              </div>
              <img src={p.image} style={{ width: "100%", maxHeight: "350px", objectFit: "contain", marginBottom: "15px" }} />
              <p style={{ color: "#E0C56E", fontSize: "10px", fontWeight: "bold", letterSpacing: "3px" }}>{p.line}</p>
              <h3 style={{ fontSize: "18px", margin: "10px 0", fontWeight: "400" }}>{p.name}</h3>
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>${p.price.toLocaleString()}</p>
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
            <div style={{ textAlign: "center", background: "#F9F9F9", padding: "30px" }}>
              <img src={selectedProduct.image} style={{ width: "100%", maxWidth: "450px" }} />
            </div>
            <div style={{ marginTop: "30px" }}>
              <h2 style={{ fontSize: "32px", margin: "10px 0" }}>{selectedProduct.name}</h2>
              <div style={{ background: "#0D1B2A", color: "white", padding: "20px", margin: "25px 0", borderLeft: "5px solid #E0C56E" }}>
                <p style={{ color: "#E0C56E", fontWeight: "bold", fontSize: "13px" }}>ESPECIFICACIONES</p>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "14px", margin: "8px 0" }}>• {s}</p>)}
              </div>
              <p style={{ fontSize: "28px", fontWeight: "bold" }}>$ {selectedProduct.price.toLocaleString()} COP</p>
              <button onClick={() => whatsappAction(selectedProduct)} style={{ width: "100%", background: "#25D366", color: "white", padding: "20px", border: "none", fontWeight: "bold", cursor: "pointer", marginTop: "20px" }}>CONSULTAR WHATSAPP 📱</button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER CON POLÍTICAS */}
      <footer style={{ padding: "40px 5%", background: "#0D1B2A", textAlign: "center" }}>
        <button onClick={() => setShowTerms(true)} style={{ background: "none", border: "1px solid #E0C56E", color: "#E0C56E", padding: "10px 20px", fontSize: "11px", cursor: "pointer" }}>POLÍTICAS DE PRIVACIDAD</button>
      </footer>

      {/* MODAL TÉRMINOS */}
      {showTerms && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 2000, padding: "40px 8%", overflowY: "auto" }}>
          <h2 style={{ borderBottom: "2px solid #E0C56E" }}>POLÍTICAS Y GARANTÍA</h2>
          <div style={{ marginTop: "20px", fontSize: "14px", lineHeight: "1.8" }}>
            <p><strong>1. GARANTÍA:</strong> Cubre maquinaria por defectos de fábrica. No cubre daños por agua o golpes.</p>
            <p><strong>2. PRIVACIDAD:</strong> Sus datos solo se usan para la gestión de su pedido por WhatsApp.</p>
          </div>
          <button onClick={() => setShowTerms(false)} style={{ marginTop: "40px", background: "#0D1B2A", color: "white", padding: "15px 40px", border: "none" }}>ENTENDIDO</button>
        </div>
      )}

      {/* WHATSAPP FLOTANTE */}
      <div onClick={() => window.open('https://wa.me')} style={{ position: "fixed", bottom: "25px", right: "25px", background: "#25D366", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "30px", zIndex: 900 }}>💬</div>
    </div>
  );
}
