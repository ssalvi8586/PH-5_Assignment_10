import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Pages/Checkout/Checkout";
import Home from "./Pages/Home/Home/Home";
import Register from "./Pages/Home/Register/Register";
import Invalid from "./Pages/Invalid/Invalid";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/checkout/:id" element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<Invalid />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
