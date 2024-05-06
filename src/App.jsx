// router
import { Routes, Route } from "react-router-dom"

// components
import Home from "./pages/Home/Home"
import Country from "./pages/Country/Country"
import Error from "./pages/Error/Error"
import Nav from "./components/Nav/Nav"

function App() {
  return ( 
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/countries-api">
          <Route exact path="/" element={<Home />} />
          <Route path="/country/:name" element={<Country />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;