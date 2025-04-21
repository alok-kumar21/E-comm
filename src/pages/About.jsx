import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => (
  <>
    <Header />
    <main className="container py-4">
      <h1 className="fw-normal">About Our Ecommerce Platform</h1>
      <p>
        Welcome to our your one-stop destination for all your shopping needs! We
        offer a wide range of high-quality products across categories like
        fashion, electronics, home essentials, beauty, and more—all at
        unbeatable prices. Our user-friendly interface makes browsing and
        purchasing a breeze,
      </p>
      <p>
        while secure payment options ensure a hassle-free experience. Enjoy fast
        and reliable shipping, exclusive deals, and exceptional customer service
        tailored to meet your needs.
      </p>
      <p>
        Whether you're upgrading your gadgets, revamping your wardrobe, or
        finding the perfect gift, we've got you covered. Shop with confidence
        and convenience at [Your Website Name], where quality meets
        affordability!
      </p>
    </main>
    <Footer />
  </>
);

export default About;
