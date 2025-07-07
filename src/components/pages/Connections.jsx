import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../../utils/connectionSlice'

const Connections = () => {
  const connections = useSelector((store) => store.connections)
  const dispatch = useDispatch()

  const getConnections = async() => {
    const res = await axios.get(BASE_URL + "/user/connection", {
      withCredentials: true
    })
    dispatch(addConnections(res.data.data))
  }

  useEffect(() => {
    getConnections()
  }, [])

  if(connections?.length === 0) return <h2>No connection found!</h2>

  return (
    <div className="text-center mt-10 w-1/2">
      <h2 className='font-semibold text-2xl'>Connections</h2>
      <div className='flex flex-col bg-base-300'>
        {connections?.map((user) => (
          <div className='flex justify-center items-center gap-2' key={user?._id}>
            <img src={user?.avatar} alt="User" className='w-15 rounded-full' />
            <div className='flex flex-col text-left'>
              <p>{user?.firstName +" "+ user?.lastName}</p>
              <p>{user?.about}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Connections