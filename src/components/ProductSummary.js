import React from "react"
import { Link } from "gatsby"
import star from "../assets/star.svg"

const productImages = [
  require("../assets/products/1/1.jpg"),
  require("../assets/products/1/2.jpg"),
  require("../assets/products/1/3.jpg"),
  require("../assets/products/1/4.jpg"),
  require("../assets/products/1/5.jpg"),
  require("../assets/products/1/6.jpg"),
  require("../assets/products/1/7.jpg"),
  require("../assets/products/1/8.jpg"),
  require("../assets/products/1/9.jpg"),
  require("../assets/products/1/10.jpg"),
  require("../assets/products/1/11.jpg"),
]

function getIndex() {
    return Math.floor(Math.random() * productImages.length)
}

const ProductSummary = () => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <Link to="/prekes-aprasymas" className="product__item text-link">
        <img
          src={productImages[getIndex()]}
          alt="Prekės nuotrauka"
          className="product__item__image set-bg"
        ></img>
        <div className="product__item__text">
          <h6>Mėlyni auskarai</h6>
          <div className="rating">
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
          </div>
          <div className="product__price">73.00 €</div>
        </div>
      </Link>
    </div>
  )
}

export default ProductSummary
