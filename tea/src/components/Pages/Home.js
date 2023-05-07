import React from 'react';
import './Home.css';
import logo from '../TeaLogo.png';
import tea1 from './White Tea.png';
import tea2 from './black Tea.png';
import tea3 from './Green Tea.png';
import tea4 from './Oolong Tea2.png';

function Home() {
  return(
    <>  
    <h1>Welcome to CFG Tea</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <p> Imagine taking a moment to yourself, sitting down with a steaming cup of tea that fills the air with its rich aroma. As you take a sip, you feel the warmth spread throughout your body, soothing your soul and calming your mind. 
        At our online tea shop, we offer an extensive range of high-quality loose-leaf teas sourced from the finest tea gardens around the world. From fragrant and floral blends to bold and robust ones, we have something to suit every taste and preference. 
        Our teas are carefully selected and packaged to ensure freshness and flavor, so you can experience the true essence of each cup. Plus, with the convenience of online shopping, you can order your favorite teas from the comfort of your own home and have them delivered straight to your doorstep.
        We believe that tea is more than just a beverage; it's an experience, a moment of tranquility in a busy world. So why not indulge yourself and explore our collection of premium teas today? Your taste buds and your well-being will thank you for it.
      </p>
      <div className="image-caption-row">
  <div className="image-caption-box">
    <img src={tea1} alt="White Tea" />
    <p className="caption">There are many benefits of drinking white tea. The catechins in white tea help to lower blood pressure, improve blood circulation and prevent heart diseases such as a heart attack and stroke. As white tea is the least processed, it also retains the most antioxidants of all the teas</p>
  </div>
  <div className="image-caption-box">
    <img src={tea2} alt="Black Tea" />
    <p className="caption">Black tea packs a punch when it comes to heart health. Theaflavins help to lower blood cholesterol. And flavonoids — the same antioxidants found in red wine, dark chocolate and nuts —reduce the risk of heart disease by 8%.</p>
  </div>
</div>

<div className="image-caption-row">
  <div className="image-caption-box">
    <img src={tea3} alt="Green Tea" />
    <p className="caption">Green tea is loaded with antioxidants. Among its benefits, it may help support brain function and fat loss, help reduce the chance of developing heart disease, and offer some protection against cancer. Green tea is touted to be one of the healthiest beverages on the planet</p>
  </div>
  <div className="image-caption-box">
    <img src={tea4} alt="Oolong Tea" />
    <p className="caption">Studies show oolong tea stimulates fat burning and increases the number of calories your body burns by up to 3.4%. Oolong tea is high in an amino acid called L-theanine, which studies show has cognitive effects like improved brain activity, better sleep quality, and reduced stress and anxiety.</p>
  </div>
</div>

      </>

  );
}

export default Home;
