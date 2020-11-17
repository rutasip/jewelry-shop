import React from "react"
import { Link } from "gatsby"
import logo from '../assets/logo.png'
import search from "../assets/search.svg"
import cart from "../assets/shopping-cart.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-2">
            <div className="header__logo">
              <Link className="text-link" to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <nav className="header__menu">
              <ul>
                <li>
                  <Link className="text-link" to="/">
                    Pradinis
                  </Link>
                </li>
                <li>
                  <Link className="text-link" to="#">
                    Auskarai
                  </Link>
                </li>
                <li>
                  <Link className="text-link" to="#">
                    Pakabukai
                  </Link>
                </li>
                <li>
                  <Link className="text-link" to="#">
                    Žiedai
                  </Link>
                </li>
                <li>
                  <Link className="text-link" to="#">
                    Apyrankės
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-4">
            <div className="header__right">
              <div className="header__right__contacts">
                <Link className="text-link" to="#">
                  Apie Mus
                </Link>
              </div>
                    <form action="#" className="search">
                      <input type="text" placeholder="Paieška" />
                      <img src={search} className="icon_search" alt="Paieška" />
                    </form>
                  <Link className="text-link" to="#">
                    <img
                      src={cart}
                      className="icon_cart_alt"
                      alt="Pirkinių krepšelis"
                    />
                  </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
