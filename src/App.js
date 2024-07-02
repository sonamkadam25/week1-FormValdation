import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm';
import Details from './components/Details';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<UserForm />} />
                    <Route path="/details" element={<Details />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;