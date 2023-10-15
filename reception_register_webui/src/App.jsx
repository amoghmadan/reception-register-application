import { CssBaseline, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Browser } from "./config";
import { Home, Http404, Register } from "./pages";
import { dark, light } from "./utils/themes";

export default function App() {
  const themes = { dark, light };
  const mode = useSelector((state) => state.theme.value);

  return (
    <ThemeProvider theme={themes[mode]}>
      <CssBaseline>
        <BrowserRouter>
          <Routes>
            <Route path={Browser.ROOT} element={<Home />}></Route>
            <Route path={Browser.ENTRY} element={<Register />}></Route>
            <Route path={Browser.HTTP_404} element={<Http404 />}></Route>
            <Route path={Browser.ASTERISK} element={<Http404 />}></Route>
          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}
