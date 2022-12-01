import React from "react";
import "../styles/components/pages/TurnosPage.css";
import { useState } from "react";
import axios from "axios";

const TurnosPage = (props) => {
  const initialForm = {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response = await axios.post(
      "http://localhost:3000/api/contacto",
      formData
    );
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };
  return (
    <main className="holder">
      <div className="contacto">
        <div>
          <h2>Solicitar Información</h2>
          <form
            action="/contacto"
            method="post"
            className="formulario"
            onSubmit={handleSubmit}
          >
            <p>
              <label for="nombre">Nombre y Apellido</label>
              <input
                type="text"
                name="nombre"
                id=""
                value={formData.nombre}
                onChange={handleChange}
              />
            </p>
            <p>
              <label for="email">e mail</label>
              <input
                type="text"
                name="email"
                id=""
                value={formData.email}
                onChange={handleChange}
              />
            </p>
            <p>
              <label for="telefono">Teléfono</label>
              <input
                type="text"
                name="telefono"
                id=""
                value={formData.telefono}
                onChange={handleChange}
              />
            </p>
            <p>
              <label for="mensaje">Consulta</label>
              <textarea
                name="mensaje"
                id=""
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
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
      {sending ? (
        <p className="pMsg">
    
          <div class="fa-2x">
            <i class=" fa-spin fa-solid fa-sync fa-hourglass"></i>
          </div>
        </p>
      ) : null}
      {msg ? <p className="pMsg">{msg}</p> : null}
    </main>
  );
};

export default TurnosPage;
