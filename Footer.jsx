import React from 'react'
import img from '../Images/tj flex.png'

const Footer = () => {
  return (
    <div className='flex flex-row bg-gray-800 justify-between px-6 py-3 items-center'>
        
            <div>
            <img src={img} className='h-[50px] rounded-full' alt="" />
            </div>
            <div>
                <p className='text-orange-600'><i className="fa fa-copyright text-orange-600"></i> 2023 @ Ariyo Eyitayo Emmanuel.</p>
            </div>

            <div>
                <a target='_blank' rel='noreferrer' href="https://instagram.com/ariyoeyitayo"><i className="text-[20px] hover:scale-110 duration-300 p-3 text-pink-700 fa-brands fa-instagram"></i></a>
                <a target='_blank' rel='noreferrer' href="https://linkedin.com/ariyoeyitayo"><i className="text-[20px] hover:scale-110 duration-300 p-3 text-blue-500 fa-brands fa-linkedin"></i></a>
                <a target='_blank' rel='noreferrer' href="https://gtihub.com/ariyoeyitayo"><i className="text-[20px] hover:scale-110 duration-300 p-3 text-gray-500 fa-brands fa-github"></i></a>
                <a target='_blank' rel='noreferrer' href="https://twitter.com/ariyo_eyitayo"><i className="text-[20px] hover:scale-110 duration-300 p-3 text-white fa-brands fa-x-twitter"></i></a>
                <a target='_blank' rel='noreferrer' href="https://wa.me/08169932832"><i className="text-[20px] hover:scale-110 duration-300 text-green-700 p-3 fa-brands fa-whatsapp"></i></a>
                <a target='_blank' rel='noreferrer' href="mailto: ariyoeyitayo23@gmail.com"><i className="text-[20px] hover:scale-110 duration-300 text-orange-600 p-3 fa fa-envelope"></i></a>
            </div>
    </div>
  )
}

export default Footer