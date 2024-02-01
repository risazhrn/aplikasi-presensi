import React,{useEffect,useState} from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

const UserProfile = () => {
  const { currentColor } = useStateContext();
  const [user, setUser] = useState({})

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'))||{}
    setUser(localUser)
  },[])

  return (
    <div className="nav-item right-1 top-16 bg-white dark:bg-[#42464D] p-4 rounded-lg w-full">
      {/* <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div> */}
      <div className="flex gap-5 items-center border-color border-b-1 pb-6">
        <img
          className="rounded-full h-16 w-16"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-sm dark:text-gray-200">{user.firstName} {user.lastName}</p>
          <p className="text-gray-500 text-xs dark:text-gray-400">{user.authority}</p>
          <p className="text-gray-500 text-xs font-semibold dark:text-gray-400">{user.email}</p>
        </div>
      </div>
      {/* <div>
        {userProfileData.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
      </div> */}
      {/* <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div> */}
    </div>

  );
};

export default UserProfile;
