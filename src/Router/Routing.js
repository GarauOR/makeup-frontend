import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from '../Pages/About';
import Products from '../Pages/Products';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Routing(props) {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Products />} />
                    <Route path='/about' element={<About />} />
                </Routes>
                <Footer />
            </Router>
            
        </div>
    );
}

export default Routing;