// Packages
import React from "react";

// Components
import {
  Analytics,
  DashboardPreview,
  Distribution,
  Feature,
  Footer,
  Home,
  Navbar,
  STTop,
} from "./Components";

// Styles
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <DashboardPreview />
      <Analytics />
      <Feature />
      <Distribution />
      <Footer />
      <STTop />
    </div>
  );
};

export default App;
