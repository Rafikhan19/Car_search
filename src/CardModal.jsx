

import React, { useState } from 'react';
import Data from './Data.json';
import {
 
  Box,
  Button,
  ButtonGroup,
  Card,
 
  Heading,
  Image,
  Stack,
  Text,
  CardFooter,
} from '@chakra-ui/react';
import { CheckCircleIcon, SunIcon ,ChevronDownIcon} from '@chakra-ui/icons'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsFillPeopleFill, BsSpeedometer } from "react-icons/bs"

const CardModal = () => {
//   const cardsPerPage = 20;
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredData = Data.filter((car) =>
//     car.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
const cardsPerPage = 6; // Number of cards to display per page
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = Data.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <><nav style={{width:"100%",background:"#4169E1", height:"3rem",display:"flex"}}>
     <input
          type="text"
          placeholder="Search by car name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{width:"30%",height:"1.5rem",borderRadius:"2rem", border:"none", paddingLeft:"1rem",marginTop:"1rem" }}
        />
       <h5 style={{marginLeft:"2rem",color:"white"}}>Relevence <ChevronDownIcon /></h5>
       <h5 style={{marginLeft:"2rem",color:"white"}}>All Brands <ChevronDownIcon /></h5>
    </nav>
       
      <Box display={'flex'} justifyContent={'space-around'} flexWrap={'wrap'} backgroundColor={"#b3cee5"}  boxShadow="lg">
        {currentCards.map((d, i) => (
          <Card
            margin={'2rem'}
            width={'20%'}
            height={'15rem'}
            border={'2px solid none'}
            padding={'30px'}
            borderRadius={'1rem'}
            backgroundColor={'#e6e6fa'}
            key={d.id}
          >
            <Image
              src={d.image}
              alt={d.name}
              borderRadius="1rem"
              alignSelf={'center'}
              width={'80%'}
              height={'7rem'}
            />
            <Heading>{d.name}</Heading>
            <CardFooter marginTop={'-2rem'} paddingTop={'2rem'}>
              <Stack
                display="flex"
                flexDir={'row'}
                justifyContent="space-between"
                marginTop={'-2rem'}
              >
                <h5>
                  <BsFillPeopleFill /> 4people
                </h5>
                <h5>
                  {' '}
                  <BsSpeedometer /> 6 KM/-1lit
                </h5>
                <h5>
                  {' '}
                  <CheckCircleIcon /> Hybrid
                </h5>
                <h5>
                  {' '}
                  <SunIcon /> Automatic
                </h5>
              </Stack>
            </CardFooter>
            <CardFooter
              display="flex"
              flexDir="row"
              justifyContent="space-between"
              marginTop={'-1rem'}
            >
              <Text color="red">${d.price}/month-</Text>
              <ButtonGroup>
                <AiOutlineHeart style={{ marginTop: '1rem' }} />
                <Button
                  h={30}
                  marginLeft={10}
                  marginTop={10}
                  borderRadius={'1rem'}
                  backgroundColor={'#87CEEE'}
                  border={'none'}
                  color={'white'}
                  _hover={{ bg: '#416fff', color: 'black' }}
                >
                  Rent now
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
         
      </Box>
      <nav  style={{width:"100%",background:"#4169E1", height:"3rem", display: 'flex', justifyContent: 'flex-end'}}>
        {pageNumbers.map((number) => (
          <Button
            key={number}
            variant={number === currentPage ? 'solid' : 'outline'}
            colorScheme="blue"
            onClick={() => paginate(number)}
            // marginLeft={"2rem"}
            height={"1.5rem"}
            width={"2rem"}
            marginTop={"0.5rem"}
            marginRight={"2rem"}
            border={"none"}


          
          >
            {number}
          </Button>
        ))}
      </nav>

    </>
  );
};

export default CardModal;
