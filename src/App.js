import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Welcome from './component/welcome';
import Register from './component/Register';
import Info from './component/Info';

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/info">
            <Info/>
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
