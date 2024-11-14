import { Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { TabPanel } from './TabPanel';
import AllData from '../redux/data';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ModelsTabTwo() {
  const [value, setValue] = useState(0);
  const [Data, setData] = useState(undefined);

  useEffect(() => {
    AllData.then((data) => {
      setData(data);
    });
  }, []);
  console.log(Data);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="border-b flex justify-center">
        <Tabs
          value={value}
          onChange={handleChange}
          allowScrollButtonsMobile
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          className="sm:w-[420px] lg:w-auto w-48 flex justify-center "
        >
          <Tab label="anatomie " {...a11yProps(0)} />
          <Tab label="histologie " {...a11yProps(1)} />
          <Tab label="physiologie " {...a11yProps(2)} />
          <Tab label="biophysique" {...a11yProps(3)} />
        </Tabs>
      </div>

      <div className="flex-[1] relative max-h-[287px] ">
        {Data ? (
          <>
            {/* ANATOMIE  */}
            <TabPanel value={value} index={0}>
              <div className="w-full h-full overflow-auto  p-2 py-4 bg-[radial-gradient(white,white,#c3d5fb)] flex justify-center gap-3 flex-wrap">
                {Data.map((e, i) =>
                  e.quiz.section === 'anatomie' ? (
                    <Card key={e._id} info={{ ...e.quiz, id: e._id }} />
                  ) : (
                    <></>
                  )
                )}
              </div>
            </TabPanel>

            {/* HISTOLOGIE  */}
            <TabPanel value={value} index={1}>
              <div className="w-full h-full overflow-auto  p-2 py-4 bg-[radial-gradient(white,white,#c3d5fb)] flex justify-center gap-3 flex-wrap">
                {Data.map((e, i) =>
                  e.quiz.section === 'histologie' ? (
                    <Card key={e._id} info={{ ...e.quiz, id: e._id }} />
                  ) : (
                    <></>
                  )
                )}
              </div>
            </TabPanel>

            {/* PHYSIOLOGIE  */}
            <TabPanel value={value} index={2}>
              <div className="w-full h-full overflow-auto  p-2 py-4 bg-[radial-gradient(white,white,#c3d5fb)] flex justify-center gap-3 flex-wrap">
                {Data.map((e, i) =>
                  e.quiz.section === 'physiologie' ? (
                    <Card key={e._id} info={{ ...e.quiz, id: e._id }} />
                  ) : (
                    <></>
                  )
                )}
              </div>
            </TabPanel>

            {/* BIOPHYSIQUE  */}
            <TabPanel value={value} index={3}>
              <div className="w-full h-full overflow-auto  p-2 py-4 bg-[radial-gradient(white,white,#c3d5fb)] flex justify-center gap-3 flex-wrap">
                {Data.map((e, i) =>
                  e.quiz.section === 'biophysique' ? (
                    <Card key={e._id} info={{ ...e.quiz, id: e._id }} />
                  ) : (
                    <></>
                  )
                )}
              </div>
            </TabPanel>
          </>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <div>
              <div className="isloading"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
