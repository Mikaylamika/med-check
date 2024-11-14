import { Alert, Collapse, IconButton } from '@mui/material';
import React from 'react';
import { FiX } from 'react-icons/fi';

export default function MyAlert({ open, setOpen, color, children }) {
  return (
    <div className="w-64">
      <Collapse in={open}>
        <Alert
          severity={color}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <FiX />
            </IconButton>
          }
        >
          {children}
        </Alert>
      </Collapse>
    </div>
  );
}
