import { Tabs, TabList, TabPanels, Tab, TabPanel, Wrap, WrapItem } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import homeStyles from "../styles/pages.home.css";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import profilePic from "../../public/profilepic.png";
import { Text } from '@chakra-ui/react'
import { color } from "framer-motion";

export default function Home() {

  const tabPanelStyle = {
    justifyContent: 'center',
    borderBottom: 'none',
    color:'black',
  };
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
        <Tabs variant='soft-rounded' colorScheme='teal'>
          <TabList className="navbar-text" style={tabPanelStyle}>
            <Tab>Home</Tab>
            <Tab>About</Tab>
            <Tab>Contact Me</Tab>
          </TabList>
          <MyAvatar/>
          <Text className="name">Sripath Cherukuri</Text>
          <Text className="img-sub font-serif text-2xl italic leading-normal tracking-tight text-slate-500">Pursuing Master's in Computer Science <br></br> at George Mason University</Text>
          <TabPanels p="2rem">
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
