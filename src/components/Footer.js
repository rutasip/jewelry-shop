import React from 'react'
import { Link } from "gatsby"
import logo from "../assets/logo.png"
import twitter from "../assets/social-icons/twitter.svg"
import youtube from "../assets/social-icons/youtube.svg"
import instagram from "../assets/social-icons/instagram.svg"
import facebook from "../assets/social-icons/facebook.svg"
import pinterest from "../assets/social-icons/pinterest.svg"

const Header = () => {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <div className="footer__about">
                <div className="footer__logo">
                  <Link className="text-link" to="/">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
                <p>
                Aenean cursus dui vitae venenatis convallis. Donec mattis quam tincidunt velit mollis, et venenatis leo aliquam.
                </p>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="footer__social">
                <h6>Sekite mus socialiniuose tinkluose:</h6>
                <div className="footer__social-links">
                  <a href="https://www.facebook.com/">
                    <img src={facebook} alt="Facebook" />
                  </a>
                  <a href="https://www.twitter.com/">
                    <img src={twitter} alt="Twitter" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <img src={instagram} alt="Instagram" />
                  </a>
                  <a href="https://www.youtube.com/">
                    <img src={youtube} alt="Youtube" />
                  </a>
                  <a href="https://www.pinterest.com/">
                    <img src={pinterest} alt="Pinterest" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Header