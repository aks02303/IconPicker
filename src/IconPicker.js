import React, { useState } from 'react';
import * as Icons from 'react-feather';

const IconPicker = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  pickerHeight = 500,
  pickerWidth = 500,
  onSelectIcon,
  onClose
}) => {
  const iconNames = Object.keys(Icons);

  const [currentPage, setCurrentPage] = useState(0);

  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const totalPages = Math.ceil(iconNames.length / iconsPerPage);

  const handleIconClick = (icon) => {
    onSelectIcon(icon);
    onClose();
  };

  const renderIcons = () => {
    const startIndex = currentPage * iconsPerPage;
    const endIndex = startIndex + iconsPerPage;
    const currentIcons = iconNames.slice(startIndex, endIndex);

    return currentIcons.map((icon) => {
      const IconComponent = Icons[icon];
      return (
        <div
          key={icon}
          style={{ width: iconWidth, height: iconHeight, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          onClick={() => handleIconClick(icon)}
        >
          <IconComponent width={iconWidth} height={iconHeight} />
        </div>
      );
    });
  };

  return (
    <div style={{ width: pickerWidth, height: pickerHeight, position: 'relative', background: 'white', border: '1px solid #ccc', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columnsInOnePage}, ${iconWidth}px)` }}>
        {renderIcons()}
      </div>
      <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)' }}>
        {currentPage > 0 && <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>}
        {currentPage < totalPages - 1 && <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>}
      </div>
    </div>
  );
};

export default IconPicker;
