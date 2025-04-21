import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="container py-4 mb-5">
        <div>
          <h1 className="display-3">Featured Products</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="card mt-3">
                <img
                  src="https://placehold.co/400x300"
                  alt="img Here"
                  className="img-fluid "
                />

                <div className="card-body">
                  <h4>Product 1</h4>
                  <p>
                    Description of Product 1. Lorem ipsum dolor sit amet,
                    consecteur adipicing elit.
                  </p>
                  <Link className="btn btn-primary" to="/products/1">
                    View Product
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mt-3">
                <img
                  src="https://placehold.co/400x300"
                  alt="img Here"
                  className="img-fluid "
                />

                <div className="card-body">
                  <h4>Product 2</h4>
                  <p>
                    Description of Product 2. Lorem ipsum dolor sit amet,
                    consecteur adipicing elit.
                  </p>
                  <Link className="btn btn-primary" to="/products/2">
                    View Product
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mt-3">
                <img
                  src="https://placehold.co/400x300"
                  alt="img Here"
                  className="img-fluid "
                />

                <div className="card-body">
                  <h4>Product 3</h4>
                  <p>
                    Description of Product 3. Lorem ipsum dolor sit amet,
                    consecteur adipicing elit.
                  </p>
                  <Link className="btn btn-primary" to="/products/3">
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
