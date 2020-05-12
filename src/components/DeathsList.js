import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const DeathsList = (props) => {
  const { new: newDeath, total } = props.countryStats.deaths;

  return (
    <List dense>
      <ListItem>
        <ListItemText primary={` New deaths: ${newDeath || 0}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={` Total: ${total}`} />
      </ListItem>
    </List>
  );
};

export default DeathsList;
