import { GameList } from '@/components/games/GameList';
import { GameRandomizer } from '@/components/games/GameRandomizer';
import { Wishlist } from '@/components/games/Wishlist';
import { NavBar } from '@/components/layout/NavBar';
import { AddGamePage } from '@/components/games/AddGamePage';
import { connectToDatabase } from '../util/mongodb';
import { Box, Flex, Spacer, Container, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';

export const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>Family Game Picker</title>
      </Head>
      <Box height="100vh" className="scroll-snap-child">
        <NavBar />
        <Box className="main">
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
        </Box>
      </Box>
      <Box height="100vh" className="scroll-snap-child">
        <Box className="main" pt="250">
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
