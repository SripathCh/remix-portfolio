import { Tabs, TabList, TabPanels, Tab, TabPanel, Wrap, WrapItem } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import homeStyles from "../styles/pages.home.css";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import profilePic from "../../public/profilepic.png";

export default function Home() {
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900"]
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];
  const MyAvatar = () => (
    <Wrap>
      <WrapItem>
        <Avatar
          size="2xl"
          name="sripath Cherukuri"
          src={profilePic}
        />{" "}
      </WrapItem>
    </Wrap>
  );

  return (
    <div className="main-container">
      <ChakraProvider>
        <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
          <TabList>
            <Tab>Home</Tab>
            <Tab>About</Tab>
            <Tab>Contact Me</Tab>
          </TabList>
          <TabPanels p="2rem">
            <MyAvatar/>
            <TabPanel>Home</TabPanel>
            <TabPanel>About</TabPanel>
            <TabPanel>Contact Me</TabPanel>
          </TabPanels>
        </Tabs>
      </ChakraProvider>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: homeStyles }];
}
