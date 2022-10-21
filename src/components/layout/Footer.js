import React from 'react';
import '../../styles/components/layuot/Footer.css'

const Footer = (props) => {
    return (
        <footer>
        <div className="holder, pie">
          <div className="pie_info">
            <img src="images/arbol.png" alt="logo" />
            <h3>Salud Integral Infantil</h3>
          </div>
          <div className="pie_datos">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10731.732665664069!2d-58.43687102243329!3d-34.60280039021653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1661621525622!5m2!1ses-419!2sar"
              width="180"
              height="180"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>
          <div className="pie_botones">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>
        <p>Creado por MCT 2022</p>
      </footer>
    );
}

export default Footer;
