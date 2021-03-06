import { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom'
import Dogs from './Dogs'
import Home from './Home'

class App extends Component {

  render() {
    return (
      <>
        <h1>API MINI HACK SHOW</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dogs">Dogs</Link>
        </nav>
        <Switch>

          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/dogs" render={(props) => <Dogs {...props} />} />

        </Switch>

      </>
    )
  }
}
export default App;
