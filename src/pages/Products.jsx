import Header from '../components/Header';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description:
        'This is Description of Product 1. Lorem ipsum dolor sit amet consectetur adipiscing elit',
      price: 99.99,
      availableColors: ['Red', 'Bule', 'Green'],
      isReturnApplicable: true,
      productImgeUrl: 'https://placehold.co/300x200',
    },
    {
      id: 2,
      name: 'Product 2',
      description:
        'This is Description of Product 1. Lorem ipsum dolor sit amet consectetur adipiscing elit',
      price: 129.99,
      availableColors: ['White', 'Black'],
      isReturnApplicable: true,
      productImgeUrl: 'https://placehold.co/300x200',
    },
    {
      id: 3,
      name: 'Product 3',
      description:
        'This is Description of Product 1. Lorem ipsum dolor sit amet consectetur adipiscing elit',
      price: 79.99,
      availableColors: ['Yellow'],
      isReturnApplicable: false,
      productImgeUrl: 'https://placehold.co/300x200',
    },
    {
      id: 4,
      name: 'Product 4',
      description:
        'This is Description of Product 1. Lorem ipsum dolor sit amet consectetur adipiscing elit',
      price: 49.99,
      availableColors: ['Purple', 'Yellow'],
      isReturnApplicable: true,
      productImgeUrl: 'https://placehold.co/300x200',
    },
  ];

  const affordableProducts = products.filter((item) => item.price < 80);

  console.log(affordableProducts);

  return (
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
                  Description of Product 1 Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.sed tristique fringilla ipsum, nec
                  tincidunt turpis elementum nec.
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
                  Description of Product 1 Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.sed tristique fringilla ipsum, nec
                  tincidunt turpis elementum nec.
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
                  Description of Product 1 Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.sed tristique fringilla ipsum, nec
                  tincidunt turpis elementum nec.
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
                  Description of Product 1 Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.sed tristique fringilla ipsum, nec
                  tincidunt turpis elementum nec.
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
        <hr />
        <section className="mb-5">
          <h1 className="fw-normal">Affordable Products</h1>
          {affordableProducts.map((item) => (
            <div>
              <h5>{item.name}</h5>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
