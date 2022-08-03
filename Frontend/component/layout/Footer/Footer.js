import React from "react";
import playStore from "../../../images1/playstore.png";
import appStore from "../../../images1/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ELIXIR.</h1>
        <p>Quality in Perfection</p>

        <p>Copyrights 2021 &copy; ElixirCorp</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/ig_ntmr">Instagram</a>
        <a href="http://youtube.com/">Youtube</a>
        <a href="http://instagram.com/ig_ntmr">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
