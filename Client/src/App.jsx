import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import AddProductPage from "./page/AddProductPage";
import ProductDetailsPage from "./page/ProductDetailsPage";
import NoteFoundPage from "./page/NotFoundPage";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/product" element={<ProductDetailsPage />} />
        <Route path="*" element={<NoteFoundPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
