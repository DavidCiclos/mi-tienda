"use welcome";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [cart, setCart] = useState<any[]>([]);
  const [lang, setLang] = useState<"es" | "en">("es");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const texts = {
    es: {
      saludo: "Hola",
      placeholder: "¿Qué buscas hoy?",
      comprar: "Añadir al carrito",
      carrito: "Mi Carrito",
      good: "Colección Esencial",
      premium: "Lo más Exclusivo",
      vacio: "Tu carrito está vacío",
      ver: "Ver producto",
      agregar: "Agregar ya"
    },
    en: {
      saludo: "Hello",
      placeholder: "What are you looking for?",
      comprar: "Add to cart",
      carrito: "My Cart",
      good: "Essential Collection",
      premium: "Most Exclusive",
      vacio: "Your cart is empty",
      ver: "View product",
      agregar: "Add now"
    }
  };

  const t = texts[lang];

  const products = [
    { id: 1, name: "Classic Silver Watch", price: 420000, oldPrice: 525000, category: "good", images: ["https://unsplash.com"], description: "Reloj elegante en acero inoxidable, resistente al agua." },
    { id: 2, name: "Black Minimal Watch", price: 350000, oldPrice: 410000, category: "good", images: ["https://unsplash.com"], description: "Reloj minimalista con pulsera de cuero negro." },
    { id: 3, name: "Golden Luxury Watch", price: 580000, oldPrice: 720000, category: "premium", images: ["https://unsplash.com"], description: "Acabados en oro de 18k, cristal de zafiro." },
    { id: 4, name: "Diamond Elite Watch", price: 950000, oldPrice: 1200000, category: "premium", images: ["https://unsplash.com"], description: "Incrustaciones de diamante auténtico, edición limitada." }
  ];

  const addToCart = (product: any) => {
    setCart([...cart, product]);
    alert(`${product.name} agregado ✅`);
  };

  const comprarTodo = () => {
    if (cart.length === 0) { alert(t.vacio); return; }
    let mensaje = `Hola, soy ${name || "cliente"} y quiero comprar:\n` + cart.map(p => `- ${p.name} ($${p.price.toLocaleString()})`).join("\n");
    window.open(`https://wa.me{encodeURIComponent(mensaje)}`);
  };

  const renderSection = (title: string, type: string) => (
    <div style={{ padding: "20px 5%", marginBottom: "40px" }}>
      <h2 style={{ color: "#333", fontSize: "24px", fontWeight: "800", marginBottom: "20px", borderLeft: "5px solid #ffcc00", paddingLeft: "15px" }}>{title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
        {products.filter(p => p.category === type).map(product => (
          <div key={product.id} onClick={() => setSelectedProduct(product)} style={{ background: "white", borderRadius: "12px", border: "1px solid #eee", overflow: "hidden", transition: "0.3s", cursor: "pointer", display: "flex", flexDirection: "column", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
            <div style={{ position: "relative" }}>
              <img src={product.images[0]} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ position: "absolute", top: "10px", left: "10px", background: "#000", color: "white", padding: "2px 8px", fontSize: "12px", fontWeight: "bold", borderRadius: "4px" }}>-{Math.round((1 - product.price/product.oldPrice)*100)}%</div>
            </div>
            <div style={{ padding: "15px", flexGrow: 1 }}>
              <p style={{ fontSize: "12px", color: "#888", marginBottom: "5px" }}>CASIO</p>
              <h3 style={{ fontSize: "15px", color: "#333", margin: "0 0 10px 0", height: "40px", overflow: "hidden" }}>{product.name}</h3>
              <p style={{ textDecoration: "line-through", color: "#bbb", fontSize: "13px", margin: 0 }}>${product.oldPrice.toLocaleString()}</p>
              <p style={{ color: "#000", fontWeight: "bold", fontSize: "20px", margin: 0 }}>${product.price.toLocaleString()}</p>
            </div>
            <button onClick={(e) => { e.stopPropagation(); addToCart(product); }} style={{ width: "100%", padding: "12px", background: "#ff6d00", color: "white", border: "none", fontWeight: "bold", cursor: "pointer" }}>{t.agregar}</button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ background: "#f8f9fa", color: "#333", minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      {/* HEADER TIPO ÉXITO */}
      <header style={{ background: "#ffcc00", padding: "15px 5%", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <h1 style={{ margin: 0, fontSize: "22px", fontWeight: "900", color: "#000" }}>⌚ LUXURY TIME</h1>
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <button onClick={() => setLang(lang === "es" ? "en" : "es")} style={{ background: "white", border: "none", padding: "8px 12px", borderRadius: "20px", fontWeight: "bold", cursor: "pointer" }}>🌐 {lang.toUpperCase()}</button>
          <button onClick={comprarTodo} style={{ background: "#000", color: "white", padding: "10px 20px", borderRadius: "20px", border: "none", fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>🛒 <span>{cart.length}</span></button>
        </div>
      </header>

      {/* BUSCADOR FICTICIO */}
      <div style={{ padding: "30px 5% 10px 5%" }}>
        <div style={{ position: "relative", maxWidth: "600px", margin: "0 auto" }}>
          <input placeholder={t.placeholder} value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "15px 25px", borderRadius: "30px", border: "1px solid #ddd", fontSize: "16px", outline: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
        </div>
        <p style={{ textAlign: "center", marginTop: "15px", color: "#666" }}>{t.saludo}, <strong>{name || (lang === "es" ? "cliente" : "customer")}</strong> 👋</p>
      </div>

      {/* SECCIONES */}
      {renderSection(t.good, "good")}
      {renderSection(t.premium, "premium")}

      {/* MODAL DE PRODUCTO */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.7)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000, padding: "20px" }}>
          <div style={{ background: "white", padding: "30px", borderRadius: "15px", maxWidth: "500px", width: "100%", position: "relative" }}>
            <button onClick={() => setSelectedProduct(null)} style={{ position: "absolute", top: "15px", right: "15px", border: "none", background: "none", fontSize: "20px", cursor: "pointer" }}>✕</button>
            <img src={selectedProduct.images[0]} style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }} />
            <h2 style={{ margin: "0 0 10px 0" }}>{selectedProduct.name}</h2>
            <p style={{ color: "#ff6d00", fontSize: "24px", fontWeight: "bold", margin: "0 0 15px 0" }}>${selectedProduct.price.toLocaleString()}</p>
            <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "25px" }}>{selectedProduct.description}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <button onClick={() => addToCart(selectedProduct)} style={{ padding: "15px", borderRadius: "10px", border: "2px solid #ff6d00", color: "#ff6d00", fontWeight: "bold", background: "white", cursor: "pointer" }}>{t.comprar}</button>
              <button onClick={() => window.open(`https://wa.me, quiero el ${selectedProduct.name}`)} style={{ padding: "15px", borderRadius: "10px", border: "none", background: "#25D366", color: "white", fontWeight: "bold", cursor: "pointer" }}>WhatsApp</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


