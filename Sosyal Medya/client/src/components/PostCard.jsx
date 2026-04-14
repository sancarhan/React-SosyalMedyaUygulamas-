import { Badge } from 'lucide-react'
import React from 'react'

const PostCard = ({post}) => {
  return (
    <div className='bg-white rounded-xl shadow p-4 space-y-4 w-full max-w-2xl'>
      {/* Kullanıcı bilgisi */}
      <div className='inline-flex items-center gap-3 cursor-pointer'>
       <img src={post.user.profile_picture} className='w-10 h-10 rounded-full shadow' alt="" />
       <div>
        <div>
         <span>{post.user.full_name}</span>
         <Badge />
        </div>
       </div>
      </div>
    </div>
  )
}

export default PostCard
