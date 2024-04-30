import { Box, Text, VStack, Input, Button, Textarea } from '@chakra-ui/react';
import { FaCalendarAlt, FaInfo, FaMailBulk } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={10} p={5}>
      <Box p={5} shadow='md' borderWidth='1px'>
        <FaCalendarAlt />
        <Text fontSize='2xl' fontWeight='bold'>Tour Dates</Text>
        <Text mt={4}>Check out our upcoming tour dates!</Text>
        {/* List of tour dates would be dynamically generated here */}
      </Box>

      <Box p={5} shadow='md' borderWidth='1px'>
        <FaInfo />
        <Text fontSize='2xl' fontWeight='bold'>Band Bio</Text>
        <Text mt={4}>Learn more about the band's history and members.</Text>
        {/* Band bio information would be dynamically generated here */}
      </Box>

      <Box p={5} shadow='md' borderWidth='1px'>
        <FaMailBulk />
        <Text fontSize='2xl' fontWeight='bold'>Contact Us</Text>
        <VStack spacing={3} mt={4}>
          <Input placeholder='Your Name' />
          <Input placeholder='Your Email' />
          <Textarea placeholder='Your Message' />
          <Button colorScheme='blue'>Send Message</Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Index;