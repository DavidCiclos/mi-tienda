"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [cart, setCart] = useState<any[]>([]);
  const [lang, setLang] = useState<"es" | "en">("es");
const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const texts = {
    es: {
      saludo: "Hola",
      placeholder: "¿Cómo te llamas?",
      comprar: "Añadir al carrito",
      comprarNow: "Comprar por WhatsApp",
      carrito: "Carrito",
      good: "Colección Esencial",
      premium: "Colección Exclusiva",
      vacio: "Tu carrito está vacío"
    },
    en: {
      saludo: "Hello",
      placeholder: "What's your name?",
      comprar: "Add to cart",
      comprarNow: "Buy via WhatsApp",
      carrito: "Cart",
      good: "Essential Collection",
      premium: "Exclusive Collection",
      vacio: "Your cart is empty"
    }
  };

  const t = texts[lang];

  const products = [
    {
      id: 1,
      name: "Classic Silver Watch",
      price: 420000,
      category: "good",
      images: [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  "https://images.unsplash.com/photo-1518546305927-5a555bb7020d"
],
description: "Reloj elegante en acero inoxidable, resistente al agua."
    },
    {
      id: 2,
      name: "Black Minimal Watch",
      price: 350000,
      category: "good",
     images: [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  "https://images.unsplash.com/photo-1518546305927-5a555bb7020d"
],
description: "Reloj elegante en acero inoxidable, resistente al agua."
    },
    {
      id: 3,
      name: "Golden Luxury Watch",
      price: 580000,
      category: "premium",
    images: [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  "https://images.unsplash.com/photo-1518546305927-5a555bb7020d"
],
description: "Reloj elegante en acero inoxidable, resistente al agua."
    },
    {
      id: 4,
      name: "Diamond Elite Watch",
      price: 950000,
      category: "premium",
     images: [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  "https://images.unsplash.com/photo-1518546305927-5a555bb7020d"
],
description: "Reloj elegante en acero inoxidable, resistente al agua."
    }
  ];

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const comprarTodo = () => {
    if (cart.length === 0) {
      alert(t.vacio);
      return;
    }

    let mensaje =
      lang === "es"
        ? `Hola, soy ${name || "cliente"} y quiero comprar:\n`
        : `Hello, I'm ${name || "customer"} and I want to buy:\n`;

    cart.forEach((p) => {
      mensaje += `- ${p.name} ($${p.price})\n`;
    });

    window.open(
      `https://wa.me/573116287493?text=${encodeURIComponent(mensaje)}`
    );
  };

  const renderSection = (title: string, type: string) => (
  <div style={{ marginTop: "40px" }}>
    <h2 style={{ color: "#d4af37", paddingLeft: "20px" }}>{title}</h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "25px",
        padding: "20px"
      }}
    >
      {products
        .filter((p) => p.category === type)
        .map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            style={{
              backgroundColor: "#111",
              borderRadius: "20px",
              overflow: "hidden",
              transition: "0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "scale(1.05)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 10px 30px rgba(212,175,55,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <img
              src={product.images[0]}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover"
              }}
            />

            <div style={{ padding: "15px" }}>
              <h3>{product.name}</h3>

              <p style={{ color: "#d4af37", fontWeight: "bold" }}>
                ${product.price.toLocaleString()}
              </p>

              <button
                style={{
                  marginTop: "5px",
                  width: "100%",
                  padding: "8px",
                  background: "#333",
                  color: "white",
                  borderRadius: "8px",
                  border: "none"
                }}
              >
                👁 Ver producto
              </button>
            </div>
          </div>
        ))}
    </div>
  </div>
);
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #000, #111827)",
        color: "white",
        minHeight: "100vh",
        fontFamily: "sans-serif"
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          alignItems: "center"
        }}
      >
        <h2 style={{ color: "#d4af37" }}>⌚ Luxury Time</h2>

        <div>
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            style={{
              marginRight: "10px",
              padding: "5px 10px",
              borderRadius: "5px"
            }}
          >
            🌐 {lang.toUpperCase()}
          </button>

          <button
            onClick={comprarTodo}
            style={{
              background: "#d4af37",
              padding: "10px",
              borderRadius: "10px",
              border: "none"
            }}
          >
            🛒 ({cart.length})
          </button>
        </div>
      </header>

      {/* PERSONALIZACIÓN */}
      <div style={{ padding: "20px" }}>
        <input
          placeholder={t.placeholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            borderRadius: "10px",
            border: "none"
          }}
        />

        <h3 style={{ marginTop: "10px", color: "#d4af37" }}>
          {t.saludo} {name || (lang === "es" ? "cliente" : "customer")} 👋
        </h3>
      </div>

      {/* SECCIONES */}
      {renderSection(t.good, "good")}
      {renderSection(t.premium, "premium")}
      {selectedProduct && (
  <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000
  }}>
    <div style={{
      background: "#111",
      padding: "20px",
      borderRadius: "20px",
      width: "90%",
      maxWidth: "500px"
    }}>
      
      <button onClick={() => setSelectedProduct(null)}>❌</button>

      <img src={selectedProduct.images[0]} style={{
        width: "100%",
        borderRadius: "10px"
      }} />

      <h2>{selectedProduct.name}</h2>

      <p style={{ color: "#d4af37" }}>
        ${selectedProduct.price}
      </p>

      <p>{selectedProduct.description}</p>

      <button onClick={() => addToCart(selectedProduct)}>
        Añadir al carrito
      </button>

      <button onClick={() => {
        window.open(`https://wa.me/573116287493?text=Quiero ${selectedProduct.name}`);
      }}>
        Comprar ahora
      </button>

    </div>
  </div>
)}
    </div>
  );
}
