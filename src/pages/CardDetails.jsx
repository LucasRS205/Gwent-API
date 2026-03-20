import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../services/api";

function CardDetails() {
  const { name } = useParams();
  const [card, setCard] = useState(null);
  const [cardHtml, setCardHtml] = useState("");

  useEffect(() => {
    async function fetchCard() {
      try {
        const response = await api.get("?key=data");
        const data = Object.values(response.data.response);

        const selectedCard = data.find(
          (item) => item.name === decodeURIComponent(name)
        );

        setCard(selectedCard || null);

        if (selectedCard?.id?.card) {
          const htmlResponse = await fetch(
            `https://api.gwent.one/?key=data&id=${selectedCard.id.card}&response=html`
          );
          const htmlText = await htmlResponse.text();
          setCardHtml(htmlText);
        }
      } catch (error) {
        console.error("Erro ao buscar detalhes da carta:", error);
      }
    }

    fetchCard();
  }, [name]);

  if (!card) {
    return (
      <div style={{ padding: "32px", color: "white" }}>
        <p>Carregando carta...</p>
        <Link to="/cards" style={{ color: "#d4af37" }}>
          Voltar
        </Link>
      </div>
    );
  }

  const attributes = card.attributes || {};

  return (
    <div style={{ padding: "32px", color: "white" }}>
      <Link to="/cards" style={{ color: "#d4af37", textDecoration: "none" }}>
        ← Voltar para cartas
      </Link>

      <div
        style={{
          marginTop: "24px",
          border: "1px solid #444",
          borderRadius: "12px",
          padding: "24px",
          background: "#151823",
          maxWidth: "900px",
        }}
      >
        <h1 style={{ marginBottom: "16px" }}>{card.name}</h1>

        <img
  src={`https://gwent.one/image/gwent/assets/card/art/high/${card.id?.art}.png`}
  alt={card.name}
  onError={(e) => {
    e.currentTarget.style.display = "none";
  }}
  style={{
    width: "100%",
    maxWidth: "420px",
    borderRadius: "12px",
    marginBottom: "20px",
    display: "block",
  }}
/>

        <p>
          <strong>Facção:</strong>{" "}
          {attributes.faction ? (
            <Link
              to={`/faction/${encodeURIComponent(attributes.faction)}`}
              style={{ color: "#d4af37" }}
            >
              {attributes.faction}
            </Link>
          ) : (
            "Não informado"
          )}
        </p>

        <p><strong>Categoria:</strong> {card.category || "Não informado"}</p>
        <p><strong>Tipo:</strong> {attributes.type || "Não informado"}</p>
        <p><strong>Cor:</strong> {attributes.color || "Não informado"}</p>
        <p><strong>Raridade:</strong> {attributes.rarity || "Não informado"}</p>
        <p><strong>Poder:</strong> {attributes.power ?? "Não informado"}</p>
        <p><strong>Armadura:</strong> {attributes.armor ?? "Não informado"}</p>
        <p><strong>Alcance:</strong> {attributes.reach ?? "Não informado"}</p>
        <p><strong>Provisão:</strong> {attributes.provision ?? "Não informado"}</p>
        <p><strong>Artista:</strong> {attributes.artist || "Não informado"}</p>
        <p><strong>Coleção:</strong> {attributes.set || "Não informado"}</p>
        <p><strong>ID da carta:</strong> {card.id?.card || "Não informado"}</p>

        <div style={{ marginTop: "20px" }}>
          <h2 style={{ marginBottom: "8px" }}>Habilidade</h2>
          <p style={{ lineHeight: "1.6" }}>
            {card.ability || "Não informado"}
          </p>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h2 style={{ marginBottom: "8px" }}>Flavor Text</h2>
          <p style={{ lineHeight: "1.6", fontStyle: "italic", color: "#d1d5db" }}>
            {card.flavor || "Não informado"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;