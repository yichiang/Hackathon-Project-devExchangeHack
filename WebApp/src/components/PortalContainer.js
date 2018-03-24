import React, {Component } from 'react';
import '../App.css';
import {Header, Message, Table, List, Button, Grid ,Card, Icon, Image } from 'semantic-ui-react'
import moment from 'moment'
import {LineChart,Line, PieChart, Pie, Legend, Tooltip, BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid} from 'recharts';
import $ from 'jquery'
const data = [
      {name: 'Page A', overtime: 4000, afterspend: 2400, amt: 2400},
];
const userInfo = {
  "monthlyDeposit":100

}

const productWishList = [
  {
    "imageUrl":"data:image/webp;base64,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",
    "title":"Critter Piller Kid's Travel Buddy and Comfort Pillow, Grey Elephant, Hypoallergenic, Machine Washable, Recycled Filling",
    "url":"https://www.amazon.com/gp/product/B0007VYGTS?th=1",
    "price":17.04,
    "lowestPricePast30Day":17.04,
    "important": 2,
    "preferBuyBy": "03-25-2018",
    "seller":"amazon",
    "accountName":5678
  },  {
    "imageUrl":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5909/5909100_sd.jpg;maxHeight=640;maxWidth=550",
      "title":"harman/kardon - Invoke Smart Bluetooth Speaker with Cortana Voice Assistant - Graphite",
      "url":"https://www.bestbuy.com/site/harman-kardon-invoke-smart-bluetooth-speaker-with-cortana-voice-assistant-graphite/5909100.p?skuId=5909100",
      "price":149.99,
      "lowestPricePast30Day":149.99,
      "important": 1,
      "preferBuyBy": "04-25-2018",
      "seller":"bestbuy",
      "accountName":5678

    }
]
const accountsData = {
  "accounts": [
    {
      "moneyMovementAccountReferenceId": "71f4-801c-8101-2124",
      "lastFourAccountNumber": 5678,
      "accountNickname": "My fav savings",
      "productName": "360 Savings",
      "bankName": "Capital One",
      "availableBalance": 1000.23,
      "moneySendingOptions": [
        {
          "transferType": "ACH",
          "remainingTransactionlimit": 5000,
          "transferDuration": 2
        }
      ],
      "moneyReceivingOptions": [
        {
          "transferType": "ACH",
          "remainingTransactionlimit": 10000,
          "transferDuration": 2
        }
      ]
    }
  ]
}

  class PortalContainer extends Component {
    state = {accounts:accountsData.accounts, accountBalanceEst:[]
      , userInfo: userInfo, productWishList:productWishList}
    constructor(props) {
      super(props);

      this.getResponse = this.getResponse.bind(this);
    }
    componentDidMount() {
      console.log("componentDidMount")
      this.getResponse();
      console.log(this.props)

    }
    calculateInterest (total,m,rate) {
        var interest = rate/100+1;
        return parseFloat((total*Math.pow(interest,m)).toFixed(4));
    }
    updateBalance(){
      var currentBlanace = this.state.accounts.filter(x=>x.availableBalance).map(x=>x.availableBalance).reduce((a, b) => a + b, 0);
      var estB = [];
      var currentM = moment().month;
      for (var i = 0; i < 5; i++) {
        console.log(this.state.userInfo.monthlyDeposit)
        estB[i] = {"afterProductSpend": 0};
        estB[i].overtime = Math.round(currentBlanace + i * this.state.userInfo.monthlyDeposit *100)/100;
        var basicBalance= Math.round(this.calculateInterest(currentBlanace+ i * this.state.userInfo.monthlyDeposit, i, (1.5/12/100)) *100)/100;
          estB[i].overtimeInterest = basicBalance;
        estB[i].afterProductSpend =basicBalance;
        for (var j = 0; j < this.state.productWishList.length; j++) {
          var preferredD = this.state.productWishList[j].preferBuyBy;
          var preferredM = moment(preferredD).month;
          console.log(preferredM, this.state.productWishList[j]);
          if(preferredM == currentM){
            estB[i].afterProductSpend-=this.state.productWishList[j].price;
          }
        }
        currentM++;
      }
      this.setState({accountBalanceEst: estB})
    }
    getResponse = () => {
      if(!this.props.token){return;}
      var self = this;
      console.log("call offer")
        $.ajax({
         url: "https://api.dxhackathon.com/money-movement/accounts",
         headers: {
           'Authorization': 'Bearer '+this.props.token
         },
         success: function(response) {
           console.log(response);
           self.setState({accounts: response.accounts})
           // // self.getProductDetail(response.products[0])
           // for (var i = 0; i < response.products.length; i++) {
           //    self.getProductDetail(response.products[i], i)
           //  }
           self.updateBalance()
         },
         error: function(error) {
           self.updateBalance()
         }
       });

       }

       // getProductDetail(product, index){
       //   var self = this;
       //   console.log("Get product",product)
       //     $.ajax({
       //      url: `https://api.dxhackathon.com/credit-offers/products/cards/${product.productType.toLowerCase().replace("card","")}/${product.productId}`,
       //      contentType: "application/x-www-form-urlencoded",
       //      headers: {
       //        'Authorization': 'Bearer '+this.props.token
       //      },
       //      success: function(response) {
       //        console.log(response);
       //        var productS = self.state.products;
       //        productS[index].details=response;
       //        self.setState({products: productS})
       //      },
       //      error: function(error) {
       //      }
       //    });

    render() {

        return (

        <div>
          <Message>
  <Message.Header>New Site Features</Message.Header>
  <Message.List>
    <Message.Item>You can now have cover images on blog pages</Message.Item>
    <Message.Item>Drafts will now auto-save while writing</Message.Item>
  </Message.List>
</Message>
          <LineChart width={600} height={300} data={this.state.accountBalanceEst}
                      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                 <XAxis dataKey="name"/>
                 <YAxis/>
                 <CartesianGrid strokeDasharray="3 3"/>
                 <Tooltip/>
                 <Legend />
                 <Line type="monotone" dataKey="overtime" stroke="#8884d8" activeDot={{r: 8}}/>
                 <Line type="monotone" dataKey="overtimeInterest" stroke="#82ca9d" />
                 <Line type="monotone" dataKey="afterProductSpend" stroke="#8884d8" activeDot={{r: 8}}/>
                </LineChart>
                <Header as='h2'>
  <Icon name='money' />
  <Header.Content>
    Accounts
  </Header.Content>
</Header>
                <Table celled>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>lastFourAccountNumber</Table.HeaderCell>
                        <Table.HeaderCell>bankName</Table.HeaderCell>
                        <Table.HeaderCell>productName</Table.HeaderCell>
                        <Table.HeaderCell>availableBalance</Table.HeaderCell>
                        <Table.HeaderCell>moneyReceivingOptions</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                {this.state.accounts&& this.state.accounts.map(a => (


                        <Table.Row>
                          <Table.Cell>{a.accountNickname}</Table.Cell>
                          <Table.Cell>{a.lastFourAccountNumber}</Table.Cell>
                          <Table.Cell>{a.bankName}</Table.Cell>
                          <Table.Cell>{a.productName}</Table.Cell>
                          <Table.Cell>{a.availableBalance}</Table.Cell>
                      <Table.Cell>
                         {a.moneyReceivingOptions&& a.moneyReceivingOptions.map(b => (
                           <div>
                          <div>{b.transferType}</div>
                          <div>{b.remainingTransactionlimit}</div>
                          <div>{b.transferDuration}</div>
                        </div>
                        )
                        )}
                        </Table.Cell>
                      </Table.Row>

                )
              )}
            </Table.Body>

                </Table>
        </div>
      )
  }
}
export default PortalContainer;
