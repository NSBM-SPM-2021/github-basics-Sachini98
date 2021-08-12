import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Workers from "./Workers";
import Appointment from "./Appointement";
import Cards from "./Card";
import BackGround from "./BackGround";
import ServiceList from "./ServiceList";
import About from "./About";


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <BackGround/>
                        </Route>
                        <Route exact path="/appointment">
                            <Appointment/>
                        </Route>
                        <Route  path="/services">
                            <ServiceList/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
