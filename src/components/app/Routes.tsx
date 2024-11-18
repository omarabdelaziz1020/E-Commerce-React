import { Suspense } from "react";
import Loader from "./Loader";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/home.component";
import Cart from "../../pages/Cart/cart.component";

const RoutesComponent = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Suspense>
);

export default RoutesComponent;
