
export default function Home() {
  const products = [
    {
      id: 1,
      name: "Reloj Elegance Black",
      price: "$350.000",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Reloj Gold Premium",
      price: "$580.000",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Reloj Classic Silver",
      price: "$420.000",
      image: "https://via.placeholder.com/200"
    }
  ];

  return (
    <div style={{
      backgroundColor: "#0a0a0a",
      color: "white",
      minHeight: "100vh",
      fontFamily: "Arial"
    }}>

      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        borderBottom: "1px solid #333"
      }}>
        <h2 style={{ color: "#d4af37" }}>⌚ Luxury Time</h2>

        <nav>
          <span style={{ margin: "10px", cursor: "pointer" }}>Good</span>
          <span style={{ margin: "10px", cursor: "pointer" }}>Premium</span>
        </nav>
      </header>

      {/* SALUDO */}
      <div style={{ padding: "20px" }}>
        <h3 style={{ color: "#d4af37" }}>
          Hola, bienvenido 👋
        </h3>
        <p>¿Qué tal tu día? </p>
      </div>

      {/* PRODUCTOS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        padding: "20px"
      }}>
        {products.map((product) => (
          <div key={product.id} style={{
            backgroundColor: "#111",
            borderRadius: "15px",
            padding: "15px",
            textAlign: "center",
            border: "1px solid #333"
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />

            <h3 style={{ marginTop: "10px" }}>{product.name}</h3>

            <p style={{ color: "#d4af37", fontSize: "18px" }}>
              {product.price}
            </p>

            <button style={{
              marginTop: "10px",
              padding: "10px",
              width: "100%",
              backgroundColor: "#d4af37",
              border: "none",
              borderRadius: "10px",
              color: "black",
              fontWeight: "bold",
              cursor: "pointer"
            }}>
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
