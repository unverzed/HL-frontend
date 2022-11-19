import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/auth/signup";
import Login from "./pages/auth/login";
import Home from "./pages/home/home";
import CardCompany from "./pages/company/cardCompany";
import ResponsiblePage from "./pages/responsibles/responsiblesPage";
import { UserContextProvider } from "./contexts/userContext";
import Ticket from "./pages/tickets/tickets";
import Local from "./pages/local/local";

export default function App() {
  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/sign-up" element={<Signup />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/company/:id" element={<CardCompany />}></Route>
            <Route
              path="/company/:id/responsible/:idResponsible"
              element={<ResponsiblePage />}
            ></Route>
            <Route path="/tickets" element={<Ticket />}></Route>
            <Route path="/places/:id" element={<Local />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}
