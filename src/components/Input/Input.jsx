import { Input } from "@material-tailwind/react";

const InputComponent = (props) => {
  const { label, type, inputName } = props;
  return (
    <div className="flex flex-col items-center">
      <Input type={type} name={inputName} label={label} color={"light-blue"} required maxLength={50} />
    </div>
  );
};

InputComponent.defaultProps = {
  name: "Guest",
  message: "Welcome to my website!",
};

export default InputComponent;
