import GameList from '../components/games/GameList';
import GameRandomizer from '../components/games/GameRandomizer';
import { connectToDatabase } from '../util/mongodb';
import { Flex } from '@chakra-ui/react';

const HomePage = (props) => {
  return (
    <Flex>
      <GameList games={props.games} /> <GameRandomizer games={props.games} />
    </Flex>
  );
};

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const data = await db.collection('boardgames').find({}).toArray();

  const games = JSON.parse(JSON.stringify(data));

  return {
    props: {
      games: games,
    },
  };
}

export default HomePage;
