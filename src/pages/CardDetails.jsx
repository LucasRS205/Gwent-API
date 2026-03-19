import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import { api } from '../services/api';

function CardDetails() {
    const { name } = useParams();
    const [card, setCard] = useState(null);

    useEffect(() => {
        async function fetchCard() {
            try {
                const response = await api.get("?key=data")
                const data = Object.values(response.data.response);

                const selectedCard = data.find(
                    (item) => item.name === decodeURIComponent(name)
                );
                setCard(selectedCard || null)
            } catch (error) {
                console.error("Erro:", error);
            }
        }
        fetchCard()
    }, [name]);

    if(!card) {
        return (
            <div style={{ padding: "32px", color: "white" }}>
                <p>Carregando...</p>
                <Link to="/" style={{ color: "#d4af37"}}> Voltar</Link>
                </div>
        );
    }
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
          maxWidth: "700px",
        }}
      >
        <h1>{card.name}</h1>

        <p><strong>Facção:</strong> {card.faction || "Não informado"}</p>
        <p><strong>Categoria:</strong> {card.category || "Não informado"}</p>
        <p><strong>Poder:</strong> {card.power || "Não informado"}</p>
        <p><strong>Provisão:</strong> {card.provision || "Não informado"}</p>
        <p><strong>Tipo:</strong> {card.type || "Não informado"}</p>
        <p><strong>Raridade:</strong> {card.rarity || "Não informado"}</p>
        <p><strong>Descrição:</strong> {card.ability || "Não informado"}</p>
      </div>
    </div>
        );
    }
export default CardDetails;
