import { FiArrowUpRight } from "react-icons/fi";

import { HARDWARES } from "./HardwareData";

function HardwareList() {
   return (
      <div className="w-[80%]">
         <div className="grid grid-cols-1 gap-4 pr-4 md:grid-cols-2">
         {HARDWARES.map((hardware) => (
           <div
            key={hardware.title}
            className="
              relative flex h-full min-h-8 flex-col justify-between
              rounded-2xl border border-border-primary bg-bg-primary p-5
              shadow-sm transition-shadow duration-300 hover:shadow-md
              sm:min-h-36
            "
          >
            <div>
              <h3 className="text-lg text-text-primary font-semibold mb-2">
                {hardware.title}
              </h3>
              <p className="text-text-secondary">
                {hardware.description}
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <a
                href={hardware.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-blue-primary transition-colors duration-200 hover:underline"
              >
                Learn More
                <FiArrowUpRight size={16} />
              </a>
            </div>
          </div>
         ))}
         </div>
      </div>
   );
}

export default HardwareList;