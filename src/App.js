import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import VansList from "./components/VansList";

function App() {
  return (
    <div className='App'>
      <h1>React Router V6</h1>
      <BrowserRouter>
        <header>
          <nav
            style={{
              textDecoration: "none",
              padding: "30px",
            }}
          >
            <Link to='/' style={{ padding: "40px" }}>
              Home
            </Link>
            <Link to='/about' style={{ padding: "40px" }}>
              About
            </Link>
            <Link to='/vans'>VansList</Link>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<VansList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
