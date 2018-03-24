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
const rewardsAccounts =
[
  {
    "rewardsAccountReferenceId":
      "+jaR3Du6APE+x4kQue7NB1Z6IEL1OWtPNoA4jkumi8xA/Rv0eY0VcPYd2Kzm5jNPNcfriz1XC0LlPgonb7VWsw==",
    "accountDisplayName":"Capital One Visa Platinum Cash *4458",
    "rewardsCurrency":"Cash",
    "productAccountType":"Credit Card",
    "creditCardAccount":
      {
        "issuer":"Capital One",
        "product":"Visa Platinum",
        "lastFour":"4458",
        "network":"Visa",
        "isBusinessAccount":false}},
  {
    "rewardsAccountReferenceId":
      "+jaR3Du6APE+x4kQue7NBxknnYAP9j84ThkCoDaEC8ih/lmXpZF3yiGGniuFX/6Di2fn4sgM9jG1zJ3kxZkdUQ==",
    "accountDisplayName":"Capital One Visa Platinum Points *6299",
    "rewardsCurrency":"Points",
    "productAccountType":"Credit Card",
    "creditCardAccount":
    {
      "issuer":"Capital One",
      "product":"Visa Platinum",
      "lastFour":"6299",
      "network":"Visa",
      "isBusinessAccount":false}},
  {
    "rewardsAccountReferenceId":
      "+jaR3Du6APE+x4kQue7NB9WemMPO70s8mUdjmylIhqXYxjokJ1GgcsoxxpjEV7aPX+TmXSFn6hZY1wC/C6XRSA==",
    "accountDisplayName":"Capital One Visa Signature Cash *3668",
    "rewardsCurrency":"Cash",
    "productAccountType":"Credit Card",
    "creditCardAccount":
      {
        "issuer":"Capital One",
        "product":"Visa Signature",
        "lastFour":"3668",
        "network":"Visa",
        "isBusinessAccount":false}}
]
var signinWin;
var idTimer;
const productWishList = [
  {
    "imageUrl":"data:image/webp;base64,UklGRrIHAABXRUJQVlA4IKYHAACwRgCdASosASwBPrFYpEukIyojI3L5SUgWCelu4XHhFv1xFZO6uc0EhEa80d4KP3UUKTOFQdWsYSItlJnCoOrWMJEWykzhUHVrGEiLZSZwqDq1jCRFspMkXeDL+NqT3dhMVqAwrwxzsNhHiLZSZweDutBjyFlnjB+sb10A63sAbN8UV2Ltpj6Ii01R/kOhcDIezucebu1WU5GUr2wXZWmOLDH5XMoOrUyWPr+22F3yuOa6pfvCNonUHR4TEfmshrb110qxSJevQPGZpgJVwmMMtsPoh3dk/nnK9BpnEAP7EoQ9YB24mPRxPR8p2mJnbalGmKYmBaiSIQ1KLsN0pMmUmuOgQXxnt5J4vw6vIiGODrBwUANApG/cf/df1fPVKzt0+FHAJhlVUBx7HcBGGaiGcHzbVEmjG01an5V/zKeK8r+Bi7prQ8dP8mTJaYXjuhXnIPrrGpOJ14sMslMlAA76Y1Eg0T1DlPQQyod+LldZSrhpoTkmYplgLRJpeTLE7Z4eDAod2c/MUnFaQPxZ/1ycAFNbbOvHEohIjF11nO17szqf6lVjRSCtnCgQ/Xky/B8+VhPg/3oSLF61hHRAY9qySJumNOSF28Yuowi0EnzTHDNEXOUaa2zmQDcxv9LChLDIO1T3EWf12ExkMVuSNQdzPU45emYLx6CAGJd8BlfUU9vFUc4Sf/patbEV/7CtXWdbpkL2c4qDq1jCRFspM4VB1axhIi2UmcKg6tYwkRbKTOFQdWsYSItlJnCoOq8AAP7+vRAAAAFMxq4PSysZNl1g3QGMBAjpLC4Df+lzsbdSBRP8sPBJI+YVVJo8BR+8/ULqyDWSUOXyeCA9MjCz2xxH1o2IilyjVJVqDY50v4ljUOp4JW8AmOr79GqGv3C1T2c/MW3ERn/aq9SBctupVR+DBJ6R9RChd8fjB71PCQQhp475FAASpSa9iRsd6U1Vtj5i1aYSOmXRCqWUTE0OBoJPx379IByM/if4+i056swUsgEm0yj3gHRdhIVp524JRIrCkBD3tzBHY2oUmAAf7V2taBYnzYrip5pFua92pxY2BYHU2WK/RHwrN3YjXQIcjjOpKks8K1NPfM04BIJwOhp0HC2VMqbq6Otdlbbkx69eK2ox24s7fonvnNip7RVh6suz07aTRZ+zbcW5SJlxvdH2DQIXo41fIRBILfzbNM5tJwEVChkI3riqeaQVmM1KYM5wxHUNdZmSqisrgMIPzgaqfnqfAeV0raKv5zzHfqQw4047zpmOvvDa6AUFgPuZAbHicdZWEiqJFCeA8LyY5voAdIxSRB+3kX2lfdZ5G82ViC9J+2neam0/iC+Gt6hqCMBYAsmGCYd7PIy3m8dR/J3XJKMlQcJCwJvwEOy6ZeCSHM2PhoKejypzogZiaBsNIK3gxzEl0bRZHQ/Hh00kEJEawJyXhx65JNm5s7Ph1WR35Yg61N49J55xX2mbGGJ2YNLAFytS4zORrBFwZwcD6BkjUeGI3fMnj/cheFB51xb/sCGNbNKzChR091c7x2UHRMsHvhkF6CgAumuBhljRS1gAwEPGpp2AKw1DxoXX6tHg9ECe8GcDpR9E5EaL/qSDCYG13N4AN8LtWA8fc5ChVY0o2az7mP4cqIzOIvoCTMV+pmPpkd2DlKNbfSWLNVfD3G5s0a1RD25hkIp2KzlxgP2JDTb+kO9k0kj1cfW7pmr/G2aUh6C8WV6S0gpHyRHBE/W5z0vMU5k5XaygiCPwQjYaesKJdl0Hxxb8JJqsIS3CIvzWdrKfo78pVxzwoZmsCUMwBgBxYWK/19eQ3YmVrE1HBmvD5sHROXggHtPN5mwLoz2rNmuSHzXZDWBCehKthwbTHiRKRNzRXFTC881AM0jQTrYJpW9XrYeUremcIeEXAUzuM15psiKDqnAVFv1oIZpMomZQGy0fOWtKO9aCDqF2sKy7Xm0TPtJIFIQ5hfQISRLhd6iDGthQfMqvfykaozS3ur5SHwNbJgyln5SAZh2H5pWahGYyJfn1TBUsvxnjz1EtX3g0PsaO1E8ys31DG5wYDjHMNl8PZz9rG0FBxIDr+b9liwBMgEU/0LnRnKGGmoZb4pqNy48pHa0hdWxV4vpNcHL/Ho3CNe+kukzbwoEWeKrNrbORUTmmpXbCLXuIMUqQ4Pgbd4Nh31jDHch0EIfA1EB2wMs/ALmwxBlFiE+PtlFsNHtP6vXOGPMhN8GissrZPcN2me/vDAc6QA6vp/MIHc6hI400GrZTx9koaYWPaHLY2j4QLWdK8mxczrOjmLsx5aaK4Efy9jTgNqCN02d/kzLBAcq/WL/+Yx57wch5wfrX6G8Ivamq7eVPqJOq9KZ8Rzs9Sxcw+GFNi4/+hSdiPozPNPqTC8nJxKMM9N5Hy2ANUrjVFKBYa4LQ+5IyMOwhQPOXXxy3AG90+vxPv1tqMnU74TDlcC6tLcrqJSj+Rw6hiRVQIE+KrHeCfFwFEQY6bV4e06U3yZ1UmfFbfyWPdSrl1K5U0WaaJ5G3W4k0pvIBkYh1sRXgL+EY5rA4GN9o1/kggmvnlCdDltNfgWwWuuWIjQV1wiP56OAJiZqvZ81StmxVxr8wPTXCpMHeARlYAAAAAA==",
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
    state = {accounts:accountsData.accounts
      , rewardToken: ""
      , fRewordToken: ""
      , rewardsAccounts: []
      , accountBalanceEst:[]
      , userInfo: userInfo
      , productWishList:productWishList}
    constructor(props) {
      super(props);
      this.openAuth = this.openAuth.bind(this);
      this.CheckLoginStatus=this.CheckLoginStatus.bind(this);
      this.getResponse = this.getResponse.bind(this);
      this.getReward = this.getReward.bind(this);
      this.updateToken = this.updateToken.bind(this);
    }
    componentDidMount() {
      console.log("componentDidMount")
      this.getResponse();
      var queryStr = this.getParameterByName("code", window.location.href)
      console.log("queryStr!!", queryStr);
      if(queryStr){
        this.updateToken(queryStr)
        console.log(this.state)
      }

    }

    updateToken(token){
      this.setState({rewardToken: token}, function () {
          console.log(this.state.rewardToken);
          this.getRewardToken();

      });

    }

    getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
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
        // console.log(this.state.userInfo.monthlyDeposit)
        estB[i] = {"afterProductSpend": 0};
        estB[i].overtime = Math.round(currentBlanace + i * this.state.userInfo.monthlyDeposit *100)/100;
        var basicBalance= Math.round(this.calculateInterest(currentBlanace+ i * this.state.userInfo.monthlyDeposit, i, (1.5/12/100)) *100)/100;
          estB[i].overtimeInterest = basicBalance;
        estB[i].afterProductSpend =basicBalance;
        for (var j = 0; j < this.state.productWishList.length; j++) {
          var preferredD = this.state.productWishList[j].preferBuyBy;
          var preferredM = moment(preferredD).month;
          // console.log(preferredM, this.state.productWishList[j]);
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
           // console.log(response);
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

       openAuth(){
console.log("open")
         signinWin = window.open("https://api.dxhackathon.com/oauth2/authorize?redirect_uri=http://localhost:3000&scope=read_rewards_account_info&client_id=vgw3sf4f8nq3b98i1gdfr8wpx4gpty0ska52&response_type=code", "SignIn", "width=780,height=410,toolbar=0,scrollbars=0,status=0,resizable=0,location=0,menuBar=0,left=" + 500+ ",top=" + 500);
         setTimeout(()=> idTimer = setInterval(()=>this.CheckLoginStatus(this), 500), 6000);
         // signinWin.focus();

       }
       CheckLoginStatus(self) {
         console.log("signinWin", signinWin)
         try {
           if (signinWin.location && signinWin.location.href.indexOf("/api.dxhackathon.com") < 0) {
             console.log("finishing", signinWin)
             clearInterval(idTimer);
             console.log("clear Tiimming", signinWin)
             console.log("this", this)

               var queryStr = this.getParameterByName("code", signinWin.location.href)
               console.log("queryStr", queryStr)

               console.log(signinWin.location.href);
               if(queryStr){
                 this.setState({rewardToken: queryStr})

               }
               console.log("get code", this.state.rewardToken)
               // this.setState({rewardToken: signinWin.location.href})
               signinWin.close();
               this.getRewardToken()

                     }
                   }
          catch(err) {
          }
       }
       getRewardToken(){
         if(!this.state.rewardToken){return;}
         var self = this;
         console.log("call getRewardToken")
           $.ajax({
            url: "https://api.dxhackathon.com/oauth2/token",
            data: `code=${this.state.rewardToken}&redirect_uri=http://localhost:3000&client_id=vgw3sf4f8nq3b98i1gdfr8wpx4gpty0ska52&client_secret=eb5f6rda6v0d1ld8y4fymkudo86gorrc47cj&grant_type=authorization_code`,
            processData: false,
            contentType: "application/x-www-form-urlencoded",
            type: 'POST',
            headers: {
              'Authorization': 'Bearer '+ this.state.rewardToken
            },
            success: function(response) {
               // console.log(response);
               self.setState({fRewordToken: response.access_token})
              self.getReward();
            },
            error: function(error) {
              //self.updateBalance()
            }
          });
       }
       getReward(){
         console.log("getReward",this.state.fRewordToken )
         if(!this.state.fRewordToken){return;}
         var self = this;
         console.log("call getReward")
           $.ajax({
            url: "https://api.dxhackathon.com/rewards/accounts",
            headers: {
              'Authorization': 'Bearer '+ this.state.fRewordToken
            },
            success: function(response) {
               console.log(response);
var data = response.rewardsAccounts;
console.log("data---", data)
              self.setState({rewardsAccounts: data})
              console.log("rewardsAccounts", self.state.rewardsAccounts)
            },
            error: function(error) {
              //self.updateBalance()
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
      // console.log(this.state.rewardsAccounts)
        return (

        <div>

          <Message>
        <Message.Header>New Site Features</Message.Header>
        <Message.List>
          <Message.Item>We providee information about all your accounts.</Message.Item>
          <Message.Item>We give estimate balance based on your wish item.</Message.Item>
        </Message.List>
      </Message>

{!this.state.rewardToken &&
  <div style={{height:'50px'}}>
  <button target="_blank" onClick={this.openAuth}
    class="ui button"
    id="capitalOneAuth">Get My Reward Points
  </button>
</div>
}
      <Grid>
  <Grid.Column width={10}>
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
  </Grid.Column>
  <Grid.Column width={6}>
    <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Currency</Table.HeaderCell>
            <Table.HeaderCell>Account Type</Table.HeaderCell>
            <Table.HeaderCell>Credit Card Account</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.state.rewardsAccounts&& this.state.rewardsAccounts.map(a => (


                  <Table.Row>
                    <Table.Cell>{a.accountDisplayName}</Table.Cell>
                    <Table.Cell>{a.rewardsCurrency}</Table.Cell>
                    <Table.Cell>{a.productAccountType}</Table.Cell>
                    {/* <Table.Cell>{a.creditCardAccount}</Table.Cell> */}
                    <Table.Cell>
                      {/* {a.creditCardAccount&&
                        <div>
                       <div>{a.creditCardAccount.issuer}</div>
                       <div>{a.creditCardAccount.product}</div>
                       <div>{a.creditCardAccount.lastFour}</div>
                       <div>{a.creditCardAccount.network}</div>
                       <div>{a.creditCardAccount.isBusinessAccount}</div>
                       </div>
                      } */}

                    </Table.Cell>

                </Table.Row>

          )
          )}
  </Table.Body>

    </Table>
  </Grid.Column>
</Grid>

<div style={{display:'flex'}}>
  {this.state.productWishList && this.state.productWishList.map(x =>
    <Card style={{width: '400px', margin: '10px'}}>
        <div style={{margin: 'auto'}}>
          <Image src={x.imageUrl} style={{height: '200px'}} />
        </div>
        <Card.Content>
          <Card.Header>
            {x.title} {x.price}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
            Best Price last 30 days - {x.lowestPricePast30Day}
            </span>
          </Card.Meta>
          <Card.Description>
            Preferred Buy {moment(x.preferBuyBy).format('L')}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            {/* <Icon name='user' /> */}
            {/* 22 Friends */}
          </a>
        </Card.Content>
      </Card>
  )}
</div>

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
                        <Table.HeaderCell>Last Four Digits</Table.HeaderCell>
                        <Table.HeaderCell>Bank Name</Table.HeaderCell>
                        <Table.HeaderCell>Product</Table.HeaderCell>
                        <Table.HeaderCell>Balance</Table.HeaderCell>
                        <Table.HeaderCell>Money Receiving Options</Table.HeaderCell>
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
