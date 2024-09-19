import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <img src="https://placehold.co/1200x400" className="img-fluid" />

        <section className="py-4">
          <div className="text-center">
            <h2>Shopie</h2>
            <p>Welcome to the Shopie application!</p>
            <Link className="btn btn-primary" to="/products">
              Browse Products
            </Link>
          </div>
        </section>

        <section className="py-4">
          <div className="text-center">
            <h2>Trending</h2>
            <p>Checkout our trending products</p>
            <div className="row g-4 mt-2">
              <div className="col-md-4">
                <img
                  src="https://placehold.co/300x300"
                  alt="Product Image"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4">
                <img
                  src="https://placehold.co/300x300"
                  alt="Product Image"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4">
                <img
                  src="https://placehold.co/300x300"
                  alt="Product Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
