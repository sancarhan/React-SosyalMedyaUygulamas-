import React, { useState } from 'react'
import { dummyUserData } from '../assets/assets'

const CreatePost = () => {

  const [content, setContent] = useState('')
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  
  const user = dummyUserData;

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
      <div className='max-w-6xl mx-auto p-6'>
        {/* Başlık */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-slate-900 mb-2'>Gönderi Oluştur</h1>
          <p className='text-slate-600'>Düşüncelerinizi dünyayla paylaşın</p>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
