import ButtonWithLink from "@/components/Button/ButtonWithLink";

import { FiDownload } from "react-icons/fi";
import { HiOutlineMail } from 'react-icons/hi';

const CV_LINK = "https://drive.google.com/file/d/1u8qMDBxg1xEP9BF_Lso6u4peXGKyxHpb/view?usp=sharing";

function ReachMeSection() {
  return (
   <div className="flex space-x-4">
      <ButtonWithLink
         text="Get Resume"
         link={CV_LINK}
         icon={<FiDownload size={24} />}
      />
      <ButtonWithLink
         text="Contact Me"
         link="mailto:ryan.hercule@epitech.eu"
         icon={<HiOutlineMail size={24} />}
      />
   </div>
  );
}

export default ReachMeSection;
