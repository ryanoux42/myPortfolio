import FoodCard from "@/components/Food/FoodCard";
import { FOOD_ITEMS } from "@/components/Food/FoodData";
import Pagination from "@/components/Food/Pagination";

const PAGE_SIZE = 10;

interface FoodListProps {
   page: number;
}

function FoodList({ page }: FoodListProps) {
   const totalPages = Math.max(1, Math.ceil(FOOD_ITEMS.length / PAGE_SIZE));
   const currentPage = Math.min(Math.max(1, page), totalPages);
   const start = (currentPage - 1) * PAGE_SIZE;
   const items = FOOD_ITEMS.slice(start, start + PAGE_SIZE);

   if (items.length === 0) {
      return (
         <p className="text-center text-text-tertiary">No food photo yet. Come back soon!</p>
      );
   }

   return (
      <div className="flex flex-col gap-8">
         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {items.map((food) => (
               <FoodCard key={food.path} food={food} />
            ))}
         </div>
         <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/food" />
      </div>
   );
}

export default FoodList;
