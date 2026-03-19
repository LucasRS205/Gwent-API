import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        padding: "32px",
      }}
    >
      <h1 style={{ fontSize: "56px", marginBottom: "16px" }}>
        Gwent Codex
      </h1>

      <p
        style={{
          maxWidth: "700px",
          fontSize: "20px",
          marginBottom: "16px",
          color: "#d1d5db",
        }}
      >
        Uma enciclopédia de cartas inspirada em Gwent, o jogo de cartas do
        universo de The Witcher.
      </p>

      <p
        style={{
          maxWidth: "700px",
          fontSize: "16px",
          marginBottom: "32px",
          color: "#9ca3af",
        }}
      >
        Explore cartas, pesquise por nome, filtre por categoria e visualize os
        detalhes de cada carta em páginas dinâmicas.
      </p>

      <Link
        to="/cards"
        style={{
          background: "#d4af37",
          color: "#111",
          padding: "14px 24px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        Explorar cartas
      </Link>
    </div>
  );
}

export default Home;