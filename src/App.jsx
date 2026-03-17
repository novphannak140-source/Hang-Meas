import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./Components/Navbar";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Router>
      <Navbar />

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-xl font-semibold animate-pulse">Loading...</div>
    </div>
  );
}

export default App;
