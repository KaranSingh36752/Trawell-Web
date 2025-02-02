import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Onboarding from "./components/Onboarding";
import { Provider, useDispatch } from "react-redux";
import appStore from "./utilis/appStore";
import Feed from "./components/Feed";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "./utilis/contants";
import { addUser } from "./utilis/userSlice";

const App = () => (
  <Provider store={appStore}>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </Provider>
);

const AppContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/1`, {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.response?.status === 401) navigate("/");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/onboarding/*" element={<Onboarding />} />
    </Routes>
  );
};

export default App;
