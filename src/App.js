import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout'
import Cart from './components/Cart';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
