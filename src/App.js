import './App.css';
import Hero from "./components/Hero";
import Bubbles from "./components/Bubbles";
import Blog from "./components/Blog";
import Stories from "./components/Stories";
import ContactUs from "./components/ContactUs";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <div className="Navbar">
    <h1 className="logo">WiseWords</h1>

  <a href="/" >HOME</a>
  <a href="#Blog">BLOG</a>
  <a href="#Stories">STORIES</a>
  <a href="#Contact Us">CONTACT US</a>
     </div>

     <Hero/>
     <Bubbles/>

     <section id="Blog">
        <Blog />
      </section>

      <section id="Stories">
        <Stories />
      </section>

      <section id="Contact Us">
        <ContactUs />
      </section>
    
     
     <footer className="footer">
  <div className="footerContent">
    <h2 className="footname">WiseWords</h2>
    <p className="footerPara">© 2025 | Powered by WiseWords </p>
    <p className="footertext">Personal Development Blogs</p>
    <p className="footerBlogspotMessage">
      Currently, all blogs are hosted on Blogspot.
    </p>
  </div>
  <img src="./images/logo.png" alt="logo" className="logo2"/>
</footer>

    </div>
    </BrowserRouter>
  );
}

export default App;
