import { useRef, useState } from 'react';

export default function Player() {
  const player = useRef();
  const [playerName, setPlayerName] = useState('');

  return (
    <section id="player">
      <h2>Welcome {playerName=='' ? 'unknown entity': playerName}</h2>
      <p>
        <input ref={player} type="text" />
        <button onClick={() => setPlayerName(player.current.value)}>Set Name</button>
      </p>
    </section>
  );
}
