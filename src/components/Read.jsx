import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers, readUsers } from '../store/fetchSlice';
import { Link } from 'react-router-dom';
import Viewdata from './viewdata';

const Read = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [showpop, setShowpop] = useState(false);
  const { users = [], loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(readUsers());
  }, [dispatch]);

  if (loading) {
    return <h4>Loading.....</h4>;
  }

  return (
    <div>
      {showpop && <Viewdata id={id} showpop={showpop} setShowpop={setShowpop} />}
      <div className="grid grid-flow-row justify-center h-screen pt-3">
        <div>
          <h2 className="text-center text-2xl mb-4">All data</h2>
          {users && users.length > 0 ? (
            users.map((data) => {
              if (!data) {
                return null; // Skip undefined or null items
              }
              return (
                <div key={data.id} className="max-w-sm rounded overflow-hidden shadow-lg w-80 h-auto pt-3">
                  <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{data.name || 'No Name'}</div>
                    <div className="font-bold text-xl mb-2">{data.email || 'No Email'}</div>
                    <p className="text-gray-700 text-base">
                      {data.note || 'No Note'}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <button onClick={() => [setId(data.id), setShowpop(true)]} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-1'>
                      View
                    </button>
                    <Link to={`/edit/${data.id}`} onClick={() => setId(data.id)}>
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                        Edit
                      </button>
                    </Link>
                    <button onClick={() => dispatch(deleteUsers(data.id))} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-1'>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            'Add new data'
          )}
        </div>
      </div>
    </div>
  );
};

export default Read;
