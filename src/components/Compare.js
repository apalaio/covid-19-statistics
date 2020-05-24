import React from "react";
import { ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  colorRed: { color: "darkcyan" },
  colorGreen: { color: "orangered" },
});

const Compare = (props) => {
  const classes = useStyles();
  let { thisCard, otherCard } = props;

  //fix "new cases" that comes as a string
  if (typeof thisCard === "string") {
    thisCard = parseInt(thisCard.substring(1), 10);
  }
  if (typeof thisCard === "string") {
    otherCard = parseInt(otherCard.substring(1), 10);
  }
  const difference = thisCard - otherCard;

  switch (true) {
    case difference === 0: {
      return "";
    }
    case difference > 0: {
      return (
        <ListItemSecondaryAction>
          <ListItemText
            primary={`+${difference}`}
            className={classes.colorGreen}
          />
        </ListItemSecondaryAction>
      );
    }
    case 0 > difference: {
      return (
        <ListItemSecondaryAction>
          <ListItemText
            primary={`${difference}`}
            className={classes.colorRed}
          />
        </ListItemSecondaryAction>
      );
    }
    default: {
      console.log("something went horribly wrong with this switch statement");
    }
  }
  return null;
};

export default Compare;
