import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import FavList from "./components/FavList/FavList";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>

<Routes>
  <Route path="/"element={<Home/>}></Route>
  <Route path="/favlist" element={<FavList/>}></Route>
</Routes>
  <NavBar/>
    </>
  );
}

export default App;