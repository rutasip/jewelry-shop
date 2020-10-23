import React, { Component } from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout'
import ProductSummary from '../components/ProductSummary'

export default class Home extends Component {
  getIndex() {
    let index = Math.floor(Math.random() * 19)
    console.log(index)
  }

  render() {
    return (
      <Layout>
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero__image">
                  <div className="hero__text">
                    <h1>Juvelyriniai Dirbiniai</h1>
                    <p>
                    Aenean cursus dui vitae venenatis convallis. Donec mattis quam tincidunt velit mollis, et venenatis leo aliquam.
                    </p>
                    <div className="global__button">
                      <Link to="#" className="button">žiūrėti prekes</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="section-title">
                  <h4>Naujos Prekės</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <ProductSummary />
              <ProductSummary />
              <ProductSummary />
              <ProductSummary />
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 pt-5">
                <div className="section-title">
                  <h4>Populiarios Prekės</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <ProductSummary />
              <ProductSummary />
              <ProductSummary />
              <ProductSummary />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
