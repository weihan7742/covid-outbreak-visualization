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
        <VStack alignItems='left'>
          <Heading size="4xl" fontWeight='semibold' >COVID-19 Outbreak In Malaysia</Heading>
          <Text>Period: 25/01/2020 - 10/09/2022</Text>
        </VStack>
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
        <Text marginBottom='5' fontSize={18} as='span'>The choropleth map below shows that</Text>
        <Text marginBottom='5' fontSize={18} as='span' fontWeight='800'> Kuala Lumpur and Negeri Sembilan </Text>
        <Text marginBottom='5' fontSize={18} as='span'>have the highest number of cases per 100k population.</Text>
        <Map width={1300} height={500} toggle={toggle}/>
      </Box>
      <Grid
        w="100%"
        templateColumns='repeat(8, 1fr)'
        gap='16'>
        <GridItem colSpan={4} >
        <Heading>DEATHS PER 10K POPULATION</Heading>
        <Box marginBottom='5'>
        <Text marginBottom='5' fontSize={18} as='span'>We can observe that</Text>
        <Text marginBottom='5' fontSize={18} as='span' fontWeight='800'> Kuala Lumpur and Labuan</Text>
        <Text marginBottom='5' fontSize={18} as='span'> have the highest deaths per 10K population.</Text>
        </Box>
        
        <BarChart width={500} height={500} toggle={toggle}/>
        </GridItem>
        <GridItem colSpan={4} marginBottom='10'>
        <Heading>Deaths vs Confirmed Cases of EACH STATE</Heading>
        <Box marginBottom='5'>
          <Text marginBottom='5' fontSize={18} as='span'>The state of</Text>
          <Text marginBottom='5' fontSize={18} as='span' fontWeight='800'> Selangor</Text>
          <Text marginBottom='5' fontSize={18} as='span'>, which has the largest population size, has the highest number of confirmed cases and the highest number of deaths.</Text>
        </Box>
        <BubblePlot width={500} height={500} toggle={toggle}/>
        </GridItem>
      </Grid>

      <Box w="100%">
        <SelectFlag flags={flags} value={currentFlag} onChange={(newFlag) => {setCurrentFlag(newFlag)}}/>
      </Box>

      <Box w="100%" paddingTop='5'>
        <Heading>VACCINATIONS OVER TIME (LAST 6 MONTHS) </Heading>
        <Text marginBottom='5' fontSize={18}>As Malaysia heads toward the endemic phase, most people have at least taken 1st dose or 2nd dose, and more people are taking booster shots.</Text>
        <DosesStackedBar width={1300} height={500} state={currentFlag.text} toggle={toggle}/>
      </Box>

      <Grid
        w="100%"
        templateColumns='repeat(8, 1fr)'
        paddingTop='10'
        gap='16'>
        <GridItem colSpan={3}>
        <Heading>CASES BY AGE GROUP</Heading>
        <Box marginBottom='5'>
          <Text marginBottom='5' fontSize={18} as='span'>A significant proportion of the age group affected by COVID-19 is the</Text>
          <Text marginBottom='5' fontSize={18} as='span' fontWeight='800'> young adult category (18-29).</Text>
        </Box>
        <DonutChart width={400} height={500} state={currentFlag.text} toggle={toggle}/>
        </GridItem>
        <GridItem colSpan={5}>
        <Heading>TOTAL VACCINATIONS BY BOOSTER COMBO</Heading>
        <Box marginBottom='5'>
          <Text marginBottom='5' fontSize={18} as='span' fontStyle='italic'>a</Text>
          <Text marginBottom='5' fontSize={18} as='span'> represents Astrazenica,</Text>

          <Text marginBottom='5' fontSize={18} as='span' fontStyle='italic'> c</Text>
          <Text marginBottom='5' fontSize={18} as='span'> represents Cansino,</Text>

          <Text marginBottom='5' fontSize={18} as='span' fontStyle='italic'> h</Text>
          <Text marginBottom='5' fontSize={18} as='span'> represents Sinopharm,</Text>

          <Text marginBottom='5' fontSize={18} as='span' fontStyle='italic'> p</Text>
          <Text marginBottom='5' fontSize={18} as='span'> represents Pfizer,</Text>

          <Text marginBottom='5' fontSize={18} as='span' fontStyle='italic'> and s</Text>
          <Text marginBottom='5' fontSize={18} as='span'> represents Sinovac.</Text>


        </Box>

        <VerticalBarChart width={750} height={450} state={currentFlag.text} toggle={toggle}/>
        </GridItem>
      </Grid>

      <Grid
        w="100%"
        templateColumns='repeat(8, 1fr)'
        gap='16'>
        <GridItem colSpan={3} >
        <Heading>TOTAL PROPORTION OF VACCINE BRANDS</Heading>
        <Box marginBottom='5'>
          <Text marginBottom='5' fontSize={18} as='span'>For every state,</Text>
          <Text marginBottom='5' fontSize={18} as='span' fontWeight='800'> Pfizer</Text>
          <Text marginBottom='5' fontSize={18} as='span'> is the most prevalent vaccine brand among all others.</Text>
        </Box>
        <SingleStackedBar width={320} height={500} state={currentFlag.text} toggle={toggle}/>
        </GridItem>

        <GridItem colSpan={5}>
        <Heading>PROPORTION OF VACCINE BRANDS OVER TIME (LAST 3 MONTHS)</Heading>
        <Box marginBottom='5'>
          <Text marginBottom='5' fontSize={18} as='span'>We can observe that the people in each state prefer different vaccine brands over time, even though</Text>
          <Text marginBottom='5' fontSize={18} as='span' fontWeight='800'> Pfizer</Text>
          <Text marginBottom='5' fontSize={18} as='span'> is still the most popular.</Text>
        
        </Box>

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