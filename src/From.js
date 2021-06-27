import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const From = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const [lastClicked, setLastClicked] = useState(null);

  return (
    <div style={{ width: 300, height: 100, border: '1px solid #000', padding: '8px', overflow: 'hidden' }}>
      Container with overflow: hidden.<br />
      Last clicked: {lastClicked || 'null'}
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu container="body">
          <DropdownItem onClick={() => setLastClicked(1)}>BANGLORE</DropdownItem>
          <DropdownItem onClick={() => setLastClicked(2)}>BOMBAY</DropdownItem>
          <DropdownItem onClick={() => setLastClicked(3)}>HYDERABAD</DropdownItem>
          <DropdownItem onClick={() => setLastClicked(2)}>DELHI</DropdownItem>
          <DropdownItem onClick={() => setLastClicked(3)}>HYDERABAD</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
} 

export default From;