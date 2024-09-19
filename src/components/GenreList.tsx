import useGenre, { Genre } from '../hooks/useGenre'

const GenreList = () => {
    const {data} = useGenre();
    return (
    <ul>
        {data.map(genres => <li key={genres.id}>{genres.name}</li>)}
    </ul>
  )
}

export default GenreList