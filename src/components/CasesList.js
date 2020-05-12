import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const CasesList = (props) => {
  const {
    active,
    critical,
    new: newCase,
    recovered,
    total,
  } = props.countryStats.cases;

  return (
    <List dense>
      <ListItem>
        <ListItemText primary={` Active: ${active}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={` Critical: ${critical}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={` New cases: ${newCase}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={` Recovered: ${recovered}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={` Total: ${total}`} />
      </ListItem>
    </List>
  );
};

export default CasesList;
