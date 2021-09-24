import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./index.css";
import Footer from "./components/Footer";


function App() {
  //BrowserRouter
  // return (
    
  //   <Router>
  //     <div className="background">

  //       <div className="background-filter">
  //         <Navbar />

  //         <Switch>
  //           <Route exact path="/rtjportfolio" component={Home} />
  //           <Route exact path="/rtjportfolio/Home" component={Home} />
  //           <Route exact path="/bio" component={Bio} />
  //           <Route exact path="/portfolio" component={Portfolio} />
  //           <Route exact path="/contact" component={Contact} />
  //         </Switch>



  //       </div>
  //     </div>
  //     <Footer />

  //   </Router>

  // );


  //HashRouter
  return (
    
    <HashRouter>
      <div className="background">

        <div className="background-filter">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/Home" component={Home} /> */}
            <Route exact path="/bio" component={Bio} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>



        </div>
      </div>
      <div className="push" />
      <Footer />

    </HashRouter>

  );
}


export default App;
