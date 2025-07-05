import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import { BASE_URL } from '../utils/constants'
import FeedCard from './FeedCard'
import { addUser } from '../utils/userSlice'

const EditProfile = ({user}) => {
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState(user?.firstName)
  const [lastName, setLastName] = useState(user?.lastName)
  const [avatar, setAvatar] = useState(user?.avatar)
  const [age, setAge] = useState(user?.age)
  const [gender, setGender] = useState(user?.gender)
  const [about, setAbout] = useState(user?.about)

  const handleUpdate = async () => {
    // TODO: add data validation
    // TODO: Add toast when data saved
    // TODO: Gender=dropdown, about = textarea etc.
    try {
      const res = await axios.patch(BASE_URL+"/profile/edit", {
        firstName, lastName, avatar, age, gender, about
      }, {
        withCredentials: true
      })
      dispatch(addUser(res.data.data))
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className='flex justify-center gap-6 mt-20'>
      <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Profile</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">First Name</legend>
            <input
              type="text"
              className="input"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Last Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Age</legend>
            <input
              type="text"
              className="input"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Gender</legend>
            <input
              type="text"
              className="input"
              placeholder="Male/Female"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">About</legend>
            <input
              type="text"
              className="input"
              placeholder="About"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </fieldset>
          <div className="justify-end card-actions">
            <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
          </div>
        </div>
      </div>
      <FeedCard user={{firstName, lastName, avatar, age, gender, about}} preview={true} />
    </div>
  )
}

export default EditProfile