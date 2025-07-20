import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProblemStatements from "./pages/ProblemStatements";
import Guidelines from "./pages/Guidelines";
import EventFormat from "./pages/EventFormat";
import Schedule from "./pages/Schedule";



function App() {

  return (
    <Router>
      <div className="min-h-screen bg-white font-roboto-mono">
        <Header />
        <div className="min-h-screen">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problem-statements" element={<ProblemStatements />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/event-format" element={<EventFormat />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;