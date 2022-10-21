import React from 'react';
import '../styles/components/pages/TurnosPage.css'

const TurnosPage = (props) => {
    return (
        <main className="holder">
      <div className="contacto">
        <div>
          <h2>Solicitar Información</h2>
          <form action="" method="" className="formulario">
            <p>
              <label for="nombre">Nombre y Apellido</label>
              <input type="text" name="" id="" />
            </p>
            <p>
              <label for="email">e mail</label>
              <input type="text" name="" id="" />
            </p>
            <p>
              <label for="telefono">Teléfono</label>
              <input type="text" name="" id="" />
            </p>
            <p>
              <label for="mensaje">Consulta</label>
              <textarea name="" id=""></textarea>
            </p>
            <p>
              <input type="submit" value="Enviar" />
            </p>
          </form>
        </div>
        <div className="datos">
          <h2>Solicitud de turnos</h2>
          <p>
            Podes pedir turnos con cualquier integrante del equipo a través de
            whatsapp
          </p>
          <i className="fa-brands fa-whatsapp"></i>
          <p>Entra a nuetras redes para conocer los próximos talleres!</p>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-tiktok"></i>
        </div>
      </div>
    </main>
    );
}

export default TurnosPage;
