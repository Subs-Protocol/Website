import styles from "./styles/style";
import { Navbar, Products, Welcome, Subsproducts, Stats, Feedback, CTA, Footer } from "./Components";
import React from 'react';
import {HashRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, ProductPage, RegulatorPage, FAQPage, UseCasePage, DocsPage, WhitePaperPage, EmailForm } from "./pages"; // RegulatorPage, FAQPage, UseCasePage, DocsPage
import {PDF} from "./Components";


function App() {
  return (
    
    <Router>
      <Routes>
        
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/regulator' element={<RegulatorPage />} />
        <Route path='/faq' element={<FAQPage />} />
        <Route path='/usecases' element={<UseCasePage />} />
        <Route path='/docs' element={<DocsPage />} />
        <Route path='/form' element={< EmailForm />} />
        {/* <Route path='/whitepaper' element={<WhitePaperPage />} /> */}
      </Routes>
    </Router>
    
  );
}

export default App;
