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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';
import {IoSunny, IoMoon} from 'react-icons/io5';
import { useEffect, useState } from 'react';

import SelectFlag from '../src/components/SelectFlag';
import { IFlag } from '../src/Interfaces';

import Map from '../src/components/Map';
import TrellisArea from '../src/components/TrellisArea';
import ProgressBar from '../src/components/ProgressBar';
import BarChart from '../src/components/BarChart';
import IsoType from '../src/components/IsoType';
import DonutChart from '../src/components/DonutChart';
import DeathByStatusLine from '../src/components/DeathByStatusLine';
import BubblePlot from '../src/components/BubblePlot';
import DosesStackedBar from '../src/components/DosesStackedBar';
import VerticalBarChart from '../src/components/VerticalBarChart';
import StackedAreaChart from '../src/components/StackedAreaChart';
import SingleStackedBar from '../src/components/SingleStackedBar';

const Home: NextPage = () => {

  const {toggleColorMode} = useColorMode();
  const [toggle, setToggle] = useState<boolean>(false);
  const [modeText, setModeText] = useState<string>('Dark Mode');
  const [currentFlag, setCurrentFlag] = useState<IFlag>( {src: 'icons/state/selangor.png', text: 'Selangor'})

  const flags = [
    {src: 'icons/state/johor.png', text: 'Johor'},
    {src: 'icons/state/kedah.png', text: 'Kedah'},
    {src: 'icons/state/kelantan.png', text: 'Kelantan'},
    {src: 'icons/state/melaka.png', text: 'Melaka'},
    {src: 'icons/state/negeri sembilan.png', text: 'Negeri Sembilan'},
    {src: 'icons/state/pahang.png', text: 'Pahang'},
    {src: 'icons/state/perak.png', text: 'Perak'},
    {src: 'icons/state/perlis.png', text: 'Perlis'},
    {src: 'icons/state/pulau pinang.png', text: 'Pulau Pinang'},
    {src: 'icons/state/sabah.png', text: 'Sabah'},
    {src: 'icons/state/sarawak.png', text: 'Sarawak'},
    {src: 'icons/state/selangor.png', text: 'Selangor'},
    {src: 'icons/state/terengganu.png', text: 'Terengganu'},
    {src: 'icons/state/w.p. kuala lumpur.png', text: 'W.P. Kuala Lumpur'},
    {src: 'icons/state/w.p. labuan.png', text: 'W.P. Labuan'},
    {src: 'icons/state/w.p. putrajaya.png', text: 'W.P. Putrajaya'},
  ]

  // "#F3F4F6" 1A202C

  return (
    <VStack paddingX={200} paddingY={50} backgroundColor = {toggle ? '#F3F4F6' : '#1A202C'}>
      <Head>
        <title>COVID-19 in Malaysia</title>
      </Head>
      
      <Flex w="100%" alignItems='center' marginBottom='10'>
        {toggle 
        ? <Image src="icons/coronavirus-light.png" alt="COVID" boxSize={100} marginRight='5'/>
        : <Image src="icons/coronavirus-dark.png" alt="COVID" boxSize={100} marginRight='5'/>      }
        <Heading size="4xl" fontWeight='semibold' >COVID-19 Outbreak In Malaysia</Heading>
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
        <Heading>CASES PER 100K POPULATION OF EACH STATE</Heading>
        <Text marginBottom='5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum</Text>
        <Map width={1335} height={500} toggle={toggle}/>
      </Box>
      <Grid
        w="100%"
        templateColumns='repeat(8, 1fr)'
        gap={4}>
        <GridItem colSpan={4} >
        <Heading>DEATH PER 10K POPULATION</Heading>
        <Text marginBottom='5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto</Text>
          <BarChart width={500} height={500} toggle={toggle}/>
        </GridItem>
        <GridItem colSpan={4} marginBottom='10'>
        <Heading>STATES </Heading>
        <Text marginBottom='5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto</Text>
        <BubblePlot width={500} height={500} toggle={toggle}/>
        </GridItem>
      </Grid>

      <Box w="100%">
        <SelectFlag flags={flags} value={currentFlag} onChange={(newFlag) => {setCurrentFlag(newFlag)}}/>
      </Box>

      <Box w="100%" paddingTop='5'>
        <Heading>VACCINATIONS OVER TIME (LAST 6 MONTHS) </Heading>
        <Text marginBottom='5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum</Text>
        <DosesStackedBar width={1300} height={500} state={currentFlag.text} toggle={toggle}/>
      </Box>

      <Grid
        w="100%"
        templateColumns='repeat(8, 1fr)'
        paddingTop='10'
        gap={4}>
        <GridItem colSpan={3}>
        <Heading>CASES BY AGE GROUP</Heading>
        <Text marginBottom='5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae</Text>
        <DonutChart width={400} height={500} state={currentFlag.text} toggle={toggle}/>
        </GridItem>
        <GridItem colSpan={5}>
        <Heading>TOTAL VACCINATIONS BY BOOSTER COMBO</Heading>
        <Text marginBottom='5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto</Text>
        <VerticalBarChart width={750} height={450} state={currentFlag.text} toggle={toggle}/>
        </GridItem>
      </Grid>

      <Grid
        w="100%"
        templateColumns='repeat(8, 1fr)'
        gap={4}>
        <GridItem colSpan={3} >
        <Heading>PROPORTION OF VACCINE BRANDS</Heading>
        <Text marginBottom='5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae</Text>
        <SingleStackedBar width={320} height={500} state={currentFlag.text} toggle={toggle}/>
        </GridItem>
        <GridItem colSpan={5}>
        <Heading>PROPORTION OF VACCINE BRANDS OVER TIME (LAST 3 MONTHS)</Heading>
        <Text marginBottom='5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        </Text>
        <StackedAreaChart width={750} height={500} state={currentFlag.text} toggle={toggle}/>
        </GridItem>
      </Grid>
      
      <Divider>
      </Divider>

      <Text>Created by: Ng Wei Han</Text>

    </VStack>
  )
}

export default Home