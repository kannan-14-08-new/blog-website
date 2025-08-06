import { digitalCategories } from "@/lib/categories";
import CategorySection from "../CategorySection";

export default function Digital() {
  return (
    <CategorySection title="Digital Category" data={digitalCategories} id="digital"/>
  );
}
