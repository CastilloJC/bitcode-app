import React, { FC } from 'react';
import './ButtonElement.css';
import { OptionsButtons } from '../../../App';

interface Props {
  title: OptionsButtons;
  active: string;
  setActiveOption: (active: OptionsButtons) => void;
}
const ButtonElement: FC<Props> = ({ title, active, setActiveOption }) => {
  return (
    <div
      className={active === title ? 'button button-active' : 'button button-inactive'}
      onClick={() => {
        // setActive(title);
        setActiveOption(title);
      }}>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ButtonElement;
