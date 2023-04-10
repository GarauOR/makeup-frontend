import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from '../Pages/About';
import Products from '../Pages/Products';
import FavProds from '../Pages/FavProds';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Routing(props) {
const [filterValue, setFilterValue] = useState("");
const [prodList, setProdList] = useState([]);
const [searchList, setSearchList] = useState([]);
    return (
        <div>
            <Router>
                <Header setFilterValue={setFilterValue} prodList={prodList} setProdList={setProdList} searchList={searchList} />
                <Routes>
                    <Route path='/' element={<Products filterValue={filterValue} prodList={prodList} setProdList={setProdList} setSearchList={setSearchList} />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/favourites' element={<FavProds />} />
                </Routes>
                <Footer />
            </Router>
            
        </div>
    );
}

export default Routing;