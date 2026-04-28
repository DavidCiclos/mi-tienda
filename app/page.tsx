"use client";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [categoryFilter, setCategoryFilter] = useState("CROWN SERIES");
  const [brandFilter, setBrandFilter] = useState("TODAS");
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [showTerms, setShowTerms] = useState(false);

  // PRODUCTOS (IMPORTANTE: images es array)
  const products = [
    {
      id: 1,
      name: "Daytona S-Clon",
      brand: "ROLEX",
      line: "CROWN SERIES",
      price: 3450000,
      images: [
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800"
      ],
      specs: ["Maquinaria Suiza", "Cristal Zafiro", "Acero 904L"]
    },
    {
      id: 2,
      name: "Santos Skeleton",
      brand: "CARTIER",
      line: "PREMIUM 1.1",
      price: 950000,
      images: [
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800"
      ],
      specs: ["Automático", "Cristal Zafiro"]
    },
    {
      id: 3,
      name: "RM 011 Titanium",
      brand: "RICHARD MILLE",
      line: "PREMIUM 1.1",
      price: 1250000,
      images: [
        "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800"
      ],
      specs: ["Carbono", "Cronógrafo"]
    },
    {
      id: 4,
      name: "F91-W Gold",
      brand: "CASIO",
      line: "ESSENTIAL",
      price: 85000,
      images: [
        "https://images.unsplash.com/photo-1508685096489-7aac291bd5b3?w=800"
      ],
      specs: ["Digital", "Alarma"]
    }
  ];

  // MARCAS COMPLETAS
  const availableBrands = useMemo(() => {
    const map: any = {
      "CROWN SERIES": ["ROLEX", "PATEK PHILIPPE"],
      "PREMIUM 1.1": ["ROLEX", "CARTIER", "RICHARD MILLE", "CASIO"],
      "ESSENTIAL": ["ROLEX", "CASIO"]
    };
    return ["TODAS", ...(map[categoryFilter] || [])];
  }, [categoryFilter]);

  const filteredProducts = useMemo(() => {
    return products.filter(
      p =>
        p.line === categoryFilter &&
        (brandFilter === "TODAS" || p.brand === brandFilter)
    );
  }, [categoryFilter, brandFilter]);

  const whatsappAction = (product: any) => {
    const numero = "573126934247";
    const texto = `Hola, quiero este reloj: ${product.name}`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`);
  };

  return (
    <div style={{ fontFamily: "sans-serif", background: "#FAFAFA" }}>

      {/* HEADER */}
      <header style={{ padding: "30px", textAlign: "center" }}>
        <h1 style={{ letterSpacing: "8px" }}>APEX TIME</h1>
      </header>

      {/* NAV */}
      <nav>
        <div style={{ display: "flex", overflowX: "auto", gap: "10px", padding: "10px" }}>
          {["CROWN SERIES", "PREMIUM 1.1", "ESSENTIAL"].map(cat => (
            <button key={cat} onClick={() => { setCategoryFilter(cat); setBrandFilter("TODAS"); }}>
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", overflowX: "auto", gap: "10px", padding: "10px" }}>
          {availableBrands.map(b => (
            <span key={b} onClick={() => setBrandFilter(b)} style={{ cursor: "pointer" }}>
              {b}
            </span>
          ))}
        </div>
      </nav>

      {/* PRODUCTOS */}
      <main style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
        gap: "20px",
        padding: "20px"
      }}>
        {filteredProducts.map(p => (
          <div key={p.id}
            onClick={() => { setSelectedProduct(p); setCurrentImgIndex(0); }}
            style={{ background: "#fff", padding: "10px", cursor: "pointer" }}
          >
            <img src={p.images[0]} style={{ width: "100%" }} />
            <h3>{p.name}</h3>
            <p>${p.price.toLocaleString()}</p>
          </div>
        ))}
      </main>

      {/* MODAL PRODUCTO */}
      {selectedProduct && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{ background: "#fff", padding: "20px", width: "90%", maxWidth: "400px" }}>

            <img src={selectedProduct.images[currentImgIndex]} style={{ width: "100%" }} />

            <div style={{ display: "flex", gap: "5px" }}>
              {selectedProduct.images.map((img: any, i: number) => (
                <img key={i}
                  src={img}
                  onClick={() => setCurrentImgIndex(i)}
                  style={{ width: "50px", cursor: "pointer" }}
                />
              ))}
            </div>

            <h2>{selectedProduct.name}</h2>
            <p>${selectedProduct.price.toLocaleString()} COP</p>

            <p>🔴 Casi agotado</p>

            {selectedProduct.specs.map((s: any) => (
              <p key={s}>✔ {s}</p>
            ))}

            <button onClick={() => whatsappAction(selectedProduct)}>
              Comprar por WhatsApp
            </button>

            <button onClick={() => setSelectedProduct(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "20px" }}>
        <button onClick={() => setShowTerms(true)}>Términos</button>
      </footer>

      {/* MODAL TÉRMINOS */}
      {showTerms && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{ background: "#fff", padding: "20px" }}>
            <h2>Políticas</h2>
            <p>Garantía disponible en productos premium.</p>
            <button onClick={() => setShowTerms(false)}>Cerrar</button>
          </div>
        </div>
      )}

    </div>
  );
}
