import React, { Component } from 'react';
import Table from './Table';
export default class Home extends Component {


  render() {
    const {item} = this.props
    return (
      <main>
        <div className="container">
          <div className="row mt-5">
          <div className="col-12">
            <Table item={item} />
          </div>
          </div>
        </div>
      </main>
    )
  }
}
