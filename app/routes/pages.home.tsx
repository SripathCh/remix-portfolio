import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Wrap,
  WrapItem,
  Box,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import homeStyles from "../styles/pages.home.css";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import profilePic from "../../public/profilepic.png";
import { Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import Cardplate from "../../components/cardplate";
import portfolioImg from "../../public/portfoliowb.png";

export default function Home() {
  const tabPanelStyle = {
    justifyContent: "center",
    borderBottom: "none",
    color: "black",
  };

  const cards = [
    {
      imageSrc:
        portfolioImg,
      alt: "Personal Portfolio Website",
      title: "Personal Portfolio Website",
      description: "This is personal project that I took up in the summer 2023. This is an initiative taken by me to learn and gain in-depth knowledge about React.js, Remix.js, routing pages and UI/UX design.",
      buttontext1: "GitHub",
      buttontext2: "Read More",
      hyperlink: "https://github.com/SripathCh/remix-portfolio.git",
    },
    {
        imageSrc:
          portfolioImg,
        alt: "Personal Portfolio Website",
        title: "Personal Portfolio Website",
        description: "This is personal project that I took up in the summer 2023. This is an initiative taken by me to learn and gain in-depth knowledge about React.js, Remix.js, routing pages and UI/UX design.",
        buttontext1: "GitHub",
        buttontext2: "Read More",
        hyperlink: "https://github.com/SripathCh/remix-portfolio.git",
      },
      {
        imageSrc:
          portfolioImg,
        alt: "Personal Portfolio Website",
        title: "Personal Portfolio Website",
        description: "This is personal project that I took up in the summer 2023. This is an initiative taken by me to learn and gain in-depth knowledge about React.js, Remix.js, routing pages and UI/UX design.",
        buttontext1: "GitHub",
        buttontext2: "Read More",
        hyperlink: "https://github.com/SripathCh/remix-portfolio.git",
      },
    // Add more cards as needed
  ];

  const MyAvatar = () => (
    <Wrap>
      <WrapItem>
        <Avatar size="2xl" name="sripath Cherukuri" src={profilePic} />{" "}
      </WrapItem>
    </Wrap>
  );

  return (
    <div className="main-container">
      <ChakraProvider>
        <Tabs variant="soft-rounded" colorScheme="cyan">
          <TabList className="navbar-text" style={tabPanelStyle}>
            <Tab>Home</Tab>
            <Tab>About</Tab>
            <Tab>Contact Me</Tab>
          </TabList>
          <MyAvatar />
          <Text className="name">Sripath Cherukuri</Text>
          <Text className="img-sub font-serif text-2xl italic leading-normal tracking-tight text-slate-500">
            Pursuing Master's in Computer Science <br></br> at George Mason
            University
          </Text>
          <br></br>
          <Box>
            <hr />
          </Box>
          <TabPanels p="2rem">
            <TabPanel>
              <Text className=".intro-text" textAlign={"justify"}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </Text>
            </TabPanel>
            <TabPanel>About</TabPanel>
            <TabPanel>Contact Me</TabPanel>
          </TabPanels>
        </Tabs>
        <Text className="name">Projects</Text>
        <br></br>
        <hr></hr>
        <div className="cardsdiv">
          {cards.map((card, index) => (
            <Cardplate
                  key={index}
                  imageSrc={card.imageSrc}
                  alt={card.alt}
                  title={card.title}
                  description={card.description}
                  buttontext1={card.buttontext1}
                  buttontext2={card.buttontext2} 
                  hyperlink={card.hyperlink}           />
          ))}
        </div>
      </ChakraProvider>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: homeStyles }];
}
