import React from 'react';
import '../styles/components/pages/HomePage.css'

const homePage = (props) => {
    return (
        <main className="holder">
      <div className="columnas">
        <div className="col_1">
          <h2>
            Espacio para cuidar la salud integral de las infancias y
            adolscencias
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            recusandae, nobis odio assumenda consequuntur inventore? Incidunt
            tempora veniam provident excepturi rerum quis laboriosam veritatis
            numquam nulla, laborum a fugiat dignissimos. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Necessitatibus numquam
            consequatur ab fuga inventore quas doloremque quasi eos repudiandae
            vel suscipit doloribus, blanditiis ut animi, cupiditate hic qui
            laboriosam excepturi. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Maxime quod, ratione alias omnis atque, repellat
            fugit minima sapiente corrupti modi aperiam iure aliquid porro
            laudantium repudiandae repellendus adipisci ex distinctio?
          </p>
        </div>
        <div className="turnos">
          <div className="turnos_presenciales">
            <figure>
              <img src="images/index/consulta_presencial.jpg" alt="presencial" />
              
            </figure>
          </div>

          <div class="turnos_otros">
            <figure>
              <img src="images/index/consulta_virtual.jpg" alt="virtual" />
            
            </figure>
            <figure>
              <img src="images/index/consulta_domicilio.jpg" alt="domicilio" />
             
            </figure>
          </div>
        </div>
      </div>
    </main>
    );
}

export default homePage;
