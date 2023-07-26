import { Textarea } from "@material-tailwind/react";

const TextArea = ({ inputName }) => {
  return (
    <div className="flex flex-col items-center">
      <Textarea label="Message" name={inputName} color={"light-blue"} required />
    </div>
  );
};

export default TextArea;
