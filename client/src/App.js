import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import AddGame from "./components/AddGame/AddGame";
import GamesSelection from "./components/BGAGamesSelection/BGAGamesSelection";
import Home from "./pages/Home";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/addgame" element={<AddGame/>}></Route>
        <Route path="/gamesselection" element={<GamesSelection/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
