import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { products } from "./Products";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id == productId);

  return (
    <>
      <Header />
      <main className="container py-4">
        <div className="card my-4">
          <div className="card-body">
            <h2>Product Details</h2>
            <div className="row g-4 py-3 ">
              <div className="col-md-3">
                <img
                  src={product.productImg1}
                  alt={`${product.name} Image`}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3">
                <img
                  src={product.productImg2}
                  alt={`${product.name} Image`}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3">
                <img
                  src={product.productImg3}
                  alt={`${product.name} Image`}
                  className="img-fluid"
                />
              </div>
            </div>
            <p className="card-text">ID: {product.id}</p>
            <p className="card-text">Name: {product.name}</p>
            <p className="card-text">Description: {product.description}</p>
            <p>Price: INR {product.price}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
