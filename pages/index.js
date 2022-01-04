import { GameList } from '@/components/games/GameList';
import { GameRandomizer } from '@/components/games/GameRandomizer';
import { Wishlist } from '@/components/games/Wishlist';
import { NavBar } from '@/components/layout/NavBar';
import { AddGamePage } from '@/components/games/AddGamePage';
import { connectToDatabase } from '../util/mongodb';
import { Box, Flex, SimpleGrid, Text, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Head from 'next/head';
import Link from 'next/link';

export const HomePage = (props) => {
  return (
    <div style={{ backgroundColor: '#4895ef' }}>
      <Head>
        <title>Family Game Picker</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Box height="100vh" className="scrollSnapChild">
        <NavBar />
        <Box id="main" className="main">
          <Flex justify="center">
            <SimpleGrid columns={2} spacing={200}>
              <Box>
                <GameList games={props.games} />
              </Box>
              <Box>
                <Flex direction="column" justify="space-between" align="center">
                  <AddGamePage />
                  <GameRandomizer games={props.games} />
                </Flex>
              </Box>
            </SimpleGrid>
          </Flex>
          <Box textAlign="center" pt={5}>
            <ChevronDownIcon w={20} h={20} />
          </Box>
        </Box>
      </Box>
      <Box height="100vh" className="scrollSnapChild">
        <Box className="main" pt="100">
          <Wishlist wishlist={props.wishlist} />
        </Box>
      </Box>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const data1 = await db.collection('boardgames').find({}).toArray();
  const games = JSON.parse(JSON.stringify(data1));

  const data2 = await db.collection('wishlist').find({}).toArray();
  const wishlist = JSON.parse(JSON.stringify(data2));

  return {
    props: {
      games: games,
      wishlist: wishlist,
    },
  };
}

export default HomePage;
