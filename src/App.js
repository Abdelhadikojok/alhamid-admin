import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Items from "./components/dashboard/Items";
import AddItem from "./components/add-item/AddItem";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/" element={<Items />} />
        <Route path="/add-item/:id" element={<AddItem />} />
      </Routes>
    </Router>
  );
}

export default App;
