import React, { useState, useEffect } from "react";
import "./App.css";
import CountriesList from "./CountriesList";
import CountryCard from "./CountryCard";
import NavBar from "./NavBar";
import ButtonAdd from "./ButtonAdd";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
//API: "COVID-19" from api-sports
import Covid19 from "../util/Covid19";

const useStyles = makeStyles(() => ({
  dropDownStyles: {
    margin: "5px",
  },
  hideListStyle: {
    display: "none",
  },
}));

function App() {
  const [countryStats1, setCountryStats1] = useState({});
  const [countryStats2, setCountryStats2] = useState({});
  const [countryList, setCountryList] = useState([]);
  const [isHidden, setIsHidden] = useState(true);

  const classes = useStyles();

  const getStats = async (country, inputId) => {
    const searchResults = await Covid19.search(country);
    //Change the null value to 0
    searchResults[0].cases.new = searchResults[0].cases.new || 0;
    searchResults[0].tests.total = searchResults[0].tests.total || 0;

    if (inputId === 1) {
      setCountryStats1(searchResults[0]);
    }

    if (inputId === 2) {
      setCountryStats2(searchResults[0]);
    }
  };

  useEffect(() => {
    async function fetchList() {
      setCountryList(await Covid19.getCountryList());
    }
    fetchList();
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
              {countryStats2 ? (
                <CountryCard
                  countryStats={countryStats1}
                  countryStatsOther={countryStats2}
                />
              ) : (
                <CountryCard countryStats={countryStats1} />
              )}
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
