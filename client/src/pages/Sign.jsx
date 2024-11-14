import React, { useEffect, useState } from 'react';
import { FiAperture } from 'react-icons/fi';

import Login from '../Components/Login';
import { AnimatePresence, motion } from 'framer-motion';
import SignUp from '../Components/SignUp';

export default function Sign() {
  const [active, setActive] = useState(true);

  function setNotActive() {
    setActive(!active);
  }

  const [bodyWidth, setBodyWidth] = useState();
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className="flex select-none w-full sm:w-[95vw] m-[0px_auto] h-screen sm:h-[95vh] sm:overflow-hidden overflow-auto  sm:my-2 overflow-x-hidden shadow-[10px_10px_8px_#c3d5fb]">
        <div className="w-full sm:h-[95vh] h-screen flex-1 relative">
          <AnimatePresence>
            {active ? (
              <motion.div
                className="w-full sm:h-[95vh] min-h-screen   flex relative flex-1 sm:flex-row flex-col"
                key="c"
                exit={{ opacity: 0, transition: { duration: 1 } }}
              >
                <Login act={{ active: active, setNotActive: setNotActive }} />
              </motion.div>
            ) : (
              <motion.div
                initial={{ display: 'none' }}
                animate={{ display: 'flex' }}
                transition={{ delay: 1.1 }}
                className="w-full min-h-screen  relative flex-1 sm:flex-row flex-col"
              >
                <SignUp act={{ active: active, setNotActive: setNotActive }} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
