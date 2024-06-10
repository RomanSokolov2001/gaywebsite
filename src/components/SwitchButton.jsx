import React, { useContext } from 'react';
import { AppContext } from '../Context';

const CheckboxWithIcon = () => {
  const { isFavoritesOpened, setIsFavoritesOpened } = useContext(AppContext);

  const handleCheckboxChange = () => {
    setIsFavoritesOpened(!isFavoritesOpened);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="favorite"
        name="favorite-checkbox"
        value="favorite-button"
        className="switch-input"
        onChange={handleCheckboxChange}
        checked={isFavoritesOpened}
      />
      <label htmlFor="favorite" className="container switch-label">
        <div className="action">
          <span className="option-1">Sounds</span>
          <span className="option-2">Favorites</span>
        </div>
      </label>
    </div>
  );
};

export default CheckboxWithIcon;
