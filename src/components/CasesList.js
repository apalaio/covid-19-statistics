import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Compare from "./Compare";

const CasesList = (props) => {
  const {
    active,
    critical,
    new: newCase,
    recovered,
    total,
  } = props.countryStats.cases;

  const hasOther = Object.values(props.countryStatsOther).length >= 1;

  return (
    <List dense>
      <ListItem>
        <ListItemText primary={` Active: ${active}`} />
        {hasOther && (
          <Compare
            thisCard={active}
            otherCard={props.countryStatsOther.cases.active}
          />
        )}
      </ListItem>
      <ListItem>
        <ListItemText primary={` Critical: ${critical}`} />
        {hasOther && (
          <Compare
            thisCard={critical}
            otherCard={props.countryStatsOther.cases.critical}
          />
        )}
      </ListItem>
      <ListItem>
        <ListItemText primary={` New cases: ${newCase}`} />
        {hasOther && (
          <Compare
            thisCard={newCase}
            otherCard={props.countryStatsOther.cases.new}
          />
        )}
      </ListItem>
      <ListItem>
        <ListItemText primary={` Recovered: ${recovered}`} />
        {hasOther && (
          <Compare
            thisCard={recovered}
            otherCard={props.countryStatsOther.cases.recovered}
          />
        )}
      </ListItem>
      <ListItem>
        <ListItemText primary={` Total: ${total}`} />
        {hasOther && (
          <Compare
            thisCard={total}
            otherCard={props.countryStatsOther.cases.total}
          />
        )}
      </ListItem>
    </List>
  );
};

export default CasesList;
