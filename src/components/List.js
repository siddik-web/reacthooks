import React from 'react';

function List(props) {
  const {lists, onDelete} = props;
  return lists.map((list) => <li key={list.id}>{list.name} <button onClick={onDelete}>Delete</button></li>);
}

export default List;
