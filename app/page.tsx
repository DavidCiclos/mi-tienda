"use client";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
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
   
    <div style={{ background: "#fff", color: "#111", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto" }}>

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
    background: "rgba(0,0,0,0.4)",
    backdropFilter: "blur(8px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000
  }}>
    <div style={{
    background: "#fff",
    maxWidth: "500px",
    width: "90%",
    borderRadius: "16px",
    padding: "30px",
    transform: "translateY(20px)",
    transition: "all 0.3s ease"
  }}>

      {/* SOLO UN BOTÓN */}
      <button onClick={() => setSelectedProduct(null)} style={{ float: "right" }}>✕</button>

      <img src={selectedProduct.image} style={{ width: "100%", borderRadius: "12px" }} />

      <p style={{
        color: "#D32F2F",
        fontSize: "13px",
        marginTop: "10px"
      }}>
        🔴 Almost sold out - only 3 left!
      </p>

      <h2 style={{
        marginTop: "10px",
        fontWeight: "500",
        lineHeight: "1.3"
      }}>
        {selectedProduct.name}
      </h2>

      <p style={{
        fontSize: "24px",
        fontWeight: "600",
        margin: "10px 0"
      }}>
        ${selectedProduct.price.toLocaleString()} COP
      </p>

      <hr style={{
        border: "none",
        borderTop: "1px solid #eee",
        margin: "20px 0"
      }} />

      <p style={{
        textAlign: "center",
        fontWeight: "600",
        fontSize: "14px",
        marginBottom: "20px"
      }}>
        💼 LUXURY STYLE WATCH – PERFECT TO RESELL & PROFIT 🔥
      </p>

      <p style={{ fontWeight: "700", marginBottom: "10px" }}>
        PRODUCT FEATURES:
      </p>

      <p style={{ fontSize: "14px", color: "#555" }}>✔ Analog Display</p>
      <p style={{ fontSize: "14px", color: "#555" }}>✔ Resistant Mineral Glass</p>
      <p style={{ fontSize: "14px", color: "#555" }}>✔ Includes Presentation Box</p>

      <button style={{
        width: "100%",
        marginTop: "25px",
        padding: "16px",
        background: "#111",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        fontWeight: "600",
        letterSpacing: "1px"
      }}>
        CONSULT VIA WHATSAPP
      </button>

    </div>
  </div>
)}
</div>
);
