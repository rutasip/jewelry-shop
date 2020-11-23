import React from 'react'
import { Link } from "gatsby"
import Layout from '../components/Layout'
import "./prekiu-krepselis.css"

export const Cart = () => (
    (typeof window !== 'undefined' && localStorage.getItem('id') !== null) ? (
        <Layout>
            <section className="cart">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <h5>prekių krepšelis</h5>
                            <div className="cart__table">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="cart__item">
                                            <img src={localStorage.getItem('img')} alt="" />
                                            <div className="cart__item__title">
                                                <h6>{localStorage.getItem('name')}</h6>
                                            </div>
                                            </td>
                                            <td className="cart__item__price">{localStorage.getItem('price')} €</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <Link className="theme-button" to="/uzsakymas">Užsakyti</Link>
                    </div>
                </div>
            </section>
        </Layout>
    ) : (
        <Layout>
            <section className="cart">
                <div className="container">
                    <div className="row">
                        <h5>Krepšelis tuščias</h5>
                    </div>
                </div>
            </section>
        </Layout>
    )
)

export default Cart
