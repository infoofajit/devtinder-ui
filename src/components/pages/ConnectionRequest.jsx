import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../../utils/constants'
import { addConnectionRequest } from '../../utils/connectionRequestSlice'

const ConnectionRequest = () => {
  const connectionRequest = useSelector((store) => store.connectionRequest)
  const dispatch = useDispatch()

  const getConnectionRequestSlice = async () => {
    try {
      const res = await axios.get(BASE_URL+"/user/requests/received", {
        withCredentials: true
      })
      dispatch(addConnectionRequest(res.data.data))
    } catch (err) {
      console.log(err.message)
    }
  }

  const handleReviewRequest = async (status, _id) => {
    try {
      await axios.post(`${BASE_URL}/request/review/${status}/${_id}`, {}, {
        withCredentials: true
      })
      // getConnectionRequestSlice()
      // TODO: write a action to remove this id from redux store
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getConnectionRequestSlice()
  }, [])

  if(connectionRequest?.length === 0) return <h2>No connection request found!</h2>
  
  return (
    <div className="text-center mt-10">
      <h2 className='font-semibold text-2xl'>Connection Request</h2>
      <div className='flex flex-col bg-base-300'>
        {connectionRequest?.map((user) => {
          const {_id, firstName, lastName, about, avatar} = user.fromUserId

          return (
            <div className='flex justify-center items-center gap-2' key={_id}>
              <img src={avatar} alt="User" className='w-15 rounded-full' />
              <div className='flex flex-col text-left'>
                <p>{firstName +" "+ lastName}</p>
                <p>{about}</p>
              </div>
              <div className='flex gap-2'>
                <button className="btn btn-primary" onClick={() => handleReviewRequest('rejected', user?._id)}>Reject</button>
                <button className="btn btn-secondary" onClick={() => handleReviewRequest('accepted', user?._id)}>Accept</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ConnectionRequest