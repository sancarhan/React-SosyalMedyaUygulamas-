import React, { useState } from 'react'
import { dummyConnectionsData } from '../assets/assets'

const Discover = () => {

  const [input, setInput] = useState('')
  const [users, setUsers] = useState(dummyConnectionsData)
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e) => {
    if (e.key === 'Giriş') {
      setUsers([])
      setLoading(true)
      setTimeout(()=>{
        setUsers(dummyConnectionsData)
        setLoading(false)
      },1000)
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
      <div className='max-w-6xl mx-auto p-6'>
         {/* Başlık */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Keşfet</h1>
          <p className="text-slate-600">
           Harika insanlarla bağlantı kurun, ağınızı genişletin.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Discover
