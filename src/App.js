import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from "./HomePage.js";
import Services from "./Components/Services/services.js";
import Portfolio from "./Components/Portfolio/portfolio.js";
import Events from "./Components/Events/events.js";
import {BrowserRouter as Router, Routes , Route} from  "react-router-dom"
import Layout from "./Components/Layout/layout.js";

const App = () => {
return (
  
<Router>
  <Layout>
  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/services" element={<Services />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/events" element={<Events />} />
    </Routes>
  </Layout>
  </Router>
);
};

export default App;