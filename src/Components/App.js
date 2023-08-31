import { useState } from 'react';
import './App.css';
import { Drawer } from 'antd';
import DrawerBody from './DrawerBody';
import { schemaOptions } from './Utils';

function App() {

  const [saveSegment, setSaveSegment] = useState(false);
  const [segmentName, setSegmentName] = useState('');                              // To set the Segment Name
  const [selectedSchemas, setSelectedSchemas] = useState([]);                     // For Managing Selected Schemas
  const [addDropdown, setAddDropDown] = useState(false);                         // For Select Schemas dropdown
  const [availableOptions, setAvailableOptions] = useState([...schemaOptions]); // For Managing schemas after schemas selected from dropDown

  const DrawerTitle = () => (
    <div className='drawerTitle'>
      <h4>Saving Segment</h4>
    </div>
  );

  const onCloseDrawer= () => {
    setSaveSegment(false);
        // Reseting all state after closing the drawer
    setSegmentName('');
    setSelectedSchemas([]);
    setAvailableOptions([...schemaOptions]);

  }

  // when Save Segment is Clicked
  const handleSaveSegment = () => {
    const dataToSend = {
      segment_name: segmentName,
      schema: selectedSchemas.map(schema => ({ [schema.value]: schema.label })),
    };
    
    console.log(dataToSend);
    // We can send data to the server using http method (i.e> POST method)

    // Reseting all state after Saving the schemas
    setSegmentName('');
    setSelectedSchemas([]);
    setAvailableOptions([...schemaOptions]);
  };

  return (
    <div className="App">
      <header>
        <div className='document-header'>
          <h3 className='document-title'>View Audience</h3>
        </div>
      </header>
      <body>
        <button className='saveSegment-button' onClick={() => setSaveSegment(true)}>
          Save Segment
        </button>
        <Drawer
          title={DrawerTitle()}
          closeIcon={<div className='goBackIcon'>&#60;</div>}
          open={saveSegment}
          onClose={onCloseDrawer}
          width={"500px"}
          footer={
            <div className='drawer-footer'>
              <button className='SaveButton' onClick={handleSaveSegment}>Save the Segment</button>
              <button className='CancelButton' onClick={onCloseDrawer}>Cancel</button>
            </div>

          }>
            <DrawerBody
             setSaveSegment={setSaveSegment}
             setSelectedSchemas={setSelectedSchemas}
             setAvailableOptions={setAvailableOptions}
             setAddDropDown={setAddDropDown}
             setSegmentName={setSegmentName}
             availableOptions={availableOptions}
             selectedSchemas={selectedSchemas}
             addDropdown={addDropdown}
             segmentName={segmentName}
             />
        </Drawer>
      </body >
    </div >
  );
}

export default App;
