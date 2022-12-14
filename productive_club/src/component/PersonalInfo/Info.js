import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Info = () => {
  return (
    <div className="">
      <div className="flex  p-5 border-2 rounded-xl m-3 my-10 bg-gray-50">
        <div className="avatar">
          <div className="w-14 rounded-xl">
            <img src="mpp.jpg" alt='' />
          </div>
        </div>
        <div className="text-start ml-5">
          <p className="text-lg font-semibold">Rahul Joy</p>
          <p>
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Sylhet,
            Bangladesh
          </p>
        </div>
      </div>
      <div className="flex justify-around p-5 border-2 rounded-xl m-3 mt-5 bg-gray-50">
        <div>
          <p>
            <span className="text-xl font-bold">72</span> Kg
          </p>
          <p>Weight</p>
        </div>
        <div>
          <p className="text-xl font-bold">6.1</p>
          <p>Height</p>
        </div>
        <div>
          <p>
            <span className="text-xl font-bold">23</span>yrs
          </p>
          <p>Age</p>
        </div>
      </div>
    </div>
  );
};

export default Info;