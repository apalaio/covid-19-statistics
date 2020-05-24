import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Compare from "./Compare";

const DeathsList = (props) => {
  const { new: newDeath, total } = props.countryStats.deaths;
  const hasOther = Object.values(props.countryStatsOther).length >= 1;

  return (
    <List dense>
      <ListItem>
        <ListItemText primary={` New deaths: ${newDeath || 0}`} />
        {hasOther && (
          <Compare
            thisCard={newDeath}
            otherCard={props.countryStatsOther.deaths.new}
          />
        )}
      </ListItem>
      <ListItem>
        <ListItemText primary={` Total: ${total}`} />
        {hasOther && (
          <Compare
            thisCard={total}
            otherCard={props.countryStatsOther.deaths.total}
          />
        )}
      </ListItem>
    </List>
  );
};

export default DeathsList;
