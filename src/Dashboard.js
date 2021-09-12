import React from 'react'
import { Link } from 'react-router-dom'
import "./Dashboard.css"
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
// import { faLinkedin, faTwitter, faGithub, faInstagram } from "@fontawesome/free-brands-svg-icons";

function Dashboard() {
    return (
        <div>
             <a
          className="app-link"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <i class="fab fa-instagram"></i>instagram
        </a>
        <a
          className="app-link"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <i class="fab fa-facebook"></i>Facebook
        </a>
        <a
          className="app-link"
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <i class="fab fa-twitter"></i>Twitter
        </a>
        <a
          className="app-link"
          href="mailto:equippment.hiring@gmail.com.com"
          target="_blank"
          rel="noopener noreferrer"
        >
         <i class="fas fa-envelope"></i>Mail us
        </a>
            <header className="header">Geek's Equippment Rentals</header>
            <h3 className="label">camera equippment | bikes | cars | cycles | shoes | laptops</h3>
        <div className="dashboard">
            
            <div >
           <h1>welcome to equippment hiring</h1>
           <h2>we provide products for rental for very reasonable price</h2>
           <h2>click Home to continue..</h2>
            
        </div>
        <Link  to="/home"><button className="dash-btn">Home</button></Link>
        </div>
        
       
        
        </div>
    )
}

export default Dashboard
