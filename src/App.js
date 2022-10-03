import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

// AntD
import '../node_modules/antd/dist/antd.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Services from "./components/Services";
import Navbar from "./inc/Navbar";
import PageNotFound from "./components/PageNotFound";
import Features from "./components/Features";
import New from "./components/New";
import User from "./components/User";
import Person from "./components/Person";
import './components/style.css'
import Movie from "./components/Movie";
import OnePageMovie from "./components/OnePageMovie";
import Material from "./components/Material";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />}/>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="user" element={<User />} />
          <Route path="user/1" element={<Person />} />
          <Route path="user/:id" element={<Person />} />
          <Route path="movie" element={<Movie />} />
          <Route path="movie/:id" element={<OnePageMovie />} />
          <Route path="blog" element={<Blog />} />
          <Route path="material" element={<Material />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
