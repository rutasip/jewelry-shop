import React, { Component } from 'react'
import Layout from '../components/layout'
import ProductCard from '../components/productCard'

export default class Home extends Component {
  render() {
    const whichImage = "ringImage";
    const cards = [];

    for (let counter = 0; counter < 4; counter++) {
      cards.push(<ProductCard key={counter} whichImage={whichImage}/>);
    }

    return (
      <Layout>
        <section className="product">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="section-title">
                  <h4>Žiedai</h4>
                </div>
              </div>
            </div>
            <div className="row pb-5">
              {cards}
            </div>
            <div className="row pb-5">
              {cards}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
