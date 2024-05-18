import {
  Tabs,
  TabPanel,
  Image,
  Tab,
  TabPanels,
  TabList,
} from '@chakra-ui/react';

const FooterTab = () => {
  return (
    <Tabs defaultIndex={1} position={'sticky'} bottom={0}>
      <TabPanels>
        <TabPanel>
          <Image
            boxSize="200px"
            fit="cover"
            src="https://www.freepnglogos.com/uploads/naruto-png/image-kunai-naruto-fictional-battle-omniverse-23.png"
          />
        </TabPanel>
        <TabPanel>
          <Image
            boxSize="200px"
            fit="cover"
            src="https://images5.alphacoders.com/810/thumbbig-810547.webp"
          />
        </TabPanel>
      </TabPanels>
      <TabList>
        <Tab>Naruto</Tab>
        <Tab>Sasuke</Tab>
      </TabList>
    </Tabs>
  );
};

export default FooterTab;
