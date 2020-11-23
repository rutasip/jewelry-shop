import React from 'react'
import { Link } from "gatsby"
import Layout from '../components/Layout'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import star from "../assets/star.svg"
import necklace from '../assets/products/3/pexels-mídia-1454169.jpg'

export const data = {
    "products":[
        {
            "id": 1,
            "img": necklace,
            "name": "Rankų darbo grandinėlė",
            "description": "Sed consectetur nisi libero, aliquet faucibus ligula luctus quis. Aenean cursus dui vitae venenatis convallis. Sed gravida purus id blandit egestas. Donec mattis quam tincidunt velit mollis, et venenatis leo aliquam.",
            "price": 82.00,
        }
    ]
}
class Product extends React.Component {
    render() {
        function addProductToCart() {
            if (localStorage.getItem('id') !== null) {
                document.getElementById("product-already-added").style.display = "flex";
                setTimeout(function() {
                    document.getElementById("product-already-added").style.display = "none";
                }, 1000)
            } else {
                localStorage.setItem('id', data.products[0].id);
                localStorage.setItem('img', data.products[0].img);
                localStorage.setItem('name', data.products[0].name);
                localStorage.setItem('price', data.products[0].price);
    
                document.getElementById("product-added").style.display = "flex";
                setTimeout(function() {
                    document.getElementById("product-added").style.display = "none";
                }, 1000);
            }
        }
        return (
            <Layout>
                <section className="product-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="product__details__image">
                                    <img src={data.products[0].img} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="product__details__text">
                                    <h3>{data.products[0].name}</h3>
                                    <div className="rating">
                                        <img src={star} alt="Star" />
                                        <img src={star} alt="Star" />
                                        <img src={star} alt="Star" />
                                        <img src={star} alt="Star" />
                                        <img src={star} alt="Star" />
                                        <span>( 4 atsiliepimai )</span>
                                    </div>
                                    <div className="product__details__price">{data.products[0].price} €</div>
                                    <p>{data.products[0].description}</p>
                                    <a href="#" onClick={addProductToCart} className="theme-button"> Į krepšelį</a>
                                    <div className="alert alert-success" id="product-added" role="alert">
                                        Prekė pridėta į krepšelį!
                                    </div>
                                    <div className="alert alert-warning" id="product-already-added" role="alert">
                                        Prekė jau yra krepšelyje
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="product__details__tab">
                                    <Tabs defaultActiveKey="description" className="nav">
                                        <Tab tabClassName="nav-item" eventKey="description" title="Aprašymas">
                                            <h6>Aprašymas</h6>
                                            <p>Aliquam erat volutpat. Nulla facilisi. In nec porttitor dolor. Nullam ut hendrerit ligula, et scelerisque felis. Sed ornare diam nec tortor auctor, in porttitor lectus commodo. Sed consectetur nisi libero, aliquet faucibus ligula luctus quis. Aenean cursus dui vitae venenatis convallis. Sed gravida purus id blandit egestas. Donec mattis quam tincidunt velit mollis, et venenatis leo aliquam. Nullam luctus nisl eu nisi vestibulum, eget tempus ligula auctor. Phasellus egestas est ligula, et laoreet arcu dignissim id. </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                                        </Tab>
                                        <Tab tabClassName="nav-item" eventKey="information" title="Informacija">
                                            <h6>Informacija</h6>
                                            <p>Aliquam erat volutpat. Nulla facilisi. In nec porttitor dolor. Nullam ut hendrerit ligula, et scelerisque felis. Sed ornare diam nec tortor auctor, in porttitor lectus commodo. Sed consectetur nisi libero, aliquet faucibus ligula luctus quis. Aenean cursus dui vitae venenatis convallis. Sed gravida purus id blandit egestas. Donec mattis quam tincidunt velit mollis, et venenatis leo aliquam. Nullam luctus nisl eu nisi vestibulum, eget tempus ligula auctor. Phasellus egestas est ligula, et laoreet arcu dignissim id. </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                                        </Tab>
                                        <Tab tabClassName="nav-item" eventKey="reviews" title="Atsiliepimai (4)">
                                            <h6>Atsiliepimai</h6>
                                            <p>Aliquam erat volutpat. Nulla facilisi. In nec porttitor dolor. Nullam ut hendrerit ligula, et scelerisque felis. Sed ornare diam nec tortor auctor, in porttitor lectus commodo. Sed consectetur nisi libero, aliquet faucibus ligula luctus quis. Aenean cursus dui vitae venenatis convallis. Sed gravida purus id blandit egestas. Donec mattis quam tincidunt velit mollis, et venenatis leo aliquam. Nullam luctus nisl eu nisi vestibulum, eget tempus ligula auctor. Phasellus egestas est ligula, et laoreet arcu dignissim id. </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default Product
