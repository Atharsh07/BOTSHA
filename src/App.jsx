import './App.css'
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Events from "./components/Event.jsx";
import Sponsors from "./components/Sponsors.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <div className="min-h-screen bg-body-gradient text-white">
            <NavBar />
            <Hero />
            <Events />
            <Sponsors />
            <Footer />
        </div>
    );
};

export default App;
