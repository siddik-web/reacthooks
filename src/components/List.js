import React from 'react';

export default function List(props) {

  return (
    props.lists.map((list,index) => {
        return (<div key={index}>{list} <button className='btn btn-danger' onClick={props.onDelete(index)}>delete</button></div>);
      })
  );
}
