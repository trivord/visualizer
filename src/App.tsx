import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Callback from "./pages/Callback";
import LoginButton from "./components/LoginButton";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginButton />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </Router>
  );
}

export default App;
