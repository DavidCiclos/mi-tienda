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
      puntuacion: "Calificación de clientes",
      comprarYa: "Finalizar compra por WhatsApp"
    },
    en: {
      placeholder: "Search Luxury Time...",
      agregar: "Add to cart",
      carrito: "Cart",
      vacio: "Your cart is empty",
      detalles: "Product specifications",
      puntuacion: "Customer rating",
      comprarYa: "Complete purchase via WhatsApp"
    }
  };

  const t = texts[lang];

  const products = [
    { id: 1, name: "Rolex Submariner Hulk - Esfera Verde", price: 42000000, oldPrice: 45000000, brand: "Rolex", rating: 5, specs: "Acero Oystersteel, Bisel Cerachrom verde, Hermético 300m.", image: "https://unsplash.com" },
    { id: 2, name: "Casio Edifice Classic Silver", price: 450000, oldPrice: 580000, brand: "Casio", rating: 4, specs: "Cristal mineral, Cronómetro de 1/10 segundos, Correa de acero.", image: "https://unsplash.com" },
    { id: 3, name: "Garmin Forerunner 55 Inteligente", price: 878990, oldPrice: 1175000, brand: "Garmin", rating: 5, specs: "GPS integrado, Monitor de frecuencia cardiaca, Autonomía 2 semanas.", image: "https://unsplash.com" },
  ];

  const addToCart = (product: any) => {
    setCart([...cart, product]);
    alert("Producto añadido");
  };

  const enviarWhatsApp = () => {
    if (cart.length === 0) return alert(t.vacio);
    let msg = `Hola, soy ${name || "un cliente"}. Me interesa comprar:\n` + cart.map(p => `- ${p.name} ($${p.price.toLocaleString()})`).join("\n");
    window.open(`https://wa.me{encodeURIComponent(msg)}`);
  };

  return (
    <div style={{ background: "#fff", color: "#0f1111", minHeight: "100vh", fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
      
      {/* HEADER TIPO AMAZON/VERCEL */}
      <header style={{ background: "#131921", padding: "10px 5%", display: "flex", alignItems: "center", gap: "20px", position: "sticky", top: 0, zIndex: 100 }}>
        <h1 style={{ color: "#fff", margin: 0, fontSize: "20px", fontWeight: "bold", cursor: "pointer" }} onClick={() => window.location.reload()}>LUXURY TIME</h1>
        
        <div style={{ flexGrow: 1, display: "flex" }}>
          <input 
            placeholder={t.placeholder}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "100%", padding: "10px 15px", borderRadius: "4px 0 0 4px", border: "none", outline: "none" }} 
          />
          <button style={{ background: "#febd69", border: "none", padding: "0 15px", borderRadius: "0 4px 4px 0", cursor: "pointer" }}>🔍</button>
        </div>

        <div style={{ display: "flex", gap: "20px", alignItems: "center", color: "#fff" }}>
          <button onClick={() => setLang(lang === "es" ? "en" : "es")} style={{ background: "transparent", border: "1px solid #ccc", color: "#fff", padding: "5px 10px", borderRadius: "3px", cursor: "pointer" }}>{lang.toUpperCase()}</button>
          <div onClick={enviarWhatsApp} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }}>
            <span style={{ color: "#febd69", fontWeight: "bold", fontSize: "18px" }}>{cart.length}</span>
            <span>{t.carrito}</span>
          </div>
        </div>
      </header>

      {/* CUERPO DE LA PAGINA - SIN FILTROS LATERALES */}
      <main style={{ padding: "20px 5%" }}>
        <p style={{ fontSize: "14px", color: "#565959" }}>Resultados para <span style={{ color: "#c45500", fontWeight: "bold" }}>"{search || "Relojes de Lujo"}"</span></p>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px", marginTop: "20px" }}>
          {products.filter(p => p.name.toLowerCase().includes(search.toLowerCase())).map(product => (
            <div key={product.id} onClick={() => setSelectedProduct(product)} style={{ border: "1px solid #e7e7e7", borderRadius: "8px", padding: "15px", cursor: "pointer", transition: "0.2s" }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"} onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}>
              <div style={{ height: "200px", display: "flex", justifyContent: "center", marginBottom: "15px" }}>
                <img src={product.image} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: "500", margin: "0 0 5px 0", lineHeight: "1.4" }}>{product.name}</h3>
              <div style={{ color: "#ffa41c", marginBottom: "5px" }}>{"★".repeat(product.rating)}{"☆".repeat(5-product.rating)}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                <span style={{ fontSize: "22px", fontWeight: "bold" }}>${product.price.toLocaleString()}</span>
                <span style={{ fontSize: "14px", color: "#565959", textDecoration: "line-through" }}>${product.oldPrice.toLocaleString()}</span>
              </div>
              <p style={{ color: "#007185", fontSize: "13px" }}>Envío GRATIS</p>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL DETALLE DE PRODUCTO */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.6)", zIndex: 200, display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
          <div style={{ background: "#fff", borderRadius: "10px", maxWidth: "900px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1.2fr", overflow: "hidden", position: "relative" }}>
            <button onClick={() => setSelectedProduct(null)} style={{ position: "absolute", top: "15px", right: "15px", border: "none", background: "none", fontSize: "24px", cursor: "pointer", zIndex: 10 }}>✕</button>
            
            <div style={{ background: "#f7f7f7", padding: "40px", display: "flex", justifyContent: "center" }}>
              <img src={selectedProduct.image} style={{ width: "100%", objectFit: "contain" }} />
            </div>

            <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "15px" }}>
              <h2 style={{ margin: 0, fontSize: "24px" }}>{selectedProduct.name}</h2>
              <div style={{ color: "#ffa41c" }}>{"★".repeat(selectedProduct.rating)}{"☆".repeat(5-selectedProduct.rating)} <span style={{ color: "#007185", fontSize: "14px", marginLeft: "10px" }}>2,453 calificaciones</span></div>
              <hr style={{ border: "0.5px solid #eee", width: "100%" }} />
              <div style={{ fontSize: "28px", color: "#B12704" }}>${selectedProduct.price.toLocaleString()}</div>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "5px" }}>{t.detalles}:</p>
                <p style={{ fontSize: "14px", color: "#333" }}>{selectedProduct.specs}</p>
              </div>

              <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
                <button onClick={() => addToCart(selectedProduct)} style={{ background: "#ffd814", border: "1px solid #fcd200", padding: "12px", borderRadius: "20px", fontWeight: "bold", cursor: "pointer" }}>{t.agregar}</button>
                <button onClick={() => {
                  window.open(`https://wa.me comprar el ${selectedProduct.name}`);
                }} style={{ background: "#ffa41c", border: "1px solid #ff8f00", padding: "12px", borderRadius: "20px", fontWeight: "bold", cursor: "pointer" }}>Comprar ahora</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



