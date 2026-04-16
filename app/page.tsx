"use client";
import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    { 
      id: 1, 
      name: "Submariner Date", 
      collection: "Oyster Perpetual",
      material: "Acero Oystersteel y oro amarillo",
      price: 68450000, 
      image: "https://unsplash.com",
      description: "El reloj de buceo de referencia. Un icono de elegancia y funcionalidad técnica bajo el agua."
    },
    { 
      id: 2, 
      name: "Day-Date 40", 
      collection: "Oyster Perpetual",
      material: "Oro Everose de 18 quilates",
      price: 154200000, 
      image: "https://unsplash.com",
      description: "El reloj de los presidentes. El primer reloj de pulsera cronómetro en indicar el día de la semana con todas las letras."
    },
    { 
      id: 3, 
      name: "Cosmograph Daytona", 
      collection: "Oyster Perpetual",
      material: "Platino 950",
      price: 210500000, 
      image: "https://unsplash.com",
      description: "Nacido para la resistencia. El cronógrafo de referencia para los apasionados de los automóviles y la velocidad."
    }
  ];

  const enviarPedido = (product: any) => {
    const msg = `Solicitud de Información - Luxury Time\n\nModelo: ${product.name}\nColección: ${product.collection}\nReferencia: #${product.id}\n\nMe gustaría recibir atención personalizada sobre esta pieza.`;
    window.open(`https://wa.me{encodeURIComponent(msg)}`);
  };

  return (
    <div style={{ background: "#ffffff", color: "#1b1b1b", minHeight: "100vh", fontFamily: "'Times New Roman', serif" }}>
      
      {/* NAVEGACIÓN TIPO BOUTIQUE */}
      <header style={{ padding: "30px 5%", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #f0f0f0", position: "sticky", top: 0, background: "white", zIndex: 100 }}>
        <div style={{ display: "flex", gap: "20px", fontSize: "13px", letterSpacing: "2px", fontWeight: "300" }}>
          <span>MODELOS</span>
          <span>MUNDO LUXURY</span>
        </div>
        
        <h1 style={{ margin: 0, fontSize: "28px", letterSpacing: "6px", fontWeight: "400", cursor: "pointer" }} onClick={() => window.scrollTo(0,0)}>
          LUXURY TIME
        </h1>

        <div style={{ display: "flex", gap: "20px", fontSize: "13px", letterSpacing: "2px" }}>
          <span>BUSCAR</span>
          <span style={{ fontWeight: "bold" }}>CART ({cart.length})</span>
        </div>
      </header>

      {/* SECCIÓN PRINCIPAL (HERO) */}
      <section style={{ height: "80vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8f8f8" }}>
        <div style={{ textAlign: "center", zIndex: 2 }}>
          <p style={{ letterSpacing: "4px", fontSize: "14px", marginBottom: "20px" }}>NUEVO MODELO 2024</p>
          <h2 style={{ fontSize: "56px", fontWeight: "400", margin: "0 0 30px 0" }}>Perfección en Movimiento</h2>
          <button style={{ background: "transparent", border: "1px solid #1b1b1b", padding: "15px 40px", cursor: "pointer", letterSpacing: "2px" }}>DESCUBRIR</button>
        </div>
      </section>

      {/* GALERÍA DE PRODUCTOS */}
      <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "100px 5%" }}>
        <h3 style={{ textAlign: "center", fontSize: "24px", letterSpacing: "3px", marginBottom: "60px", fontWeight: "300" }}>SELECCIÓN CURADA</h3>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "60px" }}>
          {products.map(p => (
            <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ cursor: "pointer", textAlign: "center" }}>
              <div style={{ background: "#fcfcfc", padding: "60px", transition: "0.5s" }} onMouseEnter={(e) => e.currentTarget.style.background = "#f5f5f5"} onMouseLeave={(e) => e.currentTarget.style.background = "#fcfcfc"}>
                <img src={p.image} style={{ width: "100%", height: "400px", objectFit: "contain" }} alt={p.name} />
              </div>
              <div style={{ marginTop: "30px" }}>
                <p style={{ margin: 0, fontSize: "14px", color: "#888", letterSpacing: "2px" }}>{p.collection}</p>
                <h4 style={{ fontSize: "22px", margin: "10px 0", fontWeight: "400" }}>{p.name}</h4>
                <p style={{ fontSize: "14px", color: "#1b1b1b" }}>{p.material}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* DETALLE DE PRODUCTO (MODAL) */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "#fff", zIndex: 1000, display: "flex", flexWrap: "wrap" }}>
          <button 
            onClick={() => setSelectedProduct(null)} 
            style={{ position: "absolute", top: "40px", right: "5%", background: "none", border: "none", fontSize: "24px", cursor: "pointer" }}
          >
            CERRAR ✕
          </button>

          <div style={{ flex: "1 1 500px", background: "#f8f8f8", display: "flex", alignItems: "center", justifyContent: "center", padding: "50px" }}>
            <img src={selectedProduct.image} style={{ maxWidth: "80%", height: "auto" }} />
          </div>

          <div style={{ flex: "1 1 400px", padding: "100px 5%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ letterSpacing: "3px", color: "#888", fontSize: "14px" }}>{selectedProduct.collection.toUpperCase()}</p>
            <h2 style={{ fontSize: "48px", fontWeight: "400", margin: "20px 0" }}>{selectedProduct.name}</h2>
            <p style={{ fontSize: "18px", color: "#1b1b1b", marginBottom: "40px", maxWidth: "400px", lineHeight: "1.6" }}>{selectedProduct.description}</p>
            
            <div style={{ fontSize: "22px", marginBottom: "40px", borderBottom: "1px solid #eee", paddingBottom: "20px" }}>
              Precio oficial: <span style={{ fontWeight: "bold" }}>${selectedProduct.price.toLocaleString()} COP</span>
            </div>

            <button 
              onClick={() => enviarPedido(selectedProduct)}
              style={{ background: "#1b1b1b", color: "white", padding: "20px", border: "none", cursor: "pointer", letterSpacing: "2px", fontWeight: "bold" }}
            >
              SOLICITAR CITA POR WHATSAPP
            </button>
            <p style={{ marginTop: "20px", fontSize: "12px", color: "#888", textAlign: "center" }}>Sujeto a disponibilidad</p>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ padding: "60px 5%", borderTop: "1px solid #eee", textAlign: "center", fontSize: "12px", color: "#888", letterSpacing: "2px" }}>
        © 2024 LUXURY TIME - DISTRIBUIDOR AUTORIZADO
      </footer>
    </div>
  );
}
