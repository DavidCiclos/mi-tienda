"use client";
import { useState } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [categoryFilter, setCategoryFilter] = useState("TODOS");

  const products = [
    // --- CATEGORÍA: SÚPER CLON ---
    { 
      id: 1, name: "Eternal Diver 3235", price: 3500000, oldPrice: 3800000, 
      category: "SÚPER CLON", brand: "PREMIUM", images: ["https://unsplash.com"],
      specs: ["Maquinaria Calibre 3235 (Clon Suizo)", "Acero 904L", "Cristal de Zafiro Real", "Sello de Impermeabilidad"],
      description: "La máxima expresión de la ingeniería relojera. Pieza indistinguible con componentes grado suizo y acero de alta densidad.",
      guarantee: "2 Años de Garantía Platino"
    },
    // --- CATEGORÍA: PREMIUM AAA ---
    { 
      id: 2, name: "Legacy President 1.1", price: 950000, oldPrice: 1200000, 
      category: "PREMIUM AAA", brand: "LUXURY", images: ["https://unsplash.com"],
      specs: ["Acero Quirúrgico 316L", "Maquinaria Japonesa Miyota", "Peso y Medidas 1:1"],
      description: "Calidad superior 1.1. Una pieza robusta para quienes buscan el look de lujo con durabilidad garantizada.",
      guarantee: "1 Año en Maquinaria"
    },
    // --- CATEGORÍA: CURREN ---
    { 
      id: 3, name: "Curren Aviator Chrono", price: 185000, oldPrice: 220000, 
      category: "CURREN", brand: "CURREN", images: ["https://unsplash.com"],
      specs: ["Original Curren", "Cronógrafos Funcionales", "Pulso de Cuero Genuino"],
      description: "Reloj original Curren. Diseño deportivo y elegante con precisión de cuarzo.",
      guarantee: "6 Meses"
    },
    // --- CATEGORÍA: CASIO (ORIGINAL) ---
    { 
      id: 4, name: "Casio Vintage Gold", price: 285000, oldPrice: 310000, 
      category: "CASIO", brand: "CASIO", images: ["https://unsplash.com"],
      specs: ["Original Casio", "Luz LED", "Resistente al agua"],
      description: "Clásico digital Casio. Estilo retro con la durabilidad legendaria de la marca japonesa.",
      guarantee: "1 Año Nacional"
    },
    // --- CATEGORÍA: GAMA ENTRADA ---
    { 
      id: 5, name: "Gama Entrada Urban", price: 125000, oldPrice: 160000, 
      category: "GAMA ENTRADA", brand: "GENÉRICO", images: ["https://unsplash.com"],
      specs: ["Maquinaria de Cuarzo", "Resistente a Salpicaduras", "Estilo Moderno"],
      description: "La mejor relación calidad-precio. Ideal para el uso diario con un diseño actual.",
      guarantee: "3 Meses"
    }
  ];

  const filteredProducts = categoryFilter === "TODOS" 
    ? products 
    : products.filter(p => p.category === categoryFilter);

  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const texto = `Hola APEX TIME, solicito información sobre la pieza: *${product.name}*\nCategoría: *${product.category}*\nPrecio: $${product.price.toLocaleString()}`;
    window.open(`https://wa.me{numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div style={{ background: "#F4F4F4", color: "#0D1B2A", minHeight: "100vh", fontFamily: "serif", paddingBottom: "100px" }}>
      
      {/* HEADER */}
      <header style={{ background: "#0D1B2A", padding: "40px 5%", textAlign: "center" }}>
        <h1 style={{ color: "#E0C56E", margin: 0, fontSize: "32px", letterSpacing: "10px", fontWeight: "300" }}>
          APEX TIME
        </h1>
        <div style={{ width: "80px", height: "1px", background: "#E0C56E", margin: "15px auto" }}></div>
        <p style={{ color: "#FFF", fontSize: "10px", letterSpacing: "4px", margin: 0, opacity: 0.8 }}>CURADURÍA DE PIEZAS SELECTAS</p>
      </header>

      {/* FILTROS DE CATEGORÍAS (SCROLL HORIZONTAL EN MÓVIL) */}
      <nav style={{ 
        padding: "15px 5%", background: "#FFF", borderBottom: "1px solid #EEE", 
        display: "flex", gap: "10px", overflowX: "auto", whiteSpace: "nowrap" 
      }}>
        {["TODOS", "SÚPER CLON", "PREMIUM AAA", "GAMA ENTRADA", "CURREN", "CASIO"].map(cat => (
          <button 
            key={cat} 
            onClick={() => setCategoryFilter(cat)}
            style={{ 
              background: categoryFilter === cat ? "#0D1B2A" : "#F8F8F8", 
              color: categoryFilter === cat ? "#E0C56E" : "#0D1B2A",
              border: "1px solid #0D1B2A", padding: "8px 15px", fontSize: "10px", cursor: "pointer", borderRadius: "20px"
            }}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* VITRINA */}
      <main style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", padding: "15px", maxWidth: "1200px", margin: "0 auto" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ 
            background: "#FFF", padding: "10px", border: p.category === "SÚPER CLON" ? "2px solid #E0C56E" : "1px solid #F0F0F0", 
            textAlign: "center", position: "relative" 
          }}>
            {p.category === "SÚPER CLON" && (
              <span style={{ position: "absolute", top: "5px", left: "5px", background: "#E0C56E", color: "#0D1B2A", fontSize: "8px", padding: "2px 5px", fontWeight: "bold" }}>TOP TIER</span>
            )}
            <img src={p.images[0]} style={{ width: "100%", aspectRatio: "1/1", objectFit: "contain" }} />
            <p style={{ color: "#E0C56E", fontSize: "9px", fontWeight: "bold", margin: "10px 0 0 0" }}>{p.category}</p>
            <h3 style={{ fontSize: "12px", margin: "5px 0", height: "30px", overflow: "hidden" }}>{p.name}</h3>
            <p style={{ fontSize: "13px", fontWeight: "bold" }}>${p.price.toLocaleString()}</p>
          </div>
        ))}
      </main>

      {/* MODAL DETALLES */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", zIndex: 1000, overflowY: "auto" }}>
          <div style={{ padding: "20px", textAlign: "right" }}>
            <button onClick={() => setSelectedProduct(null)} style={{ background: "#0D1B2A", color: "#FFF", border: "none", padding: "10px 20px", cursor: "pointer" }}>VOLVER</button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", padding: "0 5% 100px 5%" }}>
            <div style={{ flex: "1 1 350px", textAlign: "center" }}>
              <img src={selectedProduct.images[0]} style={{ width: "100%", maxWidth: "450px" }} />
            </div>
            <div style={{ flex: "1 1 350px", padding: "20px" }}>
              <p style={{ color: "#E0C56E", letterSpacing: "2px", fontSize: "12px", fontWeight: "bold" }}>{selectedProduct.category}</p>
              <h2 style={{ fontSize: "32px", margin: "10px 0" }}>{selectedProduct.name}</h2>
              <div style={{ background: "#F9F9F9", padding: "15px", marginBottom: "20px", borderLeft: "4px solid #E0C56E" }}>
                <p style={{ fontWeight: "bold", fontSize: "13px", marginBottom: "5px" }}>🛡️ GARANTÍA {selectedProduct.category}</p>
                <p style={{ fontSize: "13px" }}>• {selectedProduct.guarantee}</p>
              </div>
              <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.6", marginBottom: "20px" }}>{selectedProduct.description}</p>
              <div style={{ marginBottom: "30px" }}>
                <p style={{ fontWeight: "bold", borderBottom: "1px solid #EEE", paddingBottom: "5px", fontSize: "13px" }}>FICHA TÉCNICA</p>
                {selectedProduct.specs.map((s:any) => <p key={s} style={{ fontSize: "13px", margin: "8px 0" }}>• {s}</p>)}
              </div>
              <p style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "30px" }}>$ {selectedProduct.price.toLocaleString()} COP</p>
              <button onClick={() => whatsappAction(selectedProduct)} style={{ width: "100%", background: "#0D1B2A", color: "#E0C56E", padding: "20px", border: "none", fontWeight: "bold", cursor: "pointer", letterSpacing: "2px" }}>
                SOLICITAR PIEZA
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WHATSAPP FLOTANTE */}
      <div onClick={() => window.open('https://wa.me')} style={{ position: "fixed", bottom: "20px", right: "20px", background: "#25D366", width: "55px", height: "55px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "28px", boxShadow: "0 4px 12px rgba(0,0,0,0.2)", cursor: "pointer", zIndex: 900 }}>
        💬
      </div>

      <footer style={{ padding: "40px 5%", background: "#0D1B2A", color: "#E0C56E", textAlign: "center", fontSize: "10px", letterSpacing: "2px" }}>
        APEX TIME COLOMBIA — SELECCIÓN MULTI-GAMA
      </footer>
    </div>
  );
            }
