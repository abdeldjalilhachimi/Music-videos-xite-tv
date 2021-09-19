import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import { makeStyles } from '@mui/styles'
import './filterbyyares.css'
const useStyles = makeStyles({
    root: {
      "& .MuiInputBase-root": {
        color: 'white', 
        "& .MuiButtonBase-root": {
         background: '#54e6af'
        
        }, 
        "& .MuiOutlinedInput-input" : {
            background: '#54e6af', 
            borderRadius: '5px', 
            color:"#2c344b", 
            height: '5px', 
            width: '100px'
        }
        ,
        "& .MuiInputBase-input": {
          padding: '20px',
          color : '#2c344b', 

        
         
        }, 
        "& .MuiOutlinedInput-notchedOutline": {
            border: '2px'
          }, 
          
      }
    }
  });
  

const FilterByYear = ({setSelectYear}) => {
const classes = useStyles();
  const [value, setValue] = useState(null);

  useEffect(() => {
    const d = new Date(Date.parse(value));
    setSelectYear(d.getFullYear())
  }, [value]);
  

  return (
    <div className="filter__years" >
      <label> FilterByYear</label>
      <LocalizationProvider dateAdapter={AdapterDateFns}  >
        <DatePicker
        value={value || new Date}
          openTo="year"
          disableFuture
          isClearable
          onChange={(newValue) => {
            setValue(newValue);
          }}
         
          renderInput={(params) => <TextField {...params}  className={classes.root}  />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default (FilterByYear);
