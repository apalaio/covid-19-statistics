import React from "react";
import { Button } from "@material-ui/core";

const ButtonAdd = (props) => {
  const { isHidden, setIsHidden } = props;

  const handleClick = () => {
    if (isHidden) {
      setIsHidden(false);
    }
  };

  return (
    <div>
      {isHidden ? (
        <Button
          variant="contained"
          size="small"
          fullWidth
          onClick={handleClick}
        >
          Add country
        </Button>
      ) : (
        <Button
          variant="contained"
          disabled
          size="small"
          fullWidth
          onClick={handleClick}
        >
          Add country
        </Button>
      )}
    </div>
  );
};

export default ButtonAdd;
