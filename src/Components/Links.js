import React from 'react'
import { FaLink } from "react-icons/fa";

const Links = () => {
  return (
    <div  className='container'>
     {/* Card 1 */}
     <a className='btn btn-portfolio' href="#">
     <div className="card">
        <div className="c-content">
            <div className="l-content">
               <FaLink />
            </div>
            <div className="r-content">
              <h3>My Portfolio</h3>
            </div>
        </div>
      </div>
     </a>
    </div>
  )
}

export default Links;
