import React from "react";
import "../styles/components/pages/InformacionPage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NovedadItem from "../components/Novedades/novedadItem";

const InformacionPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/novedades");
      setNovedades(response.data);
      setLoading(false);
    };
    cargarNovedades();
  }, []);

  return (
    <main class="holder">
      {loading ? (
        <p>Cargando</p>
      ) : (
        novedades.map((item) => (
          <NovedadItem
            key={item.id}
            title={item.titulo}
            subtitle={item.subtitulo}
            imagen={item.imagen}
            body={item.cuerpo}
          />
        ))
      )}
    </main>
  );
};

export default InformacionPage;
