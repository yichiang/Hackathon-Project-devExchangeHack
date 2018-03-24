import React, {Component } from 'react';
import {Header, Button, Card, Icon, Image, Table  } from 'semantic-ui-react'
import checkImg from '../checkout.png';

const product = {
  "imageUrl":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5909/5909100_sd.jpg;maxHeight=640;maxWidth=550",
    "title":"harman/kardon - Invoke Smart Bluetooth Speaker with Cortana Voice Assistant - Graphite",
    "url":"https://www.bestbuy.com/site/harman-kardon-invoke-smart-bluetooth-speaker-with-cortana-voice-assistant-graphite/5909100.p?skuId=5909100",
    "price":149.99,
    "lowestPricePast30Day":149.99,
    "important": 1,
    "preferBuyBy": "04-25-2018",
    "seller":"Best Buy",
    "accountName":5678

  };
  const retailers =
  [ { "imageUrl": "https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/subway-gc2017.gif",
      "retailer": "Subway" },
    { "imageUrl":"https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/starbucks2012.gif",
      "retailer": "Starbucks" },
    { "imageUrl": "https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/shellgc2014.jpg",
      "retailer": "Shell" },
    { "imageUrl": "https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Applebee2015a.jpg",
      "retailer": "Applebee's" },
    { "imageUrl": "https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/bpgc2014.jpg",
      "retailer": "BP" },
    { "imageUrl": "https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/bpgc2014.jpg",
      "retailer": "Dunkin Donuts" },
    { "imageUrl": "https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Exxon2016.jpg",
      "retailer": "ExxonMobile" },
    { "imageUrl": "https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/oldnavy2012.jpg",
      "retailer": "Old Navy" },
    { "imageUrl": "https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/lowesgc2014.jpg",
      "retailer": "Lowe's" },
    { "imageUrl": "https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Darden2017.jpg",
      "retailer": "Olive Garden" },
    { "imageUrl": "https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Walmart2017.jpg",
      "retailer": "Walmart" },
    { "imageUrl": "https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/1800Flower2017.jpg",
      "retailer": "1-800-Flowers.com" },
    { "imageUrl": "https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/AMC2017.jpg",
      "retailer": "AMC" },
    { "imageUrl": "https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/amazon2012gc.gif",
      "retailer": "Amazon" },
    { "imageUrl": "https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/iTunes2018.jpg",
      "retailer": "Apple App Store" }];
class HomeContainer extends Component {
  state = {
    product:product,
    retailers: retailers
    }
  constructor(props) {
    super(props);

  }
  componentDidMount() {

  }
  render() {
        return (
        <div>
          <div className="home-container">
          <div style={{marginRight: '20px'}}>
          <Header as='h2'>
    {/* <Icon name='payment' /> */}
    <Header.Content>
{/* Check out */}
<img src={checkImg} />
    </Header.Content>
  </Header>
                        <div>
              <Card>
                <div style={{margin: 'auto'}}>
    <Image src={this.state.product.imageUrl} style={{height: '200px', width: '100px'}} /></div>
    <Card.Content>
      <Card.Header>
        {this.state.product.title}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          {this.state.product.seller}
        </span>
      </Card.Meta>
      <Card.Description>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button basic color='green' content='Pay $149.99' />

    </Card.Content>
  </Card>
</div>

            </div>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Image</Table.HeaderCell>
                  <Table.HeaderCell>Retailer</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
{this.state.retailers && this.state.retailers.map(x =>
  <Table.Row negative>
          <Table.Cell>
            <img src={x.imageUrl} />
          </Table.Cell>
          <Table.Cell>{x.retailer}</Table.Cell>
        </Table.Row>
)

}
</Table.Body>
  </Table>
            </div>

        </div>
        )
    }
}

export default HomeContainer;
