import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Text,
  Image,
  Divider,
  Heading,
  Flex,
  VStack,
  Box,
  Spacer,
  Icon,
  HStack,
  Stack,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import {IoSunny, IoMoon} from 'react-icons/io5';
import { useState } from 'react';

import Map from '../src/components/Map';
import TrellisArea from '../src/components/TrellisArea';
import ProgressBar from '../src/components/ProgressBar';
import BarChart from '../src/components/BarChart';
import IsoType from '../src/components/IsoType';
import DonutChart from '../src/components/DonutChart';

const Home: NextPage = () => {

  const {toggleColorMode} = useColorMode();
  const [toggle, setToggle] = useState<boolean>(false);
  const [modeText, setModeText] = useState<string>('Dark Mode');

  const total_data = {
    total_population: 32657100, 
    total_cases: 4803624, 
    total_deaths: 36277, 
    total_vax: 27879191, 
  }

  return (
    <VStack paddingX={200} paddingY={50}>
      <Head>
        <title>COVID in Malaysia</title>
      </Head>
      
      <Flex w="100%">
        <Heading size="3xl" fontWeight='semibold' >COVID In Malaysia</Heading>
        <Spacer></Spacer>
        <HStack>
          <Text>{modeText}</Text>
          <Box
          cursor={"pointer"}
          onClick={() => {
            toggleColorMode();
            setToggle(!toggle);
            setModeText(toggle ? 'Light Mode' : 'Dark Mode');
          }}
          >
          {toggle ? <IoMoon size={20} /> : <IoSunny size={20}/>}
          </Box>
        </HStack>

      </Flex>
      <Box w="100%">
        <Heading size="xl">Sub Title</Heading>
      </Box>
      <Box w="100%">
        <Map width={1355} height={500}/>
      </Box>
      <Grid
        w="100%"
        templateColumns='repeat(8, 1fr)'
        gap={4}>
        <GridItem colSpan={3} >
          <Heading>CASES BY AGE GROUP</Heading>
          <DonutChart width={400} height={500}/>
        </GridItem>
        <GridItem colSpan={5}>
          <Heading>DEATH PER 10K POPULATION</Heading>
          <BarChart width={800} height={500}/>
        </GridItem>
      </Grid>

    </VStack>
  )
}

export default Home