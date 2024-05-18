import { Flex } from '@chakra-ui/react';
import SimpleSidebar from './Sidebar';
import Main from './Main';

const Layout = ({ children }) => {
  return (
    <Flex>
      <SimpleSidebar children={<Main />} />
    </Flex>
  );
};

export default Layout;
