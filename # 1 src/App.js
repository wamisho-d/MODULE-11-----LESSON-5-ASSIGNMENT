import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

const App = () => {
    return (
        <Routes>
            {/* Define other routes */}
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

const Home = () => (
    <div className="text-center mt-5">
        <h1>Welcome to the Homepage</h1>
    </div>
);

export default App;
