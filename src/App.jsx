import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Onboarding from "./components/Onboarding";
import { Provider } from "react-redux";
import appStore from "./utilis/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/login" element={<Login />} />
            <Route path="/onboarding/*" element={<Onboarding />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
