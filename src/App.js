import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";
import LanguageContext from "./languageContext";
import "semantic-ui-css/semantic.min.css";
import Footer from "./components/Footer/Footer";
const App = () => {
  const [lang, setLang] = useState("pl");
  // console.log(lang);

  return (
    <BrowserRouter>
      <LanguageContext.Provider value={lang}>
        <Header onLanguageChange={setLang} />
        <Main />
        <Footer />
      </LanguageContext.Provider>
    </BrowserRouter>
  );
};
export default App;
