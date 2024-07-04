import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { creatUser } from '../store/fetchSlice'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const [users, setUsers] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const hanglechnage =(e)=>{
        setUsers({...users, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
       if(dispatch(creatUser(users))){
        navigate('/')
       }
        console.log(users);
    }
  return (
    <>

<div className="w-full max-w-xs mx-auto justify-center items-center mt-10 hover:shadow-red-600 shadow">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='name' id="username" type="text" placeholder="Username" onChange={hanglechnage} />
    </div>
    {/* <div className="mb-6">
      <label className="block text-gray-700 font-bold mb-2" >
        image
      </label>
      <img src={AbortController.png} className='rounded h-3 w-3 ' onChange={hanglechnage} />  
    </div> */}
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name ='email'  type="email" onChange={hanglechnage}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Add somthing what You want
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name ='notes' type="text" onChange={hanglechnage} />
    </div>

    <div className="flex items-center justify-between">
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Add Notes
      </button > */}
      <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
      
      {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a> */}
    </div>
  </form>
  
</div>

    </>
  )
}

export default Create