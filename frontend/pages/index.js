
import { Card } from "react-bootstrap";
import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css"
export default function Home() {
  return (
    <div className="container pt-4">
      <div className="row">
        <h1>HomEpage </h1>
        <hr />
    
{/* <Card>
    <Card.Img 
Image src="/images/Contact.jpg" width={300} height={230}/>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card> */}
 
    <div className='bg-image' style={{ maxWidth: '24rem' }}>
      <img src='https://mdbcdn.b-cdn.net/img/new/standard/city/053.webp' className='img-fluid' alt='Sample' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <p className='text-white mb-0'>Can you see me?</p>
        <div className='d-flex justify-content-center align-items-center h-100'>
         
        </div>
      </div>
    </div>

      </div>
    </div>
  );
}
