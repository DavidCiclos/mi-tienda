"use client";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [categoryFilter, setCategoryFilter] = useState("CROWN SERIES");
  const [brandFilter, setBrandFilter] = useState("TODAS");
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [showTerms, setShowTerms] = useState(false);

  const products = [
    // --- CROWN SERIES (SÚPER CLON) ---
    { 
      id: 1, 
      name: "Daytona Platinum S-Clon", 
      brand: "ROLEX",
      line: "CROWN SERIES", 
      price: 3450000, 
      tier: "S-CLON / VIP", 
      images: [
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1547996160-81dfa63595dd?auto=format&fit=crop&w=600"
      ], 
      specs: ["Maquinaria Suiza Base ETA", "Acero 904L Inoxidable", "Cristal Zafirado con Logo Grabado", "Logos en Alto y Bajo Relieve", "Grabado entre Aspas", "Componentes Grabados"]
    },
    // --- PREMIUM 1.1 ---
    { 
      id: 10, 
      name: "Santos de Cartier Blue", 
      brand: "CARTIER",
      line: "PREMIUM 1.1", 
      price: 890000, 
      tier: "CALIDAD 1.1", 
      images: ["https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600"], 
      specs: ["Acero 316L Inoxidable", "Cristal Mineral Zafirado", "Movimiento Automático", "Full Grabados"]
    },
    // Nota: Aquí añadirías Rolex, Hublot, Tissot, Richard Mille, etc. en PREMIUM 1.1
  ];

  const availableBrands = useMemo(() => {
    const brands = products.filter(p => p.line === categoryFilter).map(p => p.brand);
    return ["TODAS", ...Array.from(new Set(brands))];
  }, [categoryFilter]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => p.line === categoryFilter && (brandFilter === "TODAS" || p.brand === brandFilter));
  }, [categoryFilter, brandFilter]);

  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const texto = `Hola APEX TIME, deseo adquirir esta pieza de la línea *${product.line}*:\n⌚ *${product.name}*\n💰 Valor: $${product.price.toLocaleString()}\n¿Disponibilidad inmediata?`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  const nextImg = () => setCurrentImgIndex((prev) => (prev + 1) % selectedProduct.images.length);
  const prevImg = () => setCurrentImgIndex((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length);

  return (
    <div style={{ background: "#F0F0F0", color: "#0D1B2A", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      
      {/* HEADER DE LUJO */}
      <header style={{ background: "#050A18", padding: "50px 5%", textAlign: "center", borderBottom: "3px solid #D4AF37" }}>
        <h1 style={{ color: "#D4AF37", margin: 0, fontSize: "32px", letterSpacing: "12px", fontWeight: "300" }}>APEX TIME</h1>
        <div style={{ width: "80px", height: "1px", background: "#D4AF37", margin: "15px auto" }}></div>
        <p style={{ color: "#FFF", fontSize: "10px", letterSpacing: "5px", opacity: 0.8 }}>EXPERTO EN ALTA RELOJERÍA</p>
      </header>

      {/* FILTROS TÁCTICOS */}
      <nav style={{ background: "white", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
        <div style={{ display: "flex", overflowX: "auto", padding: "15px 5%", gap: "10px" }}>
          {["CROWN SERIES", "PREMIUM 1.1", "ESSENTIAL"].map(cat => (
            <button key={cat} onClick={() => { setCategoryFilter(cat); setBrandFilter("TODAS"); }} style={{
              flex: 1, minWidth: "135px", padding: "12px", border: "2px solid #0D1B2A",
              background: categoryFilter === cat ? "#0D1B2A" : "white",
              color: categoryFilter === cat ? "#D4AF37" : "#0D1B2A",
              fontSize: "11px", fontWeight: "bold", cursor: "pointer", borderRadius: "2px"
            }}>{cat}</button>
          ))}
        </div>
        <div style={{ display: "flex", overflowX: "auto", padding: "0 5% 15px 5%", gap: "15px", justifyContent: "center" }}>
          {availableBrands.map(brand => (
            <span key={brand} onClick={() => setBrandFilter(brand)} style={{
              fontSize: "12px", cursor: "pointer", color: brandFilter === brand ? "#D4AF37" : "#999",
              fontWeight: "bold", borderBottom: brandFilter === brand ? "2px solid #D4AF37" : "none", paddingBottom: "2px"
            }}>{brand}</span>
          ))}
        </div>
      </nav>

      {/* VITRINA MEJORADA */}
      <main style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => { setSelectedProduct(p); setCurrentImgIndex(0); }} style={{ 
            background: "white", border: "10px solid #FFFFFF", outline: "1px solid #DDD",
            marginBottom: "45px", cursor: "pointer", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", transition: "0.3s"
          }}>
            <div style={{ padding: "25px", textAlign: "center", background: "#FFF" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <span style={{ fontSize: "10px", background: "#0D1B2A", color: "#D4AF37", padding: "5px 12px", fontWeight: "bold" }}>{p.tier}</span>
                {p.price >= 400000 && <span style={{ fontSize: "10px", background: "#D4AF37", color: "#0D1B2A", padding: "5px 12px", fontWeight: "bold" }}>ENVÍO GRATIS</span>}
              </div>
              <img src={p.images[0]} style={{ width: "100%", maxHeight: "380px", objectFit: "contain" }} />
              <div style={{ marginTop: "20px" }}>
                <p style={{ color: "#D4AF37", fontSize: "12px", fontWeight: "bold", letterSpacing: "3px" }}>{p.brand}</p>
                <h3 style={{ fontSize: "22px", margin: "10px 0", color: "#0D1B2A", fontWeight: "400" }}>{p.name}</h3>
                <p style={{ fontSize: "24px", fontWeight: "bold", color: "#0D1B2A" }}>${p.price.toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* MODAL DETALLES CON GALERÍA SLIDER */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto" }}>
          <div style={{ padding: "20px", textAlign: "right", borderBottom: "1px solid #EEE", position: "sticky", top: 0, background: "white", zIndex: 10 }}>
            <button onClick={() => setSelectedProduct(null)} style={{ background: "#0D1B2A", color: "#FFF", border: "none", padding: "12px 30px", fontWeight: "bold", borderRadius: "4px" }}>VOLVER</button>
          </div>
          
          <div style={{ padding: "20px 8% 100px 8%" }}>
            {/* GALERÍA DESLIZABLE */}
            <div style={{ position: "relative", textAlign: "center", background: "#F9F9F9", borderRadius: "8px", padding: "20px" }}>
              <img src={selectedProduct.images[currentImgIndex]} style={{ width: "100%", maxHeight: "450px", objectFit: "contain" }} />
              {selectedProduct.images.length > 1 && (
                <>
                  <button onClick={prevImg} style={{ position: "absolute", left: "10px", top: "50%", background: "rgba(0,0,0,0.5)", color: "white", border: "none", padding: "15px", borderRadius: "50%" }}>❮</button>
                  <button onClick={nextImg} style={{ position: "absolute", right: "10px", top: "50%", background: "rgba(0,0,0,0.5)", color: "white", border: "none", padding: "15px", borderRadius: "50%" }}>❯</button>
                  <div style={{ marginTop: "10px" }}>
                    {selectedProduct.images.map((_:any, i:number) => (
                      <span key={i} style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: i === currentImgIndex ? "#D4AF37" : "#DDD", margin: "0 5px" }}></span>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div style={{ marginTop: "40px" }}>
              <h2 style={{ fontSize: "32px", margin: "0", color: "#0D1B2A" }}>{selectedProduct.name}</h2>
              <p style={{ color: "#D4AF37", fontWeight: "bold", fontSize: "16px", letterSpacing: "2px" }}>{selectedProduct.brand} - {selectedProduct.tier}</p>
              
              {/* FICHA TÉCNICA ELEVADA */}
              <div style={{ background: "#0A1128", color: "white", padding: "30px", margin: "30px 0", borderLeft: "8px solid #D4AF37", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>
                <p style={{ color: "#D4AF37", fontWeight: "bold", fontSize: "14px", marginBottom: "20px", letterSpacing: "2px" }}>ESPECIFICACIONES DE MATERIALES</p>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "15px", margin: "12px 0", opacity: 0.9 }}>📍 {s}</p>)}
                <p style={{ fontSize: "15px", margin: "12px 0" }}>🛡️ {selectedProduct.price >= 400000 ? "2 Años de Garantía por Maquinaria" : "Garantía de funcionamiento"}</p>
                <p style={{ fontSize: "15px", margin: "12px 0" }}>📦 Estuche de lujo incluido</p>
                <p style={{ color: "#D4AF37", fontWeight: "bold", marginTop: "20px", fontSize: "16px" }}>😍 PAGOS CONTRA ENTREGA</p>
              </div>

              <p style={{ fontSize: "34px", fontWeight: "bold", color: "#0D1B2A" }}>$ {selectedProduct.price.toLocaleString()} COP</p>
              
              <button onClick={() => whatsappAction(selectedProduct)} style={{ 
                width: "100%", background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)", color: "white", padding: "22px", 
                border: "none", fontWeight: "bold", fontSize: "18px", borderRadius: "8px", cursor: "pointer", marginTop: "25px",
                boxShadow: "0 10px 20px rgba(37, 211, 102, 0.3)"
              }}>SOLICITAR POR WHATSAPP 📱</button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER Y TÉRMINOS */}
      <footer style={{ padding: "60px 5%", background: "#050A18", textAlign: "center" }}>
        <button onClick={() => setShowTerms(true)} style={{ background: "none", border: "1px solid #D4AF37", color: "#D4AF37", padding: "12px 35px", cursor: "pointer", fontWeight: "bold" }}>TÉRMINOS, CONDICIONES Y GARANTÍA</button>
      </footer>

      {/* MODAL TÉRMINOS CON PROTOCOLO DE DEVOLUCIÓN */}
      {showTerms && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 2000, padding: "40px 8%", overflowY: "auto" }}>
          <h2 style={{ color: "#0D1B2A", borderBottom: "4px solid #D4AF37", paddingBottom: "15px" }}>POLÍTICAS APEX TIME</h2>
          <div style={{ marginTop: "30px", fontSize: "16px", lineHeight: "1.8", color: "#333" }}>
            <p><strong>1. GARANTÍA:</strong> Las piezas superiores a $400,000 cuentan con 2 años de garantía por maquinaria.</p>
            <p><strong>2. PROTOCOLO DE DEVOLUCIÓN:</strong> Al solicitar una devolución, la pieza debe pasar obligatoriamente por nuestros <strong>filtros y protocolos de inspección</strong> para verificar que se entregue en el mismo estado estético y funcional en que fue enviada.</p>
            <p><strong>3. ENVÍOS:</strong> Contamos con pago contra entrega para su seguridad.</p>
          </div>
          <button onClick={() => setShowTerms(false)} style={{ marginTop: "40px", background: "#0D1B2A", color: "white", padding: "18px 60px", border: "none", fontWeight: "bold" }}>CERRAR</button>
        </div>
      )}
    </div>
  );
      }
