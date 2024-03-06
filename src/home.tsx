import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <video autoPlay muted loop>
        <source src="Prince_of_Pressure_4K.mp4" type="video/mp4" />
      </video>
      <div className="background">
        <header className="site-header">
          <div className="container">
            <div className="logo">Fique</div>
            <nav className="main-nav">
              <ul>
                
                <li><a href="home.html">Home</a></li>
                <li><a href="#ocye">About</a></li>
                <li><a href="service.html">Services</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <Link to={"/login"}>Log in </Link>
                <li><a href="signup.html">Sign Up</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <br />
        <div className="beginning">
          Welcome to Fique's website that deals specifically with the management of social media, focusing on social media analytics, engagement metrics, and content calendars.
          <br />
          In case you want more information, click the below button to get started.
          <br />
          <button className="ogh">
            <a href="./signup.html" className="done">Get started</a>
          </button>
        </div>
        <footer>
          <div className="k">
            <h1>SOCIAL CHAMP</h1>
            <p>Get your mobile app</p>
          </div>
          <style>
            {`
              footer {
                background-color: slategray;
                color: white;
                text-align: center;
                padding: 20px 0;
                bottom: 0;
                width: 100%;
                animation: fadeIn 1s;
                border-radius: 30px;
                position: relative;
              }
              footer p {
                margin: 0;
              }
              footer a {
                color: white;
                text-decoration: none;
                margin: 0 10px;
                transition: color 0.3s;
              }
              footer a:hover {
                color: #FFD700;
              }
              .social-icons {
                margin-top: 10px;
              }
              .social-icons a {
                display: inline-block;
                margin: 0 10px;
                color: white;
                font-size: 1.5rem;
                transition: color 0.3s;
              }
              .social-icons a:hover {
                color: #FFD700;
              }
              @keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
            `}
          </style>
          <section id='ocye'>
            <p>&copy; 2024 Your Website</p>
            <nav>
              <div className="line">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Services</a>
              </div>
              <div className='line'>
                <a href="#">Portfolio</a>
                <a href="#">Blog</a>
                <a href="#">Sitemap</a>
                <a href="#">FAQ</a>
              </div>
              <div>
                <a href="#">Privacy Policy</a><br />
                <a href="#">Terms of Service</a><br />
                <a href="#">Support</a><br />
                <a href="#">Subscribe</a>
                <a href="#">Feedback</a>
                <a href="#">Jobs</a>
              </div>
              <div className='line'>
                <a href="#">Download App</a>
              </div>
            </nav>
            <div className="social-icons">
              <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
              <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
              <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
              <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
              <a href="#" target="_blank"><i className="fab fa-youtube"></i></a>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
};

export default Home;