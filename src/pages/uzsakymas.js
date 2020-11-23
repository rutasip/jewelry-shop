import React from 'react'
import Layout from '../components/Layout'
import "./uzsakymas.css"

export const Cart = () => (
    (localStorage.getItem('id') !== null) ? (
        <Layout>
            <section className="checkout">
                <div className="container">
                    <form action="#" className="checkout__form">
                        <div className="row">
                            <div className="col-lg-8">
                                <h5>užsakymo forma</h5>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="checkout__form__input">
                                        <p>Vardas <span>*</span></p>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="checkout__form__input">
                                        <p>Pavardė <span>*</span></p>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="checkout__form__input">
                                        <p>Šalis <span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__form__input">
                                        <p>Miestas <span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__form__input">
                                        <p>Adresas <span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__form__input">
                                        <p>Pašto kodas <span>*</span></p>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="checkout__form__input">
                                        <p>Tel. nr. <span>*</span></p>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="checkout__form__input">
                                        <p>El. paštas <span>*</span></p>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="checkout__form__checkboxes">
                                        <p>Pristatymo būdas</p>
                                        <div className="d-flex">
                                            <div className="form-check col-sm-4">
                                                <input className="form-check-input" type="radio" id="inStore" checked />
                                                <label className="form-check-label" for="inStore">
                                                    Atsiėmimas parduotuvėje
                                                </label>
                                            </div>
                                            <div className="form-check col-sm-4">
                                                <input className="form-check-input" type="radio" id="delivery" />
                                                <label className="form-check-label" for="delivery">
                                                    Pristatymas į namus
                                                </label>
                                            </div>
                                            <div className="form-check col-sm-4">
                                                <input className="form-check-input" type="radio" id="omniva" />
                                                <label className="form-check-label" for="omniva">
                                                    Į Omniva paštomatą
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="checkout__form__checkboxes">
                                        <p>Apmokėjimo būdas</p>
                                        <div className="d-flex">
                                            <div className="form-check col-sm-5">
                                                <input className="form-check-input" type="radio" id="paymentInStore" checked />
                                                <label className="form-check-label" for="paymentInStore">
                                                    Grynais/banko kortele atsiimant
                                                </label>
                                            </div>
                                            <div className="form-check col-sm-5">
                                                <input className="form-check-input" type="radio" id="paymentByBankTransfer" />
                                                <label className="form-check-label" for="paymentByBankTransfer">
                                                    Bankiniu pavedimu
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="checkout__form__input">
                                        <p>Komentaras</p>
                                        <input
                                        type="text"
                                        placeholder="Spec. pageidavimai pardavėjui ir kt."
                                        />
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="checkout__order">
                                    <h5>Jūsų užsakymas</h5>
                                    <div className="checkout__order__product">
                                        <ul>
                                            <li>
                                                <span className="top__text">Prekė</span>
                                                <span className="top__text__right">Kaina</span>
                                            </li>
                                            <li>{localStorage.getItem('name')} <span>{localStorage.getItem('price')} €</span></li>
                                        </ul>
                                    </div>
                                    <div className="checkout__order__total">
                                        <ul>
                                            <li>Iš viso <span>{localStorage.getItem('price')} €</span></li>
                                        </ul>
                                    </div>
                                    <a href="#" className="theme-button">Užsakyti</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    ) : (
        <Layout>
            <section className="cart">
                <div className="container">
                    <div className="row">
                        <h5>Užsakymo įvykdyti neįmanoma, nes krepšelis tuščias</h5>
                    </div>
                </div>
            </section>
        </Layout>
    )
)

export default Cart
