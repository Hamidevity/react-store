import React, {Component} from "react"; 
import { Route , Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import DetailsPage from "./components/DetailsPage";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
            <Route path="/Products" component={Products} />
            <Route path="/Products/:id" component={DetailsPage} />
            <Route path="/Products/us" component={Products} />
            <Route path="/" component={Landing} />
        </Switch>   
          
        <Footer/>
      </div>

    )
  }
}

  

export default App;





