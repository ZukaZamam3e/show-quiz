import { InputBaseComponentProps, OutlinedInput } from "@mui/material";

export const currencyInputProps: InputBaseComponentProps = {
  inputMode: "decimal",
  style: { textAlign: "right" },
};

export const OAInput = (props: any) => {
  const handleFocus = (event: any) => {
    event.target.select();
  };

  return <OutlinedInput onFocus={handleFocus} {...props} />;
};
