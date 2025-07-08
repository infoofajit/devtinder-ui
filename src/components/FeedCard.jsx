import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { removeUserFromFeed } from "../utils/feedSlice"

const FeedCard = ({user}) => {
  const dispatch = useDispatch()

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(`${BASE_URL}/request/send/${status}/${userId}`, {}, {
        withCredentials: true
      })
      dispatch(removeUserFromFeed(userId))
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        {user?.avatar && (
          <img
            src={user?.avatar}
            alt="Avarat"
          />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user?.firstName+" "+user?.lastName}</h2>
        <p>{user?.age +', '+ user?.gender}</p>
        <p>{user?.about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={() => handleSendRequest('ignored', user?._id)}>Ignore</button>
          <button className="btn btn-secondary" onClick={() => handleSendRequest('interested', user?._id)}>Interested</button>
        </div>
      </div>
    </div>
  )
}

export default FeedCard