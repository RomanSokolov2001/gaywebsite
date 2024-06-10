import React, { useContext } from 'react';
import SoundButton from './components/SoundButton';
import { soundFiles } from './audio/list';
import Header from './components/Header';
import { AppContext } from './Context';
import Test from './components/Test';
import Buttons from './components/BunchOfButtons';

function App() {
  const { isFavoritesOpened, favorites } = useContext(AppContext);

  return (
    <>
      <Header />
      <div className="flex justify-center items-center m-5 h-full">
      <ul className="flex flex-wrap justify-center w-full h-full">
      <Buttons></Buttons>

        </ul>
      </div>
    </>
  );
}

export default App;
