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
      name: "Rolex Submariner 'Starbucks'", 
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
      name: "Casio Edifice Chronograph", 
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
      name: "Garmin Marq Driver", 
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

  // CORRECCIÓN WHATSAPP: Número sin espacios y enlace limpio
  const whatsappAction = (product: any) => {
    const numero = "573126934247"; 
    const texto = `SOLICITUD DE PIEZA\n------------------------\nModelo: ${product.name}\nPrecio: $${product.price.toLocaleString()} COP\n\nHola, estoy interesado en adquirir esta pieza de su colección.`;
    const url = `https://whatsapp.com{numero}&text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={{ background: "#fcfcfc", color: "#0a1128", minHeight: "100vh", fontFamily: "'Times New Roman', serif" }}>
      
      {/* HEADER AZUL MEDIANOCHE */}
      <header style={{ 
        height: isScrolled ? "70px" : "90px",
        padding: "0 5%", 
        display: "flex", justifyContent: "center", alignItems: "center", 
        position: "sticky", top: 0, background: "#0a1128", color: "white", zIndex: 100,
        transition: "0.3s ease-out",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: isScrolled ? "18px" : "24px", 
          letterSpacing: "12px", 
          fontWeight: "400", 
          color: "#b8926a",
          cursor: "pointer"
        }} onClick={() => setFilter("TODOS")}>
          LUXURY TIME
        </h1>
      </header>

      {/* HERO SECTION */}
      <section style={{ 
        height: "50vh", 
        background: "linear-gradient(rgba(10,17,40,0.7), rgba(10,17,40,0.7)), url('https://unsplash.com') center/cover",
        display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", color: "white" 
      }}>
        <div>
          <p style={{ letterSpacing: "8px", fontSize: "11px", color: "#b8926a", marginBottom: "15px" }}>EST. 2024 — CURADURÍA PRIVADA</p>
          <h2 style={{ fontSize: "clamp(30px, 6vw, 60px)", fontWeight: "400" }}>Piezas de Inversión</h2>
        </div>
      </section>

      {/* FILTROS */}
      <div style={{ display: "flex", justifyContent: "center", gap: "30px", padding: "25px 5%", background: "white", borderBottom: "1px solid #eee" }}>
        {["TODOS", "ROLEX", "CASIO", "GARMIN"].map(brand => (
          <span 
            key={brand} 
            onClick={() => setFilter(brand)}
            style={{ 
              fontSize: "11px", letterSpacing: "3px", cursor: "pointer", 
              color: filter === brand ? "#0a1128" : "#999",
              borderBottom: filter === brand ? "2px solid #b8926a" : "none",
              paddingBottom: "4px"
            }}
          >
            {brand}
          </span>
        ))}
      </div>

      {/* LISTADO PRODUCTOS */}
      <main style={{ maxWidth: "1300px", margin: "0 auto", padding: "60px 5%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "50px" }}>
          {filteredProducts.map(p => (
            <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ cursor: "pointer", textAlign: "center" }}>
              <div style={{ background: "white", padding: "40px", border: "1px solid #f0f0f0", transition: "0.3s" }}>
                <img src={p.images[0]} style={{ width: "100%", height: "300px", objectFit: "contain" }} />
              </div>
              <p style={{ marginTop: "20px", fontSize: "10px", color: "#b8926a", letterSpacing: "2px", fontWeight: "bold" }}>{p.brand}</p>
              <h4 style={{ fontSize: "19px", margin: "5px 0", color: "#0a1128" }}>{p.name}</h4>
              <p style={{ fontSize: "14px", color: "#555" }}>$ {p.price.toLocaleString()} COP</p>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL DETALLE */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <button onClick={() => setSelectedProduct(null)} style={{ position: "fixed", top: "30px", right: "5%", background: "#0a1128", color: "white", border: "none", width: "45px", height: "45px", borderRadius: "50%", cursor: "pointer", zIndex: 1100 }}>✕</button>

          <div style={{ flex: "1 1 500px", background: "#f9f9f9", padding: "40px" }}>
            {selectedProduct.images.map((img: string, i: number) => (
              <img key={i} src={img} style={{ width: "100%", marginBottom: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }} />
            ))}
          </div>

          <div style={{ flex: "1 1 450px", padding: "60px 8%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ letterSpacing: "4px", color: "#b8926a", fontSize: "12px", fontWeight: "bold" }}>{selectedProduct.brand}</p>
            <h2 style={{ fontSize: "40px", color: "#0a1128", margin: "15px 0", lineHeight: "1" }}>{selectedProduct.name}</h2>
            <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.8", marginBottom: "40px" }}>{selectedProduct.description}</p>
            
            <div style={{ marginBottom: "40px", paddingLeft: "20px", borderLeft: "2px solid #b8926a" }}>
              <p style={{ fontWeight: "bold", fontSize: "12px", color: "#0a1128", marginBottom: "10px" }}>ESPECIFICACIONES</p>
              {selectedProduct.specs.map((spec: any, i: number) => (
                <p key={i} style={{ fontSize: "14px", margin: "5px 0", color: "#666" }}>{spec}</p>
              ))}
            </div>

            <div style={{ fontSize: "28px", marginBottom: "40px", fontWeight: "bold" }}>$ {selectedProduct.price.toLocaleString()} COP</div>

            <button 
              onClick={() => whatsappAction(selectedProduct)}
              style={{ background: "#0a1128", color: "white", padding: "22px", border: "none", letterSpacing: "3px", fontWeight: "bold", cursor: "pointer" }}
            >
              CONTACTAR ASESOR
            </button>
          </div>
        </div>
      )}

      <footer style={{ padding: "50px 5%", background: "#0a1128", color: "white", textAlign: "center", fontSize: "11px", letterSpacing: "3px" }}>
        <span style={{ color: "#b8926a" }}>LUXURY TIME</span> — BOGOTÁ, COLOMBIA
      </footer>
    </div>
  );
}
