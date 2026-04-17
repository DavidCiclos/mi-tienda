"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [filter, setFilter] = useState("TODOS");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
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
      
      {/* HEADER */}
      <header style={{ 
        padding: isScrolled ? "15px 5%" : "30px 5%", 
        display: "flex", justifyContent: "space-between", alignItems: "center", 
        borderBottom: isScrolled ? "1px solid #eee" : "1px solid transparent", 
        position: "sticky", top: 0, background: "white", zIndex: 100, transition: "0.4s"
      }}>
        <h1 style={{ margin: 0, fontSize: isScrolled ? "22px" : "28px", letterSpacing: "8px", fontWeight: "400", cursor: "pointer" }} onClick={() => setFilter("TODOS")}>
          LUXURY TIME
        </h1>
        <div style={{ fontSize: "11px", letterSpacing: "2px", fontWeight: "bold" }}>
          BOLSA ({cart.length})
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ height: "60vh", background: "#f8f8f8", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 20px" }}>
        <div>
          <p style={{ letterSpacing: "5px", fontSize: "12px", color: "#888", marginBottom: "15px" }}>REVENTA DE PIEZAS SELECCIONADAS</p>
          <h2 style={{ fontSize: "clamp(30px, 6vw, 60px)", fontWeight: "400", marginBottom: "30px" }}>Colección Privada</h2>
        </div>
      </section>

      {/* FILTROS DINÁMICOS */}
      <div style={{ display: "flex", justifyContent: "center", gap: "30px", padding: "40px 5%", borderBottom: "1px solid #f9f9f9", flexWrap: "wrap" }}>
        {["TODOS", "ROLEX", "CASIO", "GARMIN"].map(brand => (
          <span 
            key={brand} 
            onClick={() => setFilter(brand)}
            style={{ 
              fontSize: "11px", letterSpacing: "3px", cursor: "pointer", 
              color: filter === brand ? "#1a1a1a" : "#aaa",
              fontWeight: filter === brand ? "bold" : "normal",
              borderBottom: filter === brand ? "1px solid #1a1a1a" : "none",
              paddingBottom: "5px", transition: "0.3s"
            }}
          >
            {brand}
          </span>
        ))}
      </div>

      {/* GRILLA DE PRODUCTOS */}
      <main style={{ maxWidth: "1600px", margin: "0 auto", padding: "60px 5%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px 30px" }}>
          {filteredProducts.map(p => (
            <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ cursor: "pointer" }}>
              <div style={{ background: "#fcfcfc", padding: "40px", textAlign: "center" }}>
                <img src={p.images[0]} style={{ width: "100%", height: "350px", objectFit: "contain" }} />
              </div>
              <div style={{ marginTop: "20px" }}>
                <p style={{ margin: 0, fontSize: "10px", color: "#d4af37", letterSpacing: "2px", fontWeight: "bold" }}>{p.brand}</p>
                <h4 style={{ fontSize: "18px", margin: "5px 0", fontWeight: "400" }}>{p.name}</h4>
                <p style={{ fontSize: "14px", fontWeight: "bold" }}>${p.price.toLocaleString()} COP</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL CON GALERÍA */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto", display: "flex", flexWrap: "wrap" }}>
          <button onClick={() => setSelectedProduct(null)} style={{ position: "absolute", top: "30px", right: "5%", background: "none", border: "none", fontSize: "20px", cursor: "pointer", zIndex: 1100 }}>✕</button>

          {/* GALERÍA DE IMÁGENES */}
          <div style={{ flex: "1 1 500px", background: "#f9f9f9", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {selectedProduct.images.map((img: string, i: number) => (
              <img key={i} src={img} style={{ width: "100%", height: "auto", marginBottom: "10px" }} />
            ))}
          </div>

          {/* DETALLES */}
          <div style={{ flex: "1 1 450px", padding: "80px 8%", position: "sticky", top: 0, height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ letterSpacing: "4px", color: "#d4af37", fontSize: "12px", fontWeight: "bold" }}>{selectedProduct.brand}</p>
            <h2 style={{ fontSize: "38px", fontWeight: "400", margin: "15px 0" }}>{selectedProduct.name}</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444", marginBottom: "30px" }}>{selectedProduct.description}</p>
            
            <div style={{ marginBottom: "40px" }}>
              <p style={{ fontWeight: "bold", fontSize: "12px", letterSpacing: "2px", marginBottom: "10px", borderBottom: "1px solid #1a1a1a", display: "inline-block" }}>DETALLES DE LA PIEZA</p>
              {selectedProduct.specs.map((spec: any, i: number) => (
                <p key={i} style={{ fontSize: "14px", margin: "10px 0", borderBottom: "1px solid #eee", paddingBottom: "5px" }}>{spec}</p>
              ))}
            </div>

            <div style={{ fontSize: "22px", marginBottom: "30px" }}>$ {selectedProduct.price.toLocaleString()} COP</div>

            <button 
              onClick={() => whatsappAction(selectedProduct)}
              style={{ background: "#1a1a1a", color: "white", padding: "20px", border: "none", cursor: "pointer", letterSpacing: "2px", fontWeight: "bold" }}
            >
              CONTACTAR POR WHATSAPP
            </button>
          </div>
        </div>
      )}

      <footer style={{ padding: "60px 5%", background: "#f8f8f8", textAlign: "center", fontSize: "11px", letterSpacing: "2px", color: "#888" }}>
        LUXURY TIME - COMPRA Y VENTA DE ALTA RELOJERÍA
      </footer>
    </div>
  );
}
