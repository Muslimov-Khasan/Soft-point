import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Provider as LangProvider } from "./Context/LanguageContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LangProvider>
           <App />
      </LangProvider>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);
