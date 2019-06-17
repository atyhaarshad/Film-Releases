import React from 'react';

function Film(props){

  return (
    <div>
      <h3><a href={props.url}>{props.name}</a></h3>

    </div>
  );
}

export default Film;
