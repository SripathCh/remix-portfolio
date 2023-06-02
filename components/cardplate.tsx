import React from "react";
import { Card, CardBody, Image, Stack, Heading, Text, CardFooter, ButtonGroup, Button, Divider } from "@chakra-ui/react";

const Cardplate = ({imageSrc, alt, title, description, buttontext1, buttontext2, hyperlink }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={imageSrc} alt={alt} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text textAlign={"justify"}>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
            <a href={hyperlink}>
            <Button variant="solid" colorScheme="blue">
            {buttontext1}
          </Button>
            </a>
          <Button variant="ghost" colorScheme="blue">
          {buttontext2}
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Cardplate;
