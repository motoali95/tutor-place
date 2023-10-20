import "./App.scss";
import Home from "./components/Home";
import NotFounded from "./components/NotFounded";
import Education from "./components/Education";
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="*" element={<NotFounded />} />
          </Routes>
    </div>
  );
}

export default App;
