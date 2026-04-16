"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Control del scroll para que el menú cambie de color
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
      image: "https://unsplash.com",
      brand: "ROLEX",
      description: "El reloj de buceo de referencia. Bisel giratorio unidireccional con disco Cerachrom verde y brazalete Oyster de eslabones macizos.",
      specs: ["Cuerda automática", "Hermético hasta 300m", "Reserva de marcha de 70h"]
    },
    { 
      id: 2, 
      name: "Edifice Premium", 
      collection: "Cronógrafos Casio",
      material: "Cristal de Zafiro",
      price: 1250000, 
      image: "https://unsplash.com",
      brand: "CASIO",
      description: "La fusión perfecta entre tecnología y diseño deportivo. Conectividad Bluetooth y carga solar.",
      specs: ["Carga Solar", "Enlace con smartphone", "Resistencia a 10 bar"]
    },
    { 
      id: 3, 
      name: "Epix Pro Gen 2", 
      collection: "Garmin Adventure",
      material: "Polímero reforzado y Zafiro",
      price: 4800000, 
      image: "https://unsplash.com",
      brand: "GARMIN",
      description: "El reloj inteligente de alto rendimiento definitivo. Pantalla AMOLED y linterna LED integrada.",
      specs: ["GPS Multibanda", "Mapas integrados", "Hasta 31 días de batería"]
    },
    { 
      id: 4, 
      name: "Day-Date 40", 
      collection: "Rolex Classic",
      material: "Oro Amarillo 18k",
      price: 185200000, 
      image: "https://unsplash.com",
      brand: "ROLEX",
      description: "El reloj de los presidentes. El primer reloj en indicar el día de la semana con todas las letras.",
      specs: ["Calendario instantáneo", "Oro de 18 quilates", "Brazalete President"]
    }
  ];

  const whatsappAction = (product: any) => {
    const msg = `SOLICITUD DE ASESORÍA\n------------------------\nModelo: ${product.name}\nMarca: ${product.brand}\nPrecio: $${product.price.toLocaleString()} COP\n\nMe gustaría confirmar disponibilidad y métodos de pago.`;
    window.open(`https://wa.me{encodeURIComponent(msg)}`);
  };

  return (
    <div style={{ background: "#ffffff", color: "#1a1a1a", minHeight: "100vh", fontFamily: "'Times New Roman', serif", transition: "all 0.5s" }}>
      
      {/* HEADER DINÁMICO */}
      <header style={{ 
        padding: isScrolled ? "15px 5%" : "30px 5%", 
        display: "flex", justifyContent: "space-between", alignItems: "center", 
        borderBottom: isScrolled ? "1px solid #eee" : "1px solid transparent", 
        position: "sticky", top: 0, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)",
        zIndex: 100, transition: "0.4s ease"
      }}>
        <div style={{ display: "none", gap: "25px", fontSize: "11px", letterSpacing: "2px", fontWeight: "400" }} className="desktop-menu">
          <span style={{ cursor: "pointer" }}>COLECCIONES</span>
          <span style={{ cursor: "pointer" }}>UNIVERSO</span>
        </div>
        
        <h1 style={{ margin: 0, fontSize: isScrolled ? "22px" : "28px", letterSpacing: "8px", fontWeight: "400", cursor: "pointer", transition: "0.4s" }} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          LUXURY TIME
        </h1>

        <div style={{ display: "flex", gap: "20px", fontSize: "11px", letterSpacing: "2px" }}>
          <span style={{ cursor: "pointer" }}>BUSCAR</span>
          <span style={{ fontWeight: "bold", cursor: "pointer" }}>BOLSA ({cart.length})</span>
        </div>
      </header>

      {/* SECCIÓN HERO (PORTADA) */}
      <section style={{ 
        height: "90vh", display: "flex", alignItems: "center", justifyContent: "center", 
        background: "linear-gradient(rgba(255,255,255,0), rgba(0,0,0,0.03)), url('https://unsplash.com') center/cover",
        textAlign: "center", padding: "0 20px"
      }}>
        <div style={{ animation: "fadeInUp 1.5s ease" }}>
          <p style={{ letterSpacing: "5px", fontSize: "12px", color: "#666", marginBottom: "15px" }}>DISTRIBUIDOR AUTORIZADO</p>
          <h2 style={{ fontSize: "clamp(40px, 8vw, 70px)", fontWeight: "400", marginBottom: "30px", letterSpacing: "-1px" }}>Relojería de Prestigio</h2>
          <button style={{ 
            background: "#1a1a1a", color: "white", border: "none", 
            padding: "18px 45px", cursor: "pointer", letterSpacing: "3px", fontSize: "12px",
            transition: "0.3s"
          }} onMouseEnter={(e) => e.currentTarget.style.background = "#d4af37"} onMouseLeave={(e) => e.currentTarget.style.background = "#1a1a1a"}>
            EXPLORAR MODELOS
          </button>
        </div>
      </section>

      {/* FILTROS DE MARCA (NUEVO) */}
      <div style={{ display: "flex", justifyContent: "center", gap: "40px", padding: "60px 5%", borderBottom: "1px solid #f9f9f9", overflowX: "auto" }}>
        {["ROLEX", "CASIO", "GARMIN", "TODOS"].map(brand => (
          <span key={brand} style={{ fontSize: "12px", letterSpacing: "3px", cursor: "pointer", color: "#888" }}>{brand}</span>
        ))}
      </div>

      {/* GRILLA DE PRODUCTOS */}
      <main style={{ maxWidth: "1600px", margin: "0 auto", padding: "80px 5%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "80px 40px" }}>
          {products.map(p => (
            <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ cursor: "pointer", transition: "0.4s" }} className="product-card">
              <div style={{ background: "#fcfcfc", padding: "40px", position: "relative", overflow: "hidden" }}>
                <img src={p.image} style={{ width: "100%", height: "380px", objectFit: "contain", transition: "0.6s ease" }} className="watch-img" />
              </div>
              <div style={{ marginTop: "25px", textAlign: "left" }}>
                <p style={{ margin: 0, fontSize: "11px", color: "#d4af37", letterSpacing: "3px", fontWeight: "bold" }}>{p.brand}</p>
                <h4 style={{ fontSize: "20px", margin: "8px 0", fontWeight: "400", letterSpacing: "1px" }}>{p.name}</h4>
                <p style={{ fontSize: "13px", color: "#666" }}>{p.material}</p>
                <p style={{ fontSize: "15px", marginTop: "15px", fontWeight: "bold" }}>Ver detalles →</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL LUXURY REDISEÑADO */}
      {selectedProduct && (
        <div style={{ 
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%", 
          background: "white", zIndex: 1000, display: "flex", flexWrap: "wrap",
          animation: "slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        }}>
          <button onClick={() => setSelectedProduct(null)} style={{ position: "absolute", top: "30px", right: "5%", background: "none", border: "none", fontSize: "20px", cursor: "pointer", zIndex: 1100 }}>CERRAR ✕</button>

          <div style={{ flex: "1 1 500px", background: "#f9f9f9", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
            <img src={selectedProduct.image} style={{ maxWidth: "80%", maxHeight: "80vh", objectFit: "contain" }} />
          </div>

          <div style={{ flex: "1 1 450px", padding: "80px 8%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ letterSpacing: "4px", color: "#d4af37", fontSize: "12px", fontWeight: "bold", marginBottom: "10px" }}>{selectedProduct.brand}</p>
            <h2 style={{ fontSize: "42px", fontWeight: "400", margin: "0 0 20px 0", lineHeight: "1.1" }}>{selectedProduct.name}</h2>
            <p style={{ fontSize: "14px", color: "#888", marginBottom: "30px" }}>{selectedProduct.collection}</p>
            
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "40px" }}>{selectedProduct.description}</p>
            
            <div style={{ marginBottom: "40px" }}>
              <p style={{ fontWeight: "bold", fontSize: "13px", letterSpacing: "2px", marginBottom: "15px" }}>ESPECIFICACIONES TÉCNICAS</p>
              {selectedProduct.specs.map((spec: any, i: number) => (
                <div key={i} style={{ borderBottom: "1px solid #eee", padding: "12px 0", fontSize: "14px", display: "flex", justifyContent: "space-between" }}>
                  <span>{spec}</span>
                  <span>✓</span>
                </div>
              ))}
            </div>

            <div style={{ fontSize: "24px", marginBottom: "40px", fontWeight: "300" }}>
              $ {selectedProduct.price.toLocaleString()} COP
            </div>

            <button 
              onClick={() => whatsappAction(selectedProduct)}
              style={{ background: "#1a1a1a", color: "white", padding: "22px", border: "none", cursor: "pointer", letterSpacing: "3px", fontSize: "13px", fontWeight: "bold" }}
            >
              SOLICITAR DISPONIBILIDAD
            </button>
          </div>
        </div>
      )}

      {/* ESTILOS EXTRA PARA ANIMACIONES */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .product-card:hover .watch-img {
          transform: scale(1.08);
        }
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
        }
      `}</style>

      <footer style={{ padding: "80px 5%", background: "#1a1a1a", color: "white", textAlign: "center", fontSize: "11px", letterSpacing: "3px" }}>
        © 2024 LUXURY TIME - CALIDAD Y PRESTIGIO
      </footer>
    </div>
  );
}
