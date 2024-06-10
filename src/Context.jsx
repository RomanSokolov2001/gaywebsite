import React, { createContext, useState } from 'react';

const AppContext = createContext({
  isSoundsOverlapping: false,
  setIsSoundsOverlapping: () => {},
  currentSound: '',
  setCurrentSound: () => {},
  favorites: [],
  setFavorites: () => {},
  isFavoritesOpened: false,
  setIsFavoritesOpened: () => {},
  isEditMode: false,
  setIsEditMode: () => {}
});

const AppProvider = ({ children }) => {
  // Define state variables
  const [isSoundsOverlapping, setIsSoundsOverlapping] = useState(false);
  const [currentSound, setCurrentSound] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [isFavoritesOpened, setIsFavoritesOpened] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  // Provide the context value to children components
  return (
    <AppContext.Provider value={{
      isSoundsOverlapping,
      setIsSoundsOverlapping,
      currentSound,
      setCurrentSound,
      favorites,
      setFavorites,
      isFavoritesOpened,
      setIsFavoritesOpened,
      isEditMode,
      setIsEditMode
    }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
