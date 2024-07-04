import React from 'react'
import '../header/headertop.css'

const Headertop = () => {
  return (
    <div className='headertop-main'>
        <ul className='headertop-main-ul'>
            <li><a href="#">Live Classes</a></li>
            <li><a href="#">New Batches</a></li>
            <li><a href="#">Hire From Us</a></li>
            <li><a href="telto:+91 81791919999" className='bi bi-telephone'>  +91 81791919999</a></li>
            <li><a href="mailto:support@nareshit.com" className='bi bi-envelope'>   support@nareshit.com</a></li>
        </ul>
    </div>
  )
}

export default Headertop