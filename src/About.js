import React from 'react'
import "./App.css"
import { Link } from 'react-router-dom';


function About() {
    return (
        <div>
              <ul>
				   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
				   <li>Aliquam tincidunt mauris eu risus.</li>
				   <li>Vestibulum auctor dapibus neque.</li>
				</ul>
                <Link  to="/home"><button className="dash-btn">Go Back</button></Link>
        </div>
    )
}

export default About
