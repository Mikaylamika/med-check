import React, { useState } from 'react';
import { TabPanel } from '../Components/TabPanel';
import { Tab, Tabs } from '@mui/material';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Year() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="text-black">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
