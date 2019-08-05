import React from "react";

import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Layout from "./components/Layout/Layout";
import PeopleSearch from "./containers/PeopleSearch/PeopleSearch";

/*======================================================================
// This renders the top-level interface elements.
======================================================================*/
const App = () => {
  return (
    <Layout>
      <Header />
      <PeopleSearch />
      <Footer />
    </Layout>
  );
};

export default App;
