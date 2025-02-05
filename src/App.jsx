import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Body from "./components/Body";
import Onboarding from "./components/Onboarding";
import Feed from "./components/Feed";
import Profile from "./components/Profile";

const App = () => (
  <Provider store={appStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} >
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/onboarding/*" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;

