"use client";
import { useState, useMemo } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [cart, setCart] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // PRODUCTOS CON DATOS REALES DE "AMAZON/EXITO"
  const products = [
    { id: 1, name: "Reloj Garmin Forerunner 55 - GPS y Entrenamiento", price: 878990, oldPrice: 1175000, brand: "GARMIN", rating: 5, reviews: "2,453", specs: "GPS integrado, sugerencias de entrenamiento, monitor de energía Body Battery.", image: "https://unsplash.com" },
    { id: 2, name: "Casio MTP-1239D-7A - Reloj Clásico de Acero", price: 235900, oldPrice: 487900, brand: "CASIO", rating: 4, reviews: "1,102", specs: "Resistente al agua, calendario de día y fecha, duración de batería de 3 años.", image: "https://unsplash.com" },
    { id: 3, name: "Smartwatch Elegance - Pantalla Táctil HD Rosa", price: 157900, oldPrice: 287000, brand: "GENERIC", rating: 4, reviews: "856", specs: "Monitor de sueño, notificaciones de apps, múltiples modos deportivos.", image: "https://unsplash.com" },
    { id: 4, name: "Rolex Submariner Date - Luxury Edition 2024", price: 45000000, oldPrice: 48500000, brand: "ROLEX", rating: 5, reviews: "45", specs: "Acero Oystersteel, Bisel Cerachrom, Movimiento 3235 automático.", image: "https://unsplash.com" }
  ];

  // LOGICA DE BUSQUEDA REAL
  const filteredProducts = useMemo(() => {
    return products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const checkoutWhatsApp = () => {
    if (cart.length === 0) return alert("Tu carrito está vacío");
    const total = cart.reduce((acc, p) => acc + p.price, 0);
    let msg = `🛍️ *Pedido Luxury Time*\nCliente: ${name || "Interesado"}\n\n`;
    cart.forEach(p => msg += `• ${p.name} - $${p.price.toLocaleString()}\n`);
    msg += `\n*TOTAL: $${total.toLocaleString()}*`;
    window.open(`https://wa.me{encodeURIComponent(msg)}`);
  };

  return (
    <div style={{ background: "#EAEDED", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      
      {/* NAVBAR SUPERIOR TIPO AMAZON */}
      <header style={{ background: "#131921", padding: "10px 20px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: "1500px", margin: "0 auto", display: "flex", alignItems: "center", gap: "20px" }}>
          <h1 style={{ color: "white", fontSize: "20px", fontWeight: "bold", margin: 0, cursor: "pointer" }}>LuxuryTime</h1>
          
          <div style={{ flex: 1, display: "flex" }}>
            <input 
              placeholder="Buscar relojes, marcas o estilos..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "100%", padding: "10px 15px", borderRadius: "4px 0 0 4px", border: "none", outline: "none", fontSize: "15px" }}
            />
            <button style={{ background: "#febd69", border: "none", padding: "0 15px", borderRadius: "0 4px 4px 0", cursor: "pointer" }}>🔍</button>
          </div>

          <div style={{ display: "flex", gap: "20px", alignItems: "center", color: "white" }}>
            <div style={{ cursor: "pointer" }} onClick={checkoutWhatsApp}>
              <p style={{ margin: 0, fontSize: "12px" }}>Finalizar</p>
              <span style={{ fontWeight: "bold" }}>Pedido WhatsApp</span>
            </div>
            <div onClick={checkoutWhatsApp} style={{ display: "flex", alignItems: "center", cursor: "pointer", position: "relative" }}>
              <span style={{ fontSize: "30px" }}>🛒</span>
              <span style={{ position: "absolute", top: "0", right: "-5px", background: "#f08804", color: "black", borderRadius: "50%", padding: "2px 6px", fontSize: "12px", fontWeight: "bold" }}>{cart.length}</span>
            </div>
          </div>
        </div>
      </header>

      {/* BARRA DE BIENVENIDA */}
      <div style={{ background: "#232f3e", color: "white", padding: "8px 20px", fontSize: "13px" }}>
        <span>Hola, </span>
        <input 
          placeholder="Escribe tu nombre..." 
          onChange={(e) => setName(e.target.value)}
          style={{ background: "transparent", border: "none", color: "#febd69", fontWeight: "bold", outline: "none" }}
        />
        <span style={{ marginLeft: "20px" }}>Ofertas del día</span>
        <span style={{ marginLeft: "20px" }}>Marcas de Lujo</span>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <main style={{ maxWidth: "1500px", margin: "0 auto", padding: "20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "15px" }}>
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              onClick={() => setSelectedProduct(product)}
              style={{ background: "white", padding: "15px", border: "1px solid #ddd", borderRadius: "4px", cursor: "pointer" }}
            >
              <div style={{ height: "200px", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
                <img src={product.image} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: "400", color: "#0f1111", margin: "0 0 5px 0", lineHeight: "1.3", height: "42px", overflow: "hidden" }}>{product.name}</h3>
              <div style={{ color: "#ffa41c", fontSize: "14px" }}>{"★".repeat(product.rating)}{"☆".repeat(5-product.rating)} <span style={{ color: "#007185" }}>{product.reviews}</span></div>
              <div style={{ marginTop: "10px" }}>
                <span style={{ fontSize: "13px", verticalAlign: "top", marginTop: "4px", display: "inline-block" }}>$</span>
                <span style={{ fontSize: "28px", fontWeight: "500" }}>{(product.price).toLocaleString()}</span>
              </div>
              <p style={{ color: "#565959", fontSize: "13px", textDecoration: "line-through" }}>${product.oldPrice.toLocaleString()}</p>
              <p style={{ color: "#007600", fontSize: "13px", fontWeight: "bold" }}>Envío GRATIS</p>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL DETALLADO ESTILO AMAZON */}
      {selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.7)", zIndex: 1000, display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
          <div style={{ background: "white", borderRadius: "8px", maxWidth: "1000px", width: "100%", maxHeight: "90vh", overflowY: "auto", position: "relative", display: "flex", flexWrap: "wrap", padding: "40px" }}>
            <button onClick={() => setSelectedProduct(null)} style={{ position: "absolute", top: "15px", right: "20px", border: "none", background: "none", fontSize: "24px", cursor: "pointer" }}>✕</button>
            
            {/* LADO IZQUIERDO: IMAGEN */}
            <div style={{ flex: "1 1 400px", textAlign: "center" }}>
              <img src={selectedProduct.image} style={{ maxWidth: "100%", maxHeight: "400px", objectFit: "contain" }} />
            </div>

            {/* LADO DERECHO: INFO */}
            <div style={{ flex: "1 1 400px", padding: "0 20px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "400", margin: "0 0 10px 0" }}>{selectedProduct.name}</h2>
              <p style={{ color: "#007185", fontSize: "14px" }}>Marca: {selectedProduct.brand}</p>
              <div style={{ color: "#ffa41c", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
                {"★".repeat(selectedProduct.rating)}{"☆".repeat(5-selectedProduct.rating)} | <span style={{ color: "#007185" }}>{selectedProduct.reviews} calificaciones</span>
              </div>
              
              <div style={{ margin: "20px 0" }}>
                <span style={{ color: "#B12704", fontSize: "28px" }}>${selectedProduct.price.toLocaleString()}</span>
                <p style={{ fontSize: "14px", color: "#565959" }}>Precios incluyen IVA.</p>
              </div>

              <div style={{ background: "#f7f7f7", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                <p style={{ fontSize: "14px", fontWeight: "bold", margin: "0 0 5px 0" }}>Sobre este artículo:</p>
                <p style={{ fontSize: "14px", color: "#333", margin: 0 }}>{selectedProduct.specs}</p>
              </div>

              {/* BOTONES DE ACCION */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <button onClick={() => { addToCart(selectedProduct); alert("Añadido!"); }} style={{ background: "#ffd814", border: "1px solid #fcd200", borderRadius: "20px", padding: "12px", fontWeight: "bold", cursor: "pointer" }}>Añadir al Carrito</button>
                <button onClick={() => window.open(`https://wa.me interesa el ${selectedProduct.name}`)} style={{ background: "#ffa41c", border: "1px solid #ff8f00", borderRadius: "20px", padding: "12px", fontWeight: "bold", cursor: "pointer" }}>Comprar ahora</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
