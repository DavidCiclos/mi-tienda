"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [filter, setFilter] = useState("TODOS");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    { 
      id: 1, 
      name: "Submariner Date 'Starbucks'", 
      collection: "Oyster Perpetual",
      material: "Acero Oystersteel y Cerachrom",
      price: 68450000, 
      images: [
        "https://unsplash.com",
        "https://unsplash.com"
      ],
      brand: "ROLEX",
      description: "Referencia mítica con bisel verde. Una pieza de inversión que combina la robustez del acero con un diseño atemporal.",
      specs: ["Estado: Colección", "Cuerda: Automática", "Diámetro: 41mm"]
    },
    { 
      id: 2, 
      name: "Edifice Chronograph Gold", 
      collection: "Premium Series",
      material: "Acero Inoxidable Dorado",
      price: 1350000, 
      images: [
        "https://unsplash.com",
        "https://unsplash.com"
      ],
      brand: "CASIO",
      description: "Precisión japonesa con un acabado en oro cepillado. Ideal para quienes buscan presencia y funcionalidad.",
      specs: ["Estado: Nuevo", "Carga: Solar", "Resistencia: 100m"]
    },
    { 
      id: 3, 
      name: "Marq Driver Performance", 
      brand: "GARMIN",
      collection: "Luxury Tool Watch",
      material: "Titanio Grado 5",
      price: 9800000, 
      images: [
        "https://unsplash.com",
        "https://unsplash.com"
      ],
      description: "El único reloj inteligente de lujo con ADN de competición. Mapas de circuitos y telemetría avanzada.",
      specs: ["Pantalla: Zafiro", "GPS: Multibanda", "Estado: Nuevo"]
    }
  ];

  const filteredProducts = filter === "TODOS" 
    ? products 
    : products.filter(p => p.brand === filter);

  const whatsappAction = (product: any) => {
    const msg = `SOLICITUD DE PIEZA\n------------------------\nModelo: ${product.name}\nPrecio: $${product.price.toLocaleString()} COP\n\nHola, estoy interesado en adquirir esta pieza. ¿Podría darme más información?`;
    window.open(`https://wa.me{encodeURIComponent(msg)}`);
  };

  return (
    <div style={{ background: "#fdfdfb", color: "#1a1a1a", minHeight: "100vh", fontFamily: "'Times New Roman', serif" }}>
      
      {/* HEADER SIMPLIFICADO */}
      <header style={{ 
        height: isScrolled ? "70px" : "90px",
        padding: "0 5%", 
        display: "flex", justifyContent: "center", alignItems: "center", 
        borderBottom: "1px solid #eee", 
        position: "sticky", top: 0, background: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)", zIndex: 100,
        transition: "all 0.3s ease-out",
        boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.05)" : "none"
      }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: isScrolled ? "20px" : "26px", 
          letterSpacing: "10px", 
          fontWeight: "400", 
          color: "#004225",
          cursor: "pointer",
          transition: "0.3s" 
        }} onClick={() => setFilter("TODOS")}>
          LUXURY TIME
        </h1>
      </header>

      {/* HERO SECTION CON COLOR */}
      <section style={{ 
        height: "55vh", 
        background: "linear-gradient(rgba(0,66,37,0.8), rgba(0,66,37,0.8)), url('https://unsplash.com') center/cover",
        display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", color: "white" 
      }}>
        <div style={{ padding: "0 20px" }}>
          <p style={{ letterSpacing: "6px", fontSize: "12px", color: "#c5a059", marginBottom: "15px", fontWeight: "bold" }}>CURADURÍA DE ALTA RELOJERÍA</p>
          <h2 style={{ fontSize: "clamp(30px, 6vw, 65px)", fontWeight: "400", marginBottom: "20px", letterSpacing: "-1px" }}>Colección Privada</h2>
          <div style={{ width: "60px", height: "2px", background: "#c5a059", margin: "0 auto" }}></div>
        </div>
      </section>

      {/* FILTROS */}
      <div style={{ display: "flex", justifyContent: "center", gap: "35px", padding: "30px 5%", background: "white", position: "sticky", top: isScrolled ? "70px" : "90px", zIndex: 90, borderBottom: "1px solid #f0f0f0" }}>
        {["TODOS", "ROLEX", "CASIO", "GARMIN"].map(brand => (
          <span 
            key={brand} 
            onClick={() => setFilter(brand)}
            style={{ 
              fontSize: "11px", letterSpacing: "3px", cursor: "pointer", 
              color: filter === brand ? "#004225" : "#999",
              fontWeight: filter === brand ? "bold" : "normal",
              transition: "0.2s",
              borderBottom: filter === brand ? "2px solid #c5a059" : "none",
              paddingBottom: "4px"
            }}
          >
            {brand}
          </span>
        ))}
      </div>

      {/* GRILLA */}
      <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "60px 5%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px 40px" }}>
          {filteredProducts.map(p => (
            <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ cursor: "pointer", transition: "0.3s" }} className="card-hover">
              <div style={{ background: "#f9f9f7", padding: "40px", textAlign: "center", border: "1px solid #f0f0f0" }}>
                <img src={p.images[0]} style={{ width: "100%", height: "320px", objectFit: "contain" }} />
              </div>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <p style={{ margin: 0, fontSize: "10px", color: "#c5a059", letterSpacing: "3px", fontWeight: "bold" }}>{p.brand}</p>
                <h4 style={{ fontSize: "18px", margin: "8px 0", fontWeight: "400", color: "#004225" }}>{p.name}</h4>
                <p style={{ fontSize: "15px", fontWeight: "bold", color: "#333" }}>${p.price.toLocaleString()} COP</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL OPTIMIZADO PARA PC */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <button onClick={() => setSelectedProduct(null)} style={{ position: "fixed", top: "30px", right: "5%", background: "#004225", color: "white", border: "none", fontSize: "18px", cursor: "pointer", zIndex: 1100, width: "45px", height: "45px", borderRadius: "50%" }}>✕</button>

          {/* IZQUIERDA: GALERÍA (50% en PC) */}
          <div style={{ flex: "1 1 500px", background: "#f9f9f7", padding: "40px", display: "flex", flexDirection: "column", gap: "20px" }}>
            {selectedProduct.images.map((img: string, i: number) => (
              <img key={i} src={img} style={{ width: "100%", height: "auto", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }} />
            ))}
          </div>

          {/* DERECHA: INFO (50% en PC) */}
          <div style={{ flex: "1 1 450px", padding: "80px 6%", display: "flex", flexDirection: "column", justifyContent: "center", background: "white" }}>
            <div style={{ position: "sticky", top: "80px" }}>
              <p style={{ letterSpacing: "4px", color: "#c5a059", fontSize: "12px", fontWeight: "bold" }}>{selectedProduct.brand}</p>
              <h2 style={{ fontSize: "42px", fontWeight: "400", margin: "15px 0", color: "#004225", lineHeight: "1" }}>{selectedProduct.name}</h2>
              <div style={{ width: "40px", height: "1px", background: "#c5a059", marginBottom: "30px" }}></div>
              
              <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444", marginBottom: "40px" }}>{selectedProduct.description}</p>
              
              <div style={{ marginBottom: "40px", borderLeft: "2px solid #c5a059", paddingLeft: "20px" }}>
                <p style={{ fontWeight: "bold", fontSize: "12px", letterSpacing: "2px", marginBottom: "15px", color: "#004225" }}>ESPECIFICACIONES</p>
                {selectedProduct.specs.map((spec: any, i: number) => (
                  <p key={i} style={{ fontSize: "14px", margin: "8px 0", color: "#666" }}>{spec}</p>
                ))}
              </div>

              <div style={{ fontSize: "26px", marginBottom: "40px", fontWeight: "400", color: "#1a1a1a" }}>$ {selectedProduct.price.toLocaleString()} COP</div>

              <button 
                onClick={() => whatsappAction(selectedProduct)}
                style={{ 
                  background: "#004225", color: "white", padding: "22px", border: "none", 
                  cursor: "pointer", letterSpacing: "3px", fontSize: "13px", fontWeight: "bold",
                  width: "100%", transition: "0.3s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#005a32"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#004225"}
              >
                ADQUIRIR PIEZA (WHATSAPP)
              </button>
            </div>
          </div>
        </div>
      )}

      <footer style={{ padding: "60px 5%", background: "#004225", textAlign: "center", fontSize: "11px", letterSpacing: "3px", color: "#c5a059" }}>
        LUXURY TIME COLOMBIA — PIEZAS DE ALTA GAMA
      </footer>
    </div>
  );
}
