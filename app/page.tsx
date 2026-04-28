"use client";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [categoryFilter, setCategoryFilter] = useState("CROWN SERIES");
  const [brandFilter, setBrandFilter] = useState("TODAS");

  const products = [
    { id: 1, name: "Daytona S-Clon", brand: "ROLEX", line: "CROWN SERIES", price: 3450000, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800" },
    { id: 2, name: "Santos Skeleton", brand: "CARTIER", line: "PREMIUM 1.1", price: 950000, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800" },
    { id: 3, name: "RM 011 Titanium", brand: "RICHARD MILLE", line: "PREMIUM 1.1", price: 1250000, image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800" },
    { id: 4, name: "F91-W Gold", brand: "CASIO", line: "ESSENTIAL", price: 85000, image: "https://images.unsplash.com/photo-1508685096489-7aac291bd5b3?w=800" }
  ];

  const availableBrands = useMemo(() => {
    const map: any = {
      "CROWN SERIES": ["ROLEX"],
      "PREMIUM 1.1": ["ROLEX", "CARTIER", "RICHARD MILLE"],
      "ESSENTIAL": ["CASIO", "ROLEX"]
    };
    return ["TODAS", ...(map[categoryFilter] || [])];
  }, [categoryFilter]);

  const filteredProducts = useMemo(() => {
    return products.filter(
      p => p.line === categoryFilter &&
      (brandFilter === "TODAS" || p.brand === brandFilter)
    );
  }, [categoryFilter, brandFilter]);

  return (
    <div style={{ background: "#fff", color: "#111", fontFamily: "sans-serif" }}>

      {/* HERO (marca, no tienda) */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ letterSpacing: "10px", fontWeight: 500 }}>APEX TIME</h1>
        <p style={{ marginTop: "10px", color: "#777", letterSpacing: "3px" }}>
          CURATED WATCH COLLECTION
        </p>
      </section>

      {/* NAV */}
      <nav style={{ borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
        <div style={{ display: "flex", gap: "10px", padding: "15px", overflowX: "auto" }}>
          {["CROWN SERIES", "PREMIUM 1.1", "ESSENTIAL"].map(cat => (
            <button key={cat}
              onClick={() => { setCategoryFilter(cat); setBrandFilter("TODAS"); }}
              style={{
                padding: "10px 18px",
                borderRadius: "20px",
                border: "1px solid #ddd",
                background: categoryFilter === cat ? "#111" : "#fff",
                color: categoryFilter === cat ? "#fff" : "#111",
                cursor: "pointer",
                flexShrink: 0
              }}>
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", gap: "15px", padding: "10px 15px", overflowX: "auto" }}>
          {availableBrands.map(brand => (
            <span key={brand}
              onClick={() => setBrandFilter(brand)}
              style={{
                cursor: "pointer",
                fontSize: "12px",
                whiteSpace: "nowrap",
                color: brandFilter === brand ? "#000" : "#aaa",
                borderBottom: brandFilter === brand ? "2px solid #000" : "none",
                flexShrink: 0
              }}>
              {brand}
            </span>
          ))}
        </div>
      </nav>

      {/* GRID PREMIUM */}
      <main style={{
        maxWidth: "1100px",
        margin: "60px auto",
        padding: "0 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "50px"
      }}>
        {filteredProducts.map(p => (
          <div key={p.id}
            onClick={() => setSelectedProduct(p)}
            style={{
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e:any) => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseLeave={(e:any) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img src={p.image} style={{
              width: "100%",
              height: "260px",
              objectFit: "cover",
              borderRadius: "10px"
            }} />

            <div style={{ marginTop: "15px" }}>
              <p style={{ fontSize: "11px", color: "#888", letterSpacing: "2px" }}>{p.brand}</p>
              <h3 style={{ fontWeight: 500 }}>{p.name}</h3>
              <p style={{ marginTop: "5px", fontWeight: 600 }}>${p.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </main>

      {/* MODAL LIMPIO */}
      {selectedProduct && (
  <div style={{
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    padding: "20px"
  }}>
    
    <div style={{
      background: "#fff",
      borderRadius: "20px",
      width: "100%",
      maxWidth: "500px",
      overflow: "hidden",
      boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
    }}>

      {/* IMAGEN PRINCIPAL */}
      <div style={{ background: "#000" }}>
        <img 
          src={selectedProduct.images[0]} 
          style={{ width: "100%", height: "220px", objectFit: "cover" }} 
        />
      </div>

      {/* CONTENIDO */}
      <div style={{ padding: "20px" }}>

        {/* MINI IMÁGENES */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
          {selectedProduct.images.map((img:any, i:number) => (
            <img key={i}
              src={img}
              onClick={() => setCurrentImgIndex(i)}
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                borderRadius: "10px",
                cursor: "pointer",
                border: currentImgIndex === i ? "2px solid #000" : "1px solid #ddd"
              }}
            />
          ))}
        </div>

        {/* ALERTA */}
        <p style={{
          color: "red",
          fontWeight: "500",
          marginBottom: "10px"
        }}>
          🔴 Casi agotado - solo quedan 3!
        </p>

        {/* TITULO */}
        <h2 style={{
          fontSize: "24px",
          fontWeight: "600",
          marginBottom: "10px"
        }}>
          {selectedProduct.name}
        </h2>

        {/* PRECIO */}
        <p style={{
          fontSize: "26px",
          fontWeight: "700",
          marginBottom: "20px"
        }}>
          ${selectedProduct.price.toLocaleString()} COP
        </p>

        <hr style={{ margin: "20px 0", border: "none", borderTop: "1px solid #eee" }} />

        {/* TEXTO VENTA */}
        <p style={{
          fontWeight: "600",
          textAlign: "center",
          marginBottom: "20px"
        }}>
          💼 RELOJ TIPO LUXURY – IDEAL PARA EMPRENDER Y GANAR EN GRANDE 🔥
        </p>

        {/* CARACTERISTICAS */}
        <div>
          <p style={{ fontWeight: "700", marginBottom: "10px" }}>
            CARACTERÍSTICAS DEL PRODUCTO:
          </p>

          {selectedProduct.specs.map((s:any, i:number) => (
            <p key={i} style={{ marginBottom: "8px", color: "#555" }}>
              ✔ {s}
            </p>
          ))}
        </div>

        {/* BOTON */}
        <button
          onClick={() => whatsappAction(selectedProduct)}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "15px",
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600"
          }}
        >
          CONSULTAR POR WHATSAPP
        </button>

        {/* CERRAR */}
        <button
          onClick={() => setSelectedProduct(null)}
          style={{
            marginTop: "10px",
            width: "100%",
            padding: "10px",
            background: "none",
            border: "none",
            color: "#888",
            cursor: "pointer"
          }}
        >
          Cerrar
        </button>

      </div>
    </div>
  </div>
)}
