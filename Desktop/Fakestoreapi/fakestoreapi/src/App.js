import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './components/Product';
import Login from './components/Login';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
             <Login />
          </Route>
          <Route exact path="/products">
            <Navbar />
            <Product />  
            <Footer />
          </Route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
