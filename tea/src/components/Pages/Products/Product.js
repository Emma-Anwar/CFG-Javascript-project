import React, { useState, useEffect } from "react";
import image1 from './Cust Apron.png';
import image2 from './Cust Mug.png';
import image3 from './Cust Straw Cup.png';
import image4 from './Cust Teacup.png';
import image5 from './Cust Teapot.png';
import './Product.css'

const images = [
  { src: image1, alt: "Cust Apron", caption: "CFG Tea Apron" },
  { src: image2, alt: "Cust Mug", caption: "CFG Tea Mug" },
  { src: image3, alt: "Cust Straw Cup", caption: "CFG Tea Travel Cup" },
  { src: image4, alt: "Cust Teacup", caption: "CFG Tea Cup" },
  { src: image5, alt: "Cust Teapot", caption: "CFG Tea Pot" }
];

const Product = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage => (currentImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Bespoke tea accessories</h2>
      <p>To brew the perfect cuppa</p>
      <div className="image-caption-box1">
        <img src={images[currentImage].src} alt={images[currentImage].alt} />
        <p className="caption">{images[currentImage].caption}</p>
      </div>
    </div>
  );
};

export default Product;