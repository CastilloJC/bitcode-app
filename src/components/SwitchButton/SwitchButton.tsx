import React, { FC } from 'react';
import './SwitchButton.css';
import ButtonElement from './ButtonElement/ButtonElement';
import { OptionsButtons } from '../../App';

interface PropsSwitchButton {
  setActiveOption: (active: OptionsButtons) => void;
  activeOption: OptionsButtons;
}
const SwitchButton: FC<PropsSwitchButton> = ({ activeOption, setActiveOption }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
      }}>
      <ButtonElement title={'All'} active={activeOption} setActiveOption={setActiveOption} />
      <ButtonElement title={'My faves'} active={activeOption} setActiveOption={setActiveOption} />
    </div>
  );
};

export default SwitchButton;
