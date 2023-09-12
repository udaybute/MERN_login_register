import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Carousel, Card, Button, Dropdown } from 'react-bootstrap';

const Home = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Online Store</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Categories
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#category1">Category 1</Dropdown.Item>
            <Dropdown.Item href="#category2">Category 2</Dropdown.Item>
            <Dropdown.Item href="#category3">Category 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>

      <Carousel className="h-25">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="p1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to our Online Store</h3>
            <p>Explore our wide range of products</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="p2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Shop with Confidence</h3>
            <p>Secure payment and fast delivery</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container mt-5">
        <h2>Featured Products</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <Card style={{ width: '18rem' }} className="mb-3">
                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div id="about" className="container mt-5">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div id="contact" className="container mt-5">
        <h2>Contact Us</h2>
        <p>Email: contact@example.com</p>
        <p>Phone: 123-456-7890</p>
      </div>

      <div className="container mt-5">
        <h2>Testimonials</h2>
        <div className="row">
          <div className="col-md-6">
            <blockquote className="blockquote">
              <p className="mb-0">"Great products and excellent service!"</p>
              <footer className="blockquote-footer">John Doe</footer>
            </blockquote>
          </div>
          <div className="col-md-6">
            <blockquote className="blockquote">
              <p className="mb-0">"Highly recommended. Will definitely shop again!"</p>
              <footer className="blockquote-footer">Jane Smith</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;