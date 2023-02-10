import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";

function App() {
  return (
        <div className="App">
            <Routes>
                <Route exact path={'/'} element={Home} />
            </Routes>
        </div>
    
  );
}

export default App;
