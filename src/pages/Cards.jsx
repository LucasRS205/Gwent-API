import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";

function Cards() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await api.get("?key=data");
        const data = Object.values(response.data.response);
        setCards(data);
      } catch (error) {
        console.error("Erro:", error);
      }
    }

    fetchCards();
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = cards
      .map((card) => card.category)
      .filter(Boolean);

    return [...new Set(uniqueCategories)].sort();
  }, [cards]);

  const filteredCards = cards.filter((card) => {
    const matchesSearch = card.name
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || card.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: "32px", color: "white" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1 style={{ margin: 0 }}>Cartas de Gwent</h1>
          <p style={{ marginTop: "8px", color: "#bbb" }}>
            Explore cartas inspiradas no universo de The Witcher.
          </p>
        </div>

        <Link
          to="/"
          style={{
            background: "#d4af37",
            color: "#111",
            padding: "10px 18px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Voltar para Home
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          marginBottom: "24px",
        }}
      >
        
        <input
          type="text"
          placeholder="Buscar carta pelo nome..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #444",
            background: "#151823",
            color: "white",
            fontSize: "16px",
          }}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #444",
            background: "#151823",
            color: "white",
            fontSize: "16px",
            minWidth: "220px",
          }}
        >
          <option value="">Todas as categorias</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <p style={{ marginBottom: "20px", color: "#bbb" }}>
        {filteredCards.length} carta(s) encontrada(s)
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
        }}
      >
        {filteredCards.slice(0, 50).map((card, index) => {
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
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    height: "100%",
  }}
>
 <img
  src={`https://gwent.one/image/gwent/assets/card/card/${card.id?.card}.png`}
  alt={card.name}
  style={{
    width: "100%",
    borderRadius: "8px",
    marginBottom: "10px",
  }}
/>
  <h2>{card.name}</h2>

                <p>
                  <strong>Facção:</strong>{" "}
                  {attributes.faction ? (
                    <span style={{ color: "#d4af37" }}>
                      {attributes.faction}
                    </span>
                  ) : (
                    "Não informado"
                  )}
                </p>

                <p>
                  <strong>Categoria:</strong> {card.category || "Não informado"}
                </p>
                <p>
                  <strong>Tipo:</strong> {attributes.type || "Não informado"}
                </p>
                <p>
                  <strong>Poder:</strong> {attributes.power ?? "Não informado"}
                </p>
                <p>
                  <strong>Provisão:</strong>{" "}
                  {attributes.provision ?? "Não informado"}
                </p>
                <p>
                  <strong>Raridade:</strong>{" "}
                  {attributes.rarity || "Não informado"}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;