"use client";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [categoryFilter, setCategoryFilter] = useState("CROWN SERIES");
  const [brandFilter, setBrandFilter] = useState("TODAS");
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [showTerms, setShowTerms] = useState(false);

  const products = [
    { id: 1, name: "Daytona S-Clon", brand: "ROLEX", line: "CROWN SERIES", price: 3450000, tier: "S-CLON / VIP", images: ["https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600"], specs: ["Maquinaria Suiza Base ETA", "Acero 904L", "Cristal Zafirado"] },

    { id: 10, name: "Santos Skeleton", brand: "CARTIER", line: "PREMIUM 1.1", price: 950000, tier: "CALIDAD 1.1", images: ["https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600"], specs: ["Acero 316L", "Cristal Zafirado"] },
    { id: 11, name: "RM 011 Titanium", brand: "RICHARD MILLE", line: "PREMIUM 1.1", price: 1250000, tier: "CALIDAD 1.1", images: ["https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600"], specs: ["Caja de Carbono"] },

    { id: 30, name: "F91-W Gold Edition", brand: "CASIO", line: "ESSENTIAL", price: 85000, tier: "GAMA BÁSICA", images: ["https://images.unsplash.com/photo-1508685096489-7aac291bd5b3?w=600"], specs: ["Digital", "Alarma"] }
  ];

  const availableBrands = useMemo(() => {
    const map: any = {
      "CROWN SERIES": ["ROLEX"],
      "PREMIUM 1.1": ["ROLEX", "CARTIER", "RICHARD MILLE", "CASIO"],
      "ESSENTIAL": ["ROLEX", "CASIO", "CARTIER"]
    };
    return ["TODAS", ...(map[categoryFilter] || [])];
  }, [categoryFilter]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => p.line === categoryFilter && (brandFilter === "TODAS" || p.brand === brandFilter));
  }, [categoryFilter, brandFilter]);

  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const texto = `Hola, quiero este reloj: ${product.name} - ${product.brand}`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div style={{ background: "#FAFAFA", minHeight: "100vh", fontFamily: "sans-serif" }}>

      {/* HEADER */}
      <header style={{ padding: "30px", textAlign: "center", background: "#fff", borderBottom: "1px solid #eee" }}>
        <h1 style={{ letterSpacing: "8px", fontWeight: 500 }}>APEX TIME</h1>
        <p style={{ fontSize: "11px", color: "#888" }}>FINE WATCH CURATION</p>
      </header>

      {/* NAV */}
      <nav style={{ background: "#fff", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ display: "flex", gap: "10px", padding: "15px", overflowX: "auto" }}>
          {["CROWN SERIES", "PREMIUM 1.1", "ESSENTIAL"].map(cat => (
            <button key={cat}
              onClick={() => { setCategoryFilter(cat); setBrandFilter("TODAS"); }}
              style={{
                padding: "10px 18px",
                borderRadius: "20px",
                border: "1px solid #ddd",
                background: categoryFilter === cat ? "#111" : "#fff",
                color: categoryFilter === cat ? "#fff" : "#333",
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

      {/* GRID */}
      <main style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "30px"
      }}>
        {filteredProducts.map(p => (
          <div key={p.id}
            onClick={() => { setSelectedProduct(p); setCurrentImgIndex(0); }}
            style={{
              background: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
            }}>
            <div style={{ padding: "30px", background: "#f8f8f8" }}>
              <img src={p.images[0]} style={{ width: "100%", height: "200px", objectFit: "contain" }} />
            </div>
            <div style={{ padding: "20px" }}>
              <p style={{ fontSize: "11px", color: "#999" }}>{p.brand}</p>
              <h3>{p.name}</h3>
              <p style={{ fontWeight: "bold" }}>${p.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </main>

      {/* MODAL */}
      {selectedProduct && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "#fff",
          zIndex: 1000,
          overflowY: "auto"
        }}>
          <div style={{ padding: "20px", textAlign: "right" }}>
            <button onClick={() => setSelectedProduct(null)}>CERRAR</button>
          </div>

        <div style={{
  padding: "25px",
  background: "#F9F9F9"
}}>

  {/* IMAGEN PRINCIPAL */}
  <img 
    src={selectedProduct.images[currentImgIndex]} 
    style={{ width: "100%", borderRadius: "12px" }} 
  />

  {/* MINI IMÁGENES */}
  <div style={{
    display: "flex",
    gap: "10px",
    marginTop: "10px",
    marginBottom: "15px"
  }}>
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
    color: "#D32F2F",
    fontSize: "13px",
    marginBottom: "10px"
  }}>
    🔴 Casi agotado - solo quedan 3!
  </p>

  {/* TITULO */}
  <h2 style={{
    fontSize: "24px",
    fontWeight: "500",
    color: "#111",
    lineHeight: "1.3"
  }}>
    {selectedProduct.name}
  </h2>

  {/* PRECIO */}
  <p style={{
    fontSize: "26px",
    fontWeight: "600",
    margin: "10px 0 20px 0"
  }}>
    ${selectedProduct.price.toLocaleString()} COP
  </p>

  <hr style={{
    border: "none",
    borderTop: "1px solid #E0E0E0",
    margin: "20px 0"
  }} />

  {/* TEXTO VENTA */}
  <p style={{
    textAlign: "center",
    fontWeight: "600",
    fontSize: "14px",
    marginBottom: "20px"
  }}>
    💼 RELOJ TIPO LUXURY 🔥
  </p>

  {/* CARACTERÍSTICAS */}
  <p style={{
    fontWeight: "700",
    marginBottom: "10px"
  }}>
    CARACTERÍSTICAS DEL PRODUCTO:
  </p>

  {selectedProduct.specs.map((s:any, i:number) => (
    <p key={i} style={{
      marginBottom: "8px",
      color: "#555",
      fontSize: "14px"
    }}>
      ✔ {s}
    </p>
  ))}

  {/* BOTÓN */}
  <button
    onClick={() => whatsappAction(selectedProduct)}
    style={{
      marginTop: "20px",
      width: "100%",
      padding: "16px",
      background: "#111",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontWeight: "600"
    }}
  >
    CONSULTAR POR WHATSAPP
  </button>

</div>
      )}

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "30px" }}>
        <button onClick={() => setShowTerms(true)}>Términos</button>
      </footer>

      {showTerms && (
        <div style={{ position: "fixed", inset: 0, background: "#fff", padding: "30px" }}>
          <h2>Políticas</h2>
          <button onClick={() => setShowTerms(false)}>Cerrar</button>
        </div>
      )}

    </div>
  );
}
