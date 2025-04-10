import { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Events from './components/Events';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import RobotLoader from './components/RobotLoader';
import ErrorBoundary from './components/ErrorBoundary';
import ThreeBackground from './components/ThreeBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="bg-body-gradient min-h-screen text-white relative">
        <ThreeBackground />
        {isLoading ? (
          <RobotLoader />
        ) : (
          <>
            <NavBar />
            <Suspense fallback={<div className="h-screen w-full bg-gray-950"></div>}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <ErrorBoundary>
                        <Events />
                      </ErrorBoundary>
                      <Sponsors />
                      <Footer />
                    </>
                  }
                />
              </Routes>
            </Suspense>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
