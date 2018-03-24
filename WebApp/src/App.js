import React, {Component } from 'react';
import { BrowserRouter,
         Route,
         Switch } from 'react-router-dom';

import HomeContainer from './components/HomeContainer';
import OfferContainer from './components/OfferContainer';
import PortalContainer from './components/PortalContainer';
import $ from 'jquery'
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  state = {token: ""}
  constructor(props) {
    super(props);

    // this.getResponse = this.getResponse.bind(this);
  }
  componentDidMount() {
    this.getResponse();
  }
      getResponse = () => {
        var self = this;
        console.log("Call token");
       $.ajax({
        url: "https://api.dxhackathon.com/oauth2/token",
        data: "client_id=vgw3sf4f8nq3b98i1gdfr8wpx4gpty0ska52&client_secret=eb5f6rda6v0d1ld8y4fymkudo86gorrc47cj&grant_type=client_credentials",
        processData: false,
        contentType: "application/x-www-form-urlencoded",

        type: 'POST',
        success: function(response) {
          self.setState({token: response.access_token})
          console.log(self);
          console.log(response);
        },
        error: function(error) {
        }
       });

         }


         // renderWells() => (<BrowserRouter>
         //   <Switch>
         //     <Route exact path={'/'} component={() =><OfferContainer token={this.state.access_token}/>} />
         //     <Route  path={'/offer'} component={() => <OfferContainer token={this.state.access_token}/>} />
         //     <Route component={HomeContainer} />
         //   </Switch>
         // </BrowserRouter>)
      render() {
          return (
<div>
  {this.state.token && <BrowserRouter>

    <Switch>
      <Route exact path={'/'} component={() =><PortalContainer token={this.state.token}/>} />
      <Route exact path={'/checkout'} component={() =><HomeContainer token={this.state.token}/>} />
      <Route exact path={'/home'} component={() =><OfferContainer token={this.state.token}/>} />
      <Route  path={'/offer'} component={() => <OfferContainer token={this.state.token}/>} />
      <Route component={HomeContainer} />
    </Switch>
  </BrowserRouter>}


      </div>
)
}
}

export default App;
