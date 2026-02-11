import Image from "next/image";
import { TOOLS } from "./SoftwareData";

function SoftwareList() {
  return (
   <div className="w-[80%] mx-auto">
      <div className="grid gap-2 pr-4 grid-cols-2 md:grid-cols-5 space-y-4">
         {TOOLS.map((tool) => (
            <div key={tool.title} className="group flex flex-col items-center text-center">
            <div className="h-28 w-28 rounded-[20px] border border-border-primary bg-bg-primary p-2 transition-all duration-300 group-hover:-translate-y-3 group-hover:border-indigo-400">
               <div
                  className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                  style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
               >
                  <Image
                  width={40}
                  height={40}
                  alt={tool.title}
                  src={`/software/${tool.imgPath}`}
                  />
               </div>
            </div>
            <p className="mt-3 text-sm text-text-primary">{tool.title}</p>
            <p className="mt-1 text-xs text-text-secondary opacity-0 group-hover:opacity-100 transition">{tool.description}</p>
            </div>
         ))}
      </div>
   </div>
  );
}

export default SoftwareList;