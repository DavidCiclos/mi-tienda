"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [cart, setCart] = useState<any[]>([]);
  const [lang, setLang] = useState<"es" | "en">("es");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [search, setSearch] = useState("");

  const texts = {
    es: {
      placeholder: "Buscar en Luxury Time...",
      agregar: "Agregar al carrito",
      carrito: "Carrito",
      vacio: "Tu carrito está vacío",
      detalles: "Especificaciones del producto",
      comprarYa: "Finalizar compra por WhatsApp"
    },
    en: {
      placeholder: "Search Luxury Time...",
      agregar: "Add to cart",
      carrito: "Cart",
      vacio: "Your cart is empty",
      detalles: "Product specifications",
      comprarYa: "Complete purchase via WhatsApp"
    }
  };

  const t = texts[lang];

  // AQUÍ PUEDES AÑADIR MÁS RELOJES SIGUIENDO ESTE FORMATO
  const products = [
    { 
      id: 1, 
      name: "Garmin Forerunner 55 Inteligente - Blanco", 
      price: 878990, 
      oldPrice: 1175000, 
      brand: "GARMIN", 
      rating: 5, 
      specs: "GPS, Monitor de frecuencia cardiaca, Autonomía de 2 semanas, Resistente al agua.", 
      image: "https://unsplash.com" 
    },
    { 
      id: 2, 
      name: "Reloj Casio Modelo Mtp 1239D 7A Diseño Clásico", 
      price: 235900, 
      oldPrice: 487900, 
      brand: "CASIO", 
      rating: 4, 
      specs: "Acero inoxidable, Cristal mineral, Calendario día/fecha, Cierre de tres pliegues.", 
      image: "https://unsplash.com" 
    },
    { 
      id: 3, 
      name: "Smartwatch Digital Inteligente Color Rosa", 
      price: 57999, 
      oldPrice: 187000, 
      brand: "ONNECHAN", 
      rating: 4, 
      specs: "Notificaciones, Podómetro, Monitor de sueño, Pantalla táctil a color.", 
      image: "https://unsplash.com" 
    },
    { 
      id: 4, 
      name: "Rolex Submariner Date - Acero Oyster", 
      price: 45000000, 
      oldPrice: 48000000, 
      brand: "ROLEX", 
      rating: 5, 
      specs: "Movimiento automático, Bisel giratorio, Cristal de zafiro, Corona atornillada.", 
      image: "https://unsplash.com" 
    }
  ];

  const addToCart = (product: any) => {
    setCart([...cart, product]);
    alert("¡Añadido al carrito! ✅");
  };

  const enviarWhatsApp = () => {
    if (cart.length === 0) return alert(t.vacio);
    let msg = `Hola Luxury Time, soy ${name || "un cliente"}.\nMe interesa comprar:\n` + 
              cart.map(p => `- ${p.name} ($${p.price.toLocaleString()})`).join("\n") +
              ` \n\nTotal: $${cart.reduce((sum, p) => sum + p.price, 0).toLocaleString()}`;
    window.open(`https://wa.me{encodeURIComponent(msg)}`);
  };

  return (
    <div style={{ background: "#fff", color: "#0f1111", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* BARRA SUPERIOR (ESTILO AMAZON) */}
      <header style={{ background: "#131921", padding: "10px 5%", display: "flex", alignItems: "center", gap: "15px", position: "sticky", top: 0, zIndex: 100 }}>
        <h2 style={{ color: "#fff", margin: 0, fontSize: "18px", cursor: "pointer" }} onClick={() => window.location.reload()}>LuxuryTime</h2>
        
        <div style={{ flexGrow: 1, display: "flex" }}>
          <input 
            placeholder={t.placeholder}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "100%", padding: "8px 15px", borderRadius: "4px 0 0 4px", border: "none", outline: "none" }} 
          />
          <button style={{ background: "#febd69", border: "none", padding: "0 15px", borderRadius: "0 4px 4px 0", cursor: "pointer" }}>🔍</button>
        </div>

        <div style={{ display: "flex", gap: "15px", alignItems: "center", color: "#fff" }}>
          <button onClick={() => setLang(lang === "es" ? "en" : "es")} style={{ background: "transparent", border: "1px solid #ccc", color: "#fff", padding: "4px 8px", borderRadius: "3px", cursor: "pointer", fontSize: "12px" }}>{lang.toUpperCase()}</button>
          <div onClick={enviarWhatsApp} style={{ cursor: "pointer", position: "relative" }}>
            <span style={{ fontSize: "24px" }}>🛒</span>
            <span style={{ position: "absolute", top: "-5px", right: "-10px", background: "#f08804", color: "#000", borderRadius: "50%", padding: "2px 6px", fontSize: "12px", fontWeight: "bold" }}>{cart.length}</span>
          </div>
        </div>
      </header>

      {/* SALUDO PERSONALIZADO */}
      <div style={{ background: "#232f3e", color: "white", padding: "10px 5%", fontSize: "14px" }}>
        <input 
          placeholder="Tu nombre aquí..." 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          style={{ background: "transparent", border: "none", color: "#febd69", outline: "none", fontWeight: "bold", width: "150px" }}
        /> | Hola, bienvenido a la tienda de relojes más exclusiva.
      </div>

      <main style={{ padding: "20px 5%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" }}>
          {products.filter(p => p.name.toLowerCase().includes(search.toLowerCase())).map(product => (
            <div key={product.id} onClick={() => setSelectedProduct(product)} style={{ border: "1px solid #eee", borderRadius: "8px", padding: "15px", cursor: "pointer", background: "#fff" }}>
              <div style={{ height: "180px", display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                <img src={product.image} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
              </div>
              <p style={{ fontSize: "12px", color: "#565959", margin: 0 }}>{product.brand}</p>
              <h3 style={{ fontSize: "15px", fontWeight: "400", margin: "5px 0", height: "40px", overflow: "hidden" }}>{product.name}</h3>
              <div style={{ color: "#ffa41c", fontSize: "14px" }}>{"★".repeat(product.rating)}{"☆".repeat(5-product.rating)}</div>
              <div style={{ marginTop: "5px" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>${product.price.toLocaleString()}</span>
                <span style={{ fontSize: "12px", color: "#565959", textDecoration: "line-through", marginLeft: "8px" }}>${product.oldPrice.toLocaleString()}</span>
              </div>
              <p style={{ color: "#007185", fontSize: "12px", margin: "5px 0" }}>Envío prioritario disponible</p>
            </div>
          ))}
        </div>
      </main>

      {/* CUADRO DE DETALLES (MODAL) */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.8)", zIndex: 200, display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
          <div style={{ background: "#fff", borderRadius: "8px", maxWidth: "800px", width: "100%", display: "flex", flexWrap: "wrap", overflow: "hidden", position: "relative", maxHeight: "90vh" }}>
            <button onClick={() => setSelectedProduct(null)} style={{ position: "absolute", top: "10px", right: "10px", border: "none", background: "#eee", borderRadius: "50%", width: "30px", height: "30px", cursor: "pointer" }}>✕</button>
            
            <div style={{ flex: "1 1 300px", background: "#f7f7f7", padding: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={selectedProduct.image} style={{ maxWidth: "100%", maxHeight: "300px", objectFit: "contain" }} />
            </div>

            <div style={{ flex: "1 1 300px", padding: "30px", display: "flex", flexDirection: "column" }}>
              <h2 style={{ fontSize: "20px", margin: "0 0 10px 0" }}>{selectedProduct.name}</h2>
              <div style={{ color: "#ffa41c", marginBottom: "10px" }}>{"★".repeat(selectedProduct.rating)}{"☆".repeat(5-selectedProduct.rating)} <span style={{ color: "#007185", fontSize: "13px" }}>(2.105 reseñas)</span></div>
              <hr style={{ border: "0.5px solid #eee", marginBottom: "15px" }} />
              <div style={{ fontSize: "24px", color: "#B12704", fontWeight: "bold" }}>${selectedProduct.price.toLocaleString()}</div>
              
              <div style={{ marginTop: "15px" }}>
                <p style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>{t.detalles}:</p>
                <p style={{ fontSize: "13px", color: "#333", lineHeight: "1.4" }}>{selectedProduct.specs}</p>
              </div>

              <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "8px", paddingTop: "20px" }}>
                <button onClick={() => addToCart(selectedProduct)} style={{ background: "#ffd814", border: "1px solid #fcd200", padding: "10px", borderRadius: "20px", fontWeight: "bold", cursor: "pointer" }}>{t.agregar}</button>
                <button onClick={() => {
                   window.open(`https://wa.me, quiero información del ${selectedProduct.name}`);
                }} style={{ background: "#ffa41c", border: "1px solid #ff8f00", padding: "10px", borderRadius: "20px", fontWeight: "bold", cursor: "pointer" }}>Preguntar por WhatsApp</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
