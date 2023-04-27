import React, { FC } from 'react';
import './ButtonElement.css';
import { OptionsButtons } from '../SwitchButton';
interface Props {
  title: OptionsButtons;
  active: string;
  setActive: (active: OptionsButtons) => void;
}
const ButtonElement: FC<Props> = ({ title, active, setActive }) => {
  return (
    <div
      className={active === title ? 'button button-active' : 'button button-inactive'}
      onClick={() => {
        setActive(title);
      }}>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ButtonElement;
