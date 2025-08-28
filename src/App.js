import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={"<NoPage />"} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
