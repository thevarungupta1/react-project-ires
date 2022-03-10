import React from "react";
import Navbar from "../../component/Navbar";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="jumbatron text-center">
        <h1 className="display-4">About Us</h1>
        <p className="lead">This is some text from the about us</p>
      </div>
      <div
        className="container"
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <section>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            molestiae quis sequi consectetur tempora. Itaque sint nesciunt
            deleniti fugiat, accusamus ut quisquam provident quasi rem, expedita
            autem ipsa illo dolorum incidunt iusto suscipit consectetur vitae
            eum magni voluptate! At dicta aperiam natus! Omnis sunt libero
            nulla, atque incidunt eum delectus sapiente reiciendis, blanditiis
            reprehenderit natus et magnam. Dolores aliquid nemo, nesciunt
            voluptatem unde officiis quidem illo ullam deserunt iste provident
            ex recusandae minima illum maiores vitae ipsam similique facilis hic
            esse at amet fugit beatae! Odio sequi, deleniti magni aspernatur eum
            maiores cum animi repudiandae quae voluptas sit vel quos.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            debitis nulla officia, quos molestias repellendus incidunt? Sapiente
            neque optio animi esse, atque nemo ipsam sunt non mollitia sint
            fugiat, debitis alias quae officiis quidem cum distinctio! Libero
            iure aliquid explicabo rerum omnis natus odio asperiores voluptatem!
            Atque doloribus pariatur aspernatur architecto molestias, itaque a
            eveniet ratione dolores assumenda debitis adipisci, voluptates
            dolorum hic nam blanditiis mollitia accusamus perferendis quam saepe
            laborum? Minus nobis, earum cumque ratione architecto iste
            molestiae. Velit consequatur minima quasi reprehenderit qui? Officia
            veniam nisi, deserunt neque quas, nostrum quod mollitia debitis,
            architecto tempora incidunt atque! Maxime?
          </p>
        </section>
      </div>
    </div>
  );
};
export default AboutPage;
