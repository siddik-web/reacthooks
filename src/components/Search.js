import React from 'react';

export default function Search({onSearch}) {
  return (
      <div>
          <input id="search" onChange={onSearch}/>
      </div>
  );
}
