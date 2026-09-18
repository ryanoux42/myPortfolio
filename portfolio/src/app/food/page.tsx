import type { Metadata } from "next";

import FoodList from "@/components/Food/FoodList";
import TitleSection from "@/components/TitleSection";

export const metadata: Metadata = {
   title: "Food",
   description: "Food pictures from Ryan HERCULE.",
   alternates: {
      canonical: "/food",
   },
};

interface FoodPageProps {
   searchParams: Promise<{ page?: string }>;
}

async function FoodPage({ searchParams }: FoodPageProps) {
   const { page } = await searchParams;
   const currentPage = Number(page ?? "1") || 1;

   return (
      <div>
        <TitleSection title="Food" description="Food I've eaten and enjoyed" />
        <FoodList page={currentPage} />
      </div>
   );
}

export default FoodPage;
