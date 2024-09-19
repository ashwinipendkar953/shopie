import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h2>About Shopie</h2>
        <p>This is a Shopie application built with React and React Router. </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          pharetra auctor tortor, egestas accumsan velit sodales sit amet. Cras
          tempus ex risus, et sollicitudin velit accumsan ac. Cras finibus lorem
          sit amet nisl suscipit, et pulvinar orci lobortis.
        </p>
        <div className="row g-4 py-3">
          <div className="col-md-4">
            <img src="https://placehold.co/300x200" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src="https://placehold.co/300x200" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src="https://placehold.co/300x200" className="img-fluid" />
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          pharetra auctor tortor, egestas accumsan velit sodales sit amet. Cras
          tempus ex risus, et sollicitudin velit accumsan ac. Cras finibus lorem
          sit amet nisl suscipit, et pulvinar orci lobortis. Aliquam ultrices
          turpis vestibulum ultrices interdum. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Proin in nibh sit amet quam dapibus
          cursus. Suspendisse eget urna augue. Mauris egestas facilisis eros
          dignissim pretium.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          pharetra auctor tortor, egestas accumsan velit sodales sit amet. Cras
          tempus ex risus, et sollicitudin velit accumsan ac. Cras finibus lorem
          sit amet nisl suscipit, et pulvinar orci lobortis. Aliquam ultrices
          turpis vestibulum ultrices interdum. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Proin in nibh sit amet quam dapibus
          cursus. Suspendisse eget urna augue. Mauris egestas facilisis eros
          dignissim pretium.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          pharetra auctor tortor, egestas accumsan velit sodales sit amet. Cras
          tempus ex risus, et sollicitudin velit accumsan ac. Cras finibus lorem
          sit amet nisl suscipit, et pulvinar orci lobortis. Aliquam ultrices
          turpis vestibulum ultrices interdum. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Proin in nibh sit amet quam dapibus
          cursus. Suspendisse eget urna augue. Mauris egestas facilisis eros
          dignissim pretium.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;
