import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Browser } from "./constants";
import { Home, Http404, Register } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Browser.ROOT} element={<Home />}></Route>
        <Route path={Browser.REGISTER} element={<Register />}></Route>
        <Route path={Browser.HTTP_404} element={<Http404 />}></Route>
        <Route path={Browser.ASTERISK} element={<Http404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
