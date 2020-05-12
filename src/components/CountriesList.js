import React, { useState, useEffect } from "react";
import { Select, InputLabel, FormControl, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  inputLabelStyles: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
}));

const CountriesList = (props) => {
  const classes = useStyles();

  //for the chosen country
  const [selectedCountry, setSelectedCountry] = useState("");

  //handle onChange by setting the selcted country and calling the search function from props
  const handleChange = async (e) => {
    setSelectedCountry(e.target.value);
    console.log(`handle change -selected country state- :`, {
      selectedCountry,
    });
    await props.getStats(e.target.value, props.inputId);
  };

  return (
    <FormControl fullWidth>
      <InputLabel className={classes.inputLabelStyles}>
        Select a country
      </InputLabel>

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedCountry}
        onChange={handleChange}
      >
        {props.countryList.map((country) => {
          return (
            <MenuItem value={country} key={props.countryList.indexOf(country)}>
              {country}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CountriesList;
