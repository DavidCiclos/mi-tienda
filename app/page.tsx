"use client";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [styleFilter, setStyleFilter] = useState("TODOS");
  const [genderFilter, setGenderFilter] = useState("TODOS");
  const [showTerms, setShowTerms] = useState(false);

  // INVENTARIO
  const products = [
    { 
      id: 1, 
      name: "Daytona Platinum S-Clon", 
      line: "CROWN SERIES", 
      gender: "HOMBRE",
      price: 3450000, 
      tier: "GAMA S", 
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=500", 
      specs: ["Maquinaria Suiza Base ETA", "Acero Quirúrgico 904L", "Bisel Cerámica Real", "2 Años de Garantía"],
      guarantee: "2 Años - Integral"
    },
    { 
      id: 2, 
      name: "Seamaster Pro 1.1", 
      line: "CONCEPT O", 
      gender: "HOMBRE",
      price: 920000, 
      tier: "PREMIUM 1.1", 
      image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=500", 
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
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500", 
      specs: ["Movimiento Cuarzo", "Caja Aleación", "Resistente a Salpicaduras"],
      guarantee: "30 Días - Maquinaria"
    }
  ];

  // FILTRADO
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchStyle = styleFilter === "TODOS" || p.line === styleFilter;
      const matchGender = genderFilter === "TODOS" || p.gender === genderFilter;
      return matchStyle && matchGender;
    });
  }, [styleFilter, genderFilter]);

  // FUNCIÓN WHATSAPP CORREGIDA
  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const texto = `Hola APEX TIME, deseo información sobre esta pieza:\n⌚ *${product.name}*\n💰 Valor: $${product.price.toLocaleString()}\n¿Está disponible?`;
    // Se añade el $ y la barra / para que funcione en Vercel
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div style={{ background: "#F1F2F6", color: "#0D1B2A", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* HEADER */}
      <header style={{ background: "#0A1128", padding: "50px 5%", textAlign: "center", borderBottom: "2px solid #D4AF37" }}>
        <h1 style={{ color: "#D4AF37", margin: 0, fontSize: "32px", letterSpacing: "10px", fontWeight: "300" }}>APEX TIME</h1>
        <div style={{ width: "60px", height: "1px", background: "#D4AF37", margin: "15px auto" }}></div>
        <p style={{ color: "#F8F9FA", fontSize: "10px", letterSpacing: "5px", margin: 0, opacity: 0.9 }}>ALTA RELOJERÍA</p>
      </header>

      {/* FILTROS NAVEGACIÓN */}
      <nav style={{ padding: "20px 5%", background: "white", borderBottom: "1px solid #DDD", textAlign: "center", position: "sticky", top: 0, zIndex: 90 }}>
        <div style={{ display: "flex", justifyContent: "flex-start", gap: "10px", overflowX: "auto", whiteSpace: "nowrap", marginBottom: "15px", paddingBottom: "5px" }}>
          {["TODOS", "CROWN SERIES", "CONCEPT O", "GEOMETRIC", "URBAN TECH"].map(s => (
            <button key={s} onClick={() => setStyleFilter(s)} style={{ background: styleFilter === s ? "#0D1B2A" : "#F8F9FA", color: styleFilter === s ? "#D4AF37" : "#0D1B2A", border: "1px solid #0D1B2A", padding: "8px 18px", fontSize: "10px", cursor: "pointer", fontWeight: "bold" }}>{s}</button>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          {["TODOS", "HOMBRE", "MUJER"].map(g => (
            <button key={g} onClick={() => setGenderFilter(g)} style={{ background: genderFilter === g ? "#D4AF37" : "#FFF", color: "#0D1B2A", border: "1px solid #D4AF37", padding: "6px 25px", fontSize: "11px", cursor: "pointer", borderRadius: "25px", fontWeight: "bold" }}>{g}</button>
          ))}
        </div>
      </nav>

      {/* GRID DE PRODUCTOS */}
      <main style={{ maxWidth: "550px", margin: "0 auto", padding: "20px" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ background: "white", padding: "15px", borderRadius: "8px", cursor: "pointer", marginBottom: "40px", boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}>
            <div style={{ padding: "10px", textAlign: "center", position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <span style={{ fontSize: "9px", background: "#0D1B2A", color: "#D4AF37", padding: "4px 10px", fontWeight: "bold", borderRadius: "3px" }}>{p.tier}</span>
                {p.price >= 400000 && <span style={{ fontSize: "9px", background: "#D4AF37", color: "#0D1B2A", padding: "4px 10px", fontWeight: "bold", borderRadius: "3px" }}>ENVÍO GRATIS</span>}
              </div>
              <img src={p.image} alt={p.name} style={{ width: "100%", maxHeight: "380px", objectFit: "contain", marginBottom: "20px" }} />
              <p style={{ color: "#D4AF37", fontSize: "11px", fontWeight: "bold", letterSpacing: "3px", textTransform: "uppercase" }}>{p.line}</p>
              <h3 style={{ fontSize: "20px", margin: "10px 0", fontWeight: "400", color: "#0A1128" }}>{p.name}</h3>
              <p style={{ fontSize: "22px", fontWeight: "bold", color: "#0D1B2A" }}>${p.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </main>

      {/* MODAL DETALLES */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto" }}>
          <div style={{ padding: "20px", textAlign: "right", borderBottom: "1px solid #EEE", position: "sticky", top: 0, background: "white", zIndex: 10 }}>
            <button onClick={() => setSelectedProduct(null)} style={{ background: "#0D1B2A", color: "#FFF", border: "none", padding: "12px 30px", cursor: "pointer", fontWeight: "bold" }}>CERRAR</button>
          </div>
          <div style={{ padding: "30px 8% 100px 8%" }}>
            <div style={{ textAlign: "center", background: "#F9F9F9", padding: "30px", borderRadius: "10px" }}>
              <img src={selectedProduct.image} style={{ width: "100%", maxWidth: "450px" }} />
            </div>
            <div style={{ marginTop: "30px" }}>
              <span style={{ color: "#D4AF37", fontWeight: "bold", fontSize: "14px" }}>COLECCIÓN {selectedProduct.line}</span>
              <h2 style={{ fontSize: "36px", margin: "10px 0", color: "#0D1B2A" }}>{selectedProduct.name}</h2>
              <div style={{ background: "#0D1B2A", color: "white", padding: "25px", margin: "30px 0", borderLeft: "6px solid #D4AF37", borderRadius: "0 8px 8px 0" }}>
                <p style={{ color: "#D4AF37", fontWeight: "bold", fontSize: "14px", marginBottom: "15px" }}>FICHA TÉCNICA</p>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "15px", margin: "10px 0", opacity: 0.9 }}>• {s}</p>)}
              </div>
              <p style={{ fontSize: "32px", fontWeight: "bold", color: "#0D1B2A" }}>$ {selectedProduct.price.toLocaleString()} COP</p>
              <button onClick={() => whatsappAction(selectedProduct)} style={{ width: "100%", background: "#25D366", color: "white", padding: "22px", border: "none", fontWeight: "bold", cursor: "pointer", marginTop: "25px", borderRadius: "10px", fontSize: "16px" }}>SOLICITAR POR WHATSAPP 📱</button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ padding: "50px 5%", background: "#0A1128", textAlign: "center" }}>
        <button onClick={() => setShowTerms(true)} style={{ background: "none", border: "1px solid #D4AF37", color: "#D4AF37", padding: "12px 25px", fontSize: "11px", cursor: "pointer", borderRadius: "4px" }}>POLÍTICAS DE PRIVACIDAD Y GARANTÍA</button>
        <p style={{ color: "white", opacity: 0.4, fontSize: "10px", marginTop: "25px" }}>APEX TIME © 2026 - CALIDAD PREMIUM</p>
      </footer>

      {/* MODAL POLÍTICAS */}
      {showTerms && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 2000, padding: "40px 8%", overflowY: "auto" }}>
          <h2 style={{ color: "#0D1B2A", borderBottom: "3px solid #D4AF37", paddingBottom: "10px" }}>TÉRMINOS Y CONDICIONES</h2>
          <div style={{ marginTop: "30px", fontSize: "15px", lineHeight: "1.8", color: "#333" }}>
            <p><strong>1. PROCESO DE COMPRA:</strong> Al hacer clic en el botón de WhatsApp, se le redirigirá a un chat privado para coordinar el pago y envío de su pieza.</p>
            <p><strong>2. GARANTÍA APEX:</strong> Todas nuestras piezas de la CROWN SERIES cuentan con garantía integral de maquinaria. No nos hacemos responsables por daños derivados del uso inadecuado (golpes severos o inmersión en agua fuera de los límites especificados).</p>
          </div>
          <button onClick={() => setShowTerms(false)} style={{ marginTop: "40px", background: "#0D1B2A", color: "white", padding: "18px 50px", border: "none", fontWeight: "bold", borderRadius: "5px" }}>VOLVER A LA TIENDA</button>
        </div>
      )}
    </div>
  );
      }
                  
