import { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Events from './components/Events';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import RobotLoader from './components/RobotLoader';
import ErrorBoundary from './components/ErrorBoundary';

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
      <div className="bg-gray-950 min-h-screen text-white">
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
