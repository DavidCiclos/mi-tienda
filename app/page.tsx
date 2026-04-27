"use client";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [categoryFilter, setCategoryFilter] = useState("CROWN SERIES");
  const [brandFilter, setBrandFilter] = useState("TODAS");
  const [showTerms, setShowTerms] = useState(false);

  // BASE DE DATOS (Aquí irán tus 40+ productos)
  const products = [
    { 
      id: 1, 
      name: "Daytona Platinum S-Clon", 
      brand: "ROLEX",
      line: "CROWN SERIES", 
      price: 3450000, 
      tier: "GAMA S-CLON", 
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=500", 
      specs: [
        "📍 Maquinaria Suiza Base ETA (100% Funcional)", 
        "📍 Acero Quirúrgico 904L Inoxidable", 
        "📍 Cristal Zafirado con Logo Grabado", 
        "📍 Grabado entre Aspas y Componentes",
        "📍 Logos en Alto y Bajo Relieve",
        "📍 Incluye Estuche de Lujo"
      ]
    },
    { 
      id: 2, 
      name: "Santos de Cartier Blue", 
      brand: "CARTIER",
      line: "PREMIUM 1.1", 
      price: 890000, 
      tier: "CALIDAD 1.1", 
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500", 
      specs: ["📍 Acero 316L Inoxidable", "📍 Cristal Mineral Zafirado", "📍 Movimiento Automático", "📍 Full Grabados"]
    },
    { 
      id: 3, 
      name: "Classic Leather Minimal", 
      brand: "CURREN",
      line: "ESSENTIAL", 
      price: 120000, 
      tier: "ESSENTIAL", 
      image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=500", 
      specs: ["📍 Movimiento de Cuarzo", "📍 Correa de Cuero", "📍 Resistente a salpicaduras"]
    }
  ];

  // LÓGICA DE FILTRADO
  const availableBrands = useMemo(() => {
    const brands = products.filter(p => p.line === categoryFilter).map(p => p.brand);
    return ["TODAS", ...Array.from(new Set(brands))];
  }, [categoryFilter]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      return p.line === categoryFilter && (brandFilter === "TODAS" || p.brand === brandFilter);
    });
  }, [categoryFilter, brandFilter]);

  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const garantia = product.price >= 400000 ? "2 Años de Garantía" : "Garantía estándar";
    const texto = `Hola APEX TIME, me interesa esta pieza de la línea *${product.line}*:\n⌚ *${product.name}*\n💰 Valor: $${product.price.toLocaleString()}\n✅ ${garantia}\n¿Está disponible?`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div style={{ background: "#F2F2F2", color: "#0D1B2A", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* HEADER */}
      <header style={{ background: "#0D1B2A", padding: "45px 5%", textAlign: "center", borderBottom: "4px solid #D4AF37" }}>
        <h1 style={{ color: "#D4AF37", margin: 0, fontSize: "28px", letterSpacing: "8px", fontWeight: "300" }}>APEX TIME</h1>
        <p style={{ color: "#FFF", fontSize: "10px", letterSpacing: "4px", marginTop: "10px", opacity: 0.8 }}>ALTA RELOJERÍA</p>
      </header>

      {/* SISTEMA DE NAVEGACIÓN Y MARCAS */}
      <nav style={{ background: "white", position: "sticky", top: 0, zIndex: 100, borderBottom: "1px solid #EEE" }}>
        <div style={{ display: "flex", overflowX: "auto", padding: "15px 5%", gap: "10px" }}>
          {["CROWN SERIES", "PREMIUM 1.1", "ESSENTIAL"].map(cat => (
            <button key={cat} onClick={() => { setCategoryFilter(cat); setBrandFilter("TODAS"); }} style={{
              flex: 1, minWidth: "130px", padding: "12px", border: "1px solid #0D1B2A",
              background: categoryFilter === cat ? "#0D1B2A" : "white",
              color: categoryFilter === cat ? "#D4AF37" : "#0D1B2A",
              fontSize: "10px", fontWeight: "bold", cursor: "pointer"
            }}>{cat}</button>
          ))}
        </div>
        <div style={{ display: "flex", overflowX: "auto", padding: "0 5% 15px 5%", gap: "15px", justifyContent: "center" }}>
          {availableBrands.map(brand => (
            <span key={brand} onClick={() => setBrandFilter(brand)} style={{
              fontSize: "11px", cursor: "pointer", color: brandFilter === brand ? "#D4AF37" : "#999",
              fontWeight: "bold", borderBottom: brandFilter === brand ? "2px solid #D4AF37" : "none", textTransform: "uppercase"
            }}>{brand}</span>
          ))}
        </div>
      </nav>

      {/* VITRINA DE RELOJES */}
      <main style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ 
            background: "white", border: categoryFilter === "CROWN SERIES" ? "8px solid #0D1B2A" : "4px solid #EAEAEA", 
            marginBottom: "40px", cursor: "pointer", boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
          }}>
            <div style={{ padding: "20px", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <span style={{ fontSize: "9px", background: "#0D1B2A", color: "#D4AF37", padding: "4px 10px", fontWeight: "bold" }}>{p.tier}</span>
                {p.price >= 400000 && <span style={{ fontSize: "9px", background: "#D4AF37", color: "#0D1B2A", padding: "4px 10px", fontWeight: "bold" }}>ENVÍO GRATIS</span>}
              </div>
              <img src={p.image} style={{ width: "100%", maxHeight: "350px", objectFit: "contain", margin: "10px 0" }} />
              <p style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "bold", letterSpacing: "3px" }}>{p.brand}</p>
              <h3 style={{ fontSize: "20px", margin: "5px 0", fontWeight: "400" }}>{p.name}</h3>
              <p style={{ fontSize: "22px", fontWeight: "bold" }}>${p.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </main>

      {/* MODAL DETALLES PRODUCTO */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto" }}>
          <div style={{ padding: "20px", textAlign: "right", borderBottom: "1px solid #EEE" }}>
            <button onClick={() => setSelectedProduct(null)} style={{ background: "#0D1B2A", color: "#FFF", border: "none", padding: "10px 30px", fontWeight: "bold", cursor: "pointer" }}>CERRAR</button>
          </div>
          <div style={{ padding: "30px 8% 100px 8%" }}>
            <div style={{ textAlign: "center", background: "#F9F9F9", padding: "20px" }}>
              <img src={selectedProduct.image} style={{ width: "100%", maxWidth: "400px" }} />
            </div>
            <div style={{ marginTop: "30px" }}>
              <h2 style={{ fontSize: "30px", margin: "5px 0" }}>{selectedProduct.name}</h2>
              <p style={{ color: "#D4AF37", fontWeight: "bold" }}>LINEA {selectedProduct.line}</p>
              
              <div style={{ background: "#0D1B2A", color: "white", padding: "25px", margin: "25px 0", borderLeft: "6px solid #D4AF37" }}>
                <p style={{ color: "#D4AF37", fontWeight: "bold", fontSize: "13px", marginBottom: "15px" }}>ESPECIFICACIONES TÉCNICAS:</p>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "14px", margin: "8px 0" }}>{s}</p>)}
                <p style={{ fontSize: "14px", margin: "8px 0" }}>📍 {selectedProduct.price >= 400000 ? "2 Años de Garantía por Maquinaria" : "Garantía según modelo"}</p>
                <p style={{ fontSize: "14px", margin: "8px 0" }}>📍 Estuche de la marca incluido</p>
                <p style={{ color: "#D4AF37", fontWeight: "bold", marginTop: "15px" }}>😍 PAGO CONTRA ENTREGA</p>
              </div>

              <p style={{ fontSize: "32px", fontWeight: "bold", color: "#0D1B2A" }}>$ {selectedProduct.price.toLocaleString()} COP</p>
              <button onClick={() => whatsappAction(selectedProduct)} style={{ width: "100%", background: "#25D366", color: "white", padding: "22px", border: "none", fontWeight: "bold", fontSize: "16px", cursor: "pointer", marginTop: "20px", borderRadius: "5px" }}>ADQUIRIR POR WHATSAPP 📱</button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ padding: "50px 5%", background: "#0D1B2A", textAlign: "center" }}>
        <button onClick={() => setShowTerms(true)} style={{ background: "none", border: "1px solid #D4AF37", color: "#D4AF37", padding: "12px 25px", cursor: "pointer", fontWeight: "bold" }}>TÉRMINOS Y CONDICIONES</button>
      </footer>

      {/* MODAL TÉRMINOS CON PROTOCOLOS DE DEVOLUCIÓN */}
      {showTerms && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 2000, padding: "40px 8%", overflowY: "auto" }}>
          <h2 style={{ borderBottom: "3px solid #D4AF37", paddingBottom: "10px" }}>POLÍTICAS DE COMPRA Y DEVOLUCIÓN</h2>
          <div style={{ marginTop: "25px", fontSize: "15px", lineHeight: "1.8" }}>
            <p><strong>1. GARANTÍA:</strong> Las piezas superiores a $400,000 cuentan con 2 años de garantía por maquinaria. No cubre daños por mal uso, golpes o humedad extrema.</p>
            <p><strong>2. PROTOCOLO DE DEVOLUCIÓN:</strong> Al solicitar una devolución o cambio, la pieza debe pasar obligatoriamente por nuestros <strong>filtros y protocolos de inspección</strong>. Esto garantiza que el reloj sea devuelto en el **mismo estado estético y funcional** en que fue enviado originalmente.</p>
            <p><strong>3. ENVÍOS:</strong> El pago contra entrega está disponible para validar su compra al recibir.</p>
          </div>
          <button onClick={() => setShowTerms(false)} style={{ marginTop: "40px", background: "#0D1B2A", color: "white", padding: "18px 50px", border: "none", fontWeight: "bold" }}>ENTENDIDO</button>
        </div>
      )}
    </div>
  );
}
