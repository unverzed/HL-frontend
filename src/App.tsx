import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/auth/signup";
import Login from "./pages/auth/login";
import Home from "./pages/home/home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
