import ButtonWithIcon from "@/components/Button/ButtonWithIcon";

import { FiDownload } from "react-icons/fi";
import { HiOutlineMail } from 'react-icons/hi';

function ReachMeSection() {
  return (
   <div className="flex space-x-4">
      <ButtonWithIcon
         text="Get Resume"
         link="/Ryan_Hercule_CV.pdf"
         icon={<FiDownload size={24} />}
         download={true}
      />
      <ButtonWithIcon
         text="Contact Me"
         link="mailto:ryan.hercule@epitech.eu"
         icon={<HiOutlineMail size={24} />}
      />
   </div>
  );
}

export default ReachMeSection;
