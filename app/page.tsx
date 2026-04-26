"use client";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [categoryFilter, setCategoryFilter] = useState("CROWN SERIES"); // Empezamos en la gama alta
  const [genderFilter, setGenderFilter] = useState("TODOS");

  const products = [
    // --- CATEGORÍA 1: CROWN SERIES ($3M+) ---
    { 
      id: 1, 
      name: "Daytona Platinum S-Clon", 
      line: "CROWN SERIES", 
      gender: "HOMBRE",
      price: 3450000, 
      tier: "S-CLON / SÚPER RÉPLICA", 
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=500", 
      specs: ["Maquinaria Suiza Base ETA", "Acero 904L", "Bisel Cerámica Real", "Grabados Láser de Alta Precisión"],
      payment: "PAGO CONTRA ENTREGA + ENVÍO VIP GRATIS"
    },
    // --- CATEGORÍA 2: PREMIUM 1.1 ($400k - $1.2M) ---
    { 
      id: 20, 
      name: "Submariner Date 1.1", 
      line: "PREMIUM 1.1", 
      gender: "HOMBRE",
      price: 850000, 
      tier: "CALIDAD 1.1", 
      image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=500", 
      specs: ["Acero Quirúrgico 316L", "Cristal Zafirado", "Automático Japonés"],
      payment: "ENVÍO GRATIS A NIVEL NACIONAL"
    },
    // --- CATEGORÍA 3: ESSENTIAL ($70k+) ---
    { 
      id: 40, 
      name: "Classic Urban Minimal", 
      line: "ESSENTIAL", 
      gender: "MUJER",
      price: 95000, 
      tier: "GAMA BÁSICA", 
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500", 
      specs: ["Movimiento de Cuarzo", "Caja de Aleación", "Correa Ajustable"],
      payment: "ENVÍO NACIONAL RÁPIDO"
    }
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchCategory = p.line === categoryFilter;
      const matchGender = genderFilter === "TODOS" || p.gender === genderFilter;
      return matchCategory && matchGender;
    });
  }, [categoryFilter, genderFilter]);

  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const texto = `Hola APEX TIME, me interesa esta pieza de la línea *${product.line}*:\n⌚ *${product.name}*\n💰 Precio: $${product.price.toLocaleString()}\n¿Está disponible para envío?`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div style={{ background: "#F4F4F4", color: "#0D1B2A", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      <header style={{ background: "#0D1B2A", padding: "40px 5%", textAlign: "center", borderBottom: "4px solid #E0C56E" }}>
        <h1 style={{ color: "#E0C56E", margin: 0, fontSize: "26px", letterSpacing: "10px" }}>APEX TIME</h1>
        <p style={{ color: "#FFF", fontSize: "9px", letterSpacing: "4px", marginTop: "10px", opacity: 0.8 }}>EXPERTO EN ALTA RELOJERÍA</p>
      </header>

      {/* FILTRO MAESTRO DE CATEGORÍAS */}
      <nav style={{ background: "white", position: "sticky", top: 0, zIndex: 100, borderBottom: "1px solid #EEE" }}>
        <div style={{ display: "flex", overflowX: "auto", padding: "15px 5%", gap: "10px" }}>
          {["CROWN SERIES", "PREMIUM 1.1", "ESSENTIAL"].map(cat => (
            <button key={cat} onClick={() => setCategoryFilter(cat)} style={{
              flex: 1, minWidth: "140px", padding: "12px", border: "1px solid #0D1B2A",
              background: categoryFilter === cat ? "#0D1B2A" : "white",
              color: categoryFilter === cat ? "#E0C56E" : "#0D1B2A",
              fontSize: "11px", fontWeight: "bold", cursor: "pointer", transition: "0.3s"
            }}>{cat}</button>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", paddingBottom: "15px" }}>
          {["TODOS", "HOMBRE", "MUJER"].map(gen => (
            <span key={gen} onClick={() => setGenderFilter(gen)} style={{
              fontSize: "12px", cursor: "pointer", color: genderFilter === gen ? "#E0C56E" : "#999",
              fontWeight: "bold", borderBottom: genderFilter === gen ? "2px solid #E0C56E" : "none"
            }}>{gen}</span>
          ))}
        </div>
      </nav>

      <main style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        <p style={{ textAlign: "center", fontSize: "11px", color: "#666", marginBottom: "20px" }}>
          Mostrando: <strong>{categoryFilter}</strong>
        </p>
        
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ 
            background: "white", border: categoryFilter === "CROWN SERIES" ? "8px solid #0D1B2A" : "4px solid #EAEAEA", 
            marginBottom: "40px", cursor: "pointer", position: "relative" 
          }}>
            <div style={{ padding: "20px", textAlign: "center" }}>
              <div style={{ position: "absolute", top: "10px", left: "10px" }}>
                 <span style={{ fontSize: "9px", background: "#E0C56E", padding: "4px 8px", fontWeight: "bold" }}>{p.tier}</span>
              </div>
              <img src={p.image} style={{ width: "100%", maxHeight: "350px", objectFit: "contain", margin: "20px 0" }} />
              <h3 style={{ fontSize: "20px", color: "#0D1B2A", marginBottom: "10px" }}>{p.name}</h3>
              <p style={{ fontSize: "22px", fontWeight: "bold", color: "#0D1B2A" }}>${p.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </main>

      {/* MODAL DETALLES */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto" }}>
          <div style={{ padding: "20px", textAlign: "right", borderBottom: "1px solid #EEE" }}>
            <button onClick={() => setSelectedProduct(null)} style={{ background: "#0D1B2A", color: "#FFF", padding: "10px 30px", border: "none", fontWeight: "bold" }}>VOLVER</button>
          </div>
          <div style={{ padding: "30px 10%" }}>
            <div style={{ textAlign: "center", background: "#F9F9F9", padding: "20px" }}>
              <img src={selectedProduct.image} style={{ width: "100%", maxWidth: "400px" }} />
            </div>
            <h2 style={{ fontSize: "28px", marginTop: "20px" }}>{selectedProduct.name}</h2>
            <p style={{ color: "#E0C56E", fontWeight: "bold" }}>{selectedProduct.tier}</p>
            
            <div style={{ background: "#F5F5F5", padding: "20px", margin: "20px 0" }}>
              {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "14px", margin: "10px 0" }}>• {s}</p>)}
            </div>

            <div style={{ background: "#E0C56E", padding: "15px", fontWeight: "bold", textAlign: "center" }}>
              {selectedProduct.payment}
            </div>

            <p style={{ fontSize: "30px", fontWeight: "bold", margin: "20px 0" }}>$ {selectedProduct.price.toLocaleString()} COP</p>
            
            <button onClick={() => whatsappAction(selectedProduct)} style={{ 
              width: "100%", background: "#25D366", color: "white", padding: "20px", 
              border: "none", fontWeight: "bold", fontSize: "16px", borderRadius: "8px"
            }}>CONSULTAR POR WHATSAPP 📱</button>
          </div>
        </div>
      )}
    </div>
  );
}
