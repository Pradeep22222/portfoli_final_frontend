import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { About } from "./components/about/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/home/Home";
import { Login } from "./components/messagepages/Login.js";
import { Messages } from "./components/messagepages/Messages.js";
import { Navbar } from "./components/navbar/Navbar";
import ParallaxComponent from "./components/parallax/Parallax";
// import Playground from "./components/playground/Playground";
import { Projects } from "./components/projects/Projects";
import Technologies from "./components/technologies/Technologies";
import "./style/App.scss";
import GlobalStyles from "./style/global/GlobalStyle";
import { theme } from "./style/global/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Main } from "./components/main/Main";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/messageboard" element={<Messages></Messages>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
