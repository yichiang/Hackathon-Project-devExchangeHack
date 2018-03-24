import React, {Component } from 'react';
import '../App.css';
import { List, Button, Grid ,Card, Icon, Image } from 'semantic-ui-react'
import moment from 'moment'

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
      var self = this;
      console.log("call offer")
        $.ajax({
         url: "https://api.dxhackathon.com/credit-offers/products?limit=50&offset=0",
         contentType: "application/x-www-form-urlencoded",
         headers: {
           'Authorization': 'Bearer '+this.props.token
         },
         success: function(response) {
           // console.log(response);
           self.setState({products: response.products})
           // self.getProductDetail(response.products[0])
           for (var i = 0; i < response.products.length; i++) {
              self.getProductDetail(response.products[i], i)
            }
         },
         error: function(error) {
         }
       });

       }

       getProductDetail(product, index){
         var self = this;
         console.log("Get product",product)
           $.ajax({
            url: `https://api.dxhackathon.com/credit-offers/products/cards/${product.productType.toLowerCase().replace("card","")}/${product.productId}`,
            contentType: "application/x-www-form-urlencoded",
            headers: {
              'Authorization': 'Bearer '+this.props.token
            },
            success: function(response) {
              // console.log(response);
              var productS = self.state.products;
              productS[index].details=response;
              self.setState({products: productS})
            },
            error: function(error) {
            }
          });

       }
    render() {

        return (

        <div>
          <Grid columns={3}>
          <Grid.Row>
              {this.state.products&&  this.state.products.map((p) => {
              return (
                <Grid.Column key={p.productId}>

                <Card style={{Height:'500px', margin: '10px'}}>
                  {p.details&&p.details.images&& p.details.images.map(pImg => (
                    <Image src={pImg.url}  height={200}/>

                  ))}

                    <Card.Content>
                      <Card.Header>
                        <a href={p.applyNowLink}>{p.productDisplayName}</a>
                      </Card.Header>
                      <Card.Meta>
                        <span className='date'>
                          {p.productType}
                        </span>
                      </Card.Meta>

                    </Card.Content>
                    <Card.Content extra>

                      <a>
                        <Icon name='calendar outline' />
                        {moment(p.activeFrom).format('L')}
                      </a>
                    </Card.Content>
                    <Card.Description style={{maxHeight:'300px', 'overflowY':'scroll'}}>
                      <List style={{padding:'0 10px'}}>

                      {p.details&&p.details.additionalMarketingCopy&& p.details.additionalMarketingCopy.map(d => (

                       <List.Item style={{color:"black"}}>
                         <Icon name='right triangle' />
                        {d}
                       </List.Item>

                      ))}
                    </List>

                      </Card.Description>
                    <Card.Content extra>
                     <div className='ui two buttons'>
                       <Button basic color='green'><a href={p.applyNowLink}>Apply Now</a></Button>
                       <Button basic color='blue'>Read More</Button>
                     </div>
                   </Card.Content>
                  </Card>
                </Grid.Column>

              )
            })
          }
        </Grid.Row>
        </Grid>
        </div>
      )
  }
}
export default OfferContainer;
