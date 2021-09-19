import React, { useState, useEffect } from "react";
import getData from "../../services/getData";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {getGenresNames} from "../../helpers/index";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { makeStyles } from '@mui/styles'

import "./filterbygenre.css";

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
          width: '450px'
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
const FilterByGenre = ({ setSelectedGenres }) => {
  const classes = useStyles();

  const theme = useTheme();
  const ITEM_HEIGHT = 45;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const [genres, setGenresTag] = useState([]);
  const [genresName, setGenresName] = useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setGenresName(
      value
    );
    setSelectedGenres(value);
  };

  function getStyles(name, genresName, theme) {
    return {
      fontWeight:
        genresName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  useEffect(function () {
    getData()
      .then((response) => {
        const { genres } = response.data;
        setGenresTag(genres);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="filter__genres" data-testid="">
      <label> Filter By Geners </label>
      <FormControl sx={{m:1, width: 350}}  className={classes.root}>
        <Select
        className={classes.root}
          labelId="fileter__label"
          multiple
          value={genresName }
          onChange={handleChange}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                <Chip key={value} label={getGenresNames(genres, value)} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {genres.map((name) => (
            <MenuItem
            data-testid="select-output"
            key={name.id}
              value={name.id || "Rock"}
              style={getStyles(name, genresName, theme)}
            >
              {name.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterByGenre;
