
import { Outlet, useNavigate } from 'react-router'
import NavBar from './NavBar'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { addUser } from '../utils/userSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Body = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData = useSelector((store) => store.user)

  const fetchUser = async () => {
    try {
      const user = await axios.get(BASE_URL+"/profile/view", {
        withCredentials: true
      })
      dispatch(addUser(user.data))
    } catch (err) {
      if(err.status === 401) {
        navigate('/login')
      }
      console.error(err.message)
    }
  }

  useEffect(() => {
    if(!userData) {
      fetchUser()
    }
  }, [])

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body