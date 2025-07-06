import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { BASE_URL } from '../../utils/constants'
import { addFeed } from '../../utils/feedSlice'
import FeedCard from "../FeedCard"

const Feed = () => {
  const feed = useSelector((store) => store.feed)
  const dispatch = useDispatch()
  
  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL+"/user/feed", {
        withCredentials: true
      })
      dispatch(addFeed(res.data))
    } catch(err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    if(!feed) {
      getFeed()
    }
  }, [])

  return (
    <>
      <div className="flex justify-center mt-10">
        {feed?.users.map((user) => {
          return <FeedCard user={user} key={user?._id} />
        })}
      </div>
    </>
  )
}

export default Feed