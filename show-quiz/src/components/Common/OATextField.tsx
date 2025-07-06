import { forwardRef } from "react";
import { TextField } from "@mui/material";

export const OATextField = forwardRef((props: any, ref) => {
  const handleFocus = (event: any) => {
    event.target.select();
  };

  return <TextField onFocus={handleFocus} inputRef={ref} {...props} />;
});
