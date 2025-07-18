import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'

import { BASE_URL } from '../utils/constants'
import { removeUser } from '../utils/userSlice'

const NavBar = () => {
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL+"/logout", {}, {withCredentials: true})
      dispatch(removeUser())
      navigate("/login")
    } catch (err) {
      console.error(err.message);
    }
  }
  
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">👨 DevTinder</Link>
      </div>
      <div className="flex gap-2">
        <div className="dropdown dropdown-end">
          {user && (
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.avatar} />
              </div>
            </div>
          )}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <Link to="profile" className='justify-between'>
                Profile
              </Link>
            </li>
            <li>
              <Link to="connections" className='justify-between'>
                Connection
              </Link>
            </li>
            <li>
              <Link to="connection-request" className='justify-between'>
                Connection Requests
              </Link>
            </li>
            <li><a onClick={handleLogout}>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar