import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import BlogPage from "./pages/BlogPage";
import "./App.css";
import AnotherPages from "./pages/AnotherPages";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/bollywood" element={<BlogPage category="Bollywood" />} />
            <Route path="/technology" element={<BlogPage category="Technology" />} />
            <Route path="/Cars" element={<BlogPage category="Cars" />} />
            <Route path="/fitness" element={<BlogPage category="Fitness" />} />
            <Route path="/food" element={<BlogPage category="Food" />} />
            <Route path="/category/:id" element = {<AnotherPages/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;