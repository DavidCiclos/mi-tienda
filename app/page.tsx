"use client";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [categoryFilter, setCategoryFilter] = useState("CROWN SERIES");
  const [brandFilter, setBrandFilter] = useState("TODAS");
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [showTerms, setShowTerms] = useState(false);

  // BASE DE DATOS ORGANIZADA POR TUS ESPECIFICACIONES
  const products = [
    // --- CROWN SERIES (Súper Réplicas) ---
    { id: 1, name: "Daytona S-Clon", brand: "ROLEX", line: "CROWN SERIES", price: 3450000, tier: "S-CLON / VIP", images: ["https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600"], specs: ["Maquinaria Suiza Base ETA", "Acero 904L", "Cristal Zafirado", "Grabados Láser"] },
    
    // --- PREMIUM 1.1 (Rolex, Cartier, Tomi, Hublot, Tissot, Richard Mille, Casio, Diesel, Omega) ---
    { id: 10, name: "Santos Skeleton", brand: "CARTIER", line: "PREMIUM 1.1", price: 950000, tier: "CALIDAD 1.1", images: ["https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600"], specs: ["Acero 316L", "Cristal Zafirado", "Movimiento Automático"] },
    { id: 11, name: "RM 011 Titanium", brand: "RICHARD MILLE", line: "PREMIUM 1.1", price: 1250000, tier: "CALIDAD 1.1", images: ["https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600"], specs: ["Caja de Carbono", "Correa de Caucho", "Cronógrafo Funcional"] },
    { id: 12, name: "Submariner Gold", brand: "ROLEX", line: "PREMIUM 1.1", price: 880000, tier: "CALIDAD 1.1", images: ["https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600"], specs: ["Acero Inox", "Automático", "Bisel Cerámico"] },
    
    // --- ESSENTIAL (Rolex, Casio, Hublot, Omega, Cartier) ---
    { id: 30, name: "F91-W Gold Edition", brand: "CASIO", line: "ESSENTIAL", price: 85000, tier: "GAMA BÁSICA", images: ["https://images.unsplash.com/photo-1508685096489-7aac291bd5b3?w=600"], specs: ["Digital", "Luz LED", "Alarma y Cronómetro"] },
    { id: 31, name: "Tank Solo Basic", brand: "CARTIER", line: "ESSENTIAL", price: 120000, tier: "GAMA BÁSICA", images: ["https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600"], specs: ["Movimiento Cuarzo", "Pulso Cuero Sintético"] }
  ];

  // LOGICA DE MARCAS POR APARATO (CATEGORÍA)
  const availableBrands = useMemo(() => {
    const brandsMap: { [key: string]: string[] } = {
      "CROWN SERIES": ["ROLEX", "PATEK PHILIPPE"],
      "PREMIUM 1.1": ["ROLEX", "CARTIER", "TOMI HILFIGER", "HUBLOT", "TISSOT", "RICHARD MILLE", "CASIO", "DIESEL", "OMEGA"],
      "ESSENTIAL": ["ROLEX", "CASIO", "HUBLOT", "OMEGA", "CARTIER"]
    };
    return ["TODAS", ...(brandsMap[categoryFilter] || [])];
  }, [categoryFilter]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => p.line === categoryFilter && (brandFilter === "TODAS" || p.brand === brandFilter));
  }, [categoryFilter, brandFilter]);

  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const garantia = product.price >= 400000 ? "2 Años de Garantía por Maquinaria" : "Garantía estándar";
    const texto = `Hola APEX TIME, deseo adquirir esta pieza:\n⌚ *${product.name}*\n🏷️ Marca: ${product.brand}\n💰 Valor: $${product.price.toLocaleString()}\n✅ ${garantia}\n¿Está disponible para envío?`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div style={{ background: "#F4F4F4", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      <header style={{ background: "#0D1B2A", padding: "45px 5%", textAlign: "center", borderBottom: "4px solid #D4AF37" }}>
        <h1 style={{ color: "#D4AF37", margin: 0, fontSize: "28px", letterSpacing: "10px", fontWeight: "300" }}>APEX TIME</h1>
      {/* RELOJERIA DE ALTA GAMA */}
  <p style={{ color: "#FFF", fontSize: "10px", letterSpacing: "4px", marginTop: "10px", opacity: 0.8 }}>
    ALTA RELOJERÍA • CURADURÍA SELECTA
  </p>
</header>

      <nav style={{ background: "white", position: "sticky", top: 0, zIndex: 100, borderBottom: "1px solid #EEE", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
        <div style={{ display: "flex", overflowX: "auto", padding: "15px 5%", gap: "10px" }}>
          {["CROWN SERIES", "PREMIUM 1.1", "ESSENTIAL"].map(cat => (
            <button key={cat} onClick={() => { setCategoryFilter(cat); setBrandFilter("TODAS"); }} style={{
              flex: 1, minWidth: "135px", padding: "12px", border: "2px solid #0D1B2A",
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

      <main style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => { setSelectedProduct(p); setCurrentImgIndex(0); }} style={{ 
            background: "white", border: "10px solid #FFF", outline: "1px solid #E0E0E0",
            marginBottom: "40px", cursor: "pointer", boxShadow: "0 15px 30px rgba(0,0,0,0.08)" 
          }}>
            <div style={{ padding: "20px", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <span style={{ fontSize: "9px", background: "#0D1B2A", color: "#D4AF37", padding: "4px 10px", fontWeight: "bold" }}>{p.tier}</span>
                {p.price >= 400000 && <span style={{ fontSize: "9px", background: "#D4AF37", color: "#0D1B2A", padding: "4px 10px", fontWeight: "bold" }}>ENVÍO GRATIS</span>}
              </div>
              <img src={p.images[0]} style={{ width: "100%", maxHeight: "350px", objectFit: "contain" }} />
              <p style={{ color: "#D4AF37", fontSize: "11px", fontWeight: "bold", letterSpacing: "3px", marginTop: "10px" }}>{p.brand}</p>
              <h3 style={{ fontSize: "20px", margin: "8px 0", color: "#0D1B2A", fontWeight: "400" }}>{p.name}</h3>
              <p style={{ fontSize: "22px", fontWeight: "bold" }}>${p.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </main>

      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto" }}>
          <div style={{ padding: "20px", textAlign: "right", borderBottom: "1px solid #EEE", position: "sticky", top: 0, background: "white", zIndex: 20 }}>
            <button onClick={() => setSelectedProduct(null)} style={{ background: "#0D1B2A", color: "#FFF", border: "none", padding: "10px 30px", fontWeight: "bold" }}>CERRAR</button>
          </div>
          <div style={{ padding: "20px 8% 100px 8%" }}>
            <div style={{ position: "relative", textAlign: "center", background: "#F9F9F9", padding: "20px" }}>
              <img src={selectedProduct.images[currentImgIndex]} style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }} />
              {selectedProduct.images.length > 1 && (
                <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "50%", width: "90%", left: "5%" }}>
                  <button onClick={() => setCurrentImgIndex(prev => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length)} style={{ background: "rgba(0,0,0,0.5)", color: "white", border: "none", padding: "10px", borderRadius: "50%" }}>❮</button>
                  <button onClick={() => setCurrentImgIndex(prev => (prev + 1) % selectedProduct.images.length)} style={{ background: "rgba(0,0,0,0.5)", color: "white", border: "none", padding: "10px", borderRadius: "50%" }}>❯</button>
                </div>
              )}
            </div>
            <div style={{ marginTop: "30px" }}>
              <h2 style={{ fontSize: "30px", margin: "0" }}>{selectedProduct.name}</h2>
              <p style={{ color: "#D4AF37", fontWeight: "bold" }}>MARCA: {selectedProduct.brand}</p>
              <div style={{ background: "#0D1B2A", color: "white", padding: "30px", margin: "25px 0", borderLeft: "8px solid #D4AF37" }}>
                <p style={{ color: "#D4AF37", fontWeight: "bold", fontSize: "14px", marginBottom: "15px" }}>ESPECIFICACIONES DE MATERIALES:</p>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "14px", margin: "10px 0" }}>📍 {s}</p>)}
                <p style={{ fontSize: "14px", margin: "10px 0" }}>🛡️ {selectedProduct.price >= 400000 ? "2 Años de Garantía por Maquinaria" : "Garantía estándar"}</p>
                <p style={{ color: "#D4AF37", fontWeight: "bold", marginTop: "15px" }}>😍 PAGOS CONTRA ENTREGA</p>
              </div>
              <p style={{ fontSize: "32px", fontWeight: "bold" }}>$ {selectedProduct.price.toLocaleString()} COP</p>
              <button onClick={() => whatsappAction(selectedProduct)} style={{ width: "100%", background: "linear-gradient(90deg, #25D366, #128C7E)", color: "white", padding: "20px", border: "none", fontWeight: "bold", fontSize: "18px", borderRadius: "5px", marginTop: "20px" }}>SOLICITAR POR WHATSAPP 📱</button>
            </div>
          </div>
        </div>
      )}

      <footer style={{ padding: "50px 5%", background: "#0D1B2A", textAlign: "center" }}>
        <button onClick={() => setShowTerms(true)} style={{ background: "none", border: "1px solid #D4AF37", color: "#D4AF37", padding: "12px 25px", fontWeight: "bold" }}>TÉRMINOS Y CONDICIONES</button>
      </footer>

      {showTerms && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 2000, padding: "40px 8%", overflowY: "auto" }}>
          <h2 style={{ borderBottom: "3px solid #D4AF37", paddingBottom: "10px" }}>POLÍTICAS APEX TIME</h2>
          <div style={{ marginTop: "30px", fontSize: "15px", lineHeight: "1.8" }}>
            <p><strong>1. GARANTÍA:</strong> Piezas mayores a $400k tienen 2 años de garantía.</p>
            <p><strong>2. PROTOCOLO DE DEVOLUCIÓN:</strong> La pieza pasará por <strong>filtros de inspección</strong> para validar su estado original.</p>
          </div>
          <button onClick={() => setShowTerms(false)} style={{ marginTop: "40px", background: "#0D1B2A", color: "white", padding: "15px 50px", border: "none" }}>CERRAR</button>
        </div>
      )}
    </div>
  );
            }
                                                           
