import React from "react";
import '../styles/components/pages/InformacionPage.css'

const InformacionPage = (props) => {
  return (
    <main class="holder">
      <div class="informacion">
        <img src="images/recursos.jpg" alt="informacion" />
        <div class="noticia">
          <h3>Título de la noticia</h3>
          <h4>Frase destacada</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            exercitationem vero hic fuga doloribus sequi minima eius natus
            placeat accusamus. Similique saepe accusantium repudiandae quidem
            tenetur voluptatem. Eveniet, nisi delectus. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Magni ad nostrum mollitia dolor
            porro! Dolorum dolore, corporis laudantium distinctio modi, aliquam
            ad dignissimos itaque quis necessitatibus aut maxime commodi totam.
          </p>
        </div>
      </div>
    </main>
  );
};

export default InformacionPage;
