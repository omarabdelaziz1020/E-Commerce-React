import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./components/app/Routes";
import Layout from "./components/app/Layout";
import './app.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <RoutesComponent />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
