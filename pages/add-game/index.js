import GameForm from '../../components/games/GameForm';
import { useRouter } from 'next/router';

const AddGamePage = () => {
  const router = useRouter();

  const addGameHandler = async (enteredGameData) => {
    const response = await fetch('/api/games', {
      method: 'POST',
      body: JSON.stringify(enteredGameData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    router.push('/');
  };

  return <GameForm onAddgame={addGameHandler} />;
};

export default AddGamePage;
