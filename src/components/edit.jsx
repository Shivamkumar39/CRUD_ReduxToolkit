import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from '../store/fetchSlice';

const edit = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [useedit, setUseEdit] = useState()
    const { users, loading } = useSelector((state) => state.users);


    useEffect(() => {
        if (id) {
            const getSigngleuser = users.filter((data) => data.id === id);

            setUseEdit(getSigngleuser[0])
        }
    }, [])
    console.log(useedit);


    const newData = (e) => {
        setUseEdit({ ...useedit, [e.target.name]: e.target.value })
    }
    const HandelEdit = (e) => {
        e.preventDefault()
        dispatch(editUser(useedit))
        navigate('/')

    }
    return (
        <>
            <div className="w-full max-w-xs mx-auto justify-center items-center mt-10 hover:shadow-red-600 shadow">
                <h1>Edit page</h1>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={HandelEdit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Name
                        </label>
                        <input onChange={newData} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={useedit && useedit.name} name='name' type="text" />
                    </div>
                    {/* <div className="mb-6">
      <label className="block text-gray-700 font-bold mb-2" >
        image
      </label>
      <img src={AbortController.png} className='rounded h-3 w-3 ' onChange={hanglechnage} />  
    </div> */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            email
                        </label>
                        <input onChange={newData} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={useedit && useedit.email} name='email' type="email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            note
                        </label>
                        <input onChange={newData} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={useedit && useedit.note} name='notes' type="text" />
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

export default edit