import { Input, Typography } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

const InputComponent = () => {
  return (
    <div className="w-[32rem]">
      <Input type="password" label="Password" />
      <Typography variant="small" color="gray" className="flex items-center gap-1 font-normal mt-2">
        <InformationCircleIcon className="w-4 h-4 -mt-px" />
        Use at least 8 characters, one uppercase, one lowercase and one number.
      </Typography>
    </div>
  );
};

export default InputComponent;
