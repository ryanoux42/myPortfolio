import Image from "next/image";
import { FiHeart } from "react-icons/fi";

import { FoodDataItem } from "@/components/Food/FoodData";

interface FoodCardProps {
   food: FoodDataItem;
}

function FoodCard({ food }: FoodCardProps) {
   return (
      <div className="flex flex-col gap-3 rounded-sm border border-border-primary bg-bg-primary p-3 pb-6 shadow-sm">
         <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
               src={food.path}
               alt={food.name}
               fill
               className="object-cover"
            />
            {food.favorite && (
               <span className="absolute bottom-2 left-2 flex size-7 items-center justify-center rounded-full bg-bg-primary shadow-sm">
                  <FiHeart className="size-3.5 fill-red-500 text-red-500" />
               </span>
            )}
         </div>
         <p className="text-center text-sm font-medium text-text-secondary">{food.name}</p>
      </div>
   );
}

export default FoodCard;
