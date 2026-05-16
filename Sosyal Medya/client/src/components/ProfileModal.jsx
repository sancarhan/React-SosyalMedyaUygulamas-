import React, { useState } from 'react'
import { dummyUserData } from '../assets/assets'

const ProfileModal = () => {
 const user = dummyUserData;
 const [editForm, setEditForm] = useState({
  username: user.username,
  bio: user.bio,
  location: user.location,
  full_name: user.full_name,
 })

 const handleSaveProfile = async (e) => {
  e.preventDefault();
 }

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-110 h-screen
    overflow-y-scroll bg-black/50'>
      <div className='max-w-2xl sm:py-6 mx-auto'>
       <div className='bg-white rounded-lg shadow p-6'>
        <h1 className='text-2xl font-bold text-gray-900 mb-6'>Profil Düzenle</h1>

        <form className="space-y-4" onSubmit={handleSaveProfile}>
         {/* Profil Resmi */}
        </form>
       </div>
      </div>
    </div>
  )
}

export default ProfileModal
