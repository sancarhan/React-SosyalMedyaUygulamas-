import React, { useEffect, useState } from 'react'
import { dummyPostsData } from '../assets/assets'
import Loading from '../components/Loading'
import StoriesBar from '../components/StoriesBar'

const Feed = () => {

  const [feeds, setfeeds] = useState([])
  const [loading, setLoading] = useState(true)


  const fetchFeeds = async () => {
    setfeeds(dummyPostsData)
    setLoading(false)

  }

  useEffect(()=>{
    fetchFeeds()
  },[])

  return !loading ? (
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8'>
      {/* hikaye ve gönderi listesi */}
      <div>
        <StoriesBar />
        <div className='p-4 space-y-6'>
          Gönderi listesi
        </div>
      </div>

      {/* sağ sidebar */}
      <div>
        <div>
          Sponsorlu
        </div>
        <h1>Son mesajlar</h1>
      </div>
    </div>
  ) : <Loading />
}

export default Feed
