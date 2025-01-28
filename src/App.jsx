import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Onboarding from "./components/Onboarding";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding/*" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
