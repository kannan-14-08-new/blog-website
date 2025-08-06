import { creativityCategories } from "@/lib/categories";
import CategorySection from "../CategorySection";

export default function Creative() {
  return (
    <CategorySection title="Creative Category" data={creativityCategories} id="creativity" />
  );
}
