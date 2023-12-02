import React from 'react'
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
       <div className='descriptionbox-navigator'>
          <div className='descriptionbox-nav-box'>Description</div>
          <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-desvription'>
            <p> 
            An E-commerce website is an online platform that lets users buy products directly from a seller over the internet without an intermediary service. An online store can be a great way to sell products like clothing, jewelry.
            E-commerce website have gained immense popularity in recent years. With the rise of online stores, people have started to prefer online shopping over conventional shopping. The reasons are quite obvious. 
            </p>
            <p>
            It is much more convenient to shop online than to go to a physical store. Also, the variety of products available online is much more than what you would find in any local store. And, the best part is that you can shop anytime you want. You can even shop at midnight wearing your pajamas.  
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox