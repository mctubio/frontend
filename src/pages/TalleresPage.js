import React from "react";
import "../styles/components/pages/TalleresPage.css";

const TalleresPage = (props) => {
  return (
    <main className="holder">
      <h2>Talleres para toda la comunidad</h2>
      <div className="taller_imagenes">
        <h3>Taller alimentación saludable para todo la familia</h3>
        <div className="imagenes">
          <img
            src="images/alimentacion/taller_saludable 01.jpg"
            alt="Saludable 01"
          />
          <img
            src="images/alimentacion/taller_saludable 02.jpg"
            alt="Saludable 02"
          />
          <img
            src="images/alimentacion/taller_saludable 03.jpg"
            alt="Saludable 03"
          />
          <img
            src="images/alimentacion/taller_saludable 04.jpg"
            alt="Saludable 04"
          />
          <img
            src="images/alimentacion/taller_saludable 05.jpg"
            alt="Saludable 05"
          />
          <img
            src="images/alimentacion/taller_saludable 06.jpg"
            alt="Saludable 06"
          />
          <img
            src="images/alimentacion/taller_saludable 07.jpg"
            alt="Saludable 07"
          />
        </div>
      </div>
      <div className="taller_imagenes">
        <h3>Taller de emergencias</h3>
        <div className="imagenes">
          <img src="images/rcp/rcp 01.jpg" alt="rcp 01" />
          <img src="images/rcp/rcp 02.jpg" alt="rcp 02" />
          <img src="images/rcp/rcp 03.jpg" alt="rcp 03" />
          <img src="images/rcp/rcp 04.jpg" alt="rcp 04" />
          <img src="images/rcp/rcp 05.jpg" alt="rcp 05" />
        </div>
      </div>
    </main>
  );
};

export default TalleresPage;
