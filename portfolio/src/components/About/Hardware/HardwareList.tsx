import { HARDWARES } from "./HardwareData";

function HardwareList() {
   return (
      <div className="w-[80%]">
         <div className="grid grid-cols-1 gap-4 pr-4 md:grid-cols-2">
         {HARDWARES.map((hardware) => (
           <div
            key={hardware.title}
            className="
              relative p-4 border border-border-primary rounded-lg
              hover:shadow-lg transition-shadow duration-200
              flex flex-col justify-between
              h-full sm:min-h-36 min-h-8
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
                className="text-blue-primary hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
         ))}
         </div>
      </div>
   );
}

export default HardwareList;