import { Input } from "@material-tailwind/react";

const InputComponent = (props) => {
  const { label, type, inputName } = props;
  return (
    <div className="flex flex-col items-center">
      <Input
        type={type}
        name={inputName}
        label={label}
        color={"white"}
        required
        maxLength={50}
        className="text-white"
        labelProps={{
          className: "text-white",
        }}
        containerProps={{ className: "text-white" }}
      />
    </div>
  );
};

InputComponent.defaultProps = {
  name: "Guest",
  message: "Welcome to my website!",
};

export default InputComponent;
