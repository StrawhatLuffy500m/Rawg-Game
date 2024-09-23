import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenre, { Genre } from '../hooks/useGenre'
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null
}

const GenreList = ({selectedGenre,onSelectGenre}: Props) => {
    const {data, isLoading, error} = useGenre();
    if(error) return null;
    if(isLoading) return <Spinner />;
    return (
    <>
    <Heading marginBottom={5} fontSize='3xl'>Genres</Heading>
    <List>
        {data.map(genres => <ListItem key={genres.id} paddingY='5px'>
          <HStack>
          <Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedImageUrl(genres.image_background)}></Image>
          <Button 
           whiteSpace='normal'textAlign='left' fontWeight={genres.id === selectedGenre?.id ? 'bold': 'normal'}
           onClick={() => onSelectGenre(genres)} fontSize='lg' variant='link'>{genres.name}</Button>
          </HStack>
        </ListItem>)}
    </List>
    </>
  )
}

export default GenreList