import React from 'react'

import SearchBar from './SearchBar';
const Header = () => {
  return (
    <div className="flex justify-between gap-2 md:px-7 items-center">
      <div>
        <h1 className="md:text-lg flex font-bold">
          <span className='inline'> Hello Devendra,</span>
          <span className="text-2xl">👋</span>
        </h1>
      </div>
      <SearchBar />
    </div>
  );
}

export default Header