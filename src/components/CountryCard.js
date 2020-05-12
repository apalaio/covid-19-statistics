import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CasesList from "./CasesList";
import DeathsList from "./DeathsList";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 3,
  },
});

export default function CountryCard(props) {
  const classes = useStyles();
  const {
    country,
    day,
    tests: { total },
  } = props.countryStats;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {country}
        </Typography>

        <Typography
          className={classes.pos}
          variant="subtitle2"
          color="textSecondary"
        >
          Cases
        </Typography>
        <CasesList countryStats={props.countryStats} />
        <Typography
          className={classes.pos}
          variant="subtitle2"
          color="textSecondary"
        >
          Deaths
        </Typography>
        <DeathsList countryStats={props.countryStats} />
        <Typography className={classes.pos} variant="subtitle2">
          Tests administered: {total}
        </Typography>
        <br />
        <Typography variant="caption" display="block" gutterBottom>
          Results updated on {day}
        </Typography>
      </CardContent>
    </Card>
  );
}
