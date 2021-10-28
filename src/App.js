import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Manage from './Components/Manage/Manage';
import NotFound from './Components/NotFound/NotFound';
import OrderReview from './Components/OrderReview/OrderReview';
import Register from './Components/Register/Register';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/">
          <Shop/>
          </Route>
          <Route exact path="/shop">
          <Shop/>
          </Route>
          <Route exact path="/shop">
          <Shop/>
          </Route>
          <Route exact path="/order-review">
          <OrderReview/>
          </Route>
          <Route exact path="/manage">
          <Manage/>
          </Route>
          <Route exact path="/register">
          <Register/>
          </Route>
          <Route exact path="/login">
          <Login/>
          </Route>
          <Route exact path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
