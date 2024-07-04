import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

//view signgle user using id 
const Viewdata = ({ id, showpop, setShowpop }) => {
    const allUsers = useSelector((state) => state.users.users);

    
    const signleuser = allUsers.filter((data) => data.id == id);

    if (!signleuser) {
        return null;
      }
    return (
        <>
            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">

                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{signleuser[0].name}</div>
                                    <div className="font-bold text-xl mb-2">{signleuser[0].email}</div>
                                    <p className="text-gray-700 text-base">
                                        {signleuser[0].note}
                                    </p>
                                </div>
                            </div>
                        </div>
                       <button onClick={()=> setShowpop(false)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-1 '>close</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Viewdata