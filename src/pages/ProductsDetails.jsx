import Header from '../components/Header';
import Footer from '../components/Footer';

import { useParams } from 'react-router-dom';

const ProductsDetails = () => {
  const productId = useParams();
  console.log(productId);

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
  const itemData = products.find((item) => item.id == productId.productId);

  console.log(itemData);

  return (
    <>
      <Header />
      <main className="container p-4">
        <div>
          <h1 className="fw-normal">{itemData.name}</h1>
          <img
            src={itemData.productImgeUrl}
            alt="img"
            className="img-fluid py-3"
          />
          <p>Price: ${itemData.price}</p>
          <p>Description: {itemData.description}</p>
          <p>Available: {itemData.availableColors.join(',')}</p>
          <p>
            Return Policy:{' '}
            {itemData.isReturnApplicable === true
              ? 'Return applicable within 7 days.'
              : 'No Return policy'}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductsDetails;
