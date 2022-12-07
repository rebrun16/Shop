import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="wrapper">
          <span>BE IN TOUCH WITH US:</span>
          <div className="mail">
            <input type="text" placeholder="Enter your e-mail..." />
            <button>JOIN US</button>
          </div>
          <div className="icons">
            <a className="icon" href ="https://www.facebook.com/adidas/" target="_blank"><FacebookIcon /></a>
            <a className="icon" href ="https://www.instagram.com/adidas/" target="_blank"><InstagramIcon /></a>
            <a className="icon" href ="https://twitter.com/adidasoriginals" target="_blank"><TwitterIcon /></a>
            <GoogleIcon />
            <PinterestIcon />
          </div>
        </div>
        
      </div>
      <div className="contacts">
        <div className="wrapper">
          <div className="tels">
            <h1>Contacts with us:</h1>
            <div className="tel">
              <a href="tel:+380506044790">+380506044790</a>
              <PhoneIcon/>
            </div>
            <div className="tel">
              <a href="tel:+380506044790">+380663279878</a>
              <PhoneIcon/>
            </div>
            <div className="tel">
              <a href="tel:+380506044790">+380660295627</a>
              <PhoneIcon/>
            </div>
          </div>
          <div className="places">
            <h1>We are at the address:</h1>
            <div className="place">
              <p>st. Sumy, 16, Kharkiv</p>
              <PlaceIcon/>
            </div>
            <div className="place">
              <p>st. Sumy, 16, Kharkiv</p>
              <PlaceIcon/>
            </div>
            <div className="place">
              <p>st. Sumy, 16, Kharkiv</p>
              <PlaceIcon/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;