import { GameForm } from '..';
import { useRouter } from 'next/router';

export const AddGamePage = () => {
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
