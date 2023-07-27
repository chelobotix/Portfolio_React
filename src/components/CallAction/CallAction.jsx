import { Button } from "@material-tailwind/react";
import resumePDF from "@/assets/files/Marcelo_Alarcon_Resume.pdf";

const CallAction = () => {
  return (
    <div className="flex items-center gap-4 mt-3">
      <a href={resumePDF}>
        <Button color={"deep-purple"} className="ring-2 ring-white">
          Get My Resume
        </Button>
      </a>
    </div>
  );
};

export default CallAction;
