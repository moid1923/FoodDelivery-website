import React from 'react'

function Footer() {
  return (
    <div className="footer bg-black">
      <div className=' px-36 py-28 flex items-center justify-between flex-wrap'>
      <div className="footer-heading">
      <p className='text-5xl mb-24'>🍕</p>
      <div className="hero-btns mx-2 my-3 flex gap-4">
                <button className="first w-32 px-3 py-2 text-base bg-slate-100 border-r-2 rounded-2xl">App Store</button>
                <button className="second  w-32 px-3 py-2 text-base bg-slate-100 border-r-2 rounded-2xl">Google Play</button>
            </div>
      </div>
     

            <div className="footer-links text-gray-400">
              <div className="link-heading flex gap-12 font-extralight flex-wrap">
                <ul>
                  <li className='text-white my-3'>Quick links</li>
                  <li>Feetures</li>
                  <li>Food Menu</li>
                  <li>Offer</li>
                  <li>Review</li>
                  <li>Rider</li>
                </ul>
                <ul>
                  <li className='text-white my-3'>Get to Know us</li>
                  <li>Gift Cards</li>
                  <li>DashDoor Stories</li>
                  <li>Linkedin </li>
                  <li>Glassdoor</li>
                  <li>Accessibility</li>
                </ul>
                <ul>
                  <li className='text-white my-3'>News</li>
                  <li>Blog</li>
                  <li>FAQ</li>
                  <li>Little media</li>
                  <li>Press</li>
                  <li>Presse kit</li>
                </ul>
                <ul>
                  <li className='text-white my-3'>Contact</li>
                  <li>Whatsapp</li>
                  <li>Support 24</li>
                </ul>
              </div>
            </div>
    </div>
    <div className="lower-footer-section flex justify-between px-36 text-gray-400 py-10">
      <div className="footer-left">
        <p>© 2023 pizza.All right reserved</p>
      </div>
      <div className="footer-right">
      <ul className='flex gap-6 flex-wrap'>
                  
                  <li>Privacy</li>
                  <li>Policy</li>
                  <li>Term</li>
                  <li>Services</li>
                 
                </ul>
      </div>
    </div>
    </div>
    

  )
}

export default Footer
