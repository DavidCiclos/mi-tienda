"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [filter, setFilter] = useState("TODOS");

  // Solución al parpadeo: Control de scroll más estable
  useEffect(() => {
    const handleScroll = () => {
      // Solo activamos el cambio si pasamos los 20px para evitar rebotes
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    { 
      id: 1, 
      name: "Submariner Date", 
      collection: "Rolex Profesional",
      material: "Acero Oystersteel",
      price: 68450000, 
      images: [
        "https://unsplash.com",
        "https://unsplash.com",
        "https://unsplash.com"
      ],
      brand: "ROLEX",
      description: "Icono de la relojería submarina. Una pieza robusta y funcional, perfecta para coleccionistas que buscan durabilidad y valor histórico.",
      specs: ["Estado: Excelente", "Cuerda automática", "Reserva 70h"]
    },
    { 
      id: 2, 
      name: "Edifice Premium Solar", 
      collection: "Cronógrafos Casio",
      material: "Acero y Zafiro",
      price: 1250000, 
      images: [
        "https://unsplash.com",
        "https://unsplash.com"
      ],
      brand: "CASIO",
      description: "Tecnología avanzada con estética deportiva. Una pieza versátil para el uso diario con precisión inigualable.",
      specs: ["Estado: Nuevo", "Carga solar", "Enlace Bluetooth"]
    },
    { 
      id: 3, 
      name: "Epix Pro Gen 2", 
      brand: "GARMIN",
      collection: "Smart Performance",
      material: "Titanio y Zafiro",
      price: 4800000, 
      images: [
        "https://unsplash.com",
        "https://unsplash.com"
      ],
      description: "La cima de los relojes inteligentes. Rendimiento excepcional para deportistas que no comprometen el estilo.",
      specs: ["Pantalla AMOLED", "GPS Multibanda", "Autonomía 31 días"]
    }
  ];

  const filteredProducts = filter === "TODOS" 
    ? products 
    : products.filter(p => p.brand === filter);

  const whatsappAction = (product: any) => {
    const msg = `CONSULTA PIEZA EXCLUSIVA\n------------------------\nModelo: ${product.name}\nMarca: ${product.brand}\nPrecio: $${product.price.toLocaleString()} COP\n\nHola, me interesa esta pieza de su colección.`;
    window.open(`https://wa.me{encodeURIComponent(msg)}`);
  };

  return (
    <div style={{ background: "#ffffff", color: "#1a1a1a", minHeight: "100vh", fontFamily: "'Times New Roman', serif" }}>
      
      {/* HEADER CORREGIDO PARA EVITAR PARPADEO */}
      <header style={{ 
        height: isScrolled ? "70px" : "100px",
        padding: "0 5%", 
        display: "flex", justifyContent: "space-between", alignItems: "center", 
        borderBottom: "1px solid #eee", 
        position: "sticky", top: 0, background: "white", zIndex: 100,
        transition: "height 0.3s ease-out, padding 0.3s ease-out",
        transform: "translateZ(0)", // Fuerza al móvil a usar aceleración gráfica
        boxShadow: isScrolled ? "0 2px 10px rgba(0,0,0,0.05)" : "none"
      }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: isScrolled ? "20px" : "26px", 
          letterSpacing: "6px", 
          fontWeight: "400", 
          cursor: "pointer",
          transition: "font-size 0.3s ease-out" 
        }} onClick={() => setFilter("TODOS")}>
          LUXURY TIME
        </h1>
        <div style={{ fontSize: "11px", letterSpacing: "2px", fontWeight: "bold" }}>
          BOLSA ({cart.length})
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ height: "50vh", background: "#f8f8f8", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 20px" }}>
        <div>
          <p style={{ letterSpacing: "5px", fontSize: "12px", color: "#888", marginBottom: "15px" }}>REVENTA DE PIEZAS SELECCIONADAS</p>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: "400", marginBottom: "30px" }}>Colección Privada</h2>
        </div>
      </section>

      {/* FILTROS DINÁMICOS */}
      <div style={{ display: "flex", justifyContent: "center", gap: "25px", padding: "30px 5%", borderBottom: "1px solid #f9f9f9", flexWrap: "wrap", position: "sticky", top: isScrolled ? "70px" : "100px", background: "white", zIndex: 90, transition: "top 0.3s" }}>
        {["TODOS", "ROLEX", "CASIO", "GARMIN"].map(brand => (
          <span 
            key={brand} 
            onClick={() => setFilter(brand)}
            style={{ 
              fontSize: "10px", letterSpacing: "2px", cursor: "pointer", 
              color: filter === brand ? "#1a1a1a" : "#aaa",
              fontWeight: filter === brand ? "bold" : "normal",
              borderBottom: filter === brand ? "1px solid #1a1a1a" : "none",
              paddingBottom: "5px", transition: "0.2s"
            }}
          >
            {brand}
          </span>
        ))}
      </div>

      {/* GRILLA DE PRODUCTOS */}
      <main style={{ maxWidth: "1600px", margin: "0 auto", padding: "40px 5%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "50px 30px" }}>
          {filteredProducts.map(p => (
            <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ cursor: "pointer" }}>
              <div style={{ background: "#fcfcfc", padding: "30px", textAlign: "center" }}>
                <img src={p.images[0]} style={{ width: "100%", height: "300px", objectFit: "contain" }} />
              </div>
              <div style={{ marginTop: "15px" }}>
                <p style={{ margin: 0, fontSize: "10px", color: "#d4af37", letterSpacing: "2px", fontWeight: "bold" }}>{p.brand}</p>
                <h4 style={{ fontSize: "17px", margin: "5px 0", fontWeight: "400" }}>{p.name}</h4>
                <p style={{ fontSize: "14px", fontWeight: "bold" }}>${p.price.toLocaleString()} COP</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL CON GALERÍA */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto", display: "flex", flexWrap: "wrap" }}>
          <button onClick={() => setSelectedProduct(null)} style={{ position: "absolute", top: "20px", right: "5%", background: "rgba(255,255,255,0.8)", border: "none", fontSize: "20px", cursor: "pointer", zIndex: 1100, width: "40px", height: "40px", borderRadius: "50%" }}>✕</button>

          {/* GALERÍA DE IMÁGENES */}
          <div style={{ flex: "1 1 500px", background: "#f9f9f9", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {selectedProduct.images.map((img: string, i: number) => (
              <img key={i} src={img} style={{ width: "100%", height: "auto", marginBottom: "5px" }} />
            ))}
          </div>

          {/* DETALLES */}
          <div style={{ flex: "1 1 400px", padding: "60px 8% 100px 8%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
            <p style={{ letterSpacing: "4px", color: "#d4af37", fontSize: "11px", fontWeight: "bold" }}>{selectedProduct.brand}</p>
            <h2 style={{ fontSize: "34px", fontWeight: "400", margin: "15px 0" }}>{selectedProduct.name}</h2>
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#444", marginBottom: "30px" }}>{selectedProduct.description}</p>
            
            <div style={{ marginBottom: "30px" }}>
              <p style={{ fontWeight: "bold", fontSize: "11px", letterSpacing: "2px", marginBottom: "10px", borderBottom: "1px solid #1a1a1a", display: "inline-block" }}>DETALLES DE LA PIEZA</p>
              {selectedProduct.specs.map((spec: any, i: number) => (
                <p key={i} style={{ fontSize: "13px", margin: "8px 0", borderBottom: "1px solid #eee", paddingBottom: "5px" }}>{spec}</p>
              ))}
            </div>

            <div style={{ fontSize: "20px", marginBottom: "30px", fontWeight: "bold" }}>$ {selectedProduct.price.toLocaleString()} COP</div>

            <button 
              onClick={() => whatsappAction(selectedProduct)}
              style={{ background: "#1a1a1a", color: "white", padding: "18px", border: "none", cursor: "pointer", letterSpacing: "2px", fontWeight: "bold", position: "sticky", bottom: "20px" }}
            >
              CONTACTAR POR WHATSAPP
            </button>
          </div>
        </div>
      )}

      <footer style={{ padding: "40px 5%", background: "#f8f8f8", textAlign: "center", fontSize: "10px", letterSpacing: "2px", color: "#888" }}>
        LUXURY TIME - COMPRA Y VENTA DE ALTA RELOJERÍA
      </footer>
    </div>
  );
}
