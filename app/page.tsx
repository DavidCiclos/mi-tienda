"use client";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [categoryFilter, setCategoryFilter] = useState("CROWN SERIES");
  const [brandFilter, setBrandFilter] = useState("TODAS");

  const products = [
    // --- CROWN SERIES ---
    { id: 1, name: "Daytona Platinum", brand: "ROLEX", line: "CROWN SERIES", price: 3450000, tier: "S-CLON", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=500" },
    
    // --- PREMIUM 1.1 ---
    { id: 10, name: "Submariner Blue", brand: "ROLEX", line: "PREMIUM 1.1", price: 850000, tier: "CALIDAD 1.1", image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=500" },
    { id: 11, name: "Seamaster Pro", brand: "OMEGA", line: "PREMIUM 1.1", price: 920000, tier: "CALIDAD 1.1", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500" },
    { id: 12, name: "Santos de Cartier", brand: "CARTIER", line: "PREMIUM 1.1", price: 880000, tier: "CALIDAD 1.1", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500" },

    // --- ESSENTIAL ---
    { id: 30, name: "Urban Minimal", brand: "GENERIC", line: "ESSENTIAL", price: 95000, tier: "GAMA BÁSICA", image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=500" },
  ];

  // 1. Obtener marcas disponibles SOLO para la categoría seleccionada
  const availableBrands = useMemo(() => {
    const brands = products
      .filter(p => p.line === categoryFilter)
      .map(p => p.brand);
    return ["TODAS", ...Array.from(new Set(brands))];
  }, [categoryFilter]);

  // 2. Filtrar productos por Categoría Y por Marca
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchCategory = p.line === categoryFilter;
      const matchBrand = brandFilter === "TODAS" || p.brand === brandFilter;
      return matchCategory && matchBrand;
    });
  }, [categoryFilter, brandFilter]);

  return (
    <div style={{ background: "#F4F4F4", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* HEADER */}
      <header style={{ background: "#0D1B2A", padding: "40px 5%", textAlign: "center", borderBottom: "4px solid #E0C56E" }}>
        <h1 style={{ color: "#E0C56E", margin: 0, fontSize: "28px", letterSpacing: "8px" }}>APEX TIME</h1>
      </header>

      {/* NAV PRINCIPAL (CATEGORÍAS) */}
      <nav style={{ background: "white", borderBottom: "1px solid #EEE" }}>
        <div style={{ display: "flex", overflowX: "auto", padding: "15px 5%", gap: "10px" }}>
          {["CROWN SERIES", "PREMIUM 1.1", "ESSENTIAL"].map(cat => (
            <button key={cat} onClick={() => { setCategoryFilter(cat); setBrandFilter("TODAS"); }} style={{
              flex: 1, minWidth: "120px", padding: "12px", border: "1px solid #0D1B2A",
              background: categoryFilter === cat ? "#0D1B2A" : "white",
              color: categoryFilter === cat ? "#E0C56E" : "#0D1B2A",
              fontSize: "10px", fontWeight: "bold", cursor: "pointer"
            }}>{cat}</button>
          ))}
        </div>

        {/* SUB-NAV (MARCAS DINÁMICAS) */}
        <div style={{ display: "flex", overflowX: "auto", padding: "0 5% 15px 5%", gap: "15px", justifyContent: "center" }}>
          {availableBrands.map(brand => (
            <span key={brand} onClick={() => setBrandFilter(brand)} style={{
              fontSize: "11px", cursor: "pointer", padding: "5px 10px",
              color: brandFilter === brand ? "#0D1B2A" : "#999",
              fontWeight: brandFilter === brand ? "bold" : "normal",
              borderBottom: brandFilter === brand ? "2px solid #E0C56E" : "none",
              textTransform: "uppercase"
            }}>{brand}</span>
          ))}
        </div>
      </nav>

      {/* VITRINA */}
      <main style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        {filteredProducts.map(p => (
          <div key={p.id} onClick={() => setSelectedProduct(p)} style={{ 
            background: "white", border: categoryFilter === "CROWN SERIES" ? "8px solid #0D1B2A" : "4px solid #EAEAEA", 
            marginBottom: "30px", cursor: "pointer" 
          }}>
            <div style={{ padding: "20px", textAlign: "center" }}>
              <img src={p.image} style={{ width: "100%", maxHeight: "300px", objectFit: "contain" }} />
              <p style={{ color: "#E0C56E", fontSize: "10px", fontWeight: "bold", marginTop: "10px" }}>{p.brand}</p>
              <h3 style={{ fontSize: "18px", margin: "5px 0" }}>{p.name}</h3>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>${p.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </main>

      {/* El resto del código de los Modales y WhatsApp se mantiene igual... */}
    </div>
  );
}
