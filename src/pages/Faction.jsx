import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../services/api";

function Faction() {
  const { name } = useParams();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await api.get("?key=data");
        const data = Object.values(response.data.response);

        const filtered = data.filter(
          (card) => card.attributes?.faction === decodeURIComponent(name)
        );

        setCards(filtered);
      } catch (error) {
        console.error("Erro:", error);
      }
    }

    fetchCards();
  }, [name]);

  return (
    <div style={{ padding: "32px", color: "white" }}>
      <Link to="/cards" style={{ color: "#d4af37", textDecoration: "none" }}>
        ← Voltar
      </Link>

      <h1 style={{ marginTop: "16px" }}>
        Facção: {decodeURIComponent(name)}
      </h1>

      <p style={{ marginBottom: "24px", color: "#bbb" }}>
        {cards.length} carta(s) encontrada(s)
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
        }}
      >
        {cards.map((card, index) => {
          const attributes = card.attributes || {};

          return (
            <Link
              key={index}
              to={`/card/${encodeURIComponent(card.name)}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div
                style={{
                  border: "1px solid #444",
                  borderRadius: "12px",
                  padding: "16px",
                  background: "#151823",
                }}
              >
                <h2>{card.name}</h2>
                <p><strong>Categoria:</strong> {card.category || "—"}</p>
                <p><strong>Tipo:</strong> {attributes.type || "—"}</p>
                <p><strong>Poder:</strong> {attributes.power ?? "—"}</p>
                <p><strong>Provisão:</strong> {attributes.provision ?? "—"}</p>
                <p><strong>Raridade:</strong> {attributes.rarity || "—"}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Faction;