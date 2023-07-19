import { Button } from "@material-tailwind/react";
import { HashLink as Link } from "react-router-hash-link";

const CallAction = () => {
  return (
    <div className="flex items-center gap-4">
      <Link to="/#contact">
        <Button color={"deep-purple"} className="ml-5 mt-2 ring-2 ring-white opacity-95">
          Contact
        </Button>
      </Link>
    </div>
  );
};

export default CallAction;
