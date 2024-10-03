import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from "./HomePage.jsx";
import {BrowserRouter as Router, Routes , Route} from  "react-router-dom"

const App = () => {
return (

<Router>
    <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    </Routes>
  </Router>
);
};

export default App;