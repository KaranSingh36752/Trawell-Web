import { BrowserRouter, Routes ,Route } from "react-router"
import Body from "./components/Body"
import Signinpopup from "./components/Signinpopup"

function App() {
  return (
    <>
    <BrowserRouter basename="/" >
    <Routes >
      <Route path="/" element={<Body/>} >
        <Route path="/onboarding" element={<Signinpopup/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
