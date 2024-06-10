
import React from 'react';
import { useSound } from 'use-sound';
import sound2 from '../audio/a-rat.mp3'

const Test = ({ soundFilePath }) => {
  const [play1] = useSound(sound2)

  const [play2] = useSound('../audio/fisting.mp3');


  return (
    <div>
      <button onClick={play1}>Play Sound</button>
      <button onClick={play2}>Play Sound</button>

    </div>
  );
};

export default Test;
