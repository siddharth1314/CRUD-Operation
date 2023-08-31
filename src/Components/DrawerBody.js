import React from 'react';
import './App.css';
import Dot from './Dot';
import { schemaOptions } from './Utils';

const DrawerBody = (props) => {
  const { setSelectedSchemas, setAvailableOptions, setAddDropDown, addDropdown, availableOptions, selectedSchemas, setSegmentName, segmentName } = props;

  const handleSchemaSelect = (selectedSchema) => {
    setSelectedSchemas([...selectedSchemas, selectedSchema]);
    setAvailableOptions(availableOptions.filter(option => option.value !== selectedSchema.value));
  };

  const onClickCloseButton = (option) => {
    const updatedValue = [...availableOptions]
    setSelectedSchemas(selectedSchemas.filter(selectedSchemas => selectedSchemas.label !== option.label));
    updatedValue.push(option);
    setAvailableOptions(updatedValue);
  }

  return (
    <div>
      <h3>Enter the Name of the Segment</h3>
      <input placeholder='Name of the segment' className='DrawerInput' value={segmentName} onChange={(e) => setSegmentName(e.target.value)}></input>
      <h5>To save your segment,you need to add the schemas to build the query </h5>
      <div className='dotContainer'>
        <Dot trait="User"></Dot>
        <span>User Traits</span>
        <Dot trait="Group"></Dot>
        <span>Group Traits</span>
      </div>
      <div className='segmentSection'>
        {selectedSchemas.map((option, index) => (
          <div className='schemaContainer'>
            <Dot trait="User"></Dot>
            <input key={index} value={option?.label}></input>
            <button className='schemaCloseButton' onClick={() => onClickCloseButton(option)}>X</button>
          </div>
        ))}
      </div>
      <div className='schemaButton-Container'>
        {
          addDropdown &&
          (
            <select className='selectSchema-dropDown' value={selectedSchemas} onChange={(e) => handleSchemaSelect(schemaOptions.find(schema => schema.value === e.target.value))}>
              <option value="">Select schema to add</option>
              {availableOptions.map(schema => (
                <option key={schema.value} value={schema.value}>{schema.label}</option>
              ))}
            </select>
          )
        }
        <button className='AddSchemaButton' onClick={() => setAddDropDown(true)}>+ Add new Schema</button>
      </div>
    </div>
  )
}

export default DrawerBody