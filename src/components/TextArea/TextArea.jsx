import { Textarea } from "@material-tailwind/react";

const TextArea = ({ inputName }) => {
  return (
    <div className="flex flex-col items-center">
      <textarea
        id="message"
        name={inputName}
        required
        rows="4"
        className="block p-2.5 w-full text-sm text-white bg-transparent rounded-lg border border-white placeholder-white"
        placeholder="Message..."
      ></textarea>
    </div>
  );
};

export default TextArea;
