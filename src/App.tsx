import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return <>
    <BrowserRouter>
    <Routes>
      <Route path="/"></Route>
      <Route path="/sign-up"></Route>
      <Route path="/home"></Route>
    </Routes>
    </BrowserRouter>
  </>;
}
