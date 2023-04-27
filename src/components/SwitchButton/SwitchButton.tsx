import React, { useState } from 'react';
import './SwitchButton.css';
import ButtonElement from './ButtonElement/ButtonElement';

export type OptionsButtons = 'All' | 'My faves';
const SwitchButton = () => {
  const [active, setActive] = useState<OptionsButtons>('All');

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
      }}>
      <ButtonElement title={'All'} active={active} setActive={setActive} />
      <ButtonElement title={'My faves'} active={active} setActive={setActive} />
    </div>
  );
};

export default SwitchButton;
