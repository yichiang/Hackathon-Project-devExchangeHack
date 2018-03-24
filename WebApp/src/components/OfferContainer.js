import React, {Component } from 'react';
import '../App.css';

import $ from 'jquery'

  class OfferContainer extends Component {
    state = {products:[]}
    constructor(props) {
      super(props);

      this.getResponse = this.getResponse.bind(this);
    }
    componentDidMount() {
      console.log("componentDidMount")
      this.getResponse();
      console.log(this.props)

    }
    getResponse = () => {
      if(!this.props.token){return;}
      console.log("call offer")
        $.ajax({
         url: "https://api.dxhackathon.com/credit-offers/products?limit=50&offset=0",
         contentType: "application/x-www-form-urlencoded",
         headers: {
           'Authorization': 'Bearer '+this.props.token
         },
         success: function(response) {
           console.log(response);
         }.bind(this),
         error: function(error) {
         }
       });

       }
    render() {

        return (
        <div className="home-container">


        </div>
      )
  }
}
export default OfferContainer;
