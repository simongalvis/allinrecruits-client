import React from 'react'
import './Footer.css'

class Footer extends React.Component{
    
render(){
    return(
        <div className="Footer">
            <p className="portfolio-link">© - <a href="http://simongalvis.com/" target="_blank" rel="noopener noreferrer" className="portfolio-link">simongalvis.com</a></p>
        </div>
    )
}
}

export default Footer;