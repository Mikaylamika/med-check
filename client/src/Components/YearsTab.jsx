import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { TabPanel } from './TabPanel';
import ModelsTabTwo from './ModelsTabTwo';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function YearsTab() {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="grid h-full sm:grid-cols-[1fr_6fr] grid-cols-[1fr_3fr]">
      {/* Tabs Years */}
      <Tabs
        value={value}
        onChange={handleChange}
        orientation="vertical"
        className="border-r min-w-[100px]"
      >
        <Tab
          label="1st year"
          {...a11yProps(0)}
          style={{ borderBottom: '2px #E5E7EB solid' }}
          disabled
        />
        <Tab
          label="2st year"
          {...a11yProps(1)}
          style={{ borderBottom: '2px #E5E7EB solid' }}
        />
        <Tab
          label="3st year"
          {...a11yProps(2)}
          style={{ borderBottom: '2px #E5E7EB solid' }}
          disabled
        />
        <Tab
          label="4st year"
          {...a11yProps(3)}
          style={{ borderBottom: '2px #E5E7EB solid' }}
          disabled
        />
        <Tab
          label="5st year"
          {...a11yProps(4)}
          style={{ borderBottom: '2px #E5E7EB solid' }}
          disabled
        />
        <Tab
          label="6st year"
          {...a11yProps(5)}
          style={{ borderBottom: '2px #E5E7EB solid' }}
          disabled
        />
        <Tab label="7st year" {...a11yProps(6)} disabled />
      </Tabs>

      <div className="w-full h-full text-black flex justify-center items-center">
        {value ? (
          <>
            <TabPanel value={value} index={0}>
              1st year
            </TabPanel>
            <TabPanel
              value={value}
              index={1}
              className="w-full h-full flex flex-col"
            >
              <ModelsTabTwo />
            </TabPanel>
            <TabPanel value={value} index={2}>
              3st year
            </TabPanel>
            <TabPanel value={value} index={3}>
              4st year
            </TabPanel>
            <TabPanel value={value} index={4}>
              5st year
            </TabPanel>
            <TabPanel value={value} index={5}>
              6st year
            </TabPanel>
            <TabPanel value={value} index={6}>
              7st year
            </TabPanel>
          </>
        ) : (
          <div className="">
            <div className="isloading"></div>
          </div>
        )}
      </div>
    </div>
  );
}
