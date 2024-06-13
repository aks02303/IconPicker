import React, { useState } from 'react';
import IconPicker from './IconPicker';
import * as Icons from 'react-feather';

const App = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div style={{ padding: '50px' }}>
      <div
        style={{ width: '100px', height: '100px', border: '1px solid #000', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        onClick={() => setShowPicker(true)}
      >
        {selectedIcon ? React.createElement(Icons[selectedIcon], { width: 50, height: 50 }) : 'Click to select an icon'}
      </div>

      {showPicker && (
        <div style={{ position: 'absolute', top: '100px', left: '50%', transform: 'translateX(-50%)' }}>
          <IconPicker
            rowsInOnePage={10}
            columnsInOnePage={10}
            iconHeight={50}
            iconWidth={50}
            onSelectIcon={handleIconSelect}
            onClose={() => setShowPicker(false)}
          />
        </div>
      )}
    </div>
  );
};

export default App;
