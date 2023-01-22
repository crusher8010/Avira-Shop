import { Box, Button, Center, Flex } from '@chakra-ui/react';
import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
        <Center>
      <Flex className='pagination' gap={3} mt={12}>
        {pageNumbers.map(number => (
          <Button  bgColor={"rgb(244, 51, 151)"} bcolor={"white"} key={number} borderRadius={"50%"} color={"white"} onClick={() => paginate(number)} 
          >
         
             {number}
          </Button>
        ))}
      </Flex>
      </Center>
    </>
  );
};

export default Pagination;