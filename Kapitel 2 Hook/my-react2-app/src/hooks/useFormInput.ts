import { useState } from "react";

export function userFormimInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const handleInputChangeEvent = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return {
    value,
    handleInputChangeEvent,
  };
}
