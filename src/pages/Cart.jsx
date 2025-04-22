import Header from '../components/Header';
import Footer from '../components/Footer';

const Cart = () => {
  const cart = [
    {
      id: 1,
      name: 'Product 1',
      price: 99.99,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 129.99,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 79.99,
      quantity: 3,
    },
  ];

  const total = cart.reduce((acc, curr) => {
    const newObj = { ...curr, totalPrice: curr.price * curr.quantity };

    acc.push(newObj);

    return acc;
  }, []);

  const price = total.reduce((acc, curr) => acc + curr.totalPrice, 0);

  return (
    <>
      <Header />
      <main className="container py-4">
        <ul className="list-group">
          {total.map((data) => (
            <li className="list-group-item">
              <p className="float-end">
                <small>Total Price: ${data.totalPrice.toFixed(2)}</small>
              </p>
              <h5>{data.name}</h5>

              <p>
                <small>Price: ${data.price}</small>
              </p>
              <p>
                <small>Quantity: ${data.quantity}</small>
              </p>
            </li>
          ))}
        </ul>
        <br />
        <h4>Total Price: ${price}</h4>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
