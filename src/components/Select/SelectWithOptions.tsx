import React, { FC, useLayoutEffect, useState } from 'react';
import { OptionsToSelect } from '../../App';
import './SelectWithOptions.css';

type Option = {
  value: string;
  label: string;
  imageUrl: string;
};

const options: Option[] = [
  { value: '', label: 'Select your news', imageUrl: '' },
  { value: 'angular', label: 'Angular', imageUrl: '/icons/angular.png' },
  { value: 'reactjs', label: 'React', imageUrl: '/icons/react.png' },
  { value: 'vuejs', label: 'Vuejs', imageUrl: '/icons/vuejs.png' },
];

interface SelectWithOptionsProps {
  setOptionSelect: React.Dispatch<React.SetStateAction<OptionsToSelect>>;
}
const SelectWithOptions: FC<SelectWithOptionsProps> = ({ setOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState<Option>({
    value: '',
    label: '',
    imageUrl: '',
  });
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionSelect = (optionName: Option) => {
    setOptionSelect(optionName.value as OptionsToSelect);
    setSelectedOption(optionName);
    localStorage.setItem('selectedOption', JSON.stringify(optionName));
    setShowOptions(false);
  };

  useLayoutEffect(() => {
    const storedOption = localStorage.getItem('selectedOption');
    if (storedOption) {
      setSelectedOption(JSON.parse(storedOption));
    }
  }, []);

  return (
    <div>
      <div className='container-select' onClick={() => setShowOptions(!showOptions)}>
        {selectedOption.value ? (
          <div className='select-option'>
            <img src={selectedOption.imageUrl} alt={selectedOption.label} width='35' height='35' />
            <p style={{ marginLeft: '10px' }}>{selectedOption.label}</p>
          </div>
        ) : (
          <div className='not-select-option'>
            <p>Select your news</p>
            <img src='/icons/down.png' alt='Select an option' width='15' height='20' />
          </div>
        )}
      </div>

      <div className='container-list'>
        {showOptions &&
          options.map(option => (
            <div
              key={option.value}
              onClick={() => handleOptionSelect(option)}
              className='option'
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '10px',
                textAlign: 'center',
                cursor: 'pointer',
                borderBottom: '1px solid black',
                backgroundColor: selectedOption.value === option.value ? '#e6e6e6' : 'white',
              }}>
              {option.imageUrl && (
                <img src={option.imageUrl} alt={option.label} width='40' height='40' />
              )}
              <p style={{ marginLeft: '10px' }}>{option.label}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SelectWithOptions;
