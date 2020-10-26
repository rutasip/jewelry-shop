import React, { Component } from 'react'
import Layout from '../components/layout'
import ProductCard from '../components/AllProductsCard'

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <section className="product">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="section-title">
                  <h4>Visos Prekės</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <div className="row pt-5">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <div className="row pt-5 pb-5">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
