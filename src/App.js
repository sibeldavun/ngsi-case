import ProductList from "./pages/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import CollectionListing from "./pages/CollectingListing";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/collection-listing" element={<CollectionListing />} />
      </Routes>
    </Router>
  );
}

export default App;
