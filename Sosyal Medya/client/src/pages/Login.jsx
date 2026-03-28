import React from 'react'
import { assets } from '../assets/assets'
import { Star } from 'lucide-react'
import { SignIn } from '@clerk/react'

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      {/* Bacgroun */}
      <img src={assets.bgImage} alt=""  className='absolute top-0 left-, -z-1 w-full h-full object-cover'/>

      {/* left side  */}
      <div className='flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-20'>
        <img src={assets.logoimg} alt="" className='h-6 object-contain'/>
        <div>
          <div className='flex items-center gap-3 mb-4 max-md:mt-10'>
            <img src={assets.group_users} alt="" className='h-8 md:h-10'/>
            <div>
              <div className='flex'>
                {Array(5).fill(0).map((_, i)=>(<Star key={i}
                 className='size-4 md:size-4.5 text-transparent fill-amber-500'/>))}
              </div>
              <p>12.000'den fazla geliştirici tarafından kullanılıyor.</p>
            </div>
          </div>
          <h1 className='text-3xl md:text-6xl md:pb-2 font-bold bg-gradient-to-r from-indigo-950 to-indigo-400 bg-clip-text text-transparent'>Sadece arkadaşlıktan öte, <br/> gerçek bir bağ kurulur.</h1>
          <p className='text-xl md:text-3xl text-indigo-900 max-w-72 md:max-w-md'>Cosnova üzerinden küresel toplulukla bağlantı kurun.</p>
        </div>
        <span className='md:h-10'></span>
      </div>
      {/* Right side : Login */}
      <div className='felx-1 flex items-center justify-center p-10 sm:p-10'>
        <SignIn />
      </div>
    </div>
  )
}

export default Login
