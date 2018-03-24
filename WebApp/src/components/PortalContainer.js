import React, {Component } from 'react';
import '../App.css';
import {Segment, Input, Menu, Form, Modal,Header, Message, Table, List, Button, Grid ,Card, Icon, Image } from 'semantic-ui-react'
import moment from 'moment'
import {LineChart,Line, PieChart, Pie, Legend, Tooltip, BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid} from 'recharts';
import $ from 'jquery'
// import LogoImg from '../img/recycle_bits_logo.png';

const data = [
      {name: 'Page A', overtime: 4000, afterspend: 2400, amt: 2400},
];
const userInfo = {
  "monthlyDeposit":100
}
const transferTypeOptions = [
  { key: 'ACH', text: 'ACH', value: 'ACH' },
  { key: 'Internal', text: 'Internal', value: 'Internal' },
]
const scheduleTransfer = [
  {"title":"tuition","amount": 200,"period": 1}
]
const retailers = [ { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/subway-gc2017.gif',
    retailer: 'Subway' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/starbucks2012.gif',
    retailer: 'Starbucks' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/shellgc2014.jpg',
    retailer: 'Shell' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Applebee2015a.jpg',
    retailer: 'Applebee\'s' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/bpgc2014.jpg',
    retailer: 'BP' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/bpgc2014.jpg',
    retailer: 'Dunkin Donuts' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Exxon2016.jpg',
    retailer: 'ExxonMobil' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/oldnavy2012.jpg',
    retailer: 'Old Navy' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/lowesgc2014.jpg',
    retailer: 'Lowe\'s' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Darden2017.jpg',
    retailer: 'Olive Garden' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Walmart2017.jpg',
    retailer: 'Walmart' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/1800Flower2017.jpg',
    retailer: '1-800-Flowers.com' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/AMC2017.jpg',
    retailer: 'AMC' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/amazon2012gc.gif',
    retailer: 'Amazon' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/iTunes2018.jpg',
    retailer: 'Apple App Store' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/barnesgc2014.jpg',
    retailer: 'Barnes & Noble' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Cabelas2016.jpg',
    retailer: 'Cabela\'s' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/gapgc2014.jpg',
    retailer: 'GAP' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/hammachergc2014.jpg',
    retailer: 'Hammecher Schlemmer' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/JCPgc2014.jpg',
    retailer: 'JC Penny' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/JosABank.gif',
    retailer: 'Jos A Bank' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Kohls2017.jpg',
    retailer: 'Kohl\'s' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/LLBean2012gc.gif',
    retailer: 'L.L. Bean' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/LandsEnd2018.jpg',
    retailer: 'Land\'s End' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/macysgc2014.jpg',
    retailer: 'Macy\'s' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Nike2016.jpg',
    retailer: 'Nike' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Nordstrom2018.jpg',
    retailer: 'Nordstrom' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Nordstrom2018.jpg',
    retailer: 'Maggiano\'s' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/mortoncard2012a.gif',
    retailer: 'Morton\'s' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Omaha2017.jpg',
    retailer: 'Omaha Steaks' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Omaha2017.jpg',
    retailer: 'Outback Steakhouse' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Petsmart2016.jpg',
    retailer: 'Petsmart' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/potterbarngc.gif',
    retailer: 'PotteryBarn' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/sephora2017c.gif',
    retailer: 'Sephora' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Spafinder2017h.jpg',
    retailer: 'Spa Finder' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/staples2017d.gif',
    retailer: 'Staples' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Winedotcom.jpg',
    retailer: 'Wine.com' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/zappos.gif',
    retailer: 'Zappos.com' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/fyegc2014.jpg',
    retailer: 'F.Y.E.' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/chevrontexacogc2014.jpg',
    retailer: 'Chevron' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/bestbuy2013a.gif',
    retailer: 'Best Buy' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Targetgc2014.jpg',
    retailer: 'Target' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/HomeDepotgc2014.jpg',
    retailer: 'Home Depot' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/bananarepublicgc2014.jpg',
    retailer: 'Banana Republic' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/BBBcard.gif',
    retailer: 'Bed Bath & Beyond' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/bloomingdalesgc2014.jpg',
    retailer: 'Bloomingdale\'s' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/BrooksBrothers2017b.jpg',
    retailer: 'Brook Brothers' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/Neimangc2014.jpg',
    retailer: 'Neiman Marcus' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/WilliamsSonoma2017.jpg',
    retailer: 'William\'s Sonoma' },
  { imageUrl: 'https://www.loyaltygateway.com/rewards/ImageDisplayServlet?file=/apps_01/webapps/MRS/mcrewards_content/Catalog/en_US/items/pier1gc2014.jpg',
    retailer: 'Pier 1 Imports' } ];
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
    "title":"Critter Piller Kid's Travel Buddy and Comfort Pillow, Grey Elephant, Hypoallergenic, Machine Washable, Recycled Filling ",
    "imageUrl":"https://static.wixstatic.com/media/e2c770_a380bf4a20774154b8ad666fc9c7a35f~mv2_d_5040_5040_s_4_2.jpg/v1/fill/w_498,h_498,al_c,q_90/file.jpg",
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

    }, {
    "imageUrl":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1DkM6?ver=d01b&q=90&m=6&h=423&w=752&b=%23FFFFFFFF&f=jpg&o=f&aim=true",
      "title":"Lenovo Explorer Bundle, Wireless Headset and Motion Controllers for Windows Mixed Reality, Iron Grey, G0A20002WW",
      "url":"https://smile.amazon.com/dp/B0764GKZ15/",
      "price":275.00,
      "lowestPricePast30Day":249.99,
      "important": 1,
      "preferBuyBy": "04-15-2018",
      "seller":"amazon",
      "accountName":5678

}, {

"imageUrl":"https://d2droglu4qf8st.cloudfront.net/2015/07/227866/Butter-Dispenser_ExtraLarge1000_ID-1084430.jpg?v=1084430",
      "title":"Butter Dispenser - White - USA Designed - Copy of Original",
      "url":"https://smile.amazon.com/dp/B00A1PO3XE/",
      "price":14.99,
      "lowestPricePast30Day":9.99,
      "important": 1,
      "preferBuyBy": "06-15-2018",
      "seller":"amazon",
      "accountName":5678

}, {

"imageUrl":"https://static.gigabyte.com/Product/3/6317/2017081010490727_big.png",
      "title":"AORUS GeForce GTX 1070 Gaming Box eGPU, GV-N1070IXEB-8GD",
      "url":"https://www.newegg.com/Product/Product.aspx?Item=N82E16814125990&cm_re=aorus-_-14-125-990-_-Product",
      "price":599.99,
      "lowestPricePast30Day":599.99,
      "important": 1,
      "preferBuyBy": "04-05-2018",
      "seller":"newegg",
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
    state = {
      accounts:accountsData.accounts
      ,products:[]
      , activeItem: "home"
      , rewardToken: ""
      , fRewordToken: ""
      , currentBlanace: 0
      , rewardsAccounts: []
      , accountBalanceEst:[]
      , userInfo: userInfo
      , scheduleTransfer: scheduleTransfer
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
      this.getProduct();
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
    getProduct = () => {
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
this.setState({currentBlanace: currentBlanace})
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
       handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      // console.log(this.state.rewardsAccounts)
      const {activeItem} = this.state;
        return (

        <div>
          <Menu pointing>
            <Menu.Item>
         <img src='./..logo.png' />
       </Menu.Item>
                   <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                   <Menu.Item name='Banking' active={activeItem === 'Banking'} onClick={this.handleItemClick} />
                   <Menu.Item name='Recommendations' active={activeItem === 'Recommendations'} onClick={this.handleItemClick} />
                   <Menu.Menu position='right'>
                     <Menu.Item>
                       <Input icon='search' placeholder='Search...' />
                     </Menu.Item>
                   </Menu.Menu>
                 </Menu>

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
        {this.state.activeItem === 'Banking' &&
        <Grid.Column >
          <Header as='h2'>
          <Icon name='doctor' />
          <Header.Content>
            Balance ${this.state.currentBlanace}
          </Header.Content>
          </Header>

          <LineChart width={500} height={200} data={this.state.accountBalanceEst}
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
                <div style={{marginTop:'20px'}}>
                  <Header as='h2'>
                  <Icon name='money' />
                  <Header.Content>
                    Schedule Transfer
                  </Header.Content>
                </Header>
                <List divided relaxed>
                  {this.state.scheduleTransfer && this.state.scheduleTransfer.map(x =>
                    <List.Item>
                      <List.Content>
                        <List.Header>{x.title}</List.Header>
                        <List.Description>
                          ${x.amount} per month

                        </List.Description>
                      </List.Content>
                    </List.Item>
                  )}

        </List>
        <div>
          <Modal trigger={<Button>Make a Transfer Now</Button>} style={{margin: '0'}}>
              <Modal.Header>We needs more information</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Header>Default Profile Image</Header>
                  <Form>
        <Form.Group widths='equal'>
        <Form.Input fluid label='transferAmount' placeholder='transferAmount' />
        <Form.Input fluid label='transfer Date(YYYY-MM-DD)' placeholder='transferDate'/>
        <Form.Select fluid label='Transfer Type' options={transferTypeOptions} placeholder='Transfer' />
        </Form.Group>

        <Form.Button>Submit</Form.Button>
        </Form>
                </Modal.Description>
              </Modal.Content>
            </Modal>
        </div>
                </div>

        </Grid.Column>
        }

    {this.state.activeItem === 'home' &&
    <Grid.Column>
      <Header as='h2'>
      <Icon name='money' />
      <Header.Content>
        Rewards
      </Header.Content>
    </Header>
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
                        {a.creditCardAccount&&
                          <div>
                         <div>{a.creditCardAccount.issuer}</div>
                         <div>{a.creditCardAccount.product}</div>
                         <div>{a.creditCardAccount.lastFour}</div>
                         <div>{a.creditCardAccount.network}</div>
                         <div>{a.creditCardAccount.isBusinessAccount}</div>
                         </div>
                        }

                      </Table.Cell>

                  </Table.Row>

            )
            )}
    </Table.Body>

      </Table>
    </Grid.Column>
    }

</Grid>
{this.state.activeItem === 'home' &&
<Segment>
<Header as='h2'>
<Icon name='shop' />
<Header.Content>
{this.state.productWishList.length}  Wish List Items
</Header.Content>
</Header>

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
            <a href={x.url} target="_blank" style={{margin: '20px'}}>View Product</a>

          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
                   <Button basic color='green'>Use my reward now</Button>
                 </div>
        </Card.Content>
      </Card>
  )}
</div>
</Segment>

}
{this.state.activeItem === 'Banking' &&
<Segment>

                <Header as='h2'>
                <Icon name='doctor' />
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
              </Segment>
}
{this.state.activeItem === 'Recommendations' &&
<Segment>
                <Header as='h2'>
                <Icon name='money' />
                <Header.Content>
                    Credit Card Recommendations
                </Header.Content>
              </Header>
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
        </Segment>
      }
      </div>

      )
  }
}
export default PortalContainer;
