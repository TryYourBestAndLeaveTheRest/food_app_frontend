import { Box, Stack, Text, IconButton, Center } from '@chakra-ui/react';
import { ArrowBackIcon, AddIcon, AttachmentIcon } from '@chakra-ui/icons';

const Action = ({ text, icon }) => {
    return (  
        <Box bgColor={'yellow'} width={'max-content'} py={4} borderRadius={22}>
      <Stack>
        <Center>
          <IconButton width={'min-content'}>{icon}</IconButton>
        </Center>
        <Text>{text}</Text>
      </Stack>
    </Box>
  );
};

const actions = ['view Restaurants', 'search for recipes', 'buy foods'];
const actionComponents = [<ArrowBackIcon />, <AddIcon />, <AttachmentIcon />];
// const sellerActions = [...actions];

const Actions = () => {
  return (
    <>
      <Action text="going to school" icon={<ArrowBackIcon />} />;
    </>
  );
};

export default Actions;
