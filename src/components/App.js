import React, { useState, useEffect } from "react";
import "./App.css";
import CountriesList from "./CountriesList";
import CountryCard from "./CountryCard";
import NavBar from "./NavBar";
import ButtonAdd from "./ButtonAdd";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Covid19 from "../util/Covid19";

const useStyles = makeStyles(() => ({
  dropDownStyles: {
    marginRight: "5px",
  },
  hideListStyle: {
    display: "none",
  },
}));

function App() {
  const [countryStats1, setCountryStats1] = useState({});
  const [countryStats2, setCountryStats2] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [isHidden, setIsHidden] = useState(true);

  const classes = useStyles();

  const getStats = async (country, inputId) => {
    if (inputId === 1) {
      const searchResults = await Covid19.search(country);
      setCountryStats1(searchResults[0]);
    }

    if (inputId === 2) {
      const searchResults = await Covid19.search(country);
      setCountryStats2(searchResults[0]);
    }
  };

  useEffect(async () => {
    async function fetchList() {
      setCountryList(await Covid19.getCountryList());
    }
    await fetchList();
  }, []);

  return (
    <React.Fragment>
      <Grid container direction="column" spacing={4}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={1} />

        <Grid item container direction="row" justify="center">
          <Grid item xs={false} sm={2} />
          <Grid item xs={10} sm={2} className={classes.dropDownStyles}>
            <CountriesList
              getStats={getStats}
              inputId={1}
              countryList={countryList}
            />
          </Grid>

          <Grid item xs={10} sm={2}>
            <ButtonAdd isHidden={isHidden} setIsHidden={setIsHidden} />
          </Grid>

          <Grid item xs={10} sm={2}>
            {!isHidden ? (
              <CountriesList
                getStats={getStats}
                inputId={2}
                countryList={countryList}
                className={classes.hideListStyle}
              />
            ) : (
              <div></div>
            )}
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>

        <Grid item container direction="row" justify="center">
          {countryStats1.country && (
            <Grid item xs={12} sm={6}>
              <CountryCard countryStats={countryStats1} />
            </Grid>
          )}
          {countryStats2.country && (
            <Grid item xs={12} sm={6}>
              <CountryCard countryStats={countryStats2} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
