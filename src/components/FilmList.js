import React from 'react';
import Film from './Film';

function FilmList(props){

  const filmNodes = props.data.map((film) => {

    return (
      <li key={film.id}><Film name={film.name} url={film.url}/></li>
    );
  });

  return (

    <div>
      <ul>
      {filmNodes}
      </ul>
    </div>


  );

}

export default FilmList;
