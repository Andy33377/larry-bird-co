import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewProductsPage from "./pages/NewProducts";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-products" element={<NewProductsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
export default App;

// корзину делаем, с добавлением элементов, ещё одна страница NewProducts
