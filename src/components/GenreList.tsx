import React from 'react'
import useGenre from '../hooks/useGenre'

const GenreList = () => {
    const {genres} = useGenre();
    return (
    <ul>
        {genres.map(genres => <li key={genres.id}>{genres.name}</li>)}
    </ul>
  )
}

export default GenreList