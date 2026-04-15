"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [cart, setCart] = useState<any[]>([]);

  const products = [
    {
      id: 1,
      name: "Classic Silver Watch",
      price: 420000,
      category: "good",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      id: 2,
      name: "Black Minimal Watch",
      price: 350000,
      category: "good",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d"
    },
    {
      id: 3,
      name: "Golden Luxury Watch",
      price: 580000,
      category: "premium",
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa"
    },
    {
      id: 4,
      name: "Diamond Elite Watch",
      price: 950000,
      category: "premium",
      image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
    }
  ];

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const comprarTodo = () => {
    if (cart.length === 0) return;

    let mensaje = `Hola, soy ${name || "cliente"} y quiero comprar:\n`;

    cart.forEach(p => {
      mensaje += `- ${p.name} ($${p.price})\n`;
    });

    window.open(`https://wa.me/573116287493?text=${encodeURIComponent(mensaje)}`);
  };

  const renderSection = (title: string, type: string) => (
    <div style={{ marginTop: "40px" }}>
      <h2 style={{ color: "#d4af37", paddingLeft: "20px" }}>{title}</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "25px",
        padding: "20px"
      }}>
        {products.filter(p => p.category === type).map(product => (
          <div key={product.id} style={{
            backgroundColor: "#111",
            borderRadius: "20px",
            overflow: "hidden",
            transition: "0.3s"
          }}>
            <img src={product.image} style={{
              width: "100%",
              height: "220px",
              objectFit: "cover"
            }} />

            <div style={{ padding: "15px" }}>
              <h3>{product.name}</h3>

              <p style={{ color: "#d4af37" }}>
                ${product.price.toLocaleString()}
              </p>

              <button onClick={() => addToCart(product)} style={{
                marginTop: "5px",
                width: "100%",
                padding: "8px",
                background: "#333",
                color: "white",
                borderRadius: "8px"
              }}>
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{
      background: "#000",
      color: "white",
      minHeight: "100vh"
    }}>

      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px"
      }}>
        <h2 style={{ color: "#d4af37" }}>⌚ Luxury Time</h2>

        <button onClick={comprarTodo} style={{
          background: "#d4af37",
          padding: "10px",
          borderRadius: "10px"
        }}>
          🛒 ({cart.length})
        </button>
      </header>

      {/* PERSONALIZACIÓN */}
      <div style={{ padding: "20px" }}>
        <input 
          placeholder="¿Cómo te llamas?"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            borderRadius: "10px"
          }}
        />

        <h3 style={{ marginTop: "10px", color: "#d4af37" }}>
          Hola {name || "cliente"} 👋
        </h3>
      </div>

      {/* SECCIONES */}
      {renderSection("GOOD", "good")}
      {renderSection("PREMIUM", "premium")}

    </div>
  );
}
