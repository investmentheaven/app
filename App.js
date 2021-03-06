import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Signin from './components/signin/signin'
import Signup from './components/signup/signup'
// import Plans from './components/plans/plans'
// import Stickyfooter from './components/footer/stickyfooter'
import Dashboard from './components/dashboard/dashboard1/dashboard'
// import Checkout from './components/checkout/checkout'
// import Blog from './components/blog/blog'
// import Albulm from './components/albulm/albulm'
import Homepage from './containers/Homepage/Homepage'
import AuthComp from './components/authComp/authComp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <Router>
          <div>
            <Switch>
              <Route path="/authComp">
                <AuthComp />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/signin">
                <Signin />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/">
                <Homepage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
