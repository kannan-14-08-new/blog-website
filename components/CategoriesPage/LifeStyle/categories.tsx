import { lifestyleCategories } from "@/lib/categories";
import CategorySection from "../CategorySection";
 

export default function LifeStyle() {
  return (
    <CategorySection title="Lifestyle Category" data={lifestyleCategories}  id="lifestyle"/>
  );
}
