import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import JobPage from "./pages/JobPage/JobPage";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/:jobId" element={<JobPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
