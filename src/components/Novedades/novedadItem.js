import React from "react";
import "../../styles/components/pages/InformacionPage.css";

const NovedadItem = (props) => {
  const { title, subtitle, imagen, body } = props;
  return (
    <main className="holder">
      <div className="informacion">
        <div>
          <div className="noticia">
            <div className="colIzq">
              <img src={imagen} alt="imagen noticia" />
            </div>
            <div className="colDer">
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
            </div>
          </div>
          <div>
            <p dangerouslySetInnerHTML={{ __html: body }}></p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NovedadItem;
