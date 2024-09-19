import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenre, { Genre } from '../hooks/useGenre'
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
    const {data} = useGenre();
    return (
    <List>
        {data.map(genres => <ListItem key={genres.id} paddingY='5px'>
          <HStack>
          <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genres.image_background)}></Image>
          <Text fontSize='lg'>{genres.name}</Text>
          </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList