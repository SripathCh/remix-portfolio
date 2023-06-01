import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import homeStyles from "../styles/pages.home.css";

export default function Home() {
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900"]
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];

  
  return (
    <div className="main-container">
      <ChakraProvider>
        <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
          <TabList>
            <Tab>Red</Tab>
            <Tab>Teal</Tab>
            <Tab>Blue</Tab>
          </TabList>
          <TabPanels p="2rem">
            <TabPanel>The Primary Colors</TabPanel>
            <TabPanel>Are 1, 2, 3</TabPanel>
            <TabPanel>Red, yellow and blue.</TabPanel>
          </TabPanels>
        </Tabs>
      </ChakraProvider>
    </div>
  );
}

export function links() {
    return [{ rel: 'stylesheet', href: homeStyles }]
}
