import './App.css';
import NavBar from './component/NavBar';
import Slider from './component/Slider';
import ProductList from './component/ProductList';
import { Route, Routes } from 'react-router-dom';
import About from './component/About';
import ProductDetails from "./component/ProductDetails"
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
