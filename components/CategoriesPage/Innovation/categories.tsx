import { innovationCategories } from "@/lib/categories";
import CategorySection from "../CategorySection";

export default function Innovation() {
  return (
    <CategorySection title="Innovation Category" data={innovationCategories} id="innovation"/>
  );
}
