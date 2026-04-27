"use client";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [categoryFilter, setCategoryFilter] = useState("CROWN SERIES");
  const [brandFilter, setBrandFilter] = useState("TODAS");
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [showTerms, setShowTerms] = useState(false);

  // BASE DE DATOS ESTRUCTURADA POR MARCAS Y GAMAS
  const products = [
    { 
      id: 1, 
      name: "Daytona Platinum S-Clon", 
      brand: "ROLEX",
      line: "CROWN SERIES", 
      price: 3450000, 
      tier: "S-CLON / VIP", 
      images: [
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
        "https://images.unsplash.com/photo-1547996160-81dfa63595dd?w=600"
      ], 
      specs: ["Maquinaria Suiza Base ETA (100% Funcional)", "Acero 904L Inoxidable", "Cristal Zafirado con Logo Grabado", "Logos en Alto y Bajo Relieve", "Grabado entre Aspas", "Componentes Internos Grabados"]
    },
    { 
      id: 2, 
      name: "Santos de Cartier Skeleton", 
      brand: "CARTIER",
      line: "PREMIUM 1.1", 
      price: 950000, 
      tier: "CALIDAD 1.1", 
      images: ["https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600"], 
      specs: ["Acero 316L Inoxidable", "Cristal Mineral Zafirado", "Movimiento Automático Japonés", "Full Grabados en Pulso y Caja"]
    },
    { 
      id: 3, 
      name: "Richard Mille RM 011", 
      brand: "RICHARD MILLE",
      line: "PREMIUM 1.1", 
      price: 1200000, 
      tier: "CALIDAD 1.1", 
      images: ["https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600"], 
      specs: ["Caja de Carbono / Titanio", "Maquinaria Cronógrafo Funcional", "Correa de Caucho de Alta Densidad"]
    }
  ];

  // FILTRADO DINÁMICO DE MARCAS SEGÚN CATEGORÍA
  const availableBrands = useMemo(() => {
    const brandsInCat = products.filter(p => p.line === categoryFilter).map(p => p.brand);
    return ["TODAS", ...Array.from(new Set(brandsInCat))];
  }, [categoryFilter]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => p.line === categoryFilter && (brandFilter === "TODAS" || p.brand === brandFilter));
  }, [categoryFilter, brandFilter]);

  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const garantia = product.price >= 400000 ? "2 Años de Garantía por Maquinaria" : "Garantía estándar";
    const texto = `Hola APEX TIME, deseo información sobre esta pieza:\n⌚ *${product.name}*\n🏷️ Marca: ${product.brand}\n💰 Valor: $${product.price.toLocaleString()}\n✅ ${garantia}\n¿Está disponible para envío inmediato?`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div style={{ background: "#F4F4F4", color: "#0D1B2A", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* HEADER PREMIUM */}
      <header style={{ background: "#0D1B2A", padding: "50px 5%", textAlign: "center", borderBottom: "4px solid #D4AF37" }}>
        <h1 style={{ color: "#D4AF37", margin: 0, fontSize: "28px", letterSpacing: "10px", fontWeight: "300" }}>APEX TIME</h1>
        <p style={{ color: "#FFF", fontSize: "10px", letterSpacing: "4px", marginTop: "10px", opacity: 0.8 }}>ALTA RELOJERÍA</p>
      </header>

      {/* SISTEMA DE NAVEGACIÓN Y MARCAS */}
      <nav style={{ background: "white", position: "sticky", top: 0, zIndex: 100, borderBottom: "1px solid #EEE", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
        <div style={{ display: "flex", overflowX: "auto", padding: "15px 5%", gap: "10px" }}>
          {["CROWN SERIES", "PREMIUM 1.1", "ESSENTIAL"].map(cat => (
            <button key={cat} onClick={() => { setCategoryFilter(cat); setBrandFilter("TODAS"); }} style={{
              flex: 1, minWidth: "135px", padding: "12px", border: "2px solid #0D1B2A",
              background: categoryFilter === cat ? "#0D1B2A" : "white",
              color: categoryFilter === cat ? "#D4AF37" : "#0D1B2A",
              fontSize: "11px", fontWeight: "bold", cursor: "pointer"
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

      {/* VITRINA DE DISEÑO (CUADROS) */}
      <main style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => { setSelectedProduct(p); setCurrentImgIndex(0); }} style={{ 
            background: "white", border: "10px solid #FFFFFF", outline: "1px solid #E0E0E0",
            marginBottom: "45px", cursor: "pointer", boxShadow: "0 15px 30px rgba(0,0,0,0.07)"
          }}>
            <div style={{ padding: "25px", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <span style={{ fontSize: "9px", background: "#0D1B2A", color: "#D4AF37", padding: "4px 10px", fontWeight: "bold" }}>{p.tier}</span>
                {p.price >= 400000 && <span style={{ fontSize: "9px", background: "#D4AF37", color: "#0D1B2A", padding: "4px 10px", fontWeight: "bold" }}>ENVÍO GRATIS</span>}
              </div>
              <img src={p.images[0]} style={{ width: "100%", maxHeight: "360px", objectFit: "contain" }} />
              <div style={{ marginTop: "15px" }}>
                <p style={{ color: "#D4AF37", fontSize: "11px", fontWeight: "bold", letterSpacing: "3px" }}>{p.brand}</p>
                <h3 style={{ fontSize: "22px", margin: "8px 0", color: "#0D1B2A", fontWeight: "400" }}>{p.name}</h3>
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>${p.price.toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* MODAL DETALLES CON GALERÍA SLIDER */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto" }}>
          <div style={{ padding: "20px", textAlign: "right", borderBottom: "1px solid #EEE", position: "sticky", top: 0, background: "white", zIndex: 20 }}>
            <button onClick={() => setSelectedProduct(null)} style={{ background: "#0D1B2A", color: "#FFF", border: "none", padding: "10px 30px", fontWeight: "bold", cursor: "pointer" }}>CERRAR</button>
          </div>
          
          <div style={{ padding: "30px 8% 100px 8%" }}>
            {/* GALERÍA DESLIZABLE */}
            <div style={{ position: "relative", textAlign: "center", background: "#F9F9F9", borderRadius: "4px", padding: "20px" }}>
              <img src={selectedProduct.images[currentImgIndex]} style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }} />
              {selectedProduct.images.length > 1 && (
                <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "50%", width: "90%", left: "5%" }}>
                  <button onClick={(e) => { e.stopPropagation(); setCurrentImgIndex((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length); }} style={{ background: "rgba(0,0,0,0.5)", color: "white", border: "none", padding: "10px", borderRadius: "50%" }}>❮</button>
                  <button onClick={(e) => { e.stopPropagation(); setCurrentImgIndex((prev) => (prev + 1) % selectedProduct.images.length); }} style={{ background: "rgba(0,0,0,0.5)", color: "white", border: "none", padding: "10px", borderRadius: "50%" }}>❯</button>
                </div>
              )}
            </div>

            <div style={{ marginTop: "30px" }}>
              <h2 style={{ fontSize: "32px", margin: "5px 0" }}>{selectedProduct.name}</h2>
              <p style={{ color: "#D4AF37", fontWeight: "bold" }}>MARCA: {selectedProduct.brand}</p>
              
              {/* FICHA TÉCNICA PREMIUM */}
              <div style={{ background: "#0D1B2A", color: "white", padding: "30px", margin: "30px 0", borderLeft: "8px solid #D4AF37" }}>
                <p style={{ color: "#D4AF37", fontWeight: "bold", fontSize: "13px", marginBottom: "15px" }}>ESPECIFICACIONES DE MATERIALES:</p>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "15px", margin: "10px 0", opacity: 0.9 }}>📍 {s}</p>)}
                <p style={{ fontSize: "15px", margin: "10px 0" }}>🛡️ {selectedProduct.price >= 400000 ? "2 Años de Garantía por Maquinaria" : "Garantía estándar funcional"}</p>
                <p style={{ fontSize: "15px", margin: "10px 0" }}>📍 Incluye Estuche de Lujo y Certificado</p>
                <p style={{ color: "#D4AF37", fontWeight: "bold", marginTop: "20px", fontSize: "16px" }}>😍 PAGOS CONTRA ENTREGA</p>
              </div>

              <p style={{ fontSize: "32px", fontWeight: "bold", color: "#0D1B2A" }}>$ {selectedProduct.price.toLocaleString()} COP</p>
              
              <button onClick={() => whatsappAction(selectedProduct)} style={{ 
                width: "100%", background: "linear-gradient(90deg, #25D366, #128C7E)", color: "white", padding: "22px", 
                border: "none", fontWeight: "bold", fontSize: "16px", borderRadius: "5px", cursor: "pointer", marginTop: "20px"
              }}>SOLICITAR POR WHATSAPP 📱</button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ padding: "60px 5%", background: "#0D1B2A", textAlign: "center" }}>
        <button onClick={() => setShowTerms(true)} style={{ background: "none", border: "1px solid #D4AF37", color: "#D4AF37", padding: "12px 30px", cursor: "pointer", fontWeight: "bold" }}>TÉRMINOS Y CONDICIONES</button>
      </footer>

      {/* MODAL TÉRMINOS CON PROTOCOLO */}
      {showTerms && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 2000, padding: "40px 8%", overflowY: "auto" }}>
          <h2 style={{ borderBottom: "3px solid #D4AF37", paddingBottom: "15px" }}>POLÍTICAS APEX TIME</h2>
          <div style={{ marginTop: "30px", fontSize: "15px", lineHeight: "1.8", color: "#333" }}>
            <p><strong>1. GARANTÍA:</strong> Piezas {'>'} $400k cuentan con 2 años de respaldo.</p>
            <p><strong>2. PROTOCOLO DE DEVOLUCIÓN:</strong> Toda pieza devuelta pasará por nuestros <strong>filtros de inspección técnica</strong> para confirmar que se encuentra en el mismo estado estético y funcional de envío.</p>
          </div>
          <button onClick={() => setShowTerms(false)} style={{ marginTop: "40px", background: "#0D1B2A", color: "white", padding: "18px 50px", border: "none", fontWeight: "bold" }}>VOLVER</button>
        </div>
      )}
    </div>
  );
            }
                           
