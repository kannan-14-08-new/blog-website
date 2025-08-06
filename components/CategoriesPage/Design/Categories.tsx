import { designCategories } from "@/lib/categories";
import CategorySection from "../CategorySection";

export default function Design() {
  return (
    <CategorySection title="Design Category" data={designCategories} id="design" />
  );
}
