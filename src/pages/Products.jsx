import Header from '../components/Header';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

const Products = () => (
  <>
    <Header />
    <main className="container mb-5">
      <div>
        <h1 className="fw-normal">Products</h1>
      </div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://placehold.co/300x300"
              className="img-fluid rounded-start"
              alt="img here"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              <p className="card-text">
                Description of Product 1 Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.sed tristique fringilla ipsum, nec tincidunt
                turpis elementum nec.
              </p>

              <p className="card-text">
                <small className="text-body-secondary">Price: $99.99</small>
              </p>
              <Link className="btn btn-primary " to="/products/1">
                View Product
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://placehold.co/300x300"
              className="img-fluid rounded-start"
              alt="img here"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Product 2</h5>
              <p className="card-text">
                Description of Product 1 Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.sed tristique fringilla ipsum, nec tincidunt
                turpis elementum nec.
              </p>

              <p className="card-text">
                <small className="text-body-secondary">Price: $1299.99</small>
              </p>
              <Link className="btn btn-primary " to="/products/2">
                View Product
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://placehold.co/300x300"
              className="img-fluid rounded-start"
              alt="img here"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-text">
                Description of Product 1 Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.sed tristique fringilla ipsum, nec tincidunt
                turpis elementum nec.
              </p>

              <p className="card-text">
                <small className="text-body-secondary">Price: $79.99</small>
              </p>
              <Link className="btn btn-primary " to="/products/3">
                View Product
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://placehold.co/300x300"
              className="img-fluid rounded-start"
              alt="img here"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Product 4</h5>
              <p className="card-text">
                Description of Product 1 Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.sed tristique fringilla ipsum, nec tincidunt
                turpis elementum nec.
              </p>

              <p className="card-text">
                <small className="text-body-secondary">Price: $49.99</small>
              </p>
              <Link className="btn btn-primary " to="/products/4">
                View Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Products;
