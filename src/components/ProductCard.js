import React from "react"
import { Link } from "gatsby"
import star from "../assets/star.svg"

const productImage = {
  landingImages: [
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
  ],
  earringsImages: [
    require("../assets/products/earrings/1.jpg"),
    require("../assets/products/earrings/2.jpg"),
    require("../assets/products/earrings/3.jpg"),
    require("../assets/products/earrings/4.jpg"),
    require("../assets/products/earrings/5.jpg"),
    require("../assets/products/earrings/6.jpg"),
    require("../assets/products/earrings/7.jpg"),
    require("../assets/products/earrings/8.jpg"),
    require("../assets/products/earrings/9.jpg"),
  ],
  pendantImages: [
    require("../assets/products/pendants/1.jpg"),
    require("../assets/products/pendants/2.jpg"),
    require("../assets/products/pendants/3.jpg"),
    require("../assets/products/pendants/4.jpg"),
    require("../assets/products/pendants/5.jpg"),
    require("../assets/products/pendants/6.jpg"),
    require("../assets/products/pendants/7.jpg"),
  ],
  ringImages: [
    require("../assets/products/rings/1.jpg"),
    require("../assets/products/rings/2.jpg"),
    require("../assets/products/rings/3.jpg"),
    require("../assets/products/rings/4.jpg"),
    require("../assets/products/rings/5.jpg"),
    require("../assets/products/rings/6.jpg"),
  ],
  necklaceImages: [
    require("../assets/products/necklaces/1.jpg"),
    require("../assets/products/necklaces/2.jpg"),
    require("../assets/products/necklaces/3.jpg"),
    require("../assets/products/necklaces/4.jpg"),
    require("../assets/products/necklaces/5.jpg"),
    require("../assets/products/necklaces/6.jpg"),
    require("../assets/products/necklaces/7.jpg"),
    require("../assets/products/necklaces/8.jpg"),
    require("../assets/products/necklaces/9.jpg"),
    require("../assets/products/necklaces/10.jpg"),
    require("../assets/products/necklaces/11.jpg"),
    require("../assets/products/necklaces/12.jpg"),
  ],
}

function getImage(whichImage) {
    if (whichImage == "earringsImage") {
      return productImage.earringsImages[Math.floor(Math.random() * productImage.earringsImages.length)];
    } else if (whichImage == "pendantImage") {
      return productImage.pendantImages[Math.floor(Math.random() * productImage.pendantImages.length)];
    } else if (whichImage == "ringImage") {
      return productImage.ringImages[Math.floor(Math.random() * productImage.ringImages.length)];
    } else if (whichImage == "necklaceImage") {
      return productImage.necklaceImages[Math.floor(Math.random() * productImage.necklaceImages.length)];
    } else {
      return productImage.landingImages[Math.floor(Math.random() * productImage.landingImages.length)];
    }
}

const ProductSummary = props => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <Link to="/prekes-aprasymas" className="product__item text-link">
        <img
          src={getImage(props.whichImage)}
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
