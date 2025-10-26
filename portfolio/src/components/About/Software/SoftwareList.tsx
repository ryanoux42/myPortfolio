import Image from "next/image";
import { TOOLS } from "./SoftwareData";

function SoftwareList() {
   return (
      <div className="mt-8">
         <div className="grid gap-2 pr-4 grid-cols-3 md:grid-cols-5 space-y-12 md:space-y-8">
         {TOOLS.map((tool) => (
           <div key={tool.title} className="group inline-block text-center place-items-center">
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
            <p className="mt-3 text-sm text-gray-500">{tool.title}</p>
            <p className="absolute mt-1 text-xs text-gray-400 hidden group-hover:block">{tool.description}</p>
            </div>
         ))}
         </div>
      </div>
   );
}

export default SoftwareList;