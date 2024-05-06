// router
import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react";

// components
// import Home from "./pages/Home/Home"
// import Country from "./pages/Country/Country"
// import Error from "./pages/Error/Error"
import Nav from "./components/Nav/Nav"
const LazyHome = lazy(() => import("./pages/Home/Home"));
const LazyCountry = lazy(() => import("./pages/Country/Country"));
const LazyError = lazy(() => import("./pages/Error/Error"));

function App() {
  return ( 
    <div className="app">
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<LazyHome />} />
          <Route path="/country/:name" element={<LazyCountry />} />
          <Route path="*" element={<LazyError />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;