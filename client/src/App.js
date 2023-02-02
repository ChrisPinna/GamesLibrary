import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import AddGame from "./components/AddGame/AddGame";
import GamesIndex from "./components/GamesIndex/GamesIndex";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GamesIndex/>}></Route>
        <Route path="/addgame" element={<AddGame/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
