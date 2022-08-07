import React, { Suspense } from 'react';
import './styles/App.css';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import NavbarHeader from './components/NavbarHeader';
//Pages
import Home from './pages/Home';
import { Profile } from './pages/Profile';

function App() {
    return (
        <Suspense fallback={null}>
            <div className="App">
                <NavbarHeader />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Suspense>
    );
}

export default App;
